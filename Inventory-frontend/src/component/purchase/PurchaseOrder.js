import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";
import NavBar from "../NavBar";
import { Bars } from "react-loader-spinner";
import { Link } from "react-router-dom";
import "../../Styles.css";
import { Button, TextField, IconButton } from "@mui/material";
import PurchaseViewTable from "./PurchaseViewTable";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { IoMdCloseCircleOutline } from "react-icons/io";

const PurchaseOrder = () => {
  const [formData, setFormData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

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
  // const [modalOpen, setModalOpen] = useState(false);
  const [barCodeOpen, setBarCodeOpen] = useState(false);
  return (
    <div className="layout-1">
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
                  / Purchase/
                </span>
                <span style={{ color: "black" }}> Purchase Order</span>
              </div>
            </div>

            <div className="page-toolbar px-xl-3 px-sm-2 px-0 py-3">
              <div className="overlay" style={{ background: "white" }}>
                <div style={{ padding: "20px 40px" }}>
                  <span style={{ color: "black", fontSize: "20px" }}>
                    New Purchase Order
                  </span>
                </div>
                <form className="form-input-fields">
                  <div className="data-input-fields">
                    <div class="mb-3 w-50">
                      <label for="customerName" class="form-label">
                        Vendor Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Name"
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
                        placeholder="Enter Mobile Number"
                      />
                    </div>
                  </div>
                  <div className="data-input-fields">
                    <div class="mb-3 w-50">
                      <label for="salesOrderNo" class="form-label">
                        Invoice Date
                      </label>
                      <input
                        type="date"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="mb-3 w-50">
                      <label for="salesOrderDate" class="form-label">
                        Invoice Number
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Enter Invoice Number"
                      />
                    </div>
                  </div>
                  <div className="data-input-fields">
                    <div class="mb-3 w-50">
                      <label for="customerName" class="form-label">
                        Billing Address
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Billing Address"
                      />
                    </div>
                    <div class="mb-3 w-50">
                      <label for="mobileNumber" class="form-label">
                        Shipping Address
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Enter Shipping Number"
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
                ></div>
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
                            <TextField
                              value={row.itemName}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "itemName",
                                  e.target.value
                                )
                              }
                            />
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
                      border: "2px dashed #E9E6E1",
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

                <div className="other-sales-content">
                  <div className="other-sales-content-left">
                    <div>
                      {" "}
                      <Button
                        style={{
                          height: "40px",
                          display: "flex",
                          left: "7.5rem",
                          top: "5rem",
                          width: "150px",
                          alignItems: "right",
                          justifyContent: "center",
                          border: "2px solid #E9E6E1",
                          fontSize: "12px",
                          color: " #565A5C",
                        }}
                        variant="outlined"
                        // onClick={() => setModalOpen(true)}
                      >
                        Save as Draft
                      </Button>
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
                          color: "#FF1616",
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
  );
};

export default PurchaseOrder;
