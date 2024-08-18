import React from 'react'

function Projects({formData}) {
  return (
    <div id='projects' className='w-full h-fit p-2'>
      <div className='w-full p-2 bg-red-400 rounded-tl-lg rounded-tr-lg text-center '>
        <h1 className='font-customFont text-[20vw] w-full text-white'>Projects</h1>
      </div>
      <div className='trinagles w-full flex items-center justify-center'>
        <div class="w-0 h-0 
  border-l-[32px] md:border-l-[45px] border-l-transparent
  border-t-[30px] md:border-t-[60px] border-t-red-400
  border-r-[32px] md:border-r-[45px] border-r-transparent">
        </div>
        <div class="w-0 h-0 
  border-l-[32px] md:border-l-[45px] border-l-transparent
  border-t-[30px] md:border-t-[60px] border-t-red-400
  border-r-[32px] md:border-r-[45px] border-r-transparent">
        </div>
        <div class="w-0 h-0 
  border-l-[32px] md:border-l-[45px] border-l-transparent
  border-t-[30px] md:border-t-[60px] border-t-red-400
  border-r-[32px] md:border-r-[45px] border-r-transparent">
        </div>
        <div class="w-0 h-0 
  border-l-[32px] md:border-l-[45px] border-l-transparent
  border-t-[30px] md:border-t-[60px] border-t-red-400
  border-r-[32px] md:border-r-[45px] border-r-transparent">
        </div>
        <div class="w-0 h-0 
  border-l-[32px] md:border-l-[45px] border-l-transparent
  border-t-[30px] md:border-t-[60px] border-t-red-400
  border-r-[32px] md:border-r-[45px] border-r-transparent">
        </div>
        <div class="w-0 h-0 
  border-l-[32px] md:border-l-[45px] border-l-transparent
  border-t-[30px] md:border-t-[60px] border-t-red-400
  border-r-[32px] md:border-r-[45px] border-r-transparent hidden md:block">
        </div>
        <div class="w-0 h-0 
  border-l-[32px] md:border-l-[45px] border-l-transparent
  border-t-[30px] md:border-t-[60px] border-t-red-400
  border-r-[32px] md:border-r-[45px] border-r-transparent hidden md:block">
        </div>
        <div class="w-0 h-0 
  border-l-[32px] md:border-l-[45px] border-l-transparent
  border-t-[30px] md:border-t-[60px] border-t-red-400
  border-r-[32px] md:border-r-[45px] border-r-transparent hidden md:block">
        </div>
        <div class="w-0 h-0 
  border-l-[32px] md:border-l-[45px] border-l-transparent
  border-t-[30px] md:border-t-[60px] border-t-red-400
  border-r-[32px] md:border-r-[45px] border-r-transparent hidden md:block">
        </div>
        <div class="w-0 h-0 
  border-l-[32px] md:border-l-[45px] border-l-transparent
  border-t-[30px] md:border-t-[60px] border-t-red-400
  border-r-[32px] md:border-r-[45px] border-r-transparent hidden md:block">
        </div>
        <div class="w-0 h-0 
  border-l-[32px] md:border-l-[45px] border-l-transparent
  border-t-[30px] md:border-t-[60px] border-t-red-400
  border-r-[32px] md:border-r-[45px] border-r-transparent hidden md:block">
        </div>
        <div class="w-0 h-0 
  border-l-[32px] md:border-l-[45px] border-l-transparent
  border-t-[30px] md:border-t-[60px] border-t-red-400
  border-r-[32px] md:border-r-[45px] border-r-transparent hidden md:block">
        </div>
      </div>
      <div className='w-full h-fit p-2 md:flex md:flex-wrap'>
        <div className='w-full p-2 md:w-[50%]'>
          <h1 className='font-customFont text-2xl mt-2 md:text-3xl'>{formData.Project1Name ||"Example : Todo App" }</h1>
          <h2 className='font-bold text-[16px] font-customFont tracking-wider md:text-2xl'>{formData.Project1Date ||"Example : 2024" }</h2>
          <a href={`${formData.Project1Link}`} className='text-xl font-customFont tracking-wide md:text-2xl hover:border-b-2 border-black'>Github Link</a>
          <p className='font-customFont md:text-[21px]'>{formData.Project1Detail ||"Example : Features of your Project" }
          </p>
        </div>
        <div className='w-full p-2 md:w-[50%]'>
          <h1 className='font-customFont text-2xl mt-2 md:text-3xl'>{formData.Project2Name ||"Example : Todo App" }</h1>
          <h2 className='font-bold text-[16px] font-customFont tracking-wider md:text-2xl'>{formData.Project2Date ||"Example : 2024" }</h2>
          <a href={`${formData.Project2Link}`} className='text-xl font-customFont tracking-wide md:text-2xl hover:border-b-2 border-black'>Github Link</a>
          <p className='font-customFont md:text-[21px]'>{formData.Project2Detail ||"Example : Features of your Project" }
          </p>
        </div>
        <div className='w-full p-2 md:w-[50%]'>
          <h1 className='font-customFont text-2xl mt-2 md:text-3xl'>{formData.Project3Name ||"Example : Todo App" }</h1>
          <h2 className='font-bold text-[16px] font-customFont tracking-wider md:text-2xl'>{formData.Project3Date ||"Example : 2024" }</h2>
          <a href={`${formData.Project3Link}`} className='text-xl font-customFont tracking-wide md:text-2xl hover:border-b-2 border-black'>Github Link</a>
          <p className='font-customFont md:text-[21px]'>{formData.Project3Detail ||"Example : Features of your Project" }
          </p>
        </div>
      {/*   <div className='w-full p-2 md:w-[50%]'>
          <h1 className='font-customFont text-2xl mt-2 md:text-3xl'>Writting Buddy</h1>
          <h2 className='font-bold text-[16px] font-customFont tracking-wider md:text-2xl'>2024</h2>
          <a href='' className='text-xl font-customFont tracking-wide md:text-2xl hover:border-b-2 border-black'>Github Link</a>
          <p className='font-customFont md:text-[21px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quo nobis ducimus expedita non corporis voluptatibus? Reprehenderit illum vero illo.
          </p>
        </div> */}
      </div>
    </div>
  )
}

export default Projects