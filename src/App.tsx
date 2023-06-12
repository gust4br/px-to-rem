import { useEffect, useState } from "react";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { useTheme } from "./contexts/ThemeContext";

import { Header, TextInput, Footer } from "./components";

export function App() {
  const [pixelsValue, setPixelsValue] = useState(16);
  const [remValue, setRemValue] = useState(0);
  const [hasChanged, setHasChanged] = useState('Pixels');
  const [remFontsize, setRemFontsize] = useState(16);
  const [remIsFirst, setRemIsFirst] = useState<boolean|null>();
  const { theme } = useTheme();

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

  useEffect(() => {
    if(localStorage.getItem('remIsFirst'))
      setRemIsFirst(localStorage.getItem('remIsFirst') === 'true' ? true : false);
    else if(localStorage.getItem('remIsFirst') === null)
      setRemIsFirst(false);
  }, []);

  useEffect(() => {
      if(remIsFirst != null && remIsFirst !== undefined)
        localStorage.setItem('remIsFirst', remIsFirst.toString());
  }, [remIsFirst]);

  return (
    <div className={`${theme} grid grid-cols-1 grid-rows-[12fr, 3fr, 1fr] items-center justify-between w-screen h-screen`}>
      <Header />
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
      <Footer />
    </div>
  )
}
