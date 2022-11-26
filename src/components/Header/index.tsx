import { useEffect } from "react";
import { AiFillBulb, AiOutlineBulb } from "react-icons/ai";
import { useTheme } from "../../contexts/ThemeContext";

export function Header(){
  const { theme, setTheme } = useTheme();

  function handleChangeTheme(){
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  return(
    <header className="flex flex-col items-center justify-between h-full">
      <div className="flex items-center w-full justify-end pr-6 pt-6">
        <button 
        className="
        text-gray-400
        flex items-center 
        gap-2"
        onClick={() => handleChangeTheme()}
        >
          { theme === 'dark' ? <><AiFillBulb />Light Mode</> : <><AiOutlineBulb /> Dark Mode</>}
        </button>
      </div>
      <div>
        <h1 className="text-orange-900 text-2xl font-bold text-center">PX TO REM</h1>
        <p className="dark:text-gray-100 text-gray-400 text-sm text-center">Convert Pixels to REM Easily.</p>
      </div>
  </header>
  )
}