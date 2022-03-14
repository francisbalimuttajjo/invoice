import axios from "axios";
const validateNo = (no) => {
  if (isNaN(no)) {
    return 0;
  }
  return no;
};

const termsArray = [
  { desc: " Choose ", value: 0 },
  { desc: " 1 Day", value: 1 },
  { desc: " 7 Days", value: 7 },
  { desc: "14 Days", value: 14 },
  { desc: " 30 Days", value: 30 },
];

export function addDays(date, days) {
  var result = new Date(date);

  result.setDate(result.getDate() + parseInt(days));
  return result;
}

export function getSum(arr) {
  const arrayOfNumbers = arr.map((el) => el.price * el.qty);

  return arrayOfNumbers.reduce((acc, cv) => acc + cv, 0);
}

export function stringifyDate(str) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const d = new Date(str);
  const month = monthNames[d.getMonth()];
  const day = d.getDate();
  const year = d.getFullYear();

  const date = month + " " + day + ", " + "" + year;
  return date;
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function sendData(formValues, status) {
  const data = {
    issuingAddress: {
      street: formValues.issuerStreet,
      city: formValues.issuerCity,
      postalAddress: formValues.issuerPostalAddress,
      country: formValues.issuerCountry,
    },
    debtorsAddress: {
      street: formValues.receiverStreet,
      city: formValues.receiverCity,
      postalAddress: formValues.receiverPostalAddress,
      country: formValues.receiverCountry,
    },
    items: formValues.items,
    paymentDate: addDays(formValues.startDate, formValues.terms),
    email: formValues.receiverEmail,
    issuingDate: formValues.startDate,
    terms: formValues.terms,
    invoiceNumber: getRandom(10000, 20000),
    debtor: formValues.receiverName,
    status,
    description: formValues.description,
  };
  return data;
}
const initialValues = {
  items: [{ name: "", qty: 0, price: 0 }],
  issuerStreet: "",
  issuerCity: "",
  receiverCity: "",
  issuerCountry: "",
  receiverCountry: "",
  issuerPostalAddress: 0,
  receiverPostalAddress: 0,
  receiverName: "",
  receiverEmail: "",
  receiverStreet: "",
  description: "",
  startDate: new Date(),
  terms: 0,
};
function handleColor(props) {
  if (props.invoice.status === "pending") {
    return "text-orange-400";
  } else if (props.invoice.status === "paid") {
    return "text-green-500";
  } else {
    return "text-black dark:text-white";
  }
}

function handleBackgroundColor(props) {
  if (props.invoice.status === "pending") return "bg-orange-100";
  if (props.invoice.status === "paid") return "bg-green-100";
  if (props.invoice.status === "draft") return "bg-gray-100";
}


const categories = ["all", "pending", "paid", "draft"];
export {
  termsArray,
  validateNo,
  categories,
  initialValues,
  handleColor,
  handleBackgroundColor,
};
