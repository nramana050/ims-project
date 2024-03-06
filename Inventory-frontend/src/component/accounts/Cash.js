import React, { useState, useEffect } from "react";
import { Bars } from "react-loader-spinner";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import axios from "axios";
const Cash = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [itemData, setItemData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [getSalesData, setGetSalesData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  const [formData, setFormData] = useState({
    adjustment: "",
    transferDate: "",
    enterAmount: "",
    description: "",
    purchasePrice: "",
  });
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [currentSalesPage, setcurrentSalesPage] = useState(1);
  const itemsPerSalesPage = 8;

  const handleSearch = () => {
    console.log("Search query:", searchQuery);
    const filteredData = getItemData.filter((item) =>
      item.customerName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log("Filtered data:", filteredData);
    setGetSalesData(filteredData);
  };
  const calculateTotalAmount = () => {
    const totalSalesAmount = getSalesData.reduce(
      (total, salesItem) => total + parseFloat(salesItem.totalAmount || 0),
      0
    );

    const totalExpenseAmount = itemData.reduce(
      (total, expenseItem) =>
        total + parseFloat(expenseItem.purchasePrice || 0),
      0
    );

    return totalSalesAmount - totalExpenseAmount;
  };

  const totalAmount = calculateTotalAmount();
  const totalColor = totalAmount >= 0 ? "green" : "red";
  const totalSign = totalAmount >= 0 ? "+" : "-";

  const indexOfLastSalesItem = currentSalesPage * itemsPerSalesPage;
  const indexOfFirstSalesItem = indexOfLastSalesItem - itemsPerSalesPage;
  const currentSalesItems = getSalesData.slice(
    indexOfFirstSalesItem,
    indexOfLastSalesItem
  );

  const getItemData = async () => {
    await axios
      .get("http://localhost:3900/accounts/expense")
      .then((result) => setItemData(result.data))
      .catch((err) => console.log(err));
  };

  const getSales = async () => {
    const result = await axios.get("http://localhost:3800/sales");
    setGetSalesData(result.data);
  };

  useEffect(() => {
    getItemData();
    getSales();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      getSales();
    }
  }, []);

  const [dataObject, setDataObject] = useState(null);
  const [item, setItem] = useState([]);
  const [ID, setID] = useState("");

  useEffect(() => {
    const data = item.map((elem) => {
      return elem.id === ID
        ? {
            ...elem,
            itemName: dataObject ? dataObject.itemName : "",
            hsnCode: dataObject ? dataObject.itemCode : "",
            price: dataObject ? dataObject.salesPrice : "",
            cgst: dataObject ? dataObject.gstTax / 2 : "",
            sgst: dataObject ? dataObject.gstTax / 2 : "",
          }
        : elem;
    });
    setItem(data);
  }, [dataObject]);

  const itemNames = getSalesData.flatMap((obj) =>
    obj.product.map((product) => product.itemName)
  );

  const itemNamesString = itemNames.join(", ");

  return (
    <div>
      {isLoading ? (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Bars
            height="80"
            width="80"
            color="#40a1ed"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="layout-1">
          <SideBar />
          <div className="wrapper">
            <NavBar />

            <div className="main-div-2">
              <div className="table" id="main-table">
                <div className="input-group-1">
                  <div>
                    <p style={{ width: "220px" }}>Cash On Hand </p>
                  </div>

                  <div
                    className="input-group "
                    style={{ justifyContent: "center" }}
                  >
                    <input
                      type="search"
                      className="rounded search-bar"
                      placeholder="Search by item name"
                      aria-describedby="search-addon"
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                      }}
                    />
                    <button
                      type="button"
                      className="btn search-btn"
                      style={{
                        backgroundColor: "rgba(0, 172, 154, 1)",
                        color: "white",
                      }}
                      onClick={handleSearch}
                    >
                      Search
                    </button>
                  </div>

                  <div className="filter-container">
                    <p style={{ color: totalColor }}>
                      {Math.abs(totalAmount) > 0 ? "Profit:" : "Loss:"}{" "}
                      {totalSign} ₹ {Math.abs(totalAmount)}
                    </p>
                  </div>
                </div>
                <table className="table table-bordered ">
                  <div id="table-responsive" className="table-responsive">
                    <table
                      id="table"
                      className="table table-hover table-striped text-nowrap table-vcenter mb-0"
                    >
                      <thead>
                        <tr>
                          <th>Sl No</th>
                          <th>NAME</th>
                          <th>TYPE</th>
                          <th>ITEMS PURCHASED</th>
                          <th>DATE</th>
                          <th>AMOUNT</th>
                        </tr>
                      </thead>
                      <tbody>
                        {itemData.map((expense, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{expense.vendorName}</td>
                            <td>{expense.expenseCategory}</td>
                            <td>{expense.items}</td>
                            <td>{expense.billDate}</td>
                            <td>
                              {expense.purchasePrice ? (
                                <span style={{ color: "red" }}>
                                  - ₹ {expense.purchasePrice}
                                </span>
                              ) : (
                                "-"
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>

                      <tbody>
                        {currentSalesItems.map((item, index) => (
                          <tr key={index} style={{ cursor: "pointer" }}>
                            <td>{index + indexOfFirstSalesItem + 1}</td>
                            <td>{item.customerName}</td>
                            <td>{item.method}</td>
                            <td>{itemNamesString}</td>
                            <td>{item.salesOrderDate}</td>
                            <td>
                              {item.totalAmount ? (
                                <span style={{ color: "green" }}>
                                  + ₹ {item.totalAmount}
                                </span>
                              ) : (
                                "-"
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cash;
