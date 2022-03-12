import React from "react";
import * as Yup from "yup";
import DatePicker from "../DatePicker";
import { MdDelete } from "react-icons/md";
import Wrapper from "../Wrapper";
import { validateNo } from "../../utils/fns";
import { useContextProvider } from "../../context/context";
import Select from "../Select";
import ItemsArray from "../ItemsArray";
import Footer from "./Footer";
import {
  withFormik,
  FormikProps,
  FormikErrors,
  ErrorMessage,
  Field,
  Formik,
  Form,
  FieldArray,
  useField,
  useFormikContext,
} from "formik";

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
  terms: number;
}

interface OtherProps {
  title: string;
  hideForm: () => void;
}

interface Props {
  title: string;
  hideForm: () => void;
}
const FormComponent: React.FC<Props> = (props) => {
  const [loading, setLoading] = React.useState(false);

  const [darkTheme] = useContextProvider();
  return (
    <>
      <div className=" overlay"></div>
      <div
        className={`${
          darkTheme ? "dark" : ""
        } z-20 w-full  h-screen fixed   sm:flex`}
      >
        <Wrapper>
          <Formik
            initialValues={{
              items: [{ name: "eggs", qty: 0, price: 0 }],
              firstName: "",
              terms: 0,
            }}
            validationSchema={Yup.object({
              // firstName: Yup.string().required("Organization Name is required"),
              // terms: Yup.number().required().min(1, "choose terms"),
              items: Yup.array().of(
                Yup.object().shape({
                  name: Yup.string().required("Name is required *"),
                  qty: Yup.number().required().min(1, " required *"),
                  price: Yup.number().required().min(1, " required *"),
                })
              ),
            })}
            onSubmit={(values) => console.log({ values })}
            render={({ values }) => (
              <Form>
                <div className="dark:bg-slate-900 px-3 bg-white w-full    h-screen sm:rounded-r-3xl    ">
                  <header>
                    <h1 className=" font-bold opacity-80 text-2xl pt-12  ">
                      {props.title}
                    </h1>
                  </header>
                  <section className="h-96  mt-8 overflow-auto mb-8   ">
                    <p className="opacity-90 px-3  mb-4 font-bold text-blue-500">
                      Bill From
                    </p>
                    <div className="w-full">
                      <div className="w-full p-3   ">
                        <label className="label">
                          Item List
                        </label>
                        <FieldArray
                          name="items"
                          render={(arrayHelpers) => (
                            <div>
                              {values.items &&
                                values.items.length > 0 &&
                                values.items.map((item, index) => (
                                  <div
                                    key={index}
                                    className="w-full px-4  sm:flex"
                                  >
                                    <div className='sm:w-1/4'>
                                      <label className="ml-2 label  text-sm  ">
                                        Item Name
                                      </label>
                                      <Field
                                        className="field"
                                        name={`items.${index}.name`}
                                      />
                                      <div className="error-msg">
                                        <ErrorMessage
                                          name={`items.${index}.name`}
                                        />
                                      </div>
                                    </div>
                                    <div className="flex justify-around sm:ml-2 sm:w-3/4 ">
                                      <div className='w-1/4'>
                                        <label className="ml-2 label  text-sm ">
                                          Qty
                                        </label>
                                        <Field
                                          className=" field"
                                          name={`items.${index}.qty`}
                                        />
                                        <div className="error-msg">
                                          <ErrorMessage
                                            name={`items.${index}.qty`}
                                          />
                                        </div>
                                      </div>
                                      <div className="w-1/4">
                                        <label className="ml-2 label  text-sm ">
                                          Price
                                        </label>
                                        <Field
                                          className="field"
                                          name={`items.${index}.price`}
                                        />
                                        <div className="error-msg">
                                          <ErrorMessage
                                            name={`items.${index}.price`}
                                          />
                                        </div>
                                      </div>
                                      <div className="w-5/12    mb-6 flex ">
                                        <div className="w-1/2">
                                          <label className=" label  text-sm ">
                                            Total
                                          </label>
                                          <p className="dark:text-white text-gray-700 font-semibold   px-2   py-4   ">
                                            {validateNo(item.qty * item.price)}
                                          </p>
                                        </div>
                                        <MdDelete
                                          onClick={() =>
                                            arrayHelpers.remove(index)
                                          }
                                          className={`${
                                            values.items.length < 2
                                              ? "invisible"
                                              : "visible"
                                          }  delete-btn`}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                ))}
                             <div  className='w-11/12 sm:w-9/12 sm:ml-2 mx-auto'>
                              <button
                                type="button"
                                onClick={() =>
                                  arrayHelpers.push({
                                    name: "",
                                    qty: 0,
                                    price: 0,
                                  })
                                }
                                className="newItem-btn    "
                              >
                                <span className="font-extrabold">+</span> Add
                                New Item
                              </button>
                              </div>
                            </div>
                          )}
                          
                        />
                        
                      </div>
                    </div>
                  </section>
                  <Footer
                    save="Save & Send"
                    draft="Save as Draft"
                    discard="Discard"
                    loading={loading}
                    hideForm={props.hideForm}
                    // handleDraft={handleDraft}
                  />
                </div>
                <button type="submit" className='bg-blue-500'>add</button>
              </Form>
            )}
          />
        </Wrapper>
      </div>
    </>
  );
};

