function getDate(str) {
  const arr = str.split("-");
  return arr.join(",").replace(/,/g, "-");
}


const termsArray=[{desc:' Choose ',value:0},{desc:' 1 Day',value:1},{desc:' 7 Days',value:7},{desc:'14 Days',value:14},{desc:' 30 Day',value:30}]
const initialValues={issuerStreet:"",receiverStreet:"",receiverName:"",issuerCountry:'',receiverEmail:'',description:"",issuerCity:'',receiverCity:'',receiverCountry:'',receiverPostalAddress:'',issuerPostalAddress:''}
const initialErrorValues={date:'',paymentTerms:"",issuerStreet:"",receiverStreet:"",receiverName:"",issuerCountry:'',receiverEmail:'',description:"",issuerCity:'',receiverCity:'',receiverCountry:'',receiverPostalAddress:'',issuerPostalAddress:''}

export   function validate(values,date,terms){
  const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

     const errors={}
   
     if(!values.issuerStreet){
         errors.issuerStreet='field is required'
     }
     if(!values.receiverStreet){
       errors.receiverStreet='field is required'
   }
   if(!values.receiverName){
       errors.receiverName='field is required'
   }
   if(!values.issuerCountry){
       errors.issuerCountry='field is required'
   }
   if(!values.receiverCountry){
       errors.receiverCountry='field is required'
   }
   if(!values.description){
       errors.description='field is required'
   }
   if(!values.issuerCity){
       errors.issuerCity=' required'
   }
   if(!values.issuerPostalAddress){
       errors.issuerPostalAddress=' required'
   }
   if(!date){
       errors.date=' required'
   }
   if(!values.receiverCity){
       errors.receiverCity=' required'
   }
   if(!values.receiverPostalAddress){
       errors.receiverPostalAddress=' required'
   }
   if(!regex.test(values.receiverEmail)){
       errors.receiverEmail='invalid email'
   }
   if(!values.receiverEmail){
       errors.receiverEmail='email is  required'
   }
   if(!terms){
       errors.paymentTerms='choose one'
   }
   
    return errors
 }
export function getPaymentDate(date, days) {
  if (date) {
    const n = getDate(date);
    var res = new Date(n);
    console.log(res);
    res.setDate(res.getDate() + days);
    console.log(res);
    return res;
  }
  return;
}

export function handleBackgroundColor(props) {
  if (props.status === "pending") return "bg-orange-100";
  if (props.status === "paid") return "bg-green-100";
  if (props.status === "draft") return "bg-gray-100";
}
export function handleColor(props) {
  if (props.status === "pending") {
    return "text-orange-500";
  } else if (props.status === "paid") {
    return "text-green-500";
  } else {
    return "text-black";
  }
}
export function handleCircleColor(props) {
  switch (props.status) {
    case "pending":
      return "bg-orange-500";
    case "paid":
      return "bg-green-500";

    default:
      return "bg-blank";
  }
  //   if (props.status === "pending") {
  //     return "bg-orange-500";
  //   } else if (props.status === "paid") {
  //     return "bg-green-500";
  //   } else {
  //     return "bg-black";
  //   }
}
export function getSum(arr) {
  const arrayOfNumbers = arr.map((el) => el.amount);
  return arrayOfNumbers.reduce((acc, cv) => acc + cv, 0);
}
 export{termsArray,initialValues,initialErrorValues}