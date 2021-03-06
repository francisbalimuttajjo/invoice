import React from "react";



const NoInvoice: React.FC<{title:string}> = (props) => {
  return (
    <div className=" flex justify-center w-9/12 mx-auto  mt-5 text-center p-5 ">
      <h1 className="font-extralight  text-2xl  capitalize"> {props.title}</h1>
    </div>
  );
};

export default NoInvoice;
