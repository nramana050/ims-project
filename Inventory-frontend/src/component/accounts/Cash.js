import React, { useState, useEffect } from "react";
import { Bars } from "react-loader-spinner";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from "react-router-dom";
import axios from "axios";
import settings from "../../assets/settings 1.png";
import { HiOutlineFilter } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";
import filter from "../../assets/Filters.png";
const Cash = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [itemData, setItemData] = useState([]);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
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

  const getItemData = async () => {
    await axios
      .get(`http://localhost:3900/accounts/expense`)
      .then((result) => setItemData(result.data))
      .catch((err) => console.log(err));
  };

  const handleSave = async () => {
    await axios
      .post("http://localhost:3900/accounts/cash", formData)
      .then((result) => console.log(result.data))
      .catch((err) => console.log(err));
  };


  const cancelButton = () => {
    handleClose();
    setFormData({
      adjustment: "",
      transferDate: "",
      enterAmount: "",
      description: "",
    });
  };
  const handleSubmit = (e) => {
    console.log("Form submitted:", formData);
  };

  useEffect(() => {
    getItemData();
    setIsLoading(false);
  }, []);

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
            <div style={{ padding: "5px" }}>
              <span style={{ color: "#00AC9A", fontWeight: "bold" }}>
                <Link
                  to="/dashboard"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Home{" "}
                </Link>{" "}
                / Account Solutions/
              </span>
              <span style={{ color: "black" }}> Cash On Hand</span>
            </div>
            <div className="main-div-2">
              <div className="table" id="main-table">
                <div className="input-group-1">
                  <div>
                    <p style={{ width: "220px" }}>Cash On Hand </p>
                  </div>
                  <div className="input-group ">
                    <input
                      type="search"
                      className="rounded search-bar"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="search-addon"
                    />
                    <button
                      type="button"
                      className="btn search-btn"
                      style={{
                        backgroundColor: "rgba(0, 172, 154, 1)",
                        color: "white",
                      }}
                    >
                      Search
                    </button>
                  </div>

                  <div className="filter-container">
                    <div className="filters">
                      <img src={filter} />
                    </div>
                    <button id="btn-items-2" onClick={handleOpen}>
                      {" "}
                      Deposit/Withdrawal Cash
                      <img src={settings} height={15} />
                    </button>
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
                    </table>
                  </div>
                </table>
              </div>
            </div>
            <Modal
              className="buyer-form-modal"
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div
                className="buyer-form-container"
                style={{ position: "relative" }}
              >
                <h3>Adjust Cash</h3>
                <RxCrossCircled
                  className="buyer-form-cross"
                  onClick={handleClose}
                />
                <form onSubmit={handleSubmit}>
                  <div className="buyer-input-labels">
                    <label>Adjustment</label>
                    <TextField
                      className="buyer-input"
                      margin="dense"
                      type="text"
                      fullWidth
                      name="adjustment"
                      id="adjustment"
                      placeholder="Add Cash"
                      value={formData.adjustment}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                  </div>

                  <div className="buyer-input-labels">
                    <label>Transfer Date</label>
                    <TextField
                      className="buyer-input"
                      margin="dense"
                      type="date"
                      fullWidth
                      name="transferDate"
                      id="transferDate"
                      value={formData.transferDate}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                  </div>

                  <div className="buyer-input-labels">
                    <label>Enter Amount</label>
                    <TextField
                      className="buyer-input"
                      margin="dense"
                      type="number"
                      fullWidth
                      name="enterAmount"
                      id="enterAmount"
                      placeholder="Enter Amount"
                      value={formData.enterAmount}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                  </div>
                  <div className="buyer-input-labels">
                    <label>Description</label>
                    <TextField
                      className="buyer-input"
                      margin="dense"
                      type="text"
                      fullWidth
                      name="description"
                      id="description"
                      placeholder="Description"
                      value={formData.description}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                  </div>

                  <div className="data-buttons">
                    <Button
                      id="input-btn-submit"
                      className="submit"
                      type="submit"
                      variant="outlined"
                      onClick={handleSave}
                      //   disabled={buttonCheck?false:true}
                    >
                      Submit
                    </Button>
                    <Button
                      id="input-btn-cancel"
                      className="cancel"
                      onClick={cancelButton}
                      variant="outlined"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            </Modal>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cash;