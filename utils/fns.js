
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





export function getSum(arr) {
   
  const arrayOfNumbers = arr.map((el) => el.price*el.qty);
 
  return arrayOfNumbers.reduce((acc, cv) => acc + cv, 0);
}

//function
 export function checkForEmptyFields(inputArray){
  let arr=[]
  inputArray.map(el=>{
   if(!el.name || el.qty<1 || el.price<1){
     arr.push(el)
   }
  })
  if(arr.length <1){
    return true
  }
  return false
}
export function stringifyDate(str){
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

      const date =month + " " +day  + ", " + "" + year;
      return date
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function sendData(formValues,inputArray,startDate,paymentDate,terms,status) {
    const data={    issuingAddress: {
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
          items: inputArray,
          paymentDate,
          email: formValues.receiverEmail,
          issuingDate: startDate,
          terms,
          invoiceNumber: getRandom(10000,20000),
          debtor: formValues.receiverName,
          status,
          description: formValues.description,
    }
    return data
}
 export{termsArray,initialValues,validateNo,initialErrorValues}