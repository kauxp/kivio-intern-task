import Razorpay from "razorpay"

export default function RazorpayInstance() {
    var instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    return instance;
}