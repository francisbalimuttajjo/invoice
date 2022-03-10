import { Formik, useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <DatePicker
      className=" rounded py-3 px-4 border leading-tight focus:outline-none  focus:border-gray-500 
                      dark:text-white dark:bg-slate-800 text-gray-700 appearance-none block w-full hover:cursor-pointer "
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val) => {
        setFieldValue(field.name, val);
      }}
    />
  );
};

export default DatePickerField;
