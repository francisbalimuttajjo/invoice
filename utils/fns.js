function getDate(str) {
  const arr = str.split("-");
  return arr.join(",").replace(/,/g, "-");
}
const validateNo=(no)=>{
    if(isNaN(no)){
        return 0
    }
    return no

}

const termsArray=[{desc:' Choose ',value:0},{desc:' 1 Day',value:1},{desc:' 7 Days',value:7},{desc:'14 Days',value:14},{desc:' 30 Days',value:30}]
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


 export   function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
// export function getPaymentDate(date, days) {
//   if (date) {
//     const n = getDate(date);
//     var res = new Date(n);
//     // console.log(res);
//     res.setDate(res.getDate() + days);
//     // console.log(res);
//     return res;
//   }
//   return;
// }




export function getSum(arr) {
  const arrayOfNumbers = arr.map((el) => el.price*el.qty);
  return arrayOfNumbers.reduce((acc, cv) => acc + cv, 0);
}

//function
 export function checkForEmptyFields(inputArray){
  let arr=[]
  inputArray.map(el=>{
   if(!el.name || el.qty<1 || el.price==1){
     arr.push(el)
   }
  })
  if(arr.length <1){
    return true
  }
  return false
}
 export{termsArray,initialValues,validateNo,initialErrorValues}