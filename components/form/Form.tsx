import React from "react";
import axios from "axios";
import InputComponent from "./InputLabel";
import TwoStepInputComponent from "./TwoStepInput";
import DateComponent from "./DateComponent";
import ItemsList from "./Items";
import Wrapper from "../Wrapper";
import Footer from "./Footer";
import { useContextProvider } from "../../context/context";
import { FormProps } from "../../types/types";
import { Alert, AlertDanger } from "../Alert";
import {
  addDays,
  validate,
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
  const [status, setStatus] = React.useState('pending');
  const [successMessage, setSuccessMessage] = React.useState("");
  const [error, setError] = React.useState("");
  const [startDate, setStartDate] = React.useState(new Date());
  const [terms, setTerms] = React.useState(termsArray[0].value);
  const [formValues, setFormValues] = React.useState(initialValues);
  const [formErrors, setFormErrors] = React.useState(initialErrorValues);

  //handling inout change
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //setting paymet date
  const paymentDate = addDays(startDate, terms);

  //data to be posted to database
  const data = sendData(formValues, inputArray, startDate, paymentDate, terms,status);

  //gandling submit event
  const onSubmit = () => {
 
    //checking if all inputs are filled
    setFormErrors(validate(formValues, startDate, terms));
    if (Object.keys(formErrors).length === 0 && checkEmptyField() ) {
      setError('')      
      setLoading((prev) => !prev);
      axios
        .post("/api/invoice", data)
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
         
      return;
      }
      setError("please fill all fields correctly");
    return console.log("form is not clear");
  };
  //saving as draft
  const handleDraft = () => {
    setStatus('draft')
    console.log(status)
    onSubmit()
  }
  return (
    <>
      <div className=" hidden z-20 fixed sm:block overflow-y-hidden inset-0  bg-black bg-opacity-40"></div>
      <div
        className={`${
          darkTheme ? "dark" : ""
        } z-20 w-full  h-screen fixed   sm:flex`}
      >
        <Wrapper>
          <div className="dark:bg-slate-900 px-3 bg-white w-full sm:w-10/12   h-screen sm:rounded-r-3xl    ">
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
              <form className="w-full">
                <div className="px-3">
                  {/* issuer details */}
                  <InputComponent
                    name="issuerStreet"
                    inputValue={formValues.issuerStreet}
                    handleInputChange={handleChange}
                    error={formErrors.issuerStreet}
                    description="Street  Address"
                  />

                  <TwoStepInputComponent
                    name1="issuerCity"
                    name2="issuerPostalAddress"
                    inputValue1={formValues.issuerCity}
                    error1={formErrors.issuerCity}
                    error2={formErrors.issuerPostalAddress}
                    inputValue2={formValues.issuerPostalAddress}
                    handleInputChange1={handleChange}
                    handleInputChange2={handleChange}
                    label1="City"
                    label2="Postal Code"
                  />

                  <InputComponent
                    inputValue={formValues.issuerCountry}
                    name="issuerCountry"
                    handleInputChange={handleChange}
                    error={formErrors.issuerCountry}
                    description="Country"
                  />
                </div>

                {/* receivers details */}
                <div className="mt-6 px-3  ">
                  <p className="opacity-0  mb-2 font-semibold text-blue-500">
                    Bill To
                  </p>
                  <InputComponent
                    name="receiverName"
                    inputValue={formValues.receiverName}
                    handleInputChange={handleChange}
                    error={formErrors.receiverName}
                    description="Client's Name"
                  />

                  <InputComponent
                    name="receiverEmail"
                    inputValue={formValues.receiverEmail}
                    handleInputChange={handleChange}
                    description="Client's Email"
                    error={formErrors.receiverEmail}
                    email
                    placeholder="youremail@example.com"
                  />

                  <InputComponent
                    name="receiverStreet"
                    inputValue={formValues.receiverStreet}
                    handleInputChange={handleChange}
                    error={formErrors.receiverStreet}
                    description="Street Address"
                  />

                  <TwoStepInputComponent
                    name1="receiverCity"
                    name2="receiverPostalAddress"
                    inputValue1={formValues.receiverCity}
                    inputValue2={formValues.receiverPostalAddress}
                    handleInputChange1={handleChange}
                    error1={formErrors.receiverCity}
                    error2={formErrors.receiverPostalAddress}
                    handleInputChange2={handleChange}
                    label1="City"
                    label2="Postal Code"
                  />

                  <InputComponent
                    name="receiverCountry"
                    inputValue={formValues.receiverCountry}
                    handleInputChange={handleChange}
                    error={formErrors.receiverCountry}
                    description="Country"
                  />

                  {/* invoice date */}
                  <DateComponent
                    startDate={startDate}
                    changeDate={(date) => setStartDate(date)}
                    error1={formErrors.date}
                    error2={formErrors.paymentTerms}
                    changeTerms={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setTerms(parseInt(e.target.value))
                    }
                    termValue={terms}
                    terms={termsArray}
                  />

                  <InputComponent
                    name="description"
                    inputValue={formValues.description}
                    handleInputChange={handleChange}
                    error={formErrors.description}
                    description="Description"
                  />

                  {/* items list */}
                  <div className="w-full py-2   ">
                    <label className="dark:text-white text-gray-700  block font-semibold  tracking-wide  text-xl  mb-2">
                      Item List
                    </label>
                    <ItemsList inputArray={inputArray} />

                    <button
                      onClick={addInput}
                      className="bg-gray-100 sm:w-10/12 md:w-9/12   px-3 dark:text-white dark:bg-slate-800 dark:hover:text-opacity-70 dark:hover:bg-opacity-70 hover:bg-gray-200 font-semibold text-gray-400 w-full  py-3 rounded-3xl     "
                    >
                      <span className="font-extrabold">+</span> Add New Item
                    </button>
                  </div>
                </div>
              </form>
            </section>
            <Footer
              save="Save & Send"
              draft="Save as Draft"
              discard="Discard"
              loading={loading}
              onSubmit={onSubmit}
              handleDraft={handleDraft}
              hideForm={props.hideForm}
            />
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default InvoiceDetails;
