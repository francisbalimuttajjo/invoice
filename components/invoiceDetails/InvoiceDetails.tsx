import React from "react";
import { useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/io";
import Wrapper from "../others/Wrapper";
import { useContextProvider } from "../../context/context";
import { Props } from "./types/details";
import IssuingDetails from "./IssuingDetails";
import ReceiversDetails from "./ReceiversDetails";
import { getSum, validateNo } from "../../utils/fns";

import useApi from "./useApi";
import Heading from "./Heading";
import Buttons from "./Button";
import Table from "./Table";

const InvoiceDetails: React.FC<Props> = (props) => {
  const [handlePaid, handleDelete, loading, error] = useApi(props.invoice._id);
  const router = useRouter();
  const handleRouterBack = () => router.back();

  const [darkTheme] = useContextProvider();

  return (
    <div
      className={`${
        darkTheme ? "dark" : ""
      } sm:w-10/12 md:w-7/12 sm:mx-auto  sm:pb-8`}
    >
      <div className="mt-8 ml-4  flex ">
        <IoIosArrowBack
          className="font-light cursor-pointer mt-1 opacity-50  "
          onClick={handleRouterBack}
        />
        <p className="dark:opacity-90 opacity-50 -mt-l ml-3">Go back</p>
      </div>
      <Wrapper>
        <Heading invoice={props.invoice} handleEditing={props.handleEditing} />

        <div className="dark:bg-slate-800 bg-white  flex flex-col pb-3   w-11/12 mt-8 mx-auto rounded-md">
          <IssuingDetails invoice={props.invoice} />
          <ReceiversDetails invoice={props.invoice} />

          <div className="dark:bg-slate-900 dark:font-semibold  font-normal bg-gray-50  flex p-4 mt-8 sm:mt-16 rounded-t-md  w-11/12 mx-auto min-h-fit">
            <Table items={props.invoice.items} />
          </div>
          <div className="dark:bg-black bg-slate-900 justify-around  flex rounded-b-md  py-4  w-11/12 mx-auto min-h-fit">
            <p className="text-white text-sm font-semibold">Amount Due</p>
            <p className="text-white  font-bold">
              Ugx <span>{validateNo(getSum(props.invoice.items))}</span>
            </p>
          </div>
        </div>
        <div className="dark:bg-slate-800 bg-white sm:hidden flex justify-end mt-8 p-4">
          <Buttons
            handleEditing={props.handleEditing}
            status={props.invoice.status}
            id={props.invoice._id}
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default InvoiceDetails;
