import * as Yup from "yup";

const validationSchema = Yup.object({
  issuerStreet: Yup.string().required("field is required *"),
  receiverStreet: Yup.string().required("field is required *"),
  issuerCity: Yup.string().required("field is required *"),
  receiverCity: Yup.string().required("field is required *"),
  description: Yup.string().required("field is required *"),
  issuerCountry: Yup.string().required("field is required *"),
  receiverCountry: Yup.string().required("field is required *"),
  receiverName: Yup.string().required("field is required *"),
  terms: Yup.number().required().min(1, "choose terms"),
  receiverEmail: Yup.string()
    .email("Invalid email format")
    .required("field is Required"),

  items: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Name is required *"),
      qty: Yup.number().required().min(1, " required *"),
      price: Yup.number().required().min(1, " required *"),
    })
  ),
});

export{validationSchema}