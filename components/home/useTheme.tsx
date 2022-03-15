import React from "react";
import { BsBrightnessHighFill } from "react-icons/bs";
import { MdBrightness2 } from "react-icons/md";
import { useTheme } from "next-themes";

const UseTheme = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();
  

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

 

  const changeToDarkTheme = () => {
    if (isMounted) {
      setTheme("dark");
    }
  };
  const changeToLightTheme = () => {
    if (isMounted) {
      setTheme("light");
    }
  };

  function displayTheme() {
    if (theme === "light") {
      return (
        <button onClick={changeToDarkTheme}>
          <MdBrightness2 className="text-white text-2xl opacity-70" />
        </button>
      );
    }
    if (theme === "dark") {
      return (
        <button onClick={changeToLightTheme}>
          <BsBrightnessHighFill className="text-white text-2xl  opacity-70" />
        </button>
      );
    }
    return (
      <button onClick={changeToDarkTheme}>
        <MdBrightness2 className="text-white text-2xl opacity-70" />
      </button>
    );
  }
  return displayTheme;
};

export default UseTheme;
