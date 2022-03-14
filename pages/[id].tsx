import React from "react";
import axios from "axios";
import Sidebar from "../components/home/Sidebar";
import Head from "../components/others/Head";
import InvoiceDetails from "../components/invoiceDetails/InvoiceDetails";
import { motion } from "framer-motion";
import { InvoiceFormat } from "../components/home/types/home";
import { useContextProvider } from "../context/context";
import Form from "../components/form/Form";

type Invoice = {
  invoice: InvoiceFormat;
};
// Layout: React.FC<OwnProps>
const DetailsPage: React.FC<Invoice> = (props) => {
  
  console.log("data", props.invoice);
  const [darkTheme] = useContextProvider();
  const [editing, setEditing] = React.useState(false);



  const initialValues = {
    items: props.invoice.items,
    issuerStreet: props.invoice.issuingAddress.street,
    receiverStreet: props.invoice.debtorsAddress.street,
    issuerCity: props.invoice.issuingAddress.city,
    receiverCity: props.invoice.debtorsAddress.city,
    issuerCountry: props.invoice.issuingAddress.country,
    receiverCountry: props.invoice.debtorsAddress.country,
    issuerPostalAddress: props.invoice.issuingAddress.postalAddress,
    receiverPostalAddress: props.invoice.debtorsAddress.postalAddress,
    description: props.invoice.description,
    startDate: props.invoice.issuingDate,
    terms: props.invoice.terms,
    receiverName: props.invoice.debtor,
    receiverEmail: props.invoice.email,
  };

  //
  const handleDeleteInvoice = (id:string) => {
    
  }

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
            <div className=''>
              {/* <Sidebar /> */}
              <Form
                method='patch'
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
              editing
                ? "fixed   overflow-hidden  "
                : ""
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

    //   <>
    //  <Sidebar
    //  displayForm={displayForm}
    //   />
    //  { displayForm &&
    //   <>
    //     <Head title='New Invoice' />
    //     < Form
    //       url='/api/invoice'
    //     initialValues={initialValues}
    //       hideForm={hideForm}
    //       title=" Create Invoice" />
    //    </>
    //  }
    //   <Head title={`invoices (${data.length}) `}/>

    // <div className={`${displayForm ? 'fixed sm:ml-24 md:ml-48 overflow-hidden md:w-11/12 ' : "" }  mx-auto  md:w-9/12`}>
    //     <Header displayNewInvoiceForm={displayNewInvoiceForm}
    //      description={description} handleCategorizingInvoices={handleCategorizingInvoices}  categories={categories} darkTheme={darkTheme} InvoiceTotal={data.length}/>

    //   <InvoiceList invoices={data} />
    //   {data.length < 1 &&<h1>There no invoices currently, click on add button to add one</h1>}

    // </div>
    // </>
  );
};

export default DetailsPage;

type Data = InvoiceFormat;

export const getServerSideProps = async (req: { query: { id: string } }) => {
  const res = await axios.get(
    //`https://invoicebafra.vercel.app/api/${req.query.id}`
    `http://localhost:3000/api/${req.query.id}`
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
