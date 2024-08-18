import React, { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';


function PortfolioForm({ formData, onInputChange }) {
  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    onInputChange({ ...formData, [name]: value });
    //console.log({ ...formData, [name]: value })
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
    console.log(currentStep)
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleDownload = () => {
    const htmlContent = `
      <html>
        <head>
        <link rel="icon" type="image/svg+xml" href="https://i.postimg.cc/5NpKPSpX/photo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=New+Amsterdam&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
          
          <title>Portfolio</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=New+Amsterdam&display=swap');

    .font-customFont {
    font-family: 'New Amsterdam', sans-serif;
  }
          </style>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body>
          <div id='home' class='w-full min-h-screen md:overflow-hidden'>
  <div class='w-full h-fit'>
    <div class="w-full bg-[#fe5211] relative">
    <div id="navMenu" class="absolute z-40 w-full bg-red-500 rounded-lg h-0 transition-all transition-800 flex items-center justify-center md:hidden">
        <div id="navItems" class="w-[50%] h-[50%] flex items-center flex-col hidden">
            <a href="#home" class="text-[19vw] font-customFont capitalize hover:border-b-4 border-black m-0 transition-all transition-300">Home</a>
            <a href="#projects" class="text-[19vw] font-customFont capitalize hover:border-b-4 border-black transition-all transition-300">Projects</a>
        </div>
    </div>
    <div class="w-full bg-[#fe5211] relative flex items-center justify-between">
        <div class="w-[50%] h-full bg-[#fe5211] p-2">
            <img class="h-16 mix-blend-multiply" src="https://i.postimg.cc/YSwYbyDw/logo.jpg" alt="logo" />
        </div>
        <div class="w-[50%] h-full p-2 flex justify-end z-50">
            <label id="navToggle" class="w-9 h-10 cursor-pointer flex flex-col items-center justify-center space-y-1.5 md:hidden">
                <input id="nav_bar_icon" type="checkbox" class="hidden peer" />
                <div id="bar1" class="w-2/3 h-1.5 bg-black rounded-lg transition-all duration-300 origin-right"></div>
                <div id="bar2" class="w-full h-1.5 bg-black rounded-lg transition-all duration-300 origin-center"></div>
                <div id="bar3" class="w-2/3 h-1.5 bg-black rounded-lg transition-all duration-300 origin-right"></div>
            </label>
            <div class="w-full hidden h-full md:block">
                <div class="w-full h-full flex items-center gap-7 justify-end">
                    <a href="/#home" class="text-[3vw] font-customFont capitalize hover:border-b-4 border-black m-0 transition-all transition-300">Home</a>
                    <a href="/#project" class="text-[3vw] font-customFont capitalize hover:border-b-4 border-black transition-all transition-300">Projects</a>
                </div>
            </div>
        </div>
    </div>
</div>
  </div>
  <div class='w-full p-4 flex items-center justify-center flex-col gap-0'>
    <div class='w-full relative'>
      <h1 class='font-customFont text-center tracking-wide text-[25vw] md:text-[20vw] text-[#ca400e]'>Portfolio</h1>
      <div class='w-full md:w-[90%] md:mx-auto p-3 md:pl-28 flex items-center justify-between absolute top-[0%] md:top-[14%]'>
        <h1 class='font-customFont text-xl'>${formData.role1 || "Your Role"}</h1>
        <h1 class='font-customFont text-xl'>${formData.role2 || "Your Role 2"}</h1>
      </div>
      <div class='w-full p-4 absolute top-[40%] md:top-[45%] md:left-[16%] mix-blend-multiply'>
        <img class='h-32 mix-blend-multiply' src="https://i.postimg.cc/JzXj3Wqq/cofee.jpg" alt="cofee" />
      </div>
    </div>
  </div>
  <div class='w-full p-3 mt-16 md:m-0'>
    <h1 class='text-[60px] md:text-[70px] text-black tracking-wide font-customFont text-right mr-4 md:mr-20'>Bio</h1>
    <div class='w-full p-1'>
      <p class='font-customFont text-[18px] md:text-[30px]'>${formData.bio || "Your Bio"}</p>
    </div>
  </div>
  <div class='w-full p-1 md:flex'>
    <div class='w-full md:w-[30%] h-fit flex gap-2 md:block'>
      <div class='w-[45%] md:w-full h-full flex items-end'>
        <h1 class='font-customFont text-2xl -translate-y-2 -rotate-90 h-fit md:text-4xl'>Hello,</h1>
        <img class='h-32 md:h-60 border-2 border-black' src="https://i.postimg.cc/5NpKPSpX/photo.png" alt="" />
      </div>
      <div class='w-[50%] h-fit p-2 md:w-full'>
        <h1 class='font-customFont text-2xl text-red-500 mt-2 md:text-4xl'>About Me</h1>
        <h1 class='font-bold text-[16px] md:text-3xl font-customFont tracking-wide'>${formData.name || "Your Name"}</h1>
        <a class='flex items-center gap-1 md:text-[20px]' href={mailto:${formData.email}}><i class="fa-solid fa-envelope-open"></i><span class='font-sans text-[9px] font-semibold md:font-semibold md:text-[15px] md:font-customFont'>${formData.email || 'your.email@example.com'}</span></a>
        <a class='flex items-center gap-1 text-[12px] md:text-[18px] mt-1' href={tel:${formData.phone}}><i class="fa-solid fa-phone"></i><span class='md:font-customFont text-[9px] font-sans font-semibold md:font-semibold md:text-[15px]'>${formData.phone || "Your Phone No"}</span></a>
      </div>
    </div>
     <div class='w-full h-fit p-2 md:w-[50%] ${formData.experienceYear1 > 0 ? "" : "hidden"}'>
      <div class='w-full p-1'>
        <h1 class='font-customFont text-2xl text-red-500 mt-2 md:text-3xl'>Experience</h1>
        <h2 class='font-bold text-[16px] font-customFont tracking-wider md:text-2xl'>${formData.experienceYear1 || "Joining Year"}</h2>
        <h3 class='text-xl font-customFont tracking-wide md:text-2xl'>${formData.experienceRole1 || "Your Role"}</h3>
        <p class='font-customFont md:text-[21px]'>${formData.experienceDetail1 || "Your Details, Example: What you did in company"}</p>
      </div>
       <div class='w-full p-1 ${formData.experienceYear2 > 0 ? "" : "hidden"}'>
        <h2 class='font-bold text-[16px] font-customFont tracking-wider md:text-2xl'>${formData.experienceYear2 || "Joining Year"}</h2>
        <h3 class='text-xl font-customFont tracking-wide md:text-2xl'>${formData.experienceRole2 || "Your Role"}</h3>
        <p class='font-customFont md:text-[21px]'>${formData.experienceDetail2 || "Your Details, Example: What you did in company"}</p>
      </div>
    </div>    
    <div class='w-full h-fit p-2 md:w-[30%] ${formData.experienceYear1 > 0 ? "" : "md:w-[70%] md:flex md:items-center md:justify-between"}'>
    <div class="w-full h-fit">
      <div class='w-full p-1'>
        <h1 class='font-customFont text-2xl text-red-500 mt-2 md:text-3xl'>Education</h1>
        <h2 class='font-bold text-[16px] font-customFont tracking-wider md:text-xl'>${formData.CollegeName1 || "College or School Name"}</h2>
        <p class='font-customFont md:text-[19px]'>${formData.CollegeBranch1 || "Qualification, ex: 10th, 12th"}</p>
      </div>
      <div class='w-full p-1'>
        <h2 class='font-bold text-[16px] font-customFont tracking-wider md:text-xl'>${formData.CollegeName2 || "College or School Name"}</h2>
        <p class='font-customFont md:text-[19px]'>${formData.CollegeBranch2 || "Qualification, ex: BE, BCOM, etc."}</p>
      </div>
      </div>
      <div class='w-full h-fit flex md:block'>
        <div class='w-[50%] md:w-full p-1'>
          <h1 class='font-customFont text-2xl text-red-500 mt-2 md:text-3xl'>Skills</h1>
          <p class='font-customFont md:text-[19px]'>${formData.skill1 || "Example: DSA"}</p>
          <p class='font-customFont md:text-[19px]'>${formData.skill2 || "Example: Problem Solving"}</p>
          <p class='font-customFont md:text-[19px]'>${formData.skill3 || "Example: Team Work"}</p>
          <p class='font-customFont md:text-[19px]'>${formData.skill4 || "Example: Leadership"}</p>
        </div>
        <div class='w-[50%] md:w-full p-1'>
          <h1 class='font-customFont text-2xl text-red-500 mt-2 md:text-3xl'>Software</h1>
          <div class='w-full p-1 flex gap-1'>
            <p class="font-customFont text-2xl md:text-[19px] border-2 border-black rounded">
   <i class="fas fa-code"></i> 
</p>
<p class="font-customFont text-2xl md:text-[19px] border-2 border-black rounded">
   <i class="fas fa-terminal"></i> 
</p>
<p class="font-customFont text-2xl md:text-[19px] border-2 border-black rounded">
   <i class="fab fa-github"></i> 
</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class='w-full h-fit p-1'>

    <div id='projects' class='w-full h-fit p-2'>
  <div class='w-full p-2 bg-red-400 rounded-tl-lg rounded-tr-lg text-center'>
    <h1 class='font-customFont text-[20vw] w-full text-white'>Projects</h1>
  </div>
  <div class='trinagles w-full flex items-center justify-center'>
    <div class='w-0 h-0 
      border-l-[32px] md:border-l-[45px] border-l-transparent
      border-t-[30px] md:border-t-[60px] border-t-red-400
      border-r-[32px] md:border-r-[45px] border-r-transparent'>
    </div>
    <div class='w-0 h-0 
      border-l-[32px] md:border-l-[45px] border-l-transparent
      border-t-[30px] md:border-t-[60px] border-t-red-400
      border-r-[32px] md:border-r-[45px] border-r-transparent'>
    </div>
    <div class='w-0 h-0 
      border-l-[32px] md:border-l-[45px] border-l-transparent
      border-t-[30px] md:border-t-[60px] border-t-red-400
      border-r-[32px] md:border-r-[45px] border-r-transparent'>
    </div>
    <div class='w-0 h-0 
      border-l-[32px] md:border-l-[45px] border-l-transparent
      border-t-[30px] md:border-t-[60px] border-t-red-400
      border-r-[32px] md:border-r-[45px] border-r-transparent'>
    </div>
    <div class='w-0 h-0 
      border-l-[32px] md:border-l-[45px] border-l-transparent
      border-t-[30px] md:border-t-[60px] border-t-red-400
      border-r-[32px] md:border-r-[45px] border-r-transparent hidden md:block'>
    </div>
    <div class='w-0 h-0 
      border-l-[32px] md:border-l-[45px] border-l-transparent
      border-t-[30px] md:border-t-[60px] border-t-red-400
      border-r-[32px] md:border-r-[45px] border-r-transparent hidden md:block'>
    </div>
    <div class='w-0 h-0 
      border-l-[32px] md:border-l-[45px] border-l-transparent
      border-t-[30px] md:border-t-[60px] border-t-red-400
      border-r-[32px] md:border-r-[45px] border-r-transparent hidden md:block'>
    </div>
    <div class='w-0 h-0 
      border-l-[32px] md:border-l-[45px] border-l-transparent
      border-t-[30px] md:border-t-[60px] border-t-red-400
      border-r-[32px] md:border-r-[45px] border-r-transparent hidden md:block'>
    </div>
    <div class='w-0 h-0 
      border-l-[32px] md:border-l-[45px] border-l-transparent
      border-t-[30px] md:border-t-[60px] border-t-red-400
      border-r-[32px] md:border-r-[45px] border-r-transparent hidden md:block'>
    </div>
    <div class='w-0 h-0 
      border-l-[32px] md:border-l-[45px] border-l-transparent
      border-t-[30px] md:border-t-[60px] border-t-red-400
      border-r-[32px] md:border-r-[45px] border-r-transparent hidden md:block'>
    </div>
    <div class='w-0 h-0 
      border-l-[32px] md:border-l-[45px] border-l-transparent
      border-t-[30px] md:border-t-[60px] border-t-red-400
      border-r-[32px] md:border-r-[45px] border-r-transparent hidden md:block'>
    </div>
  </div>
  <div class='w-full h-fit p-2 md:flex md:flex-wrap'>
    <div class='w-full p-2 md:w-[50%]'>
      <h1 class='font-customFont text-2xl mt-2 md:text-3xl'>${formData.Project1Name || "Example : Todo App"}</h1>
      <h2 class='font-bold text-[16px] font-customFont tracking-wider md:text-2xl'>${formData.Project1Date || "Example : 2024"}</h2>
      <a href={${formData.Project1Link}} class='text-xl font-customFont tracking-wide md:text-2xl hover:border-b-2 border-black'>Github Link</a>
      <p class='font-customFont md:text-[21px]'>${formData.Project1Detail || "Example : Features of your Project"}
      </p>
    </div>
    <div class='w-full p-2 md:w-[50%]'>
      <h1 class='font-customFont text-2xl mt-2 md:text-3xl'>${formData.Project2Name || "Example : Todo App"}</h1>
      <h2 class='font-bold text-[16px] font-customFont tracking-wider md:text-2xl'>${formData.Project2Date || "Example : 2024"}</h2>
      <a href={${formData.Project2Link}} class='text-xl font-customFont tracking-wide md:text-2xl hover:border-b-2 border-black'>Github Link</a>
      <p class='font-customFont md:text-[21px]'>${formData.Project2Detail || "Example : Features of your Project"}
      </p>
    </div>
    <div class='w-full p-2 md:w-[50%]'>
      <h1 class='font-customFont text-2xl mt-2 md:text-3xl'>${formData.Project3Name || "Example : Todo App"}</h1>
      <h2 class='font-bold text-[16px] font-customFont tracking-wider md:text-2xl'>${formData.Project3Date || "Example : 2024"}</h2>
      <a href={${formData.Project3Link}} class='text-xl font-customFont tracking-wide md:text-2xl hover:border-b-2 border-black'>Github Link</a>
      <p class='font-customFont md:text-[21px]'>${formData.Project3Detail || "Example : Features of your Project"}
      </p>
    </div>
  </div>
</div>


    <div class='w-full h-fit border-t-2 border-black'>
  <div class="container px-4 mt-2 mx-auto">
    <div class="mx-auto">
      <div class="max-w-md mx-auto px-8 py-6 bg-red-400 rounded-lg shadow-lg">
        <h2 class="text-2xl font-customFont text-black mb-4">Contact Me</h2>
        <form>
          <div class="mb-4">
            <label class="block text-black font-customFont mb-1" for="name">Your Name</label>
            <input
              class="w-full px-4 py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
              placeholder="Enter your name"
              type="text"
            />
          </div>
          <div class="mb-4">
            <label class="block text-black font-customFont mb-1" for="email">Your Email</label>
            <input
              class="w-full px-4 py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
              placeholder="Enter your email"
              name="email"
              id="email"
              type="email"
            />
          </div>
          <div class="mb-4">
            <label class="block text-black font-customFont mb-1" for="message">Your Message</label>
            <textarea
              class="w-full px-4 py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
              rows="4"
              placeholder="Enter your message"
              name="message"
              id="message"
            ></textarea>
          </div>
          <button
            class="w-full bg-yellow-300 text-black font-customFont py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

  </div>
</div>
 <script>
 document.getElementById('navToggle').addEventListener('click', function() {
    const navMenu = document.getElementById('navMenu');
    const navItems = document.getElementById('navItems');
    const isChecked = document.getElementById('nav_bar_icon').checked;

    if (isChecked) {
        navMenu.classList.add('h-screen');
        navItems.classList.remove('hidden');
        navItems.classList.add('block');
    } else {
        navMenu.classList.remove('h-screen');
        navItems.classList.remove('block');
        navItems.classList.add('hidden');
    }

    // Hamburger animation
    const bar1 = document.getElementById('bar1');
    const bar2 = document.getElementById('bar2');
    const bar3 = document.getElementById('bar3');

    if (isChecked) {
        bar1.classList.add('w-full', 'rotate-[-30deg]', 'translate-y-[-5px]');
        bar2.classList.add('rotate-90', 'translate-x-4');
        bar3.classList.add('w-full', 'rotate-[30deg]', 'translate-y-[5px]');
    } else {
        bar1.classList.remove('w-full', 'rotate-[-30deg]', 'translate-y-[-5px]');
        bar2.classList.remove('rotate-90', 'translate-x-4');
        bar3.classList.remove('w-full', 'rotate-[30deg]', 'translate-y-[5px]');
    }
});

 </script>
        </body>
      </html>
    `;


    const zip = new JSZip();


    zip.file('portfolio.html', htmlContent);


    zip.generateAsync({ type: 'blob' })
      .then(content => {

        saveAs(content, 'portfolio.zip');
      });
  }

  return (
    <div className="flex items-center justify-center ">
      <div className="bg-gray-900 border-[1px] border-white rounded-2xl hover:border-white transition-all duration-200 md:w-[80vw] w-[95vw]">
        <form className="mx-auto flex items-center space-y-4 py-16 px-2 md:px-4 font-semibold text-white flex-col">
          <h1 className="text-white text-2xl font-customFont tracking-wider">Portfolio Information</h1>

          {currentStep === 1 && (
            <>
              <h1 className='font-customFont tracking-wide text-xl text-center'>Page 1 Details</h1>
              <input
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Role 1"
                type="text"
                name="role1"
                id="role1"
                value={formData.role1}
                onChange={handleChange}
                required
              />
              <input
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Role 2"
                type="text"
                name="role2"
                id="role2"
                value={formData.role2}
                onChange={handleChange}
                required
              />
              <textarea
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Bio"
                name="bio"
                id="bio"
                rows="4"
                value={formData.bio}
                onChange={handleChange}
              ></textarea>
            </>
          )}

          {currentStep === 2 && (
            <>
              <h1 className='font-customFont tracking-wide text-xl text-center'>Page 2 Details</h1>
              <input
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Name"
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Email"
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Phone No"
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <label className='text-xl text-white font-customFont tracking-wider' htmlFor="exprienceYear1">Experience 1</label>
              <label className='text-sm text-white font-customFont tracking-widest' htmlFor="exprienceYear1">Note: If you dont have any experience, than dont fill the experience section keep it as it is.</label>
              <input
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Joining Year"
                type="text"
                name="experienceYear1"
                id="experienceYear1"
                value={formData.experienceYear1}
                onChange={handleChange}
              />
              <input
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Role"
                type="text"
                name="experienceRole1"
                id="experienceRole1"
                value={formData.experienceRole1}
                onChange={handleChange}
              />
              <textarea
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Details , Example : what you did in the job."
                name="experienceDetail1"
                id="experienceDetail1"
                rows="4"
                value={formData.experienceDetail1}
                onChange={handleChange}
              ></textarea>
              <label className='text-xl text-white font-customFont tracking-wider' htmlFor="exprienceYear2">Experience 2</label>
              <input
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Joining Year"
                type="text"
                name="experienceYear2"
                id="experienceYear2"
                value={formData.experienceYear2}
                onChange={handleChange}
              />
              <input
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Role"
                type="text"
                name="experienceRole2"
                id="experienceRole2"
                value={formData.experienceRole2}
                onChange={handleChange}
              />
              <textarea
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Details , Example : what you did in the job."
                name="experienceDetail2"
                id="experienceDetail2"
                rows="4"
                value={formData.experienceDetail2}
                onChange={handleChange}
              ></textarea>
              <label className='text-xl text-white font-customFont tracking-wider' htmlFor="education">Education</label>
              <input
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder=" School or College Name"
                type="text"
                name="CollegeName1"
                id="CollegeName1"
                value={formData.CollegeName1}
                onChange={handleChange}
              />
              <input
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Qualification, ex: 10th, 12th"
                type="text"
                name="CollegeBranch1"
                id="CollegeBranch1"
                value={formData.CollegeBranch1}
                onChange={handleChange}
              />
              <input
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="School or College name 2"
                type="text"
                name="CollegeName2"
                id="CollegeName2"
                value={formData.CollegeName2}
                onChange={handleChange}
              />
              <input
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Qualification, ex: BE, BCOM , etc."
                type="text"
                name="CollegeBranch2"
                id="CollegeBranch2"
                value={formData.CollegeBranch2}
                onChange={handleChange}
              />
              <label className='text-xl text-white font-customFont tracking-wider' htmlFor="exprienceYear1">Skills</label>
              <input
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Skill No 1 Example : DSA"
                type="text"
                name="skill1"
                id="skill1"
                value={formData.skill1}
                onChange={handleChange}
              />
              <input
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Skill No 2 Example : Problem Solving"
                type="text"
                name="skill2"
                id="skill2"
                value={formData.skill2}
                onChange={handleChange}
              />
              <input
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Skill No 3 Example : Team Work"
                type="text"
                name="skill3"
                id="skill3"
                value={formData.skill3}
                onChange={handleChange}
              />
              <input
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Skill No 4 Example : Leadership"
                type="text"
                name="skill4"
                id="skill4"
                value={formData.skill4}
                onChange={handleChange}
              />
            </>
          )}

          {currentStep === 3 && (
            <>
              <h1 className='font-customFont tracking-wide text-xl text-center'>Page 3 Details</h1>
              <label className='text-xl text-white font-customFont tracking-wider' htmlFor="exprienceYear1">Project 1</label>
              <input
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Name of First Project"
                type="text"
                name="Project1Name"
                id="Project1Name"
                value={formData.Project1Name}
                onChange={handleChange}
              />
              <input
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Which year you build the project(In Year)"
                type="text"
                name="Project1Date"
                id="Project1Date"
                value={formData.Project1Date}
                onChange={handleChange}
              />
              <input
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Github Link of Project"
                type="text"
                name="Project1Link"
                id="Project1Link"
                value={formData.Project1Link}
                onChange={handleChange}
              />
              <textarea
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Details, Example : Features of your Project"
                name="Project1Detail"
                id="Project1Detail"
                rows="4"
                value={formData.Project1Detail}
                onChange={handleChange}
              ></textarea>
              <label className='text-xl text-white font-customFont tracking-wider' htmlFor="exprienceYear1">Project 2</label>
              <input
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Name of Second Project"
                type="text"
                name="Project2Name"
                id="Project2Name"
                value={formData.Project2Name}
                onChange={handleChange}
              />
              <input
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Which year you build the project(In Year)"
                type="text"
                name="Project2Date"
                id="Project2Date"
                value={formData.Project2Date}
                onChange={handleChange}
              />
              <input
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Github Link of Project"
                type="text"
                name="Project2Link"
                id="Project2Link"
                value={formData.Project2Link}
                onChange={handleChange}
              />
              <textarea
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Details, Example : Features of your Project"
                name="Project2Detail"
                id="Project1Detail"
                rows="4"
                value={formData.Project2Detail}
                onChange={handleChange}
              ></textarea>
              <label className='text-xl text-white font-customFont tracking-wider' htmlFor="exprienceYear1">Project 3</label>
              <input
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Name of Third Project"
                type="text"
                name="Project3Name"
                id="Project3Name"
                value={formData.Project3Name}
                onChange={handleChange}
              />
              <input
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Which year you build the project(In Year)"
                type="text"
                name="Project3Date"
                id="Project3Date"
                value={formData.Project3Date}
                onChange={handleChange}
              />
              <input
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Github Link of Project"
                type="text"
                name="Project3Link"
                id="Project3Link"
                value={formData.Project3Link}
                onChange={handleChange}
              />
              <textarea
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Details, Example : Features of your Project"
                name="Project3Detail"
                id="Project3Detail"
                rows="4"
                value={formData.Project3Detail}
                onChange={handleChange}
              ></textarea>
            </>
          )}

          <div className="flex justify-between w-full">
            {currentStep > 1 && (
              <button
                type="button"
                class="bg-white text-center w-[45%] md:w-[40%] rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group "
                onClick={prevStep}
              >
                <div
                  class="bg-green-400 rounded-xl h-12 w-[35%] md:w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-full z-10 duration-500"
                >
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#000000"
                      d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                    ></path>
                    <path
                      fill="#000000"
                      d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                    ></path>
                  </svg>
                </div>
                <p class="translate-x-2 text-right md:text-center">Previous</p>
              </button>

            )}
            {currentStep < 3 ? (
              <button
              type="button"
              class="bg-white text-center w-[45%] md:w-[40%] rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group flex gap-1 items-center md:block"
              onClick={nextStep}
            >
              <div
                class="bg-blue-400 rounded-xl h-12 w-[32%] md:w-1/4 flex items-center justify-center absolute right-1 top-[4px] group-hover:w-full z-10 duration-500"
              >
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#000000"
                    d="M800 544H160a32 32 0 0 1 0-64h640a32 32 0 0 1 0 64z"
                  ></path>
                  <path
                    fill="#000000"
                    d="M786.752 512 521.344 246.656a32 32 0 1 1 45.312-45.312l288 288a32 32 0 0 1 0 45.312l-288 288a32 32 0 0 1-45.312-45.312L786.752 512z"
                  ></path>
                </svg>
              </div>
              <p class="translate-x-2">Next</p>
            </button>
            
            ) : (
              <button
                type="button"
                className="w-1/3 p-2 bg-gray-50 rounded-full font-bold text-gray-900 border-[4px] border-gray-700 hover:border-blue-500 transition-all duration-200"
                onClick={handleDownload}
              >
                Download Portfolio
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default PortfolioForm;