export default FormComponent;

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

// import React from "react";
// import DatePicker from "../DatePicker";
// import Wrapper from "../Wrapper";
// import { useContextProvider } from "../../context/context";
// import Select from "../Select";
// import ItemsArray from "../ItemsArray";
// import Footer from "./Footer";
// import {
//   withFormik,
//   FormikProps,
//   FormikErrors,
//   Form,
//   Field,
//   Formik,
//   FieldArray,
//   useField,
//   useFormikContext,
// } from "formik";

// // Shape of form values
// interface FormValues {
//   issuerStreet: string;
//   receiverStreet: string;
//   issuerCity: string;
//   receiverCity: string;
//   issuerCountry: string;
//   receiverCountry: string;
//   receiverPostalAddress: string;
//   issuerPostalAddress: string;
//   receiverName: string;
//   receiverEmail: string;
//   description: string;
//   startDate: Date;
//   terms: number;

// }

// interface OtherProps {
//   title: string;
//     hideForm:()=>void

// }
//   const values=[{name:'bafra',age:3}]
// // Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
// const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
//   const[loading,setLoading]=React.useState(false)
//   const { touched, errors, hideForm, title} = props;
//   const [darkTheme] = useContextProvider();
//   return (
//     <>
//       <div className=" hidden z-20 fixed sm:block overflow-y-hidden inset-0  bg-black bg-opacity-40"></div>
//       <div
//         className={`${
//           darkTheme ? "dark" : ""
//         } z-20 w-full  h-screen fixed   sm:flex`}
//       >
//         <Wrapper>
//           <Form className="dark:bg-slate-900 px-3 bg-white w-full    h-screen sm:rounded-r-3xl    ">
//             <header>
//               <h1 className=" font-bold opacity-80 text-2xl pt-12  ">
//                 {title}
//               </h1>
//             </header>
//             <section className="h-96  mt-8 overflow-auto mb-8   ">
//               <p className="opacity-90 px-3  mb-4 font-bold text-blue-500">
//                 Bill From
//               </p>
//               <div className="w-full">
//                 <div className="px-3">
//                   <div className="w-full px-3  ">
//                     <label className="input-Label">street</label>
//                     <Field className="Input " type="text" name="issuerStreet" />
//                     {touched.issuerStreet && errors.issuerStreet && (
//                       <p className="alert">{errors.issuerStreet} *</p>
//                     )}
//                   </div>
//                 </div>
//                 <div className="twoStep-div px-5">
//                   <div className="w-1/2    ">
//                     <label className="input-Label"> City</label>
//                     <Field className="Input" type="text" name="issuerCity" />
//                     {touched.issuerCity && errors.issuerCity && (
//                       <p className="alert">{errors.issuerCity} *</p>
//                     )}
//                   </div>
//                   <div className="w-1/3   ">
//                     <label className="input-Label"> Post Code</label>
//                     <Field
//                       className="Input"
//                       type="text"
//                       name="issuerPostalAddress"
//                     />
//                     {touched.issuerPostalAddress &&
//                       errors.issuerPostalAddress && (
//                         <p className="alert">{errors.issuerPostalAddress} *</p>
//                       )}
//                   </div>
//                 </div>
//                 <div className="px-3">
//                   <div className="w-full px-3  ">
//                     <label className="input-Label">Country</label>
//                     <Field
//                       className="Input "
//                       type="text"
//                       name="issuerCountry"
//                     />
//                     {touched.issuerCountry && errors.issuerCountry && (
//                       <p className="alert">{errors.issuerCountry} *</p>
//                     )}
//                   </div>
//                 </div>
//                 {/* receivers details */}
//                 <div className="mt-6 px-3  ">
//                   <p className="  mb-2 font-semibold text-blue-500">Bill To</p>
//                   <div className="w-full">
//                     <div className="px-3">
//                       <div className="w-full  ">
//                         <label className="input-Label">
//                           Client&apos;s Name
//                         </label>
//                         <Field
//                           className="Input "
//                           type="text"
//                           name="receiverName"
//                         />
//                         {touched.receiverName && errors.receiverName && (
//                           <p className="alert">{errors.receiverName} *</p>
//                         )}
//                       </div>
//                       <div className="w-full   ">
//                         <label className="input-Label">
//                           Client&apos;s Email
//                         </label>
//                         <Field
//                           className="Input "
//                           type="email"
//                           name="receiverEmail"
//                           placeholder="youremail@example.com"
//                         />
//                         {touched.receiverEmail && errors.receiverEmail && (
//                           <p className="alert">{errors.receiverEmail} *</p>
//                         )}
//                       </div>
//                       <div className="w-full   ">
//                         <label className="input-Label">street</label>
//                         <Field
//                           className="Input "
//                           type="text"
//                           name="receiverStreet"
//                         />
//                         {touched.receiverStreet && errors.receiverStreet && (
//                           <p className="alert">{errors.receiverStreet} *</p>
//                         )}
//                       </div>
//                       <div className="twoStep-div">
//                         <div className="w-1/2    ">
//                           <label className="input-Label"> City</label>
//                           <Field
//                             className="Input"
//                             type="text"
//                             name="receiverCity"
//                           />
//                           {touched.receiverCity && errors.receiverCity && (
//                             <p className="alert">{errors.receiverCity} *</p>
//                           )}
//                         </div>
//                         <div className="w-1/3   ">
//                           <label className="input-Label"> Post Code</label>
//                           <Field
//                             className="Input"
//                             type="text"
//                             name="receiverPostalAddress"
//                           />
//                           {touched.receiverPostalAddress &&
//                             errors.receiverPostalAddress && (
//                               <p className="alert">
//                                 {errors.receiverPostalAddress} *
//                               </p>
//                             )}
//                         </div>
//                       </div>{" "}
//                       <div className="w-full  ">
//                         <label className="input-Label">Country</label>
//                         <Field
//                           className="Input "
//                           type="text"
//                           name="receiverCountry"
//                         />
//                         {touched.receiverCountry && errors.receiverCountry && (
//                           <p className="alert">{errors.receiverCountry} *</p>
//                         )}
//                       </div>
//                       <div className="flex  w-full   mt-2 mb-0 justify-between">
//                         <div className="w-1/2   ">
//                           <label className="input-Label"> Invoice Date</label>
//                           <DatePicker name="startDate" />

