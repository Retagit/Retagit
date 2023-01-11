import React, { useEffect, useRef, useState } from "react";
import "../../Css/color.css";
import blob from "./blob.svg";
import a from "./a.svg";
import alertify from "alertifyjs";
import "../../Css/Alert.css";
export default function Register() {
  const confirmEmailInput = useRef();
  const emailError = useRef();
  const passwordError = useRef();

  const confirmPasswordInput = useRef();

  const [user, setUser] = useState({
    name: "",
    surname: "",
    password: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });


  useEffect(() => {
    if (user.email !== "" && user.confirmEmail !== "") {
      if (user.email !== user.confirmEmail) {
        if (!confirmEmailInput.current.classList.contains("notSame")) {
          confirmEmailInput.current.classList.add("notSame");
          emailError.current.classList.add("notSameError");
        }
      } else {
        confirmEmailInput.current.classList.remove("notSame");
        emailError.current.classList.remove("notSameError");
      }
    }

    if (user.password !== "" && user.confirmPassword !== "") {
      if (user.password !== user.confirmPassword) {
        if (!confirmPasswordInput.current.classList.contains("notSame")) {
          confirmPasswordInput.current.classList.add("notSame");
          passwordError.current.classList.add("notSameError");
        }
      } else {
        confirmPasswordInput.current.classList.remove("notSame");
        passwordError.current.classList.remove("notSameError");
      }
    }
  }, [user]);

  function userRegister() {
    if (user.email !== user.confirmEmail) {
      alertify.error("Password dont match").delay(1.3);
    } else if (user.password != user.confirmPassword) {
      alertify.set("notifier", "position", "bottom-rightr");
      alertify.error("Password dont match").delay(1.3);
    } else {
      alertify.set("notifier", "position", "bottom-right");
      alertify.success("Succesfully registered").delay(1.3);
    }

    console.log(user)
  }

  return (
    <div className="flex justify-center flex-row h-auto overflow-hidden md:pt-24 pt-40 lg:px-12 px-4">
      <div
        className="bg-cover  bg-center w-[500px] h-[580px] hidden lg:inline border-l-2 border-t-2 border-b-2 border-[#36AE7C] rounded-l-xl shadow-xl"
        style={{
          backgroundImage: `url(${blob})`,
        }}
      ></div>

      <div className="lg:w-auto lg:h-[580px] lg:pt-16 pt-12 border-2 border-[#36AE7C] lg:border-l-0 border-l-2 md:rounded-r-[30px] md:rounded-l-[0px] rounded-l-xl ">
        <div className="lg:w-auto lg:px-48 px-6 lg:h-screen w-[100%]   pb-24 m-auto flex flex-col  pt-4 gap-3 items-center bg-opacity-40 rounded-xl shadow-xl">
          <h3 className="text-center pb-6 lg:text-4xl text-[1.8rem] font-bold text-slate-800">
            Register to RETAGIT
          </h3>

          <div className="w-full text-center flex flex-row gap-2 justify-center">
            <input
              onChange={(event) =>
                setUser({ ...user, name: event.target.value })
              }
              placeholder="Name"
              className="inputStyle2"
            ></input>
            <input
              onChange={(event) =>
                setUser({ ...user, surname: event.target.value })
              }
              placeholder="Surname"
              className="inputStyle2"
            ></input>
          </div>
          <div className="w-full text-center flex flex-col gap-3 justify-center items-center">
            <input
              onChange={(event) =>
                setUser({ ...user, email: event.target.value })
              }
              placeholder="E-mail"
              type={"email"}
              className="inputStyle"
            ></input>

            <input
              ref={confirmEmailInput}
              onChange={(event) =>
                setUser({ ...user, confirmEmail: event.target.value })
              }
              placeholder="Confirm E-mail"
              type={"email"}
              className="inputStyle "
            ></input>
            <span
              ref={emailError}
              className="lg:ml-[360px] ml-[230px] mb-[-52px] lg:mb-[-58px] absolute correctSame duration-200 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#ef4444"
                class="w-8 h-8"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </div>

          <div className="w-full text-center flex flex-col gap-3 justify-center items-center">
            <input
              onChange={(event) =>
                setUser({ ...user, password: event.target.value })
              }
              placeholder="Password"
              type={"password"}
              className="inputStyle"
            ></input>
            <span
              ref={passwordError}
              className="lg:ml-[360px] ml-[230px] md:mb-[-10px] mb-[-2px] absolute correctSame duration-200 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#ef4444"
                class="w-8 h-8"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <input
              ref={confirmPasswordInput}
              onChange={(event) =>
                setUser({ ...user, confirmPassword: event.target.value })
              }
              placeholder="Confirm Password"
              type={"password"}
              className="inputStyle"
            ></input>

            <a className="w-full">
              <button
                onClick={() => userRegister()}
                className="bg-[#36AE7C] text-slate-200 font-bold text-xl lg:w-[420px] w-[90%] lg:h-10 h-10 rounded-lg hover:bg-slate-700 hover:text-slate-200 hover:scale-105 duration-[0.07s] ease-in"
              >
                Register
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
