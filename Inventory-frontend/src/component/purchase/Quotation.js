import React, { useRef, useState, useEffect } from "react";
import "../../Quotation.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { Bars } from "react-loader-spinner";

const Quotation = () => {
  const data = [
    {
      no: "1",
      description: "SHOES VT",
      price: "₹ 640",
      qty: "210",
      amount: "₹ 2,24,000.00",
    },
  ];

  const {state} = useLocation()

  const navigation = useNavigate();

  let componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
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
        <div className="invoice-container">
          <div className="head-t">
            <div className="tax-i">
            
              <button className="invoice-btn" onClick={() => handlePrint()}>
                Print
              </button>
              <button className="invoice-btn" onClick={() => navigation("/quotation/quotation-order")}>Back</button>
            </div>
          </div>
          <div className="invoice" ref={componentRef}>
            <div className="head-i">
              <div className="logo-a">
                <h4>Insta-e-Mart</h4>
                <div className="logo-a">
                  <p>
                    WA -89 Mother Diary Road Near ICICI Bank, PIN No:-110092
                    Phone no.: 9873101193 Email:
                    narayanenterprises.textile@gmail.com GSTIN: 07CMSPA8242G1ZW,
                    State: 07-Delhi
                  </p>
                </div>
              </div>
            </div>
            <div className="main-table">
              <table className="table">
                <thead className="table-c">
                  <tr className="color">
                    <th>Quotation For</th>
                    {/* <th>Ship To</th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td className="inst">
                      <h5>{state.formData.customerName}</h5>
                      <p>{state.formData.billingAddress}</p>
                      <p>Phone Number: {state.formData.mobile}</p>
                      <p>GSTIN : {state.formData.gstNumber} </p>
                    </td>
                    {/* <td className="wa-p">
                  <p>WA-89 BLOCK NEW PATPARGANJ,ROAD SHAKARPUR,DELHI 110092</p>
                </td> */}
                    <td className="wa-pl">
                      <p>Quotation Number: {state.formData.quotationOrderNo}</p>
                      <p>Date : {state.formData.quotationOrderDate}</p>
                      <p>TIme : 02:53 PM </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="table">
                <thead className="table-c">
                  <tr className="color">
                    <th>S.N</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>QTY</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {state.formData.items.map((item,index) => (
                    <tr key={item.id} className="item-t table-cl">
                      <td>{index + 1}</td>
                      <td>{item.itemName}</td>
                      <td>₹ {item.price}</td>
                      <td>{item.quantity}</td>
                      <td>₹ {item.price * item.quantity}</td>
                    </tr>
                  ))}

                  <tr>
                    <td></td>
                    <td></td>

                    <td></td>

                    <td></td>
                    <td style={{ backgroundColor: "rgb(235, 235, 232)" }}>
                      Discount Amount: ₹ {state.formData.totalDiscount}
                    </td>
                  </tr>
             
                  <tr>
                    <td></td>
                    <td></td>

                    <td></td>

                    <td></td>
                    <td style={{ backgroundColor: "rgb(235, 235, 232)" }}>
                      Tax Amount: ₹ {state.formData.totalGST}
                    </td>
                  </tr>
                 
             
                  <tr>
                    <td></td>
                    <td></td>

                    <td></td>

                    <td></td>
                    <td
                      style={{
                        backgroundColor: "rgb(132, 87, 255)",
                        color: "#fff",
                      }}
                    >
                      Total Quote: ₹ {state.formData.totalAmount}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="main-table">
            <table className="table" style={{ marginBottom: "0" }}>
            <thead className="table-c">
              <tr className="color wid-t">
                <th>Greetings</th>
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
              <div>
                <p style={{ margin: "10px", textAlign: "justify" }}>
                  This quotation is not a contract or a bill. It is our best
                  guess at the total price for the service and goods described
                  above. The customer will be billed after indicating acceptance
                  of this quote. Payment will be due prior to the delivery of
                  service and goods. Please fax or mail the signed quote to the
                  address listed above.
                </p>
                <div>
                  <h4 style={{ marginLeft: "10px", marginBottom: "60px" }}>
                    Customer Acceptance
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "20px",
                    }}
                  >
                    {" "}
                    <div style={{ marginLeft: "40px" }}>Signature</div>
                    <div style={{ marginRight: "100px" }}>Date:</div>
                  </div>
                </div>
                <div style={{ textAlign: "center", margin: "20px" }}>
                  If you have any questions, Please contact [Insta-E-Mart, Phone
                  :9873101193, email: narayanenterprises.textile@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quotation;
