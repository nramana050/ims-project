import React, { useState, useEffect } from "react";
import { Bars } from "react-loader-spinner";
import SideBar from "../SideBar";
import NavBar from "../NavBar";
import { HiOutlineFilter } from "react-icons/hi";
import noDataImg from "../../assets/nodata.png";
import { AiOutlineDelete } from "react-icons/ai";

import axios from "axios";

const QuotationTable = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [getQuotationData, setGetQuotationData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const getQuotation = async () => {
    const result = await axios.get("http://35.154.125.232:4000/quotation");
    setGetQuotationData(result.data);
  };

  const deleteItem = async (id) => {
    await axios
      .delete(`http://35.154.125.232:4000/quotation/delete/${id}`)
      .then(() => {
        getQuotation();
      })
      .catch((err) => console.log(err));
  };

  const handleSearch = () => {
    console.log("Search query:", searchQuery);
    const filteredData = getQuotationData.filter((item) =>
      item.customerName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log("Filtered data:", filteredData);
    setGetQuotationData(filteredData);
  };

  useEffect(() => {
    getQuotation();
  }, []);

  let hasQuotationBeenCalled = false;

  if (searchQuery === "" && !hasQuotationBeenCalled) {
    getQuotation();
    hasQuotationBeenCalled = true;
  }

  const [currentQuotationPage, setcurrentQuotationPage] = useState(1);
  const itemsPerQuotationPage = 8;

  const indexOfLastQuotationItem = currentQuotationPage * itemsPerQuotationPage;
  const indexOfFirstQuotationItem =
    indexOfLastQuotationItem - itemsPerQuotationPage;
  const currentQuotationItems = getQuotationData.slice(
    indexOfFirstQuotationItem,
    indexOfLastQuotationItem
  );

  const totalQuotationPages = Math.ceil(
    getQuotationData.length / itemsPerQuotationPage
  );

  const nextQuotationPage = () => {
    setcurrentQuotationPage(currentQuotationPage + 1);
  };

  const prevQuotationPage = () => {
    setcurrentQuotationPage(currentQuotationPage - 1);
  };

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
          {/* start: body area */}
          <div className="wrapper">
            {/* start: page header */}
            <NavBar />
            {/* start: page toolbar */}

            <div className="main-div-2">
              <div className="table" id="main-table">
                <div className="input-group-1">
                  <p>Quotation List</p>
                  <div className="input-group ">
                    <input
                      type="search"
                      className="rounded search-bar"
                      placeholder="Search by item name"
                      aria-describedby="search-addon"
                      value={searchQuery}
                      onChange={(e) => {
                        console.log("Input Value:", e.target.value);
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
                </div>
                {getQuotationData.length > 0 ? (
                  <table
                    className="table table-bordered "
                    style={{ height: "40vh" }}
                  >
                    <div id="table-responsive" className="table-responsive">
                      <table
                        id="table"
                        className="table table-hover table-striped text-nowrap table-vcenter mb-0"
                      >
                        <thead>
                          <tr>
                            <th>Sl No</th>
                            <th>CUSTOMER</th>
                            <th>MOBILE</th>
                            <th>DISCOUNT</th>
                            <th>TAX</th>
                            <th>AMOUNT</th>
                            <th>ACTION</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentQuotationItems.map((item, index) => (
                            <tr key={index} style={{ cursor: "pointer" }}>
                              <td>{index + indexOfFirstQuotationItem + 1}</td>
                              <td>{item.customerName}</td>
                              <td>{item.mobile}</td>
                              <td>₹ {item.totalDiscount}</td>
                              <td>₹ {item.totalGST}</td>
                              <td>₹ {item.totalAmount}</td>
                              <td>
                                {" "}
                                <div className="action-btn">
                                  <AiOutlineDelete
                                    style={{ color: "red" }}
                                    onClick={() => deleteItem(item._id)}
                                  />
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </table>
                ) : (
                  <div style={{ width: "100%", textAlign: "center" }}>
                    <img src={noDataImg} alt="no-data" />
                  </div>
                )}
              </div>
              <div>
                <button
                  className="buyer-page-btn"
                  onClick={prevQuotationPage}
                  disabled={currentQuotationPage === 1}
                >
                  Previous
                </button>
                <button
                  className="buyer-page-btn"
                  onClick={nextQuotationPage}
                  disabled={
                    currentQuotationPage === totalQuotationPages ||
                    totalQuotationPages === 0
                  }
                >
                  Next
                </button>
              </div>
              <div>
                Page {currentQuotationPage} of {totalQuotationPages}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuotationTable;
