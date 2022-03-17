import React from "react";
import axios from "axios";
import { useRouter } from "next/router";

const UseApi = (id: string) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
    const router = useRouter();
  const handleRouterBack = () => router.back();
  //api calls
  const handleDelete = () => {
      
    setLoading(true);
    axios
      .delete(`/api/delete/${id}`)
      .then((res) => {
        if (res.data.status === "success") {
          setLoading(false);
          setTimeout(() => window.location.replace("/"), 1000);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError("operation failed, try again");
        return;
      });
  };

  //marking as paid
  const handlePaid = () => {
    setLoading(true);
    axios
      .patch(`/api/paid/${id}`)
      .then((res) => {
        if (res.data.status === "success") {
          setLoading(false);
          setTimeout(() => window.location.replace("/"), 1000);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError("operation failed, try again");
        return;
      });
    };
    return[handlePaid,handleDelete,loading,error,setError,handleRouterBack] as const
};

export default UseApi;
