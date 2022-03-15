import { useRouter } from "next/router";
import React from "react";
import NotFound from "../components/home/NotFound";

const NoInvoice = () => {
  const router = useRouter();
  const handleRouter =()=> router.replace("/");
  return (
    <div className="flex flex-col justify-center  mt-60 w-10/12 mx-auto">
      <NotFound title="oops !!! Page is not available" />
      <button
        onClick={handleRouter}
        className="bg-blue-500 p-5 w-1/2 mx-auto rounded-lg font-bold hover:font-extrabold hover:bg-blue-400"
      >
        Home
      </button>
    </div>
  );
};

export default NoInvoice;
