import React, { useState } from 'react'
import Navbar from './Navbar'
import { IoMdMailOpen } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiReplit } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Projects from './Projects';
import Contact from './Contact';



function Preview({formData}) {

  
  return (
    <div id='home' className='w-full h-full md:overflow-hidden'>
      <div className='w-full h-fit'>
        <Navbar />
      </div>
      <div className='w-full p-4 flex items-center justify-center flex-col gap-0'>
        <div className='w-full relative'>
          <h1 className='font-customFont text-center tracking-wide text-[25vw] md:text-[20vw] text-[#ca400e] '>Portfolio</h1>
          <div className='w-full md:w-[90%] md:mx-auto p-3 md:pl-28 flex items-center justify-between absolute top-[0%] md:top-[14%]'>
            <h1 className='font-customFont text-xl'>{formData.role1 || "Your Role"}</h1>
            <h1 className='font-customFont text-xl'>{formData.role2 || "Your Role 2"}</h1>
          </div>
          <div className='w-full p-4 absolute top-[40%] md:top-[45%] md:left-[16%]  mix-blend-multiply'>
            <img className='h-32 mix-blend-multiply' src="/cofee.jpg" alt="cofee" />
          </div>
        </div>
      </div>
      <div className='w-full p-3 mt-16 md:m-0'>

        <h1 className='text-[60px] md:text-[70px] text-black tracking-wide font-customFont text-right mr-4 md:mr-20'>Bio</h1>
        <div className='w-full p-1'>
          <p className='font-customFont text-[18px] md:text-[30px]'>{formData.bio || "Your Bio"}</p>
        </div>
      </div>
      <div className='w-full p-1 md:flex'>
        <div className='w-full md:w-[30%] h-fit flex gap-2 md:block'>
          <div className='w-[45%] md:w-full h-full flex items-end '>
            <h1 className='font-customFont text-2xl -translate-y-2 -rotate-90 h-fit md:text-4xl'>Hello,</h1>
            <img className='h-32 md:h-60 border-2 border-black' src="/photo.png" alt="" />
          </div>
          <div className='w-[50%] h-fit p-2 md:w-full'>
            <h1 className='font-customFont text-2xl text-red-500 mt-2 md:text-4xl'>About Me</h1>
            <h1 className='font-bold text-[16px] md:text-3xl font-customFont tracking-wide'>{formData.name || "Your Name"}</h1>
            <a className='flex items-center gap-1 md:text-[text-20px]' href={`mailto:${formData.email}`}><IoMdMailOpen /><span className=' font-sans text-[9px] font-semibold md:font-light md:text-[20px] md:font-customFont'> {formData.email || 'your.email@example.com'}</span></a>
            <a className='flex items-center gap-1 text-[12px] mt-1' href={`tel:${formData.phone}`}><FaPhoneAlt /><span className=' md:font-customFont text-[9px] font-sans font-semibold md:font-light md:text-[20px]'>{formData.phone || "Your Phone No"} </span></a>
          </div>

        </div>
        {formData.experienceYear1 > 0 && <div className='w-full h-fit p-2 md:w-[50%]'>
          <div className='w-full p-1'>
            <h1 className='font-customFont text-2xl text-red-500 mt-2 md:text-3xl'>Experience</h1>
            <h2 className='font-bold text-[16px] font-customFont tracking-wider md:text-2xl'>{formData.experienceYear1 ||"Joining Year" }</h2>
            <h3 className='text-xl font-customFont tracking-wide md:text-2xl'>{formData.experienceRole1 ||"Your Role" }</h3>
            <p className='font-customFont md:text-[21px]'>{formData.experienceDetail1 ||"Your Details, Example : What you did in company" }
            </p>
          </div>
          {formData.experienceYear2 > 0 && <div className='w-full p-1'>
            <h2 className='font-bold text-[16px] font-customFont tracking-wider md:text-2xl'>{formData.experienceYear2 ||"Joining Year" }</h2>
            <h3 className='text-xl font-customFont tracking-wide md:text-2xl'>{formData.experienceRole2 ||"Your Role" }</h3>
            <p className='font-customFont md:text-[21px]'>{formData.experienceDetail2 ||"Your Details, Example : What you did in company" }
            </p>
          </div>}
        </div>}
        <div className={`w-full h-fit p-2 md:w-[30%] ${formData.experienceYear1 > 0 ? "" : "md:w-[70%] md:flex md:items-center md:justify-between"}`}>
          <div className='w-full h-fit'>
          <div className='w-full p-1'>
            <h1 className='font-customFont text-2xl text-red-500 mt-2 md:text-3xl'>Education</h1>
            <h2 className='font-bold text-[16px] font-customFont tracking-wider md:text-xl'>{formData.CollegeName1||"College or School Name" }</h2>
            <p className='font-customFont md:text-[19px]'>{formData.CollegeBranch1||"Qualification, ex: 10th, 12th" }
            </p>
          </div>
          <div className='w-full p-1'>
            <h2 className='font-bold text-[16px] font-customFont tracking-wider md:text-xl'>{formData.CollegeName2||"College or School Name" }</h2>
            <p className='font-customFont md:text-[19px]'>{formData.CollegeBranch2||"Qualification, ex: BE, BCOM , etc." }
            </p>
          </div>
          </div>
          
          <div className='w-full h-fit flex md:block'>
            <div className='w-[50%] md:w-full p-1'>
              <h1 className='font-customFont text-2xl text-red-500 mt-2 md:text-3xl'>Skills</h1>
              <p className='font-customFont md:text-[19px]'>{formData.skill1 ||"Example : DSA" }
              </p>
              <p className='font-customFont md:text-[19px]'>{formData.skill2 ||"Example : Problem Solving" }
              </p>
              <p className='font-customFont md:text-[19px]'>{formData.skill3 ||"Example : Team Work" }
              </p>
              <p className='font-customFont md:text-[19px]'>{formData.skill4 ||"Example : Leadership" }
              </p>
            </div>
            <div className='w-[50%] md:w-full p-1'>
              <h1 className='font-customFont text-2xl text-red-500 mt-2 md:text-3xl'>Software</h1>
              <div className='w-full p-1 flex gap-1'>
              <p className='font-customFont text-2xl md:text-[19px] border-2 border-black rounded'><VscVscode />
              </p>
              <p className='font-customFont text-2xl md:text-[19px] border-2 border-black rounded'><SiReplit />
              </p>
              <p className='font-customFont text-2xl md:text-[19px] border-2 border-black rounded'><FaGithub />
              </p>
              </div>
              
            </div>
          </div>

        </div>
      </div>     
      <div className='w-full h-fit p-1'>
        <Projects formData={formData} />
      </div>
      <div className='w-full h-fit p-4 '>
        <Contact formData={formData} />
      </div>

    </div>
  )
}

export default Preview