export interface Props {
  editing:boolean
  title: string;
  url:string
  hideForm: () => void;
  initialValues: {
    items: { name: string; qty: number; price: number }[];
    issuerStreet: string;
    issuerCity: string;
    receiverCity: string;
    issuerCountry: string;
    receiverCountry: string;
    issuerPostalAddress: number;
    receiverPostalAddress: number;
    receiverName: string;
    receiverEmail: string;
    receiverStreet: string;
    description: string;
    startDate: Date;
    terms: number;
    edit?:boolean
    
  };
}
 //city component
export interface CityComponentProps {
  label1: string;
  label2: string;
  name1: string;
  name2: string;
}

//useInvoiceFormProps
export type useInvoiceFormProps = {
  handleDraft: () => void,
  handleSubmit: (values:  Props["initialValues"]) => void,
  loading: boolean,
  error: string,
  successMessage: string,
  setSuccessMessage: React.Dispatch<React.SetStateAction<string>>,
  setError: React.Dispatch<React.SetStateAction<string>>
}

//footer propsTypesexport
export type FooterProps = {
  onSubmit?: () => void;
  hideForm: () => void;
  handleDraft?: () => void;
  
  
  loading: boolean;
  
  editing:boolean
};

//input label props
export interface InputLabelProps {
  description: string;
  placeholder?: string;
  email?: boolean;
  name: string;
}
//items props//items components
export interface ItemsProps {
  items: { name: string; qty: number; price: number }[];
}