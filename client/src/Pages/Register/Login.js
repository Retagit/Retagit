import React, { useEffect, useRef, useState } from "react";
import "../../Css/color.css";
import bg from "./a.png"
import a from "./a.svg"
import axios from 'axios';
import alertify from 'alertifyjs';
export default function Login() {
  
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const [user,setUser] = useState(false)
  function register(){
    axios.get(`https://dummyjson.com/products/${userName}`)
    .catch(function (error) {
      if (error.response) {
        alertify.error('Wrong username or password');
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
  
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);

  }).then(response => {
    if(response.data){
      console.log(`${response.data.description}`)
    }
  });

  }

    return (
    <div className="grid grid-cols-1 lg:grid-cols-5 h-auto overflow-hidden pt-24">
      <div
        className="bg-cover  bg-center w-[500px] h-[600px] col-span-2 ml-32 hidden lg:inline"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div>

      <div className="lg:w-auto lg:h-full col-span-3 lg:pt-16 pt-32">
        <div className="lg:w-[60%] lg:h-[auto] w-[90%]  pb-24 m-auto flex flex-col pt-12 gap-6 items-center bg-opacity-40 rounded-xl shadow-xl px-6">
        <h3 className="text-center pb-6 lg:text-4xl text-[1.8rem] font-bold text-slate-800">Login to RETAGIT</h3>

          <div className="w-full text-center">

          <input onChange={event => setUserName(event.target.value)} placeholder="Username or E-mail" className='w-[85%]  h-10 lg:h-12 lg:w-[350px] bg-[#EFFFFD] border-2 border-[#187498] rounded-lg duration-200 font-medium px-4 focus:outline-none focus:border-slate-800  '></input>   

          </div>
          <div className="w-full text-center">
          <input onChange={event => setPassword(event.target.value)} placeholder="password" type={"password"} className='w-[85%] h-10 lg:h-12 lg:w-[350px] bg-[#EFFFFD] border-2 border-[#187498] rounded-lg duration-200 font-medium px-4 focus:outline-none focus:border-slate-800 '></input>   


          </div>
          <button onClick={() => register()} className="bg-[#36AE7C] text-slate-200 font-bold text-xl lg:w-[350px] w-[85%] lg:h-10 h-10 rounded-lg hover:bg-slate-700 hover:text-slate-200 hover:scale-105 duration-[0.07s] ease-in">Log In</button>
          <a href="/register" >
            <button className="bg-[#36AE7C] text-slate-200 font-bold text-xl lg:w-[350px] w-[85%] lg:h-10 h-10 rounded-lg hover:bg-slate-700 hover:text-slate-200 hover:scale-105 duration-[0.07s] ease-in mt-[-10px]">Register</button>
          </a>

        </div>
      </div>
    </div>
  );
}
