import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import Wrapper from "../others/Wrapper";
import { Props } from "../../types/details";
import IssuingDetails from "./IssuingDetails";
import ReceiversDetails from "./ReceiversDetails";
import { getSum, validateNo } from "../../utils/fns";
import { AlertDanger } from "../others/Alert";
import useApi from "./useApi";
import Heading from "./Heading";
import Buttons from "./Button";
import Table from "./Table";

const InvoiceDetails: React.FC<Props> = (props) => {
  const [handlePaid, handleDelete, loading, error, setError, handleRouterBack] =
    useApi(props.invoice._id);

  return (
    <div className=" sm:w-10/12 md:w-7/12 sm:mx-auto  sm:pb-8">
      <div className="mt-8 ml-4  flex ">
        <IoIosArrowBack
          className="font-light cursor-pointer mt-1 opacity-50  "
          onClick={handleRouterBack}
        />
        <p className="dark:opacity-90 opacity-50 -mt-l ml-3">Go back</p>
      </div>
      <Wrapper>
        {/* notification */}
        {error && <AlertDanger msg={error} handleClick={() => setError("")} />}
        {props.invoice ? (
          <>
            <Heading
              invoice={props.invoice}
              handleEditing={props.handleEditing}
            />
            <div className="dark:bg-slate-800 bg-white  flex flex-col pb-3   w-11/12 mt-8 mx-auto rounded-md">
              <IssuingDetails invoice={props.invoice} />
              <ReceiversDetails invoice={props.invoice} />

              {/* invoce items  */}
              <Table
                items={props.invoice.items}
                sum={validateNo(getSum(props.invoice.items))}
              />
            </div>
            <div className="dark:bg-slate-800 bg-white sm:hidden flex justify-end mt-8 p-4">
              <Buttons
                handleEditing={props.handleEditing}
                status={props.invoice.status}
                id={props.invoice._id}
              />
            </div>
          </>
        ) : (
          <h1>not found</h1>
        )}
      </Wrapper>
    </div>
  );
};

export default InvoiceDetails;
