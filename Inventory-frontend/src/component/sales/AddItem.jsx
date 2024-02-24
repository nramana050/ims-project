import React, { useState } from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button } from "@mui/material";

const AddItem = () => {
  const [count, setCount] = useState(1);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div className="add-item-outer">
        <div className="add-item-inner">
          <div className="add-item-header">
            <div style={{ fontSize: "25px", fontWeight: 200 }}>SELECT QTY</div>
            <div className="handleclose">{<CancelOutlinedIcon />}</div>
          </div>

          <div className="add-item-content">
            <div className="add-item-innercontent">
              <div className="add-item-name">
                Saucony Kinvara Men's
                <pre className="add-item-name"> Running Shoes</pre>
              </div>
              <div className="add-item-button">
                <div className="add-item-left">
                  <div
                    style={{
                      backgroundColor: "#00AC9A",
                      width: "30px",
                      height: "30px",
                      fontSize: "20px",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                      borderRadius: "5px",
                      color: "white",
                    }}
                  >
                    <RemoveIcon onClick={decrement} />
                  </div>
                  <div style={{ fontSize: "20px" }} onChange={handleChange}>
                    {count}
                  </div>
                  <div
                    style={{
                      backgroundColor: "#00AC9A",
                      width: "30px",
                      height: "30px",
                      fontSize: "20px",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                      borderRadius: "5px",
                      color: "white",
                    }}
                  >
                    <AddIcon onClick={increment} />
                  </div>
                </div>
                <div
                  className="add-item-right"
                  style={{
                    backgroundColor: "#BFBFBF",
                    width: "60px",
                    height: "66px",
                    fontSize: "20px",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    borderRadius: "5px",
                  }}
                >
                  PCS
                </div>
              </div>
            </div>

            <div className="add-item-innercontent">
              <div className="add-item-name">
                Reebok Floatride Women's
                <pre className="add-item-name"> Running Shoes</pre>
              </div>
              <div className="add-item-button">
                <div className="add-item-left">
                  <div
                    style={{
                      backgroundColor: "#00AC9A",
                      width: "30px",
                      height: "30px",
                      fontSize: "20px",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                      borderRadius: "5px",
                      color: "white",
                    }}
                  >
                    <RemoveIcon onClick={decrement} />
                  </div>
                  <div style={{ fontSize: "20px" }}>{count}</div>
                  <div
                    style={{
                      backgroundColor: "#00AC9A",
                      width: "30px",
                      height: "30px",
                      fontSize: "20px",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                      borderRadius: "5px",
                      color: "white",
                    }}
                  >
                    <AddIcon onclick={increment} />
                  </div>
                </div>
                <div
                  className="add-item-right"
                  style={{
                    backgroundColor: "#BFBFBF",
                    width: "60px",
                    height: "66px",
                    fontSize: "20px",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    borderRadius: "5px",
                  }}
                >
                  PCS
                </div>
              </div>
            </div>
          </div>
          <div className="add-item-footer">
            <div
              className="sales-content-btn"
              style={{
                justifyContent: "end",
                gap: "50px",
                marginRight: "40px",
              }}
            >
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#00AC9A",
                  height: "50px",
                  width: "150px",
                }}
              >
                SAVE
              </Button>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#FFD8D8",
                  height: "50px",
                  width: "150px",
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
  );
};

export default AddItem;
