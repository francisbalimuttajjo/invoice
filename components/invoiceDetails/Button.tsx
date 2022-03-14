import { ButtonProps } from "./types/details";
import useApi from "./useApi";
const Buttons: React.FC<ButtonProps> = (props) => {
  const [handlePaid, handleDelete, loading, error] = useApi(props.id);

  return (
    <>
      <button
        disabled={loading}
        onClick={props.handleEditing}
        className="dark:bg-slate-900 dark:hover:bg-gray-200 bg-gray-200 text-gray-500 hover:bg-gray-300 p-3 mx-1  px-4 py-3  rounded-3xl font-semibold"
      >
        Edit
      </button>
      <button
        disabled={loading}
        onClick={handleDelete}
        className="dark:bg-red-400 dark:hover:bg-red-300 bg-red-500 hover:bg-red-400  text-white p-2  mx-1  px-6 py-3  rounded-3xl font-semibold  "
      >
        Delete
      </button>
      {props.status !== "paid" && (
        <button
          disabled={loading}
          onClick={handlePaid}
          className=" bg-blue-500 hover:bg-blue-400 text-white mx-1 p-2  xs:px-6  xs:py-3  rounded-3xl font-semibold"
        >
          Mark As Paid
        </button>
      )}
    </>
  );
};
export default Buttons;
