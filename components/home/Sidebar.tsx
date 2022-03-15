import React from "react";
import { FaPiedPiper } from "react-icons/fa";
import { BsBrightnessHighFill } from "react-icons/bs";
import { MdBrightness2 } from "react-icons/md";
import { useTheme } from "next-themes";

type PropTypes = {
  displayForm?: boolean;
};

const Sidebar: React.FC<PropTypes> = (props) => {
  const [isMounted, setIsMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();
  console.log(theme)

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };
  return (
    <aside
      className={` ${props.displayForm ? "sm:rounded-none" : ""} 
        sticky top-0 z-50  bg-slate-800 h-20 flex sm:flex-col  sm:w-24   sm:h-screen sm:rounded-3xl sm:rounded-l-none`}
    >
      <div className="h-full sm:h-24 bg-blue-500 flex   flex-col justify-center bg-gradient-to-t from-blue-300 to-blue-600 w-20 sm:w-24 rounded-l-none rounded-2xl">
        <FaPiedPiper className="text-white mx-auto   text-5xl " />
      </div>
      <div className="flex  sm:justify-center my-6  right-2  absolute  sm:bottom-6  sm:w-24 sm:left-0     sm:px-auto   ">
        {theme === "light" || "system "&& (
          <button onClick={switchTheme}>
            <BsBrightnessHighFill className="text-white text-2xl  opacity-70" />
          </button>
        )}

        {theme === "dark" || "system"  && (
          <button onClick={switchTheme}>
            <MdBrightness2 className="text-white text-2xl opacity-70" />
          </button>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
