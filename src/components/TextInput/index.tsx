import { useEffect, useState } from "react";
import { HiOutlineClipboard } from "react-icons/hi";

interface TextInputProps{
  name: string,
  startValue?: number,
}

export function TextInput({ name, startValue } : TextInputProps){
  const [inputNumber, setInputNumber ] = useState("");

  useEffect(() => {
    if(startValue)
      setInputNumber(String(startValue));
  }, [])

  return(
    <div className="flex items-center flex-col gap-1 text-gray-100 font-semibold text-xs group">
      <span>{name}</span>
      <label className="flex items-center justify-between bg-gray-800 p-2 relative rounded-[4px] border border-gray-400" htmlFor={name}>
        <input 
        type="number" 
        className="bg-transparent outline-none text-gray-100 text-xl text-center" 
        id={name} 
        value={inputNumber}
        onChange={(e => setInputNumber(e.target.value))}
        />
        <span className="absolute right-2 text-gray-400 text-xs font-normal group-hover:opacity-0 transition-opacity duration-500">{name}</span>
        <a 
        href="#"
        className="
        absolute right-0 opacity-0 
        group-hover:opacity-100 transition-opacity duration-500
        hover:bg-gray-900
        p-3 
        rounded-[4px]"
        >
        <HiOutlineClipboard color="#7c7c8a" size={24} />
        </a>
      </label>
    </div>
  )
}