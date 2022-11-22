import { useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { TextInput } from "./components";

export function App() {
  const [pixelsValue, setPixelsValue] = useState(16);
  const [remValue, setRemValue] = useState(0);
  const [hasChanged, setHasChanged] = useState('Pixels');
  const [remFontsize, setRemFontsize] = useState(16);
  const [remIsFirst, setRemIsFirst] = useState(false);

  function handlePixelValueChange(value: number){
    setPixelsValue(value);
  }

  function handleRemValueChange(value: number){
    setRemValue(value);
  }

  function handleChangedInput(str: string){
    setHasChanged(str);
  }

  function handleSwitchFirst(){
    setRemIsFirst(!remIsFirst);
  }

  useEffect(() => {
    if(hasChanged === 'Pixels')
      setRemValue(pixelsValue / remFontsize);
    else if(hasChanged === 'REM')
      setPixelsValue(remValue * remFontsize);
  }, [pixelsValue, remValue, remFontsize]);

  return (
    <div className="grid grid-cols-1 grid-rows-3 items-center justify-between w-screen h-screen">
      <header className="flex flex-col items-center justify-end h-full">
        <h1 className="text-orange-900 text-2xl font-bold text-center">PX TO REM</h1>
        <p className="text-gray-100 text-sm text-center">Convert Pixels to REM Easily.</p>
      </header>
      <main className="flex flex-col items-center justify-center">
        <div className={`flex ${remIsFirst ? 'flex-col-reverse' : 'flex-col'} gap-4 text-gray-400 w-fit`}>
          <TextInput name="Pixels" valueHandler={handlePixelValueChange} value={pixelsValue} handleChangedInput={handleChangedInput} />
          <a 
          href="#"
          onClick={() => handleSwitchFirst()}
          className="w-full flex items-center justify-end
            hover:opacity-80
            active:translate-y-[1px]
            relative 
            h-[30px]"
           >
            <CgArrowsExchangeAlt size={30} className="absolute bottom-[-8px]"/>
          </a>
          <TextInput name="REM" valueHandler={handleRemValueChange} value={remValue} handleChangedInput={handleChangedInput}/>
        </div>
        <label className="text-gray-400 mt-10">
          Value of Font-size: 
          <input 
          type="number"
          className="bg-transparent outline-none border-b-[1px] border-gray-400 w-5 mx-1 text-center" 
          value={remFontsize}
          onChange={(e => { setRemFontsize(Number(e.target.value)); })}
          />
          px.
        </label>
      </main>
      <footer className="w-screen flex flex-col justify-end items-center gap-2 p-6 h-full">
        <a 
        className="text-gray-400 text-xs text-center underline underline-offset-2 mt-6"
        href="https://www.freecodecamp.org/news/what-is-rem-in-css/"
        target="_blank"
        >What is REM?</a>
        <span className="text-gray-400 text-md">Developed by <a href="https://code-art.dev" target="_blank"><strong>Gustavosgdev</strong></a> with 💜</span>
        <div className="flex gap-2 items-center text-gray-400 text-lg">
          <a 
          href="https://github.com/gustavosgdev" 
          target="_blank" 
          className="hover:opacity-75 transition-opacity duration-150"><AiFillGithub /></a>
          <a 
          href="https://www.linkedin.com/in/gustavo-da-silva-gomes-0b3b00194/" 
          target="_blank" 
          className="hover:opacity-75 transition-opacity duration-150"><AiFillLinkedin /></a>
        </div>
      </footer>
    </div>
  )
}
