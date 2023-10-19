import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { HiOutlineClipboard } from "react-icons/hi";

interface TextInputProps{
  name: string,
  valueHandler: (value: number) => void,
  value: number,
  handleChangedInput: (str : string) => void,
}

export function TextInput({ name, valueHandler, value, handleChangedInput } : TextInputProps){
  const [inputNumber, setInputNumber ] = useState(0);

  function handleClipboardClick(){
    navigator.clipboard.writeText(String(inputNumber + `${name === 'REM' ? 'rem' : 'px'}`));
    toast.success(`${name} copied to clipboard!`, {
      style: {
        borderRadius: '4px',
        background: '#202024',
        color: '#e1e1e6',
      },
    });
  }

  function handleTextChange(event: React.ChangeEvent<HTMLInputElement>){
    handleChangedInput(name)
    valueHandler(Number(event.target.value));
  }

  useEffect(() => {
      setInputNumber(value);
  }, [value]);
  return(
    <div className="flex items-center flex-col gap-1 dark:text-gray-100 text-gray-400 font-semibold text-xs group">
      <span>{name}</span>
      <label tabIndex={0} className="flex items-center justify-between dark:bg-gray-800 bg-zinc-100 p-2 relative rounded-[4px] border border-zinc-400 
      dark:focus-within:bg-gray-900
      focus-within:bg-zinc-200
      " htmlFor={name}>
        <input 
        type="number" 
        className="bg-transparent outline-none dark:text-gray-100 text-zinc-400 text-xl text-center" 
        id={name} 
        value={inputNumber}
        onChange={(e) => {handleTextChange(e)}}
        />
        <span className="absolute right-2 text-zinc-400 text-xs font-normal group-hover:opacity-0 transition-opacity duration-500">{name}</span>
        <a 
        onClick={() => {handleClipboardClick()}}
        href="#"
        className="
        absolute right-0 opacity-0 
        group-hover:opacity-100 transition-opacity duration-500
        dark:hover:bg-gray-900
        hover:bg-zinc-300
        p-3 
        rounded-[4px]"
        >
        <HiOutlineClipboard 
        className="active:translate-y-[1px]"
        color="#7c7c8a" 
        size={24}
        />
        </a>
      </label>
    </div>
  )
}