//                           {errors.startDate && (
//                             <p className="alertDate">{errors.startDate} *</p>
//                           )}
//                         </div>
//                         <div className="w-1/3   ">
//                           <label className="input-Label">
//                             {" "}
//                             <span className="hidden sm:inline">
//                               Payment
//                             </span>{" "}
//                             Terms
//                           </label>

//                           <Select />

//                           {touched.terms && errors.terms && (
//                             <p className="alertDate">{errors.terms} *</p>
//                           )}
//                         </div>
//                       </div>
//                       <div className="w-full mt-2   ">
//                         <label className="input-Label">Description</label>
//                         <Field
//                           className="Input "
//                           type="text"
//                           name="description"
//                         />
//                         {touched.description && errors.description && (
//                           <p className="alert ">{errors.description} *</p>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-6 px-3">

//                 </div>
//               </div>

//             </section>
//             <Footer
//               save="Save & Send"
//               draft="Save as Draft"
//               discard="Discard"
//               loading={loading}
//                hideForm={hideForm}
//               // handleDraft={handleDraft}
//             />
//           </Form>
//         </Wrapper>
//       </div>
//     </>
//   );
// };

// // The type of props MyForm receives
// interface MyFormProps {
//   title: string; // if this passed all the way through you might do this or make a union type
//    hideForm:()=>void

// }

// // Wrap our form with the withFormik HoC
// const MyForm = withFormik<MyFormProps, FormValues>({
//   // Transform outer props into form values
//   mapPropsToValues: (props) => {
//     return {
//       issuerStreet:"",
//       issuerPostalAddress: "",
//       receiverPostalAddress: "",
//       issuerCountry: "",
//       receiverCountry: "",
//       issuerCity: "",
//       receiverCity: "",
//       receiverName: "",
//       receiverEmail: "",
//       receiverStreet: "",
//       description: "",
//        //initial:{ friends: ["jared", "ian", "brent"] },
//       //  initial:{ friends: ["jared", "ian", "brent"] },
//       startDate: new Date(),
//       terms: 0,
//     };
//   },

