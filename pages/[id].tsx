import React from "react";
import axios from "axios";
import Sidebar from "../components/home/Sidebar";
import Head from "../components/others/Head";
import InvoiceDetails from "../components/invoiceDetails/InvoiceDetails";
import { motion } from "framer-motion";
import { InvoiceFormat } from "../components/home/types/home";
import { useContextProvider } from "../context/context";
import Form from "../components/form/Form";
import { returnInitialValues } from "../utils/fns";

interface Invoice {
  invoice: InvoiceFormat;
};
// Layout: React.FC<OwnProps>
const DetailsPage: React.FC<Invoice> = (props) => {
  const [darkTheme] = useContextProvider();
  const [editing, setEditing] = React.useState(false);
  const initialValues = returnInitialValues(props);

  return (
    <motion.div
      animate="animate"
      initial="initial"
      className={`${
        darkTheme ? "bg-slate-900 text-white" : ""
      }  min-h-screen  sm:flex`}
    >
      <>
        <>
          <Head
            title={`${editing ? "edit |" : ""} UGX ${
              props.invoice.invoiceNumber
            }`}
          />
          <Sidebar />
          {editing && (
            <div className="">
              <Form
                method="patch"
                editing={true}
                url={`/api/edit/${props.invoice._id}`}
                initialValues={initialValues}
                hideForm={() => setEditing(false)}
                title={` Edit UGX ${props.invoice.invoiceNumber}`}
              />
            </div>
          )}
          <div
            className={`${
              editing ? "fixed   overflow-hidden  " : ""
            }  mx-auto  w-full`}
          >
            <InvoiceDetails
              handleEditing={() => setEditing(true)}
              invoice={props.invoice}
            />
          </div>
        </>
      </>
    </motion.div>
  );
};

export default DetailsPage;

type Data = InvoiceFormat;

export const getServerSideProps = async (req: { query: { id: string } }) => {
  const res = await axios.get(
    `https://invoicebafra.vercel.app/api/${req.query.id}`
    //`http://localhost:3000/api/${req.query.id}`
  );
  console.log("res", res.data.invoice);
  const invoice: Data = res.data.invoice;
  if (!invoice) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      invoice,
    },
  };
};
