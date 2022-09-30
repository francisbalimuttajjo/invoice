import { Field } from "formik";
import { termsArray as terms } from "../../utils/fns";

const FieldComponent: React.FC<{ name: string }> = (props) => {
  return (
    <Field
      type="number"
      className="     border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500
             dark:text-white dark:bg-slate-800 text-gray-700 appearance-none block w-full hover:cursor-pointer"
      as="select"
      name={props.name}
    >
      {terms.map((el) => (
        <option key={el.value} value={el.value}>
          {el.desc}
        </option>
      ))}
    </Field>
  );
};

export default FieldComponent;
