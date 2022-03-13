import React from "react";
import axios from "axios";
// import axios,{ AxiosRequestConfig } from 'axios';
import { sendData } from "../../utils/fns";
import { useInvoiceFormProps,Props } from "./types/form";
  

// async function makeRequest() {

//     const config = {
//         method: 'get',
//         url: 'http://webcode.me'
//     }

//     let res = await axios(config)

//     console.log(res.status);
// }

const useInvoiceForm = (url:string):useInvoiceFormProps => {
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState("pending");
  const [error, setError] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");
  const handleSubmit = (values: Props["initialValues"]) => {
  
    console.log({ values });
    const data=sendData(values,status)
    console.log({data})
    
     setLoading((prev) => !prev);
      axios 
        .post(url,data)
        .then((res) => {
          if (res.data.status === "success") {
            setLoading((prev) => !prev);
            setSuccessMessage("invoice saved");
             setTimeout(()=>window.location.reload(),3000)
          }
        })
        .catch((err) => {
          setError("please try again");
          setLoading((prev) => !prev);
        });
  };

  const handleDraft = () => {
    setStatus('draft')
    console.log({status})
  }
  return {handleSubmit, handleDraft, loading, error, successMessage,setSuccessMessage,setError};
}

export default useInvoiceForm