//   // Add a custom validation function (this can be async too!)
//   validate: (values: FormValues) => {
//     const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     console.log('values',values);
//     let errors: FormikErrors<FormValues> = {};
//     if (!values.issuerStreet) {
//       errors.issuerStreet = "Required";
//     }
//     if (values.terms === 0) {
//       errors.terms = "choose";
//     }
//     if (!values.issuerCity) {
//       errors.issuerCity = "Required";
//     }
//     if (!values.receiverCity) {
//       errors.receiverCity = "Required";
//     }
//     if (!values.receiverCountry) {
//       errors.receiverCountry = "Required";
//     }
//     if (!values.issuerPostalAddress) {
//       errors.issuerPostalAddress = "Required";
//     }
//     if (!values.receiverPostalAddress) {
//       errors.receiverPostalAddress = "Required";
//     }
//     if (!values.issuerCountry) {
//       errors.issuerCountry = "Required";
//     }
//     if (!values.receiverName) {
//       errors.receiverName = "Required";
//     }
//     if (!values.receiverStreet) {
//       errors.receiverStreet = "Required";
//     }
//     if (!values.receiverEmail) {
//       errors.receiverEmail = "Required";
//     }
//     if (!values.description) {
//       errors.description = "Required";
//     }

//     if (!regex.test(values.receiverEmail)) {
//       errors.receiverEmail = "invalid email";
//     }

//     console.log({ errors });
//     return errors;
//   },

//   handleSubmit: (values) => {
//     // do submitting things
//   },
// })(InnerForm);

// interface Props{
//   hideForm:()=>void
//   title:string
// }
// // Use <MyForm /> wherevs
// const Basic = (props:Props) => (
//   <div>

//     <MyForm hideForm={props.hideForm}   title={props.title} />
//   </div>
// );

// export default Basic;

// // import React from "react";
// // import axios from "axios";
// // import InputComponent from "./InputLabel";

// // import DateComponent from "./DateComponent";
// // import ItemsList from "./Items";
// // import IssuerComponent from "./Issuer";
// // import ReceiverComponent from "./Receiver";
// // import Wrapper from "../Wrapper";
// // import Footer from "./Footer";
// // import { useContextProvider } from "../../context/context";
// // import { FormProps } from "../../types/types";
// // import { Alert, AlertDanger } from "../Alert";
// // import {
// //   addDays,
// //   useValidate,
// //   termsArray,
// //   sendData,
// //   initialValues,
// //   checkForEmptyFields,
// //   initialErrorValues,
// // } from "../../utils/fns";

// // const InvoiceDetails: React.FC<FormProps> = (props) => {
// //   //context
// //   const [
// //     darkTheme,
// //     toggleDarkTheme,
// //     inputArray,
// //     addInput,
// //     removeInput,
// //     handleNameChange,
// //     handleQtyChange,
// //     handlePriceChange,
// //     checkEmptyField,
// //   ] = useContextProvider();
// //   //state
// //   const [loading, setLoading] = React.useState(false);
// //   const [status, setStatus] = React.useState("pending");
// //   const [successMessage, setSuccessMessage] = React.useState("");
// //   const [error, setError] = React.useState("");
// //   const [startDate, setStartDate] = React.useState(new Date());
// //   const [terms, setTerms] = React.useState(termsArray[0].value);
// //   const [formValues, setFormValues] = React.useState(initialValues);
// //   const [formErrors, setFormErrors] = React.useState(initialErrorValues);
// //   const values = useValidate(formValues, startDate, terms);
// //   //handling inout change
// //   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
// //     const { name, value } = e.target;
// //     setFormValues({ ...formValues, [name]: value });
// //   };

// //   //setting paymet date
// //   const paymentDate = addDays(startDate, terms);

// //   //data to be posted to database
// //   const data = sendData(
// //     formValues,
// //     inputArray,
// //     startDate,
// //     paymentDate,
// //     terms,
// //     status
// //   );

// //   //gandling submit event
// //   const onSubmit = () => {
// //     // e.preventDefault()
// //     // console.log({formValues,
// //     // inputArray,
// //     // startDate,
// //     // paymentDate,
// //     // terms,
// //     // status})

// //     //checking if all inputs are filled
// //     setFormErrors(values);
// //     // console.log(formErrors);

// //     console.log({
// //       formErrors: Object.keys(formErrors.errors),
// //       compl: formErrors.completed,
// //     });

