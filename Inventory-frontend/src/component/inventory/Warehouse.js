import React, { useState, useEffect } from "react";
import SideBar from "../SideBar";
import NavBar from "../NavBar";
import axios from "axios";
import { Bars } from "react-loader-spinner";
import TextField from "@mui/material/TextField";
import { HiOutlineFilter } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Modal from "@mui/material/Modal";
import { TbRefreshDot } from "react-icons/tb";
import "../../AddedStyles.css";

const Warehouse = () => {
  const [age, setAge] = React.useState("");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    category: "",
    payAmount: 0,
    gstin: " ",
    panNumber: "",
    billingAddress: "",
    shippingAddress: "",
    creditPeriod: 0,
    collectAmount: 0,
  });

  const Type = [
    {
      value: "Odisha",
      label: "Odisha",
    },
    {
      value: "Maharastra",
      label: "Maharastra",
    },
  ];

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const newItem = "New Item";

  const handleSubmit = (e) => {
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    await axios
      .post("http://localhost:3600/buyers-suppliers", formData)
      .then((result) => console.log(result.data))
      .catch((err) => console.log(err));
  };

  const cancelButton = () => {
    handleClose();
    setFormData({
      name: "",
      mobileNumber: "",
      email: "",
      category: "",
      payAmount: 0,
      gstin: " ",
      panNumber: "",
      billingAddress: "",
      shippingAddress: "",
      creditPeriod: 0,
      collectAmount: 0,
    });
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
          <div className="wrapper">
            <NavBar />
            <div className="main-div-2">
              <div className="table" id="main-table">
                <div className="input-group-1">
                  <div>
                    <p style={{ width: "220px" }}>Stock in Warehouse </p>
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
                    <div className="filter">
                      <HiOutlineFilter size={30} color="rgba(0, 172, 154, 1)" />
                    </div>
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
                          <th>ITEMS NAME</th>
                          <th>ITEM CODE</th>
                          <th>OPENING STOCK</th>
                          <th>STATUS</th>
                          <th>STOCK PRICE</th>
                          <th>SELLING PRICE</th>
                          <th>PURCHASE DATE</th>
                          <th>ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Reebok Floatride Women's Running Shoes</td>

                          <td>E088</td>
                          <td>209 PCS</td>
                          <td>
                            <button className="button1">In stock</button>
                          </td>
                          <td>₹ 779.58</td>
                          <td>₹ 779.58</td>
                          <td>₹ 396.84</td>
                          <div className="action-btn">
                            <td>
                              <FiEdit style={{ color: "#6F6F6F" }} />
                            </td>
                            <td>
                              <AiOutlineDelete style={{ color: "red" }} />
                            </td>
                          </div>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Saucony Kinvara Men's Running Shoes</td>

                          <td>R091</td>
                          <td>$14,500</td>
                          <td>
                            <button className="button1">In stock</button>
                          </td>
                          <td>₹ 779.58</td>
                          <td>₹ 275.43</td>
                          <td>₹ 782.01</td>
                          <div className="action-btn">
                            <td>
                              <FiEdit style={{ color: "#6F6F6F" }} />
                            </td>
                            <td>
                              <AiOutlineDelete style={{ color: "red" }} />
                            </td>
                          </div>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>New Balance Fresh Foam Men's Running Shoes</td>
                          <td>D077</td>
                          <td>400 PCS</td>
                          <td>
                            <button className="button1">In stock</button>
                          </td>
                          <td>₹ 779.58</td>
                          <td>₹ 630.44</td>
                          <td>₹ 576.28</td>
                          <div className="action-btn">
                            <td>
                              <FiEdit style={{ color: "#6F6F6F" }} />
                            </td>
                            <td>
                              <AiOutlineDelete style={{ color: "red" }} />
                            </td>
                          </div>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Salomon Speedcross Men's Running Shoes</td>

                          <td>W055</td>
                          <td>503 PCS</td>
                          <td>
                            <button className="button2">Out of Stock</button>
                          </td>
                          <td>₹ 779.58</td>
                          <td>₹ 854.08</td>
                          <td>₹ 475.22</td>
                          <div className="action-btn">
                            <td>
                              <FiEdit style={{ color: "#6F6F6F" }} />
                            </td>
                            <td>
                              <AiOutlineDelete style={{ color: "red" }} />
                            </td>
                          </div>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Hoka One One Bondi Men's Running Shoes</td>

                          <td>E088</td>
                          <td>403 PCS</td>
                          <td>
                            <button className="button1">In stock</button>
                          </td>
                          <td>₹ 779.58</td>
                          <td>₹ 328.85</td>
                          <td>₹ 450.54</td>
                          <div className="action-btn">
                            <td>
                              <FiEdit style={{ color: "#6F6F6F" }} />
                            </td>
                            <td>
                              <AiOutlineDelete style={{ color: "red" }} />
                            </td>
                          </div>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>Brooks Adrenaline GTS Men's Running Shoes</td>

                          <td>R076</td>
                          <td>$9,500</td>
                          <td>
                            <button className="button1">In stock</button>
                          </td>
                          <td>₹ 779.58</td>
                          <td>₹ 169.43</td>
                          <td>₹ 601.13</td>
                          <div className="action-btn">
                            <td>
                              <FiEdit style={{ color: "#6F6F6F" }} />
                            </td>
                            <td>
                              <AiOutlineDelete style={{ color: "red" }} />
                            </td>
                          </div>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>Mizuno Wave Rider Men's Running Shoes</td>

                          <td>R099</td>
                          <td>503 PCS</td>
                          <td>
                            <button className="button3">Low Stock</button>
                          </td>
                          <td>₹ 779.58</td>
                          <td>₹ 948.55</td>
                          <td>₹ 202.87</td>
                          <div className="action-btn">
                            <td>
                              <FiEdit style={{ color: "#6F6F6F" }} />
                            </td>
                            <td>
                              <AiOutlineDelete style={{ color: "red" }} />
                            </td>
                          </div>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>Newton Running Fate Men's Running Shoes</td>

                          <td>R076</td>
                          <td>400 PCS</td>
                          <td>
                            <button className="button1">In stock</button>
                          </td>
                          <td>₹ 779.58</td>
                          <td>₹ 169.43</td>
                          <td>₹ 601.13</td>
                          <div className="action-btn">
                            <td>
                              <FiEdit style={{ color: "#6F6F6F" }} />
                            </td>
                            <td>
                              <AiOutlineDelete style={{ color: "red" }} />
                            </td>
                          </div>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td>Hoka One One Clifton Men's Running Shoes</td>

                          <td>R076</td>
                          <td>400 PCS</td>
                          <td>
                            <button className="button1">In stock</button>
                          </td>
                          <td>₹ 779.58</td>
                          <td>₹ 169.43</td>
                          <td>₹ 601.13</td>
                          <div className="action-btn">
                            <td>
                              <FiEdit style={{ color: "#6F6F6F" }} />
                            </td>
                            <td>
                              <AiOutlineDelete style={{ color: "red" }} />
                            </td>
                          </div>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td>
                            Under Armour Charged Bandit Men's Running Shoes
                          </td>

                          <td>R076</td>
                          <td>400 PCS</td>
                          <td>
                            <button className="button1">In stock</button>
                          </td>
                          <td>₹ 779.58</td>
                          <td>₹ 169.43</td>
                          <td>₹ 601.13</td>
                          <div className="action-btn">
                            <td>
                              <FiEdit style={{ color: "#6F6F6F" }} />
                            </td>
                            <td>
                              <AiOutlineDelete style={{ color: "red" }} />
                            </td>
                          </div>
                        </tr>
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

export default Warehouse;
