import React from 'react'
import logo from "./logo.png"
export default function Nav() {
  return (
    <div class="flex items-stretch shadow-lg h-24 w-full px-16 pt-2 w-full 	fixed bg-[#EFFFFD] z-20">
    <a href='/' class="self-center w-32 h-32 pt-6 overflow-x-hidden cursor-pointer">
      <img src={logo}></img>
    </a>

    <div class="self-center ml-[25%] flex">
      <input className='w-[300px] h-10 border-2 border-slate-500 rounded-lg bg-[#EFFFFD] duration-200 font-medium px-4 focus:outline-none focus:border-slate-800 '></input>   
      <div className='absolute w-7 h-7 ml-[260px] pt-1 mt-1 cursor-pointer text-slate-800 hover:scale-110 duration-200'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
      </div>
 

    </div>

    <div class="flex flex-row gap-12 self-center ml-auto font-semibold text-lg">
      <a href='/login' className='cursor-pointer hover:scale-110 duration-200'>Markalar</a> 
      <a href='/login' className='cursor-pointer hover:scale-110 duration-200'>Giriş Yap</a> 


    </div>
  </div>
  )
}
