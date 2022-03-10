import React from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";
import DatePicker from '../DatePicker'
import Select from '../Select'
import { withFormik, FormikProps, FormikErrors, Form, Field,useField, useFormikContext } from "formik";
import { termsArray } from "../../utils/fns";

// Shape of form values
interface FormValues {
  issuerStreet: string;
  receiverStreet: string;
  issuerCity: string;
  receiverCity: string;
  issuerCountry: string;
  receiverCountry: string;
  receiverPostalAddress: string;
  issuerPostalAddress: string;
  receiverName: string;
  receiverEmail: string;
  description: string;
  startDate: Date;
color:string
}

interface OtherProps {
  message: string;
}

// Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message } = props;
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  const [terms, setTerms] = React.useState(termsArray[0].value);
  console.log({ startDate, terms })
    const { setFieldValue } = useFormikContext();
  const [field] = useField('startDate');
  return (
    <Form className="dark:bg-slate-900 px-3 bg-white w-full sm:w-10/12   h-screen sm:rounded-r-3xl    ">
      <header>
        <h1 className=" font-bold opacity-80 text-2xl pt-12  ">
          Create Invoice
        </h1>
      </header>
      <section className="h-96  mt-8 overflow-auto mb-8   ">
        <p className="opacity-90 px-3  mb-4 font-bold text-blue-500">
          Bill From
        </p>
        <div className="w-full">
          <div className="px-3">
            <div className="w-full px-3  sm:w-11/12 md:w-9/12">
              <label className="input-Label">street</label>
              <Field className="Input " type="text" name="issuerStreet" />
              {touched.issuerStreet && errors.issuerStreet && (
                <p className="alert">{errors.issuerStreet} *</p>
              )}
            </div>
          </div>
          <div className="twoStep-div px-5">
            <div className="w-1/2    ">
              <label className="input-Label"> City</label>
              <Field className="Input" type="text" name="issuerCity" />
              {touched.issuerCity && errors.issuerCity && (
                <p className="alert">{errors.issuerCity} *</p>
              )}
            </div>
            <div className="w-1/3   ">
              <label className="input-Label"> Post Code</label>
              <Field className="Input" type="text" name="issuerPostalAddress" />
              {touched.issuerPostalAddress && errors.issuerPostalAddress && (
                <p className="alert">{errors.issuerPostalAddress} *</p>
              )}
            </div>
          </div>
          <div className="px-3">
            <div className="w-full px-3  sm:w-11/12 md:w-9/12">
              <label className="input-Label">Country</label>
              <Field className="Input " type="text" name="issuerCountry" />
              {touched.issuerCountry && errors.issuerCountry && (
                <p className="alert">{errors.issuerCountry} *</p>
              )}
            </div>
          </div>
          {/* receivers details */}
          <div className="mt-6 px-3  ">
            <p className="  mb-2 font-semibold text-blue-500">Bill To</p>
            <div className="w-full">
              <div className="px-3">
                <div className="w-full  sm:w-11/12 md:w-9/12">
                  <label className="input-Label">Client&apos;s Name</label>
                  <Field className="Input " type="text" name="receiverName" />
                  {touched.receiverName && errors.receiverName && (
                    <p className="alert">{errors.receiverName} *</p>
                  )}
                </div>
                <div className="w-full   sm:w-11/12 md:w-9/12">
                  <label className="input-Label">Client&apos;s Email</label>
                  <Field
                    className="Input "
                    type="email"
                    name="receiverEmail"
                    placeholder="youremail@example.com"
                  />
                  {touched.receiverEmail && errors.receiverEmail && (
                    <p className="alert">{errors.receiverEmail} *</p>
                  )}
                </div>
                <div className="w-full   sm:w-11/12 md:w-9/12">
                  <label className="input-Label">street</label>
                  <Field className="Input " type="text" name="receiverStreet" />
                  {touched.receiverStreet && errors.receiverStreet && (
                    <p className="alert">{errors.receiverStreet} *</p>
                  )}
                </div>
                <div className="twoStep-div">
                  <div className="w-1/2    ">
                    <label className="input-Label"> City</label>
                    <Field className="Input" type="text" name="receiverCity" />
                    {touched.receiverCity && errors.receiverCity && (
                      <p className="alert">{errors.receiverCity} *</p>
                    )}
                  </div>
                  <div className="w-1/3   ">
                    <label className="input-Label"> Post Code</label>
                    <Field
                      className="Input"
                      type="text"
                      name="receiverPostalAddress"
                    />
                    {touched.receiverPostalAddress &&
                      errors.receiverPostalAddress && (
                        <p className="alert">{errors.receiverPostalAddress} *</p>
                      )}
                  </div>
                </div>{" "}
        
                <div className="w-full  sm:w-11/12 md:w-9/12">
                  <label className="input-Label">Country</label>
                  <Field className="Input " type="text" name="receiverCountry" />
                  {touched.receiverCountry && errors.receiverCountry && (
                    <p className="alert">{errors.receiverCountry} *</p>
                  )}
                </div>
                <div className="flex  w-full md:w-9/12 sm:w-11/12  mt-2 mb-0 justify-between">
                  <div className="w-1/2   ">
                    <label className="input-Label"> Invoice Date</label>
                    <DatePicker
                   
                      name='startDate' />
                    

                    {/* {errors.startDate && (
                      <p className="alertDate">{errors.startDate} *</p>
                    )} */}
                  </div>
                  <div className="w-1/3   ">
                    <label className="input-Label">
                      {" "}
                      <span className="hidden sm:inline">Payment</span> Terms
                    </label>
                    
                    <Select />

                    {/* {touched.terms &&
                      errors.terms && (
                        <p className="alertDate">{errors.terms} *</p>
                      )} */}
                  </div>
                </div>
                <div className="w-full mt-2    sm:w-11/12 md:w-9/12">
                  <label className="input-Label">Description</label>
                  <Field className="Input " type="text" name="description" />
                  {touched.description && errors.description && (
                    <p className="alert ">{errors.description} *</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

// The type of props MyForm receives
interface MyFormProps {
  
  message: string; // if this passed all the way through you might do this or make a union type
}

// Wrap our form with the withFormik HoC
const MyForm = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: (props) => {
    console.log(props)
    return {
      issuerStreet: "",
      issuerPostalAddress: "",
      receiverPostalAddress: "",
      issuerCountry: "",
      receiverCountry: "",
      issuerCity: "",
      receiverCity: "",
      receiverName: "",
      receiverEmail: "",
      receiverStreet: "",
      description: "",
      startDate: new Date(),
      color:""
      //  terms:0
    };
  },

  // Add a custom validation function (this can be async too!)
  validate: (values: FormValues) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log(values);
    let errors: FormikErrors<FormValues> = {};
    if (!values.issuerStreet) {
      errors.issuerStreet = "Required";
    }
    //  if (values.terms===0) {
    //   errors.terms = "choose";
    // }
    if (!values.issuerCity) {
      errors.issuerCity = "Required";
    }
    if (!values.receiverCity) {
      errors.receiverCity = "Required";
    }
     if (!values.receiverCountry) {
      errors.receiverCountry = "Required";
    }
    if (!values.issuerPostalAddress) {
      errors.issuerPostalAddress = "Required";
    }
     if (!values.receiverPostalAddress) {
      errors.receiverPostalAddress = "Required";
    }
    if (!values.issuerCountry) {
      errors.issuerCountry = "Required";
    }
    if (!values.receiverName) {
      errors.receiverName = "Required";
    }
    if (!values.receiverStreet) {
      errors.receiverStreet = "Required";
    }
    if (!values.receiverEmail) {
      errors.receiverEmail = "Required";
    }
    if (!values.description) {
      errors.description = "Required";
    }
    //  if (!values.startDate) {
    //   errors.startDate = "Required";
    // }
    if (!regex.test(values.receiverEmail)) {
      errors.receiverEmail = "invalid email";
    }
 
    console.log({ errors });
    return errors;
  },

  handleSubmit: (values) => {
    // do submitting things
  },
})(InnerForm);

