import TshirtImg from "./18245925_ncy4_joh2_210603.svg"
function Product() {

    const paymentHandler = async (e) =>{

        const amount = 500;
        const currency = "INR";
        const receiptId = "Receipt no. 1";
        const notes = {
            "notes_key_1": "Tea, Earl Grey, Hot",
            "notes_key_2": "Tea, Earl Grey… decaf."
          };
        
        const response = await fetch("http://localhost:5000/order", {
            method:"POST",
            body:JSON.stringify({
                amount,
                currency,
                receipt:receiptId,
                notes
            }),
            headers:{
                "Content-Type": "application/json",
            },
        });
        const order = await response.json();
        console.log(order);
        var options = {
            "key": "", // Enter the Key ID generated from the Dashboard
            amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency,
            "name": "Acme Corp",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": order.id, //This is a sample Order ID. Pass the id obtained in the response of Step 1
            "handler": function (response){
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
            },
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function (response){
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
        });
        rzp1.open();
        e.preventDefault();
    }
    return (
        <div className="product">
            <h2>Tshirt</h2>
            <p>Solid Blue Cotton Tshirt</p>
            <img src={TshirtImg}/>
            <br/>
            <button onClick={paymentHandler}>Pay</button>
        </div>
    )
}
export default Product;