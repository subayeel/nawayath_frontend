import axios from "axios";

// const loadscript = (src) => {
// 	return new Promise((resolve) => {
// 		const script = document.createElement("script");
// 		script.src = src;

// 		script.onload = () => {
// 			resolve(true);
// 		};

// 		script.onerror = () => {
// 			resolve(false);
// 		};
// 		document.body.appendChild(script);
// 	});
// };

// export const displayRazorpay = async (amount) => {
// 	const res = await loadscript("https://checkout.razorpay.com/v1/checkout.js");

// 	if (!res) {
// 		alert("You are offline.... failed to connect");
// 		return;
// 	}

// 	const data = await fetch("http://localhost:1337/razorpay", {
// 		method: "POST",
// 	}).then((t) => t.json());

// 	console.log("DATA: " + data);

// 	const options = {
// 		key: "rzp_test_PiKDnIErNLaHkL",
// 		currency: data.currency,
// 		amount: data.amount.toString(),
// 		order_id: data.id,
// 		name: "Nawayath Foundation",
// 		description: "Thank You",
// 		image:
// 			"https://firebasestorage.googleapis.com/v0/b/eduqate-d65f5.appspot.com/o/NF%20LOGO%201.png?alt=media&token=fc8ebfb0-eb49-43e9-81e0-5ffd28c59055",

// 		handler: function (response) {
// 			alert("Payment ID: " + response.razorpay_payment_id);
// 			alert("Order ID: " + response.razorpay_order_id);
// 			alert("Payment Signature: " + response.razorpay_signature);
// 			alert("Payment Successful");
// 		},
// 	};
// 	const paymentObject = new window.Razorpay(options);
// 	paymentObject.open();
// };
export const checkoutHandler = async (amount, formValues, collectionName) => {
  const {
    data: { key },
  } = await axios.get("http://54.250.201.101:5006/api/getkey");

  const {
    data: { order },
  } = await axios.post("http://54.250.201.101:5006/api/checkout", {
    amount,
    formValues,
    collectionName,
  });

  const options = {
    key,
    amount: order.amount,
    currency: "INR",
    name: "Nawayath Club",
    description: "Thank You",
    image:
      "https://firebasestorage.googleapis.com/v0/b/nawayath-foundation-2c872.appspot.com/o/NF%20LOGO%201.png?alt=media&token=1545fb2d-6bbb-4e2f-8eb0-1b7ec1069819",
    order_id: order.id,

    callback_url: "http://54.250.201.101:5006/api/paymentverification",

    // prefill: {
    //   name: "Gaurav Kumar",
    //   email: "gaurav.kumar@example.com",
    //   contact: "9999999999",
    // },
    notes: {
      address: "Bangauru, Karnataka",
    },
    theme: {
      color: "#1b1a55",
    },
  };
  const razor = new window.Razorpay(options);
  razor.open();
};
