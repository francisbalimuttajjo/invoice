import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/animation";
import { InvoicePropsHome } from "../../types/home";
import { stringifyDate } from "../../utils/fns";
import { FaCircle } from "react-icons/fa";

const Invoice: React.FC<InvoicePropsHome> = (props) => {
  const router = useRouter();
  function handleTextColor() {
    if (props.invoice.status === "pending") {
      return "text-orange-400 ";
    } else if (props.invoice.status === "paid") {
      return "text-green-500";
    } else {
      return "text-black dark:text-white ";
    }
  }

  function handleBackgroundColor() {
    if (props.invoice.status === "pending") return "  bg-orange-100  ";
    if (props.invoice.status === "paid") return "bg-green-100   ";
    if (props.invoice.status === "draft") return "bg-gray-100   ";
  }

  return (
    <motion.div
      variants={fadeIn}
      onClick={() => router.push(`/invoices/${props.invoice._id}`)}
      className={`
           dark:bg-slate-800 bg-white
              hover:cursor-pointer hover:border-solid hover:border    hover:border-gray-500
              mx-auto px-5 flex justify-between  py-3 my-2 h-28 sm:h-20 rounded-md sm:w-full md:w-9/12 w-10/12 `}
    >
      <div className="flex flex-col justify-around sm:flex-row sm:my-auto ">
        <h1 className="text-neutral-400 font-bold ">
          #
          <span className="dark:text-white text-black">
            UG{props.invoice.invoiceNumber}
          </span>
        </h1>
        <div className="sm:flex  ">
          <p className="opacity-50 text-sm sm:ml-3 sm:pt-0.5 ">
            Due <span>{stringifyDate(props.invoice.paymentDate)}</span>
          </p>
          <p className="font-light sm:hidden  ">
            UGX <span className=" font-bold">{props.amount} </span>
          </p>
        </div>
      </div>
      <div className="flex justify-between items-end sm:justify-around w-fit sm:items-center  flex-col  sm:flex-row sm:my-auto relative ">
        <h1 className="dark:opacity-50 capitalize sm:w-32     text-sm md:text-base    ">
          {props.invoice.debtor}
        </h1>
        <p className="font-light hidden sm:inline my-auto m-1 w-24">
          UGX <span className=" font-bold">{props.amount}</span>
        </p>
        <div
          className={`${handleBackgroundColor()} dark:bg-slate-700 px-3  bg-opacity-50   rounded-md py-2 w-24 `}
        >
          <p className={`${handleTextColor()} text-sm   capitalize font-semibold`}>
            <FaCircle className="h-2 w-2 m-1 inline" /> {props.invoice.status}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Invoice;
