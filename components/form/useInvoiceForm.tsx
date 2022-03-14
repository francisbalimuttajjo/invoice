import React from "react";
import axios from "axios";
import { sendData } from "../../utils/fns";
import { useInvoiceFormProps,Props } from "./types/form";
  


const useInvoiceForm = (url:string,method:string):useInvoiceFormProps => {
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState("pending");
  const [error, setError] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");
  const handleSubmit =async (values: Props["initialValues"]) => {

    const data=sendData(values,status)
   
   
    
    
    setLoading((prev) => !prev);
    if (method === 'post') {
    
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
      
    }
     
      axios 
        .patch(url,data)
        .then((res) => {
          if (res.data.status === "success") {
            setLoading((prev) => !prev);
            setSuccessMessage("changes saved");
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