// Use <MyForm /> wherevs
const Basic = () => (
  <div>
    <MyForm message="Sign up" />
  </div>
);

export default Basic;

// import React from "react";
// import axios from "axios";
// import InputComponent from "./InputLabel";

// import DateComponent from "./DateComponent";
// import ItemsList from "./Items";
// import IssuerComponent from "./Issuer";
// import ReceiverComponent from "./Receiver";
// import Wrapper from "../Wrapper";
// import Footer from "./Footer";
// import { useContextProvider } from "../../context/context";
// import { FormProps } from "../../types/types";
// import { Alert, AlertDanger } from "../Alert";
// import {
//   addDays,
//   useValidate,
//   termsArray,
//   sendData,
//   initialValues,
//   checkForEmptyFields,
//   initialErrorValues,
// } from "../../utils/fns";

// const InvoiceDetails: React.FC<FormProps> = (props) => {
//   //context
//   const [
//     darkTheme,
//     toggleDarkTheme,
//     inputArray,
//     addInput,
//     removeInput,
//     handleNameChange,
//     handleQtyChange,
//     handlePriceChange,
//     checkEmptyField,
//   ] = useContextProvider();
//   //state
//   const [loading, setLoading] = React.useState(false);
//   const [status, setStatus] = React.useState("pending");
//   const [successMessage, setSuccessMessage] = React.useState("");
//   const [error, setError] = React.useState("");
//   const [startDate, setStartDate] = React.useState(new Date());
//   const [terms, setTerms] = React.useState(termsArray[0].value);
//   const [formValues, setFormValues] = React.useState(initialValues);
//   const [formErrors, setFormErrors] = React.useState(initialErrorValues);
//   const values = useValidate(formValues, startDate, terms);
//   //handling inout change
//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   //setting paymet date
//   const paymentDate = addDays(startDate, terms);

//   //data to be posted to database
//   const data = sendData(
//     formValues,
//     inputArray,
//     startDate,
//     paymentDate,
//     terms,
//     status
//   );

