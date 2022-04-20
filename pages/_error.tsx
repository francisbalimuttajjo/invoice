import React from "react";
import NotFound from "../components/home/NotFound";



const NoInvoice = () => {
  return (
    <div className="flex flex-col justify-center  mt-30 w-10/12 mx-auto">
      
      <NotFound title="Not Found  !!" />
      <h1 className='mx-auto text-center '>The data you are looking for is not available,Please check the details and try again !!!</h1>
     
    </div>
  );
};

export default NoInvoice;