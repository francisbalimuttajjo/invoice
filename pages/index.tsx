import React from "react";
import { InferGetServerSidePropsType } from "next";
import Head from "../components/others/Head";
import Sidebar from "../components/home/Sidebar";
import Form from "../components/form/Form";
import { initialValues } from "../utils/fns";
import InvoiceList from "../components/home/InvoiceList";
import useData from "../components/home/useData";
import Header from "../components/others/Header";
import { InvoiceFormat } from "../types/home";
import { motion } from "framer-motion";
import axios from "axios";

function Home({
  invoices,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const {
    data,
    description,
    displayForm,
    displayNewInvoiceForm,
    hideForm,
    handleCategorizingInvoices,
  } = useData(invoices);

  return (
    <motion.div
      animate="animate"
      initial="initial"
      className="min-h-screen  sm:flex"
    >
      <>
        <>
          <Head
            title={`${
              displayForm ? "New invoice " : `invoices (${data.length})`
            }`}
          />
          <Sidebar  />
          {displayForm && (
            <div className="">
              <Form
                editing={false}
                method="post"
                url="/api/invoice"
                initialValues={initialValues}
                hideForm={hideForm}
                title={` Create Invoice `}
              />
            </div>
          )}
          <div
            className={`${
              displayForm
                ? "fixed    sm:ml-24 md:ml-48 overflow-hidden md:w-9/12  "
                : ""
            }   mx-auto  md:w-8/12`}
          >
            <>
              <Header
                displayNewInvoiceForm={displayNewInvoiceForm}
                description={description}
                handleCategorizingInvoices={handleCategorizingInvoices}
                InvoiceTotal={data.length}
              />
              <InvoiceList invoices={data} />
            </>
          </div>
        </>
      </>
    </motion.div>
  );
}

export default Home;

type Data = InvoiceFormat[];

export const getServerSideProps = async () => {
  const res = await axios.get(
    "https://invoicebafra.vercel.app/api/invoices"
    //"http://localhost:3000/api/invoices"
  );
  const invoices: Data = res.data.invoices;

  return {
    props: {
      invoices: invoices.length < 1 || undefined ? [] : invoices,
    },
  };
};
