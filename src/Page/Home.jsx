import React, { useEffect, useState } from "react";
import logo from "../assets/react.svg";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Todo from "./Todo";
import TimeCom from "../Components/Time/TimeCom";
// ..
AOS.init();
const Home = () => {
  return (
    <div className=' container mx-auto  '>
      <div className='flex justify-center gap-6 text-center text-3xl md:text-4xl lg:text-6xl  p-5 mb-10 uppercase font-bold  text-indigo-700 shadow-2xl my-4 bg-indigo-100 rounded-2xl shadow-indigo-500/40 '>
        <p className='drop-shadow-xl'>
          {" "}
          Todo App <span>react</span>
        </p>
        <img src={logo} alt='' className='animate-spin w-12 drop-shadow-xl' />
      </div>
      <div className='my-5 '>
        <TimeCom />
      </div>
      <div className='border  p-10 shadow-lg '>
        <Todo />
      </div>
    </div>
  );
};

export default Home;
