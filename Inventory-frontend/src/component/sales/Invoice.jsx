import React, { useRef,useMemo } from "react";
import "../../Invoice.css";
import { useNavigate } from "react-router-dom";
import {useReactToPrint} from "react-to-print";
import ReactToPrint from "react-to-print"

const Invoice = () => {
  const data = [
    {
      no: "1",
      item: "SHOES VT",
      hsn: "64029990",
      qty: "210",
      price: "₹ 952.38",
      discount: "20%",
      gst: " ₹24,000.00 (12%)",
      amount: "₹ 2,24,000.00",
    },
  ];

//   useMemo(()=>console.log("test"),[])

  const navigation = useNavigate();

  let componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  })
  return (
    <div className="invoice-container">
      <div className="head-t">
        <div className="tax-i">
        {/* <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      /> */}
           <button onClick={() => handlePrint()}>Print</button>
          <button onClick={() => navigation("/sales/sales-order")}>Back</button>
        </div>
      </div>
      <div className="invoice" ref={componentRef}>
        <div className="head-i">
          <div className="logo-a">
            <h4>Insta-e-Mart</h4>
            <div className="logo-a">
              <p>
                WA -89 Mother Diary Road Near ICICI Bank, PIN No:-110092 Phone
                no.: 9873101193 Email: narayanenterprises.textile@gmail.com
                GSTIN: 07CMSPA8242G1ZW, State: 07-Delhi
              </p>
            </div>
          </div>
        </div>
        <div className="main-table">
          <table className="table">
            <thead className="table-c">
              <tr className="color">
                <th>Bill To</th>
                {/* <th>Ship To</th> */}
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="inst">
                  <h5>CUSTOMER NAME</h5>

                  <p>Phone: 7897978373</p>
                </td>
                {/* <td className="wa-p">
                  <p>WA-89 BLOCK NEW PATPARGANJ,ROAD SHAKARPUR,DELHI 110092</p>
                </td> */}
                <td className="wa-pl">
                  <p>Sales Order Number:545654567</p>
                  <p>Sales Order Date : 20-01-2024 </p>
                  <p>TIme : 02:53 PM </p>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table">
            <thead className="table-c">
              <tr className="color">
                <th>#</th>
                <th>ITEM</th>
                <th>HSN/SAC</th>
                <th>QTY</th>
                <th>PRICE</th>
                <th>DISCOUNT</th>
                <th>GST</th>
                <th>AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="item-t table-cl">
                  <td>{item.no}</td>
                  <td>{item.item}</td>
                  <td>{item.hsn}</td>
                  <td>{item.qty}</td>
                  <td>{item.price}</td>
                  <td>{item.discount}</td>
                  <td>{item.gst}</td>
                  <td>{item.amount}</td>
                </tr>
              ))}

              <tr className="tdata table-cl">
                <td>2</td>
                <td>Nike Air</td>
                <td>56</td>
                <td>210</td>
                <td>3000</td>
                <td>20%</td>
                <td>₹24,000.00</td>
                <td>₹2,24,000.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="main-table">
          <table className="table">
            <thead className="table-c">
              <tr className="color">
                <th>Tax type</th>
                <th>Taxable Amount</th>
                <th>Rate</th>
                <th>Tax Amount</th>
                <th colSpan={2}>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="tdata">
                <td>SGST</td>
                <td>200000</td>
                <td>6%</td>
                <td>₹ 120000</td>
                <td className="total-l">Sub Total</td>
                <td className="total-l">₹ 224000</td>
              </tr>
              <tr className="tdata">
                <td>CGST</td>
                <td>200000</td>
                <td>6%</td>
                <td>₹ 120000</td>
                <td>Sub Total</td>
                <td>₹ 224000</td>
              </tr>

              <tr className="tdata">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="total-l">Grand Total</td>
                <td className="total-l">₹ 240000</td>
              </tr>
            </tbody>
          </table>

          <table className="table" style={{ marginBottom: "0" }}>
            <thead className="table-c">
              <tr className="color wid-t">
                <th>Payment Mode</th>
                <th>Authorized Signatory</th>
              </tr>
            </thead>
            <tbody>
              <tr className="tdata">
                <td
                  style={{
                    height: "100px",
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                  }}
                >
                  <span>Credit</span>
                  <span style={{ fontWeight: "700" }}>
                    Thank you for shopping with us!!
                  </span>
                </td>
                <td
                  style={{ width: "200px", height: "100px" }}
                  className="textr"
                ></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
