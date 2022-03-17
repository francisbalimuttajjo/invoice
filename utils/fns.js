//

const validateNo = (no) => {
  if (isNaN(no)) {
    return 0;
  }
  return no;
};
//

const termsArray = [
  { desc: " Choose ", value: 0 },
  { desc: " 1 Day", value: 1 },
  { desc: " 7 Days", value: 7 },
  { desc: "14 Days", value: 14 },
  { desc: " 30 Days", value: 30 },
];

//
export function addDays(date, days) {
  var result = new Date(date);

  result.setDate(result.getDate() + parseInt(days));
  return result;
}

//
export function getSum(arr) {
  const arrayOfNumbers = arr.map((el) => el.price * el.qty);

  return arrayOfNumbers.reduce((acc, cv) => acc + cv, 0);
}

//
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
const item = { name: "", qty: 0, price: 0 };
const initialValues = {
  items: [item],
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

//pages index && id
function returnInitialValues(props) {
  const initialValues = {
    items: props.invoice.items,
    issuerStreet: props.invoice.issuingAddress.street,
    receiverStreet: props.invoice.debtorsAddress.street,
    issuerCity: props.invoice.issuingAddress.city,
    receiverCity: props.invoice.debtorsAddress.city,
    issuerCountry: props.invoice.issuingAddress.country,
    receiverCountry: props.invoice.debtorsAddress.country,
    issuerPostalAddress: props.invoice.issuingAddress.postalAddress,
    receiverPostalAddress: props.invoice.debtorsAddress.postalAddress,
    description: props.invoice.description,
    startDate: new Date(props.invoice.issuingDate),
    terms: props.invoice.terms,
    receiverName: props.invoice.debtor,
    receiverEmail: props.invoice.email,
  };

  return initialValues;
}

//invoice details.y\tsx
export function handleColor(props) {
  if (props.invoice.status === "pending") {
    return "text-orange-400 ";
  } else if (props.invoice.status === "paid") {
    return "text-green-500";
  } else {
    return "text-black dark:text-white ";
  }
}

export function handleBackgroundColor(props) {
  if (props.invoice.status === "pending") return "  bg-orange-100  ";
  if (props.invoice.status === "paid") return "bg-green-100   ";
  if (props.invoice.status === "draft") return "bg-gray-100   ";
}

 
 //heading tsx
 const options = [
  { value: "all", label: "all" },
  { value: "draft", label: "Draft" },
  { value: "pending", label: "Pending" },
  { value: "paid", label: "Paid" },
];

//
export {
  termsArray,
  options,
  validateNo,
 
  initialValues,
  returnInitialValues,
  item
};
