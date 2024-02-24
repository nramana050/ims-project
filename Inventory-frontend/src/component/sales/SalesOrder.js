import React, { useEffect, useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import SideBar from "../component/SideBar";
import NavBar from "../component/NavBar";
import { Bars } from "react-loader-spinner";

const SalesOrder = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const [items, setItems] = useState([]);
  const newItem = "New Item";
  const handleAddClick = () => {
    setItems((prevItems) => [...prevItems, newItem]);
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
            <div className="body">
              <div className="wrapper">
                <div className="main-div">
                  <div className="items-list-2">
                    <div className="table" id="main-table">
                      <div className="input-group-1">
                        <p
                          className="mx-3 mt-2 fs-5"
                          style={{ fontWeight: "800" }}
                        >
                          Sales Order List
                        </p>
                        <div className="sales-order-top-right">
                          <div style={{backgroundColor:'rgba(244, 247, 246, 1)'}}>
                            <input className="search-input-in" type="text" placeholder="Search..." />
                            <button className="search-button-in">Search</button>
                          </div>
                          <div className="filter-button-in">
                            <BiFilterAlt className="filter-icon-in"/>
                          </div>
                          <div>
                            <button className="add-button-in">Add <MdAdd style={{marginTop:'-1px'}}/></button>
                          </div>
                        </div>
                        {/* <div
                          className="input-group "
                          style={{ marginLeft: "30rem" }}
                        >
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
                            data-mdb-ripple-init=""
                          >
                            Search
                          </button>
                        </div> */}

                        {/* <div className="filter">
                          <HiOutlineFilter
                            size={30}
                            color="rgba(0, 172, 154, 1)"
                          />
                        </div> */}
                        {/* <button
                          type="button"
                          className="btn search-btn"
                          data-mdb-ripple-init=""
                          onClick={handleAddClick}
                        >
                          Add
                        </button> */}
                      </div>
                      <table className="table table-bordered ">
                        <div id="table-responsive" className="table-responsive">
                          <table
                            id="table"
                            className="table table-hover table-striped text-nowrap table-vcenter mb-0"
                          >
                            <thead>
                              <tr>
                                <th></th>
                                <th>CUSTOMER NAME</th>
                                <th>SALES ORDER NO</th>
                                <th>ITEMS PURCHASED</th>
                                <th>SALES ORDER DATE</th>
                                <th>PURCHASE PRICE</th>
                                <th>ACTION</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Guy Hawkins</td>

                                <td>E088</td>
                                <td>Reebok Floatride Women's Running Shoes</td>

                                <td>28/10/2012</td>
                                <td>₹ 396.84</td>
                                <div className="action-btn">
                                  <td>
                                    <AiOutlineDelete style={{ color: "red" }} />
                                  </td>
                                </div>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Wade Warren</td>

                                <td>R091</td>
                                <td>Saucony Kinvara Men's Running Shoes</td>

                                <td>15/08/2017</td>
                                <td>₹ 782.01</td>
                                <div className="action-btn">
                                  <td>
                                    <AiOutlineDelete style={{ color: "red" }} />
                                  </td>
                                </div>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Kristin Watson</td>
                                <td>D077</td>
                                <td>
                                  New Balance Fresh Foam Men's Running Shoes
                                </td>

                                <td>18/09/2016</td>
                                <td>₹ 576.28</td>
                                <div className="action-btn">
                                  <td>
                                    <AiOutlineDelete style={{ color: "red" }} />
                                  </td>
                                </div>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Cameron Williamson</td>

                                <td>W055</td>
                                <td>Salomon Speedcross Men's Running Shoes</td>

                                <td>16/08/2013</td>
                                <td>₹ 475.22</td>
                                <div className="action-btn">
                                  <td>
                                    <AiOutlineDelete style={{ color: "red" }} />
                                  </td>
                                </div>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>Arlene McCoy</td>

                                <td>E088</td>
                                <td>Hoka One One Bondi Men's Running Shoes</td>

                                <td>07/05/2016</td>
                                <td>₹ 450.54</td>
                                <div className="action-btn">
                                  <td>
                                    <AiOutlineDelete style={{ color: "red" }} />
                                  </td>
                                </div>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>
                                  Brooks Adrenaline GTS Men's Running Shoes
                                </td>

                                <td>R076</td>
                                <td>
                                  Brooks Adrenaline GTS Men's Running Shoes
                                </td>

                                <td>12/06/2020</td>
                                <td>₹ 601.13</td>
                                <div className="action-btn">
                                  <td>
                                    <AiOutlineDelete style={{ color: "red" }} />
                                  </td>
                                </div>
                              </tr>
                              <tr>
                                <td>7</td>
                                <td>Bessie Cooper</td>

                                <td>R099</td>
                                <td>Mizuno Wave Rider Men's Running Shoes</td>

                                <td>18/09/2016</td>
                                <td>₹ 202.87</td>
                                <div className="action-btn">
                                  <td>
                                    <AiOutlineDelete style={{ color: "red" }} />
                                  </td>
                                </div>
                              </tr>
                              <tr>
                                <td>8</td>
                                <td>Robert Fox</td>

                                <td>R076</td>
                                <td>Newton Running Fate Men's Running Shoes</td>

                                <td>18/09/2016</td>
                                <td>₹ 601.13</td>
                                <div className="action-btn">
                                  <td>
                                    <AiOutlineDelete style={{ color: "red" }} />
                                  </td>
                                </div>
                              </tr>
                              <tr>
                                <td>9</td>
                                <td>Darlene Robertson</td>

                                <td>R076</td>
                                <td>
                                  Hoka One One Clifton Men's Running Shoes
                                </td>

                                <td>28/10/2012</td>
                                <td>₹ 601.13</td>
                                <div className="action-btn">
                                  <td>
                                    <AiOutlineDelete style={{ color: "red" }} />
                                  </td>
                                </div>
                              </tr>
                              <tr>
                                <td>10</td>
                                <td>Albert Flores</td>

                                <td>R076</td>
                                <td>
                                  Under Armour Charged Bandit Men's Run...
                                </td>

                                <td>15/08/2017</td>
                                <td>₹ 601.13</td>
                                <div className="action-btn">
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesOrder;