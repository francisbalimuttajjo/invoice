import {FooterProps} from './types/form'


const Footer: React.FC<FooterProps> = (props) => {
  const disableBtn = () => {
    if (props.loading) {
      return "cursor-not-allowed bg-blue-700 ml-1 text-white opacity-70  text-sm  sm:text-sm font-bold px-4 py-3 rounded-3xl hover:bg-blue-600";
    }
    return "bg-blue-700 ml-1 text-white opacity-70  text-sm  sm:text-sm font-bold px-4 py-3 rounded-3xl hover:bg-blue-600";
  };
  return (
    <div className=" sticky  flex ">
      <button
        onClick={props.hideForm}
        className="bg-gray-200 text-sm  sm:text-sm font-bold text-gray-400 hover:text-gray-500 hover:bg-gray-300 rounded-3xl px-2 py-3  sm:px-4 sm:py-3 "
      >
        {props.discard}
      </button>
      <div className="flex right-0  absolute">
        {props.draft  && (
          <button
            
                        onClick={props.handleDraft}
            disabled={props.loading}
            className="dark:hover:bg-opacity-30 hover:bg-opacity-90 p-2 sm:px-4 py-3 text-sm  sm:text-sm text-gray-500 font-bold rounded-3xl bg-black bg-opacity-80 "
          >
         
            { props.draft}
          </button>
        )}
        <button
            type='submit'
       
          disabled={props.loading}
          className={disableBtn()}
        >
          {props.save}
        </button>
      </div>
    </div>
  );
};
export default Footer;
