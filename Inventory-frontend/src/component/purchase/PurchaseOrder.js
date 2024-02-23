import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";
import NavBar from "../NavBar";
import { Bars } from "react-loader-spinner";
import { Link } from "react-router-dom";
 import "../../Styles.css";
import { Button } from "@mui/material";
 import PurchaseViewTable from "./PurchaseViewTable";
 import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
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
    const [modalOpen, setModalOpen] = useState(false);
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
                      >
                        
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
                        <PurchaseViewTable formData={formData} />
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
                          onClick={() => setModalOpen(true)}
                        >
                          Add
                        </Button>
                      </div>

                      <div className="other-sales-content">
                        <div className="other-sales-content-left">
                          <div> <Button
                          style={{
                            height: "40px",
                            display: "flex",
                            left: "7.5rem",
                            top:"5rem",
                            width: "150px",
                            alignItems: "right",
                            justifyContent: "center",
                            border: "2px solid #E9E6E1",
                            fontSize: "12px",
                            color: " #565A5C",
                          }}
                          variant="outlined"
    
                          onClick={() => setModalOpen(true)}
                        >
                         Save as Draft
                        </Button></div>
                          
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
  )
}

export default PurchaseOrder