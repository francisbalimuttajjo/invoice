import * as Yup from "yup";
import Select from "../../components/Select";
import DatePicker from "../../components/DatePicker";
import { NextPage } from "next";
import * as React from "react";
import {
  Formik,
  ErrorMessage,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";

interface MyFormValues {
  firstName: string;
}

import { FieldArray } from "formik";


const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
});
const FriendList = () => (
  <div>
    <h1>Friend List</h1>
    <Formik
      //initialValues={{ friends: ['jared', 'ian', 'brent'], firstName: '' }}
      initialValues={{
        items: [
          { name: "eggs", qty: 0, price: 0 },
          { name: "food", qty: 0, price: 0 },
        ],
        firstName: "",
        terms: 0,
      }}
      // validationSchema={validationSchema}
      validationSchema={Yup.object({
        firstName: Yup.string().required("Organization Name is required"),
        terms: Yup.number().required().min(1, "choose terms"),
        items: Yup.array().of(
          Yup.object().shape({
            name: Yup.string().required("Name required"),
            qty: Yup.number().required().min(1, "qty is required"),
            price: Yup.number().required().min(1, "price is required"),
          })
        ),
      })}
      onSubmit={(values) =>
        // if(values.terms===0){alert ('add terms')}
        console.log({ values })
      }
      render={({ values }) => (
        <Form>
          <Select name="terms" />
          <ErrorMessage name={`terms`} />
          <Field
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={values.firstName}
          />
          <ErrorMessage name={`firstName`} />
          <DatePicker name="startDate" />
          <FieldArray
            name="items"
            render={(arrayHelpers) => (
              <div>
                {/* {values.friends && values.friends.length > 0 ? ( */}
                {values.items && values.items.length > 0 ? (
                  values.items.map((item, index) => (
                    <div key={index}>
                      <Field
                        name={`items.${index}.name`}
                        //value={initialValues.firstName}
                      />
                      <ErrorMessage name={`items.${index}.name`} />
                      <Field
                        name={`items.${index}.qty`}
                        //value={initialValues.firstName}
                        type="number"
                      />
                      <ErrorMessage name={`items.${index}.qty`} />
                      <Field
                        name={`items.${index}.price`}
                        //value={initialValues.firstName}
                        required
                        type="number"
                      />
                      <ErrorMessage name={`items.${index}.price`} />
                      <h1>{item.qty * item.price}</h1>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          arrayHelpers.insert(index, {
                            name: "",
                            qty: 1,
                            price: 0,
                          })
                        } // insert an empty string at a position
                      >
                        +
                      </button>
                    </div>
                  ))
                ) : (
                  <button
                    type="button"
                    onClick={() =>
                      arrayHelpers.push({ name: "eggs", qty: 0, price: 0 })
                    }
                  >
                    {/* show this when user has removed all friends from the list */}
                    Add a friend
                  </button>
                )}
                <div>
                  <button type="submit">Submit</button>
                </div>
              </div>
            )}
          />
        </Form>
      )}
    />
  </div>
);


type Invoice = {};

const DetailsPage: React.FC<Invoice> = (props) => {
  return (
    <>
      <FriendList />
    </>
  );
};

export default DetailsPage;
// import * as React from "react";
// import Select from "../components/Select";

// import { Formik, Field, Form,FieldArray, FormikActions } from "formik";

// interface Values {
//   firstName: string;
//   lastName: string;
//   email: string;
// }

// const Basic: React.FC<{}> = () => (
//   <div className="container">
//     <h1>Formik TypeScript</h1>
//     <Formik
//       initialValues={{
//         firstName: "",
//         lastName: "",
//         email: "",
//          friends: ['jared', 'ian', 'brent']
//       }}
//       onSubmit={(values: Values, { setSubmitting }: FormikActions<Values>) => {
//         console.log("submitting");
//         console.log({values})

//       }}
//       render={() => (
//         <Form>
//           <label htmlFor="firstName">First Name</label>
//           <Field
//             id="firstName"
//             name="firstName"
//             placeholder="John"
//             type="text"
//           />

//           <label htmlFor="lastName">Last Name</label>
//           <Field id="lastName" name="lastName" placeholder="Doe" type="text" />

//           <label htmlFor="email">Email</label>
//           <Field
//             id="email"
//             name="email"
//             placeholder="john@acme.com"
//             type="email"
//           />
//           <Select />

//           <button type="submit" style={{ display: "block" }}>
//             Submit
//           </button>
//         </Form>
//       )}
//     />
//   </div>
// );

// export default Basic;
