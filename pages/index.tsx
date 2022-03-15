import React from "react";
import { InferGetServerSidePropsType } from "next";
import Head from "../components/others/Head";
import Sidebar from "../components/home/Sidebar";
import Form from "../components/form/Form";
import { categories, initialValues } from "../utils/fns";
import InvoiceList from "../components/home/InvoiceList";
import Header from "../components/others/Header";
import { InvoiceFormat } from "../components/home/types/home";
import { motion } from "framer-motion";
import axios from "axios";

function Home({
  data1,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const store = data1;
  const [data, setData] = React.useState<any>(store);
  const [description, setDescription] = React.useState("total ");
  const [displayForm, setDisplayForm] = React.useState(false);

  ///displaying form
  const displayNewInvoiceForm = () => setDisplayForm(true);

  //hiding form
  const hideForm = () => setDisplayForm(false);

  //categorizing forms
  const handleCategorizingInvoices = (value: string) => {
    // setData(invoice)

    if (value === "all") {
      setData(store);
      setDescription("total ");
    } else {
      const newData = store.filter((el: InvoiceFormat) => el.status === value);
      setData(newData);
      setDescription(value);
    }
  };

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
          <Sidebar />
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
                categories={categories}
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
  const data1: Data = res.data.invoices;

  return {
    props: {
      data1: data1.length < 1  || undefined ? [] : data1,
     
    },
  };
};
