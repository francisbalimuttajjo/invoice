import React from "react";
import axios from "axios";
import InputComponent from "./InputLabel";

import DateComponent from "./DateComponent";
import ItemsList from "./Items";
import IssuerComponent from "./Issuer";
import ReceiverComponent from "./Receiver";
import Wrapper from "../Wrapper";
import Footer from "./Footer";
import { useContextProvider } from "../../context/context";
import { FormProps } from "../../types/types";
import { Alert, AlertDanger } from "../Alert";
import {
  addDays,
  useValidate,
  termsArray,
  sendData,
  initialValues,
  checkForEmptyFields,
  initialErrorValues,
} from "../../utils/fns";

const InvoiceDetails: React.FC<FormProps> = (props) => {
  //context
  const [
    darkTheme,
    toggleDarkTheme,
    inputArray,
    addInput,
    removeInput,
    handleNameChange,
    handleQtyChange,
    handlePriceChange,
    checkEmptyField,
  ] = useContextProvider();
  //state
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState("pending");
  const [successMessage, setSuccessMessage] = React.useState("");
  const [error, setError] = React.useState("");
  const [startDate, setStartDate] = React.useState(new Date());
  const [terms, setTerms] = React.useState(termsArray[0].value);
  const [formValues, setFormValues] = React.useState(initialValues);
  const [formErrors, setFormErrors] = React.useState(initialErrorValues);
  const values = useValidate(formValues, startDate, terms);
  //handling inout change
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //setting paymet date
  const paymentDate = addDays(startDate, terms);

  //data to be posted to database
  const data = sendData(
    formValues,
    inputArray,
    startDate,
    paymentDate,
    terms,
    status
  );

  //gandling submit event
  const onSubmit = () => {
    // e.preventDefault()
    console.log({formValues,
    inputArray,
    startDate,
    paymentDate,
    terms,
    status})
    
    //checking if all inputs are filled
    setFormErrors(values);
    // console.log(formErrors);

    // console.log({
    //   formErrors: Object.keys(formErrors.errors),
    //   compl: formErrors.completed,
    // });
    if (
      // d.length === 0 &&
      checkEmptyField()
    ) {
      // console.log("form is clear");
      setLoading((prev) => !prev);
      axios
        .post("/api/invoice", data)
        .then((res) => {
          if (res.data.status === "success") {
            setLoading((prev) => !prev);
            setSuccessMessage("invoice saved");
            // setTimeout(()=>window.location.reload(),3000)
          }
        })
        .catch((err) => {
          setError("please try again");
          setLoading((prev) => !prev);
        });

      return;
    }
    setError("please fill all fields correctly");
    return console.log("form is not clear");
  };
  const handleDraft = () => {
    setStatus("draft");
    onSubmit();
  };

  return (
    <>
      <div className=" hidden z-20 fixed sm:block overflow-y-hidden inset-0  bg-black bg-opacity-40"></div>
      <div
        className={`${
          darkTheme ? "dark" : ""
        } z-20 w-full  h-screen fixed   sm:flex`}
      >
        <Wrapper>
          <form
            onSubmit={onSubmit}
            className="dark:bg-slate-900 px-3 bg-white w-full sm:w-10/12   h-screen sm:rounded-r-3xl    ">
            <header>
              <h1 className=" font-bold opacity-80 text-2xl pt-12  ">
                Create Invoice
              </h1>
              {successMessage && (
                <Alert
                  msg={successMessage}
                  handleClick={() => setSuccessMessage("")}
                />
              )}
              {error && (
                <AlertDanger msg={error} handleClick={() => setError("")} />
              )}
            </header>
            <section className="h-96  mt-8 overflow-auto mb-8   ">
              <p className="opacity-90 px-3  mb-4 font-bold text-blue-500">
                Bill From
              </p>
              <div className="w-full">
                <IssuerComponent
                  issuerStreet={formValues.issuerStreet}
                  handleChange={handleChange}
                  errorIssuerStreet={formErrors.errors.issuerStreet}
                  issuerCity={formValues.issuerCity}
                  errorIssuerCity={formErrors.errors.issuerCity}
                 
                  errorIssuerPostalAddress={
                    formErrors.errors.issuerPostalAddress
                  }
                  errorIssuerCountry={formErrors.errors.issuerCountry}
                  issuerPostalAddress={formValues.issuerPostalAddress}
                  issuerCountry={formValues.issuerCountry}
                />

                {/* receivers details */}
                <div className="mt-6 px-3  ">
                  <p className="  mb-2 font-semibold text-blue-500">
                    Bill To
                  </p>
                  <ReceiverComponent
                    errorReceiverName={formErrors.errors.receiverName}
                    errorReceiverEmail={formErrors.errors.receiverEmail}
                    errorReceiverPostalAddress={
                      formErrors.errors.receiverPostalAddress
                    }
                    errorReceiverStreet={formErrors.errors.receiverStreet}
                    errorReceiverCountry={formErrors.errors.receiverCountry}
                    errorReceiverCity={formErrors.errors.receiverCity}
                    receiverEmail={formValues.receiverEmail}
                    receiverCountry={formValues.receiverCountry}
                    receiverName={formValues.receiverName}
                    receiverStreet={formValues.receiverStreet}
                    receiverCity={formValues.receiverCity}
                    receiverPostalAddress={formValues.receiverPostalAddress}
                    handleChange={handleChange}
                    description={formValues.description}
                    errorDescription={formErrors.errors.description}
                    startDate={startDate}
                    errorDate={formErrors.errors.date}
                    errorPaymentTerms={formErrors.errors.paymentTerms}
                    terms={terms}
                    termsArray={termsArray}
                    changeDate={(date) => setStartDate(date)}
                    changeTerms={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setTerms(parseInt(e.target.value))
                    }
                  />
                  {/* items list */}
                  <ItemsList inputArray={inputArray} />
                </div>
              </div>
            </section>
            <Footer
              save="Save & Send"
              draft="Save as Draft"
              discard="Discard"
              loading={loading}
              // onSubmit={onSubmit}
              hideForm={props.hideForm}
              handleDraft={handleDraft}
            />
          </form>
        </Wrapper>
      </div>
    </>
  );
};

export default InvoiceDetails;
