import React from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate()

  const handleStart = () =>{
    navigate("/maincomponent")
   console.log("working")
  }
  return (
    <div className='w-full h-fit'>
      <nav className='w-full bg-white p-3 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-l border-b-2 sticky flex items-center gap-20 md:gap-0 md:justify-center'>
        <div className='w-[50%] p-1'>
          <img className='h-14 mix-blend-multiply' src="/mainlogo.png" alt="" />
        </div>
        <div className='w-fit p-1 flex items-end'>
          <button
            className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group"
            onClick={handleStart}
          >
            Get Started
            <span
              className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"
            ></span>
            <span
              className="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"
            ></span>
            <span
              className="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"
            ></span>
            <span
              className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
            >Create</span
            >
          </button>

        </div>
      </nav>
      <div className='w-full p-2 flex flex-col items-center'>
       <h1 className='font-customFont text-4xl text-center'>Create Your Portfolio In seconds</h1>
       <h2 className='font-customFont text-2xl text-center mt-3'>No Code, Free</h2>
       <div className='w-full p-2'>
         <h3 className='font-customFont text-xl text-center mt-3'>This is the website that you will be building..</h3>
         <div className='w-full p-2 flex flex-wrap gap-3 justify-center'>
          <img className='w-[30%] border-2 border-dashed border-black' src="/mobile1.jpg" alt="" />
          <img className='w-[30%] border-2 border-dashed border-black' src="/mobile2.jpg" alt="" />
          <img className='w-[30%] border-2 border-dashed border-black' src="/mobile3.jpg" alt="" />
          <img className='w-[30%] border-2 border-dashed border-black' src="/mobile4.jpg" alt="" />
          <img className='w-[30%] border-2 border-dashed border-black' src="/mobile5.jpg" alt="" />
         </div>
         <div className='w-full p-2 flex justify-center'>
         <button
            className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group"
            onClick={handleStart}
          >
            Lets Start
            <span
              className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"
            ></span>
            <span
              className="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"
            ></span>
            <span
              className="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"
            ></span>
            <span
              className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
            >Create</span
            >
          </button>
         </div>
       </div>
      </div>
    </div>
  )
}

export default Home