// //     if (
// //       // d.length === 0 &&
// //       checkEmptyField()
// //     ) {
// //       // console.log("form is clear");
// //       setLoading((prev) => !prev);
// //       axios
// //         .post("/api/invoice", data)
// //         .then((res) => {
// //           if (res.data.status === "success") {
// //             setLoading((prev) => !prev);
// //             setSuccessMessage("invoice saved");
// //             // setTimeout(()=>window.location.reload(),3000)
// //           }
// //         })
// //         .catch((err) => {
// //           setError("please try again");
// //           setLoading((prev) => !prev);
// //         });

// //       return;
// //     }
// //     setError("please fill all fields correctly");
// //     return console.log("form is not clear");
// //   };
// //   const handleDraft = () => {
// //     setStatus("draft");
// //     onSubmit();
// //   };

// //   return (
// //     <>
// //       <div className=" hidden z-20 fixed sm:block overflow-y-hidden inset-0  bg-black bg-opacity-40"></div>
// //       <div
// //         className={`${
// //           darkTheme ? "dark" : ""
// //         } z-20 w-full  h-screen fixed   sm:flex`}
// //       >
// //         <Wrapper>
// //           <form
// //             onSubmit={onSubmit}
// //             className="dark:bg-slate-900 px-3 bg-white w-full sm:w-10/12   h-screen sm:rounded-r-3xl    ">
// //             <header>
// //               <h1 className=" font-bold opacity-80 text-2xl pt-12  ">
// //                 Create Invoice
// //               </h1>
// //               {successMessage && (
// //                 <Alert
// //                   msg={successMessage}
// //                   handleClick={() => setSuccessMessage("")}
// //                 />
// //               )}
// //               {error && (
// //                 <AlertDanger msg={error} handleClick={() => setError("")} />
// //               )}
// //             </header>
// //             <section className="h-96  mt-8 overflow-auto mb-8   ">
// //               <p className="opacity-90 px-3  mb-4 font-bold text-blue-500">
// //                 Bill From
// //               </p>
// //               <div className="w-full">
// //                 <IssuerComponent
// //                   issuerStreet={formValues.issuerStreet}
// //                   handleChange={handleChange}
// //                   errorIssuerStreet={formErrors.errors.issuerStreet}
// //                   issuerCity={formValues.issuerCity}
// //                   errorIssuerCity={formErrors.errors.issuerCity}

// //                   errorIssuerPostalAddress={
// //                     formErrors.errors.issuerPostalAddress
// //                   }
// //                   errorIssuerCountry={formErrors.errors.issuerCountry}
// //                   issuerPostalAddress={formValues.issuerPostalAddress}
// //                   issuerCountry={formValues.issuerCountry}
// //                 />

// //                 {/* receivers details */}
// //                 <div className="mt-6 px-3  ">
// //                   <p className="  mb-2 font-semibold text-blue-500">
// //                     Bill To
// //                   </p>
// //                   <ReceiverComponent
// //                     errorReceiverName={formErrors.errors.receiverName}
// //                     errorReceiverEmail={formErrors.errors.receiverEmail}
// //                     errorReceiverPostalAddress={
// //                       formErrors.errors.receiverPostalAddress
// //                     }
// //                     errorReceiverStreet={formErrors.errors.receiverStreet}
// //                     errorReceiverCountry={formErrors.errors.receiverCountry}
// //                     errorReceiverCity={formErrors.errors.receiverCity}
// //                     receiverEmail={formValues.receiverEmail}
// //                     receiverCountry={formValues.receiverCountry}
// //                     receiverName={formValues.receiverName}
// //                     receiverStreet={formValues.receiverStreet}
// //                     receiverCity={formValues.receiverCity}
// //                     receiverPostalAddress={formValues.receiverPostalAddress}
// //                     handleChange={handleChange}
// //                     description={formValues.description}
// //                     errorDescription={formErrors.errors.description}
// //                     startDate={startDate}
// //                     errorDate={formErrors.errors.date}
// //                     errorPaymentTerms={formErrors.errors.paymentTerms}
// //                     terms={terms}
// //                     termsArray={termsArray}
// //                     changeDate={(date) => setStartDate(date)}
// //                     changeTerms={(e: React.ChangeEvent<HTMLSelectElement>) =>
// //                       setTerms(parseInt(e.target.value))
// //                     }
// //                   />
// //                   {/* items list */}
// //                   <ItemsList inputArray={inputArray} />
// //                 </div>
// //               </div>
// //             </section>
// //             <Footer
// //               save="Save & Send"
// //               draft="Save as Draft"
// //               discard="Discard"
// //               loading={loading}
// //               // onSubmit={onSubmit}
// //               hideForm={props.hideForm}
// //               handleDraft={handleDraft}
// //             />
// //           </form>
// //         </Wrapper>
// //       </div>
// //     </>
// //   );
// // };

// // export default InvoiceDetails;
