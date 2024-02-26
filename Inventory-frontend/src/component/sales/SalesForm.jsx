import React, { useEffect, useState } from "react";
import SideBar from "../../component/SideBar";
import NavBar from "../../component/NavBar";
import { Bars } from "react-loader-spinner";
import { Link } from "react-router-dom";
import "../../Styles.css";
import { Button, TextField, IconButton, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import SalesViewTable from "./SalesViewTable";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { IoMdCloseCircleOutline } from "react-icons/io";
import {QrReader} from 'react-qr-reader'
import DeleteIcon from "@mui/icons-material/Delete";
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';


const SalesForm = () => {
  const [formData,setFormData]=useState([])
  const [data, setData] = useState("No result");
  console.log("here", typeof data);
  const dataObject =
    data === "No result"
      ? {}
      : JSON.parse(
          '{"' +
            data
              .replace(/"/g, '\\"')
              .replace(/:/g, '":"')
              .replace(/,/g, '","')
              .replace(/}/g, '"}')
              .replace(/{/g, '{"') +
            '"}'
        );

  // setFormData([...formData, dataObject]);

  const addRow = () => {
    const newRow = {
      id:formData.length + 1,
      itemName: "",
      itemCode: "",
      quantity: 0,
      price: 0,
      discount: 0,
      gstTax: "",
      amount: 0,
    };

    setFormData((prevData) => [...prevData, newRow]);
  };

  console.log("formData", formData);

  const [modalOpen, setModalOpen] = useState(false);
  const [barCodeOpen, setBarCodeOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const [productItems, setProductItems] = useState([
    // Sample data, replace it with your actual product items
    { itemName: "Product 1", hsn: "HSN001", sellingPrice: "₹ 100" },
    { itemName: "Product 2", hsn: "HSN002", sellingPrice: "₹ 150" },
    // ... (more items)
  ]);

  // const productItems = [
  //   {
  //     itemName: "Reebok Floatride Women's Running Shoes",
  //     hsn: "E088",
  //     sellingPrice: "₹ 779.58",
  //   },
  //   {
  //     itemName: "Reebok Floatride Women's Running Shoes",
  //     hsn: "E088",
  //     sellingPrice: "₹ 779.58",
  //   },
  //   {
  //     itemName: "Reebok Floatride Women's Running Shoes",
  //     hsn: "E088",
  //     sellingPrice: "₹ 779.58",
  //   },
  //   {
  //     itemName: "Reebok Floatride Women's Running Shoes",
  //     hsn: "E088",
  //     sellingPrice: "₹ 779.58",
  //   },
  //   {
  //     itemName: "Reebok Floatride Women's Running Shoes",
  //     hsn: "E088",
  //     sellingPrice: "₹ 779.58",
  //   },
  //   {
  //     itemName: "Reebok Floatride Women's Running Shoes",
  //     hsn: "E088",
  //     sellingPrice: "₹ 779.58",
  //   },
  //   {
  //     itemName: "Reebok Floatride Women's Running Shoes",
  //     hsn: "E088",
  //     sellingPrice: "₹ 779.58",
  //   },
  // ];

  const deleteRow = (index) => {
    const updatedData = [...formData];
    updatedData.splice(index, 1);
    setFormData(updatedData);
  };

  const handleInputChange = (index, field, value) => {
    const updatedData = [...formData];
    updatedData[index][field] = value;
    setFormData(updatedData);
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
        <div>
        {modalOpen ? (
          <div className="modal-ka-baap">
            <div className="add-item-modal-in">
              <div className="add-item-modal-top d-flex align-items-center">
                <div className="fw-bold fs-5">ADD ITEMS</div>
                <div
                  className="inputs d-flex align-items-center mx-3"
                  style={{ paddingLeft: "70px" }}
                >
                  <input
                    className="search-input-in"
                    type="text"
                    placeholder="Enter your search keyword"
                    style={{ width: "250px" }}
                  />
                  <button className="search-button-in">Search</button>
                </div>
                <IoMdCloseCircleOutline
                  className="fs-5 close-modal-in"
                  style={{ cursor: "pointer" }}
                  onClick={() => setModalOpen(false)}
                />
              </div>
              <hr />
              <div className="add-item-modal-mid">
                <table className="table">
                  <thead>
                    <tr>
                      <th></th>
                      <th>ITEMS NAME</th>
                      <th>HSN CODE</th>
                      <th>SELLING PRICE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productItems.map((item) => (
                      <tr>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>{item.itemName}</td>
                        <td>{item.hsn}</td>
                        <td>{item.sellingPrice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="add-item-modal-bottom">
                <div className="two-buttons-in">
                  <button className="next-button-in">
                  Next
                  </button>
                  <button
                    className="cancel-button-in"
                    onClick={() => setModalOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {barCodeOpen ? (
          <div className="modal-ka-baap">
            <div className="add-item-modal-in" style={{ width: "500px" }}>
              <div className="add-item-modal-top d-flex align-items-center justify-content-between">
                <div className="fw-bold fs-5">Scan QR</div>
                <IoMdCloseCircleOutline
                  className="fs-5 close-modal-in"
                  style={{ cursor: "pointer" }}
                  onClick={() => setBarCodeOpen(true)}
                />
              </div>
              <hr />
              <div className="add-item-modal-mid">
                <div>
                  <QrReader
                    onResult={(result, error) => {
                      if (!!result) {
                        setData(result?.text);
                      }

                      if (!!error) {
                        console.info(error);
                      }
                    }}
                    style={{ width: "100%", height: "50%" }}
                  />
                  <p>{data}</p>
                </div>
              </div>
              <div className="add-item-modal-bottom">
                <div className="two-buttons-in">
                  <button
                    className="next-button-in"
                    onClick={() => {setFormData([...formData, dataObject]); setBarCodeOpen(false)}}
                  >
                    Next
                  </button>
                  <button
                    className="cancel-button-in"
                    onClick={() => setBarCodeOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {/* <div className="modal-ka-baap">
          <div className="add-item-modal-in" style={{ width: "45%" }}>
            <div className="add-item-modal-top d-flex align-items-center justify-content-between">
              <div className="fw-bold fs-5">ADD STOCK BATCHES</div>
              <IoMdCloseCircleOutline
                className="fs-5 close-modal-in"
                style={{ cursor: "pointer" }}
                onClick={() => setModalOpen(false)}
              />
            </div>
            <hr />
            <div className="add-item-modal-mid">
              <table className="table">
                <thead>
                  <tr>
                    <th>BATCH NUMBER</th>
                    <th>SIZE</th>
                    <th>STOCK QTY</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {stockBatchItems.map((item) => (
                    <tr>
                      <td>{item.batchNumber}</td>
                      <td>{item.size}</td>
                      <td>{item.stockQty}</td>
                      <td className="text-center">
                        <AiOutlineDelete
                          className="fw-bold"
                          style={{ color: "red" }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                className="d-flex align-items-center table-below-add-btn"
                style={{ gap: "5px" }}
              >
                <IoAddCircleOutline />
                <div>Add</div>
              </button>
            </div>
            <div className="add-item-modal-bottom">
              <div className="two-buttons-in">
                <div className="mt-1" style={{ fontWeight: "700" }}>
                  TOTAL: 48768
                </div>
                <button className="next-button-in">Next</button>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="modal-ka-baap">
          <div className="add-item-modal-in" style={{ width: "45%" }}>
            <div className="add-item-modal-top d-flex align-items-center justify-content-between">
              <div className="fw-bold fs-5">STOCK ADJUSTMENTS</div>
              <IoMdCloseCircleOutline
                className="fs-5 close-modal-in"
                style={{ cursor: "pointer" }}
                onClick={() => setModalOpen(false)}
              />
            </div>
            <hr />
            <div className="add-item-modal-mid">
              <table className="table">
                <thead>
                  <tr>
                    <th>BATCH NUMBER</th>
                    <th>SIZE</th>
                    <th>CURRENT QTY</th>
                    <th>STOCK QTY</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {stockBatchItems.map((item) => (
                    <tr>
                      <td>{item.batchNumber}</td>
                      <td>{item.size}</td>
                      <td>{item.stockQty}</td>
                      <td>{item.stockQty}</td>
                      <td className="text-center">
                        <AiOutlineDelete
                          className="fw-bold"
                          style={{ color: "red" }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                className="d-flex align-items-center table-below-add-btn"
                style={{ gap: "5px" }}
              >
                <IoAddCircleOutline />
                <div>Add</div>
              </button>
            </div>
            <div className="add-item-modal-bottom">
              <div className="two-buttons-in">
                <div className="mt-1" style={{ fontWeight: "700" }}>
                  TOTAL: 48768
                </div>
                <button className="next-button-in">Next</button>
              </div>
            </div>
          </div>
        </div> */}
          <div></div>
          <div className="layout-1" s>
            <SideBar />
            <div className="wrapper">
              <NavBar />
              <div
                className="above-table"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ width: "200px" }}>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      width: "500px",
                      display: "flex",
                    }}
                  >
                    <div style={{ padding: "40px" }}>
                      <span style={{ color: "#00AC9A", fontWeight: "bold" }}>
                        <Link
                          to="/dashboard"
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          Home{" "}
                        </Link>{" "}
                        / Sales /
                      </span>
                      <span style={{ color: "black" }}> Sales Order</span>
                    </div>
                  </div>

                  <div className="page-toolbar px-xl-3 px-sm-2 px-0 py-3">
                    <div className="overlay" style={{ background: "white" }}>
                      <div style={{ padding: "20px 40px" }}>
                        <span style={{ color: "black", fontSize: "20px" }}>
                          New Sales Order
                        </span>
                      </div>
                      <form className="form-input-fields">
                        <div className="data-input-fields">
                          <div class="mb-3 w-50">
                            <label for="customerName" class="form-label">
                              Customer Name
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                          </div>
                          <div class="mb-3 w-50">
                            <label for="mobileNumber" class="form-label">
                              Mobile Number
                            </label>
                            <input
                              type="number"
                              class="form-control"
                              id="exampleInputPassword1"
                            />
                          </div>
                        </div>
                        <div className="data-input-fields">
                          <div class="mb-3 w-50">
                            <label for="salesOrderNo" class="form-label">
                              Sales Order No.
                            </label>
                            <input
                              type="number"
                              class="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                          </div>
                          <div class="mb-3 w-50">
                            <label for="salesOrderDate" class="form-label">
                              Sales Order Date
                            </label>
                            <input
                              type="date"
                              class="form-control"
                              id="exampleInputPassword1"
                            />
                          </div>
                        </div>
                      </form>
                        <div
                          style={{
                            justifyContent: "right",
                            display: "flex",
                            alignItems: "center",
                            padding: "0 50px",
                          }}
                        >
                        <button
                        style={{
                        height: "50px",
                              display: "flex",
                              width: "200px",
                              alignItems: "center",
                              justifyContent: "center",
                              border: "2px solid #565A5C",
                              fontSize: "20px",
                              color: " #565A5C",
                              gap:'5px'
                      }}
                        onClick={() => setBarCodeOpen(true)}
                      >
                      <div><QrCodeScannerIcon/> </div>
                        <div>Qr Code</div>
                      </button>
                        </div>
                      <div
                        className="salesviewtable"
                        style={{
                          marginTop: "50px",
                          display: "flex",
                          flexDirection: "column",
                          gap: 20,
                        }}
                      >
                      <table className="table">

                      <thead>
                      <tr>
                        <th>NO</th>
                        <th>ITEM NAME</th>
                        <th>Hsn Code</th>
                        <th>QTY</th>
                        <th>PRICE/ITEM</th>
                        <th>DISCOUNT</th>
                        <th>GST</th>
                        <th>AMOUNT</th>
                        <th>ACTION</th>
                      </tr>
                    </thead>
                        <tbody>
                          {formData.map((row, index) => (
                            <tr key={index}>
                            <td>{row.id}</td>
                              <td>
                              <FormControl style={{ minWidth: 120 }}>
                              <InputLabel id={`item-name-label-${index}`}>Item Name</InputLabel>
                              <Select
                                labelId={`item-name-label-${index}`}
                                id={`item-name-select-${index}`}
                                value={row.itemName}
                                onChange={(e) => handleInputChange(index, "itemName", e.target.value)}
                              >
                                {productItems.map((item) => (
                                  <MenuItem key={item.itemName} value={item.itemName}>
                                    {item.itemName}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                              </td>
                              <td>
                                <TextField
                                  value={row.itemCode}
                                  onChange={(e) =>
                                    handleInputChange(
                                      index,
                                      "itemCode",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <TextField
                                  type="number"
                                  value={row.quantity}
                                  onChange={(e) =>
                                    handleInputChange(
                                      index,
                                      "quantity",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <TextField
                                  type="number"
                                  value={row.price}
                                  onChange={(e) =>
                                    handleInputChange(
                                      index,
                                      "price",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <TextField
                                  type="number"
                                  value={row.discount}
                                  onChange={(e) =>
                                    handleInputChange(
                                      index,
                                      "discount",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <TextField
                                  value={row.gstTax}
                                  onChange={(e) =>
                                    handleInputChange(
                                      index,
                                      "gstTax",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <TextField
                                  type="number"
                                  value={row.amount}
                                  onChange={(e) =>
                                    handleInputChange(
                                      index,
                                      "amount",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <IconButton onClick={() => deleteRow(index)}>
                                  <DeleteIcon />
                                </IconButton>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                        <Button
                          style={{
                            height: "40px",
                            display: "flex",
                            left: "10rem",
                            width: "150px",
                            alignItems: "right",
                            justifyContent: "center",
                            border: "2px solid #565A5C",
                            fontSize: "15px",
                            color: " #565A5C",
                          }}
                          variant="outlined"
                          startIcon={<AddCircleOutlineOutlinedIcon />}
                          onClick={addRow}

                        >
                          Add
                        </Button>
                      </div>

                      <div
                        className="other-sales-content"
                      
                      >
                        <div className="other-sales-content-left">
                          <div>Terms And Condition</div>
                          <div className="sales-content-box">
                            <div>
                              1. Goods once Sold will be not taken back or be
                              exchanged.
                            </div>
                            <div>
                              2. All the disputes are subject to Delhi
                              jurisdiction only
                            </div>
                          </div>
                        </div>
                        <div
                          className="other-sales-content-left"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                          }}
                        >
                          <div>CGST : Rs 0.0</div>
                          <div>SGST : Rs 0.0</div>
                          <div>SUBTOTAL : Rs 0.0</div>
                          <div className="sales-content-btn">
                            <Button
                              variant="contained"
                              style={{
                                backgroundColor: "#00AC9A",
                                height: "40px",
                                width: "100px",
                              }}
                            >
                              SAVE
                            </Button>
                            <Button
                              variant="contained"
                              style={{
                                backgroundColor: "#FFD8D8",
                                height: "40px",
                                width: "100px",
                                color:'#FF1616'
    
                              }}
                            >
                              CANCEL
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesForm;
