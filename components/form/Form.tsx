import React from "react";
import DateComponent from "./DateComponent";
import FullInput from "./InputLabel";
import CityComponent from "./CityComponent";
import Items from "./ItemsComponent";
import Wrapper from "../others/Wrapper";
import useInvoiceForm from "./useInvoiceForm";
import Footer from "./Footer";
import { Formik, Form } from "formik";
import { Props } from "../../types/form";
import { Alert, AlertDanger } from "../others/Alert";
import { validationSchema } from "../../utils/Validation";

const FormComponent: React.FC<Props> = (props) => {
  const {
    handleSubmit,
    handleDraft,
    loading,
    error,
    successMessage,
    setSuccessMessage,
    setError,
  } = useInvoiceForm(props.url, props.method);

  return (
    <>
      <div className=" overlay"></div>

      <div className="   z-20 w-full  h-screen fixed   sm:flex">
        <Wrapper>
          <Formik
            initialValues={props.initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            render={({ values }) => (
              <Form>
                <div className=" px-3 dark:bg-slate-900 bg-white w-full sm:w-9/12    h-screen sm:rounded-r-3xl    ">
                  <header>
                    <h1 className=" font-bold opacity-80 text-2xl pt-12  ">
                      {props.title}
                    </h1>
                    {successMessage && (
                      <Alert
                        msg={successMessage}
                        handleClick={() => setSuccessMessage("")}
                      />
                    )}
                    {error && (
                      <AlertDanger
                        msg={error}
                        handleClick={() => setError("")}
                      />
                    )}
                  </header>
                  <section className="h-96  mt-8 overflow-auto mb-8   ">
                    {/* invoice from */}
                    <div>
                      <p className="opacity-90 px-3  mb-4 font-bold text-blue-500">
                        Bill From
                      </p>
                      <FullInput description="street" name="issuerStreet" />
                      <CityComponent
                        label1="City"
                        label2="Postal Address"
                        name1="issuerCity"
                        name2="issuerPostalAddress"
                      />
                      <FullInput description="Country" name="issuerCountry" />
                    </div>

                    {/* invoice to */}
                    <div>
                      <p className="opacity-90 px-3  mb-4 font-bold text-blue-500">
                        Bill To
                      </p>
                      <FullInput
                        description="Clients's Name"
                        name="receiverName"
                      />
                      <FullInput
                        description="Clients's Email"
                        name="receiverEmail"
                        email
                        placeholder="youremail@example.com"
                      />
                      <FullInput description="Street" name="receiverStreet" />
                      <CityComponent
                        label1="City"
                        label2="Postal Address"
                        name1="receiverCity"
                        name2="receiverPostalAddress"
                      />
                      <FullInput description="Country" name="receiverCountry" />
                      <DateComponent />
                      <FullInput description="Description" name="description" />
                    </div>

                    {/* items array */}
                    <Items items={values.items} />
                  </section>
                  <Footer
                    editing={props.editing}
                    loading={loading}
                    hideForm={props.hideForm}
                    handleDraft={handleDraft}
                  />
                </div>
              </Form>
            )}
          />
        </Wrapper>
      </div>
    </>
  );
};

export default FormComponent;