//   //gandling submit event
//   const onSubmit = () => {
//     // e.preventDefault()
//     // console.log({formValues,
//     // inputArray,
//     // startDate,
//     // paymentDate,
//     // terms,
//     // status})

//     //checking if all inputs are filled
//     setFormErrors(values);
//     // console.log(formErrors);

//     console.log({
//       formErrors: Object.keys(formErrors.errors),
//       compl: formErrors.completed,
//     });

//     if (
//       // d.length === 0 &&
//       checkEmptyField()
//     ) {
//       // console.log("form is clear");
//       setLoading((prev) => !prev);
//       axios
//         .post("/api/invoice", data)
//         .then((res) => {
//           if (res.data.status === "success") {
//             setLoading((prev) => !prev);
//             setSuccessMessage("invoice saved");
//             // setTimeout(()=>window.location.reload(),3000)
//           }
//         })
//         .catch((err) => {
//           setError("please try again");
//           setLoading((prev) => !prev);
//         });

//       return;
//     }
//     setError("please fill all fields correctly");
//     return console.log("form is not clear");
//   };
//   const handleDraft = () => {
//     setStatus("draft");
//     onSubmit();
//   };

//   return (
//     <>
//       <div className=" hidden z-20 fixed sm:block overflow-y-hidden inset-0  bg-black bg-opacity-40"></div>
//       <div
//         className={`${
//           darkTheme ? "dark" : ""
//         } z-20 w-full  h-screen fixed   sm:flex`}
//       >
//         <Wrapper>
//           <form
//             onSubmit={onSubmit}
//             className="dark:bg-slate-900 px-3 bg-white w-full sm:w-10/12   h-screen sm:rounded-r-3xl    ">
//             <header>
//               <h1 className=" font-bold opacity-80 text-2xl pt-12  ">
//                 Create Invoice
//               </h1>
//               {successMessage && (
//                 <Alert
//                   msg={successMessage}
//                   handleClick={() => setSuccessMessage("")}
//                 />
//               )}
//               {error && (
//                 <AlertDanger msg={error} handleClick={() => setError("")} />
//               )}
//             </header>
//             <section className="h-96  mt-8 overflow-auto mb-8   ">
//               <p className="opacity-90 px-3  mb-4 font-bold text-blue-500">
//                 Bill From
//               </p>
//               <div className="w-full">
//                 <IssuerComponent
//                   issuerStreet={formValues.issuerStreet}
//                   handleChange={handleChange}
//                   errorIssuerStreet={formErrors.errors.issuerStreet}
//                   issuerCity={formValues.issuerCity}
//                   errorIssuerCity={formErrors.errors.issuerCity}

//                   errorIssuerPostalAddress={
//                     formErrors.errors.issuerPostalAddress
//                   }
//                   errorIssuerCountry={formErrors.errors.issuerCountry}
//                   issuerPostalAddress={formValues.issuerPostalAddress}
//                   issuerCountry={formValues.issuerCountry}
//                 />

//                 {/* receivers details */}
//                 <div className="mt-6 px-3  ">
//                   <p className="  mb-2 font-semibold text-blue-500">
//                     Bill To
//                   </p>
//                   <ReceiverComponent
//                     errorReceiverName={formErrors.errors.receiverName}
//                     errorReceiverEmail={formErrors.errors.receiverEmail}
//                     errorReceiverPostalAddress={
//                       formErrors.errors.receiverPostalAddress
//                     }
//                     errorReceiverStreet={formErrors.errors.receiverStreet}
//                     errorReceiverCountry={formErrors.errors.receiverCountry}
//                     errorReceiverCity={formErrors.errors.receiverCity}
//                     receiverEmail={formValues.receiverEmail}
//                     receiverCountry={formValues.receiverCountry}
//                     receiverName={formValues.receiverName}
//                     receiverStreet={formValues.receiverStreet}
//                     receiverCity={formValues.receiverCity}
//                     receiverPostalAddress={formValues.receiverPostalAddress}
//                     handleChange={handleChange}
//                     description={formValues.description}
//                     errorDescription={formErrors.errors.description}
//                     startDate={startDate}
//                     errorDate={formErrors.errors.date}
//                     errorPaymentTerms={formErrors.errors.paymentTerms}
//                     terms={terms}
//                     termsArray={termsArray}
//                     changeDate={(date) => setStartDate(date)}
//                     changeTerms={(e: React.ChangeEvent<HTMLSelectElement>) =>
//                       setTerms(parseInt(e.target.value))
//                     }
//                   />
//                   {/* items list */}
//                   <ItemsList inputArray={inputArray} />
//                 </div>
//               </div>
//             </section>
//             <Footer
//               save="Save & Send"
//               draft="Save as Draft"
//               discard="Discard"
//               loading={loading}
//               // onSubmit={onSubmit}
//               hideForm={props.hideForm}
//               handleDraft={handleDraft}
//             />
//           </form>
//         </Wrapper>
//       </div>
//     </>
//   );
// };

// export default InvoiceDetails;
