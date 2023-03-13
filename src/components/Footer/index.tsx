import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export function Footer(){
  return(
    <footer className="w-screen flex flex-col justify-end items-center gap-2 p-6 h-full">
    <a 
    className="text-gray-400 text-xs text-center underline underline-offset-2 mt-6"
    href="https://www.freecodecamp.org/news/what-is-rem-in-css/"
    target="_blank"
    >What is REM?</a>
    <span className="text-gray-400 text-md">Developed by <a href="https://code-art.dev" target="_blank"><strong>Gust4br</strong></a> with 💜</span>
    <div className="flex gap-2 items-center text-gray-400 text-lg">
      <a 
      href="https://github.com/gust4br" 
      target="_blank" 
      className="hover:opacity-75 transition-opacity duration-150"><AiFillGithub /></a>
      <a 
      href="https://www.linkedin.com/in/gust4br/" 
      target="_blank" 
      className="hover:opacity-75 transition-opacity duration-150"><AiFillLinkedin /></a>
    </div>
  </footer>
  )
}