import React from "react";
import "../../Css/color.css";
export default function Product() {
  const liste = [
    "https://cdn.dolap.com/product/thumb/kadin/kazak/tek-ebat-diger_1014510926.jpg",
    "https://cdn.dolap.com/product/thumb/kadin/esofman/s-36-diger_1014653108.jpg",
    "https://cdn.dolap.com/product/thumb/kadin/kazak/l-40-diger_1024494790.jpg",
    "	https://cdn.dolap.com/product/thumb/erkek/kaban-mont/m-columbia_995311653.jpg",
    ,
    "https://cdn.dolap.com/product/thumb/kadin/esofman/s-36-diger_1014653108.jpg",
    "https://cdn.dolap.com/product/thumb/kadin/kazak/l-40-diger_1024494790.jpg",
    "	https://cdn.dolap.com/product/thumb/erkek/kaban-mont/m-columbia_995311653.jpg",
  ];
  return (
    <div className="flex flex-row flex-wrap justify-center  gap-6 px-24 md:px-12 lg:px-16 pt-8">
      {liste.map((img, index) => (
        <div
          key={index}
          className="shadow-lg h-[400px] w-[290px]  sm:h-[410px] sm:w-[280px] cursor-pointer rounded-xl"
        >
          <div className="flex flex-col border-2  border-slate-200 border-opacity-80 w-full h-full rounded-xl overflow-hidden pb-3">
            <div className="pb-4 pt-2 px-4 flex flex-col ">
              <img
                className="w-[40px] h-[40px] position absolute "
                src="https://cdn.dolap.com/avatar/44607936-ebc0be37-a589-40da-8aac-4b9d588a48d9.jpg"
              ></img>
              <p className="pl-14 pt-2 w-auto">Ahmet AKsu</p>
              <div className="ml-auto mt-[-24px] border-2 border-[#25D6B1] rounded-lg border-opacity-70 w-10 pl-[8px] py-1">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#25D6B1"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                  />
                </svg>
              </div>
            </div>
            <div className="h-56 overflow-hidden duration-200 hover:scale-105">
              <img src={img}></img>
            </div>

            <div>
              <div className="flex flex-col px-4 pt-3">
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <p className="font-semibold text-lg">Zara</p>
                    <p className="text-sm">M / 38 Beden</p>
                  </div>
                  <p className="ml-auto text-2xl pt-3"> 399TL</p>
                </div>
                <div className="flex flex-row px-2 pt-5">
                  <div className="flex flex-row gap-2 border-r-2 pr-[25px] border-slate-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>

                    <p className="text-sm">14 Beğeni</p>
                  </div>
                  <div className="flex flex-row gap-2 ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>

                    <p className="text-sm">3 yorum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
