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
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gray-900 rounded-2xl shadow-xl border border-gray-800">
          <form className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Portfolio Information</h1>
              <div className="flex justify-center gap-2 mb-4">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`w-3 h-3 rounded-full ${currentStep >= step ? 'bg-blue-500' : 'bg-gray-600'
                      }`}
                  />
                ))}
              </div>
              <p className="text-gray-400">Step {currentStep} of 3</p>
            </div>

            <div className="space-y-6">
              {currentStep === 1 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-white text-center mb-6">Basic Information</h2>
                  <div>
                    <input
                      className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      placeholder="Primary Role"
                      type="text"
                      name="role1"
                      value={formData.role1}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      placeholder="Secondary Role"
                      type="text"
                      name="role2"
                      value={formData.role2}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <textarea
                      className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      placeholder="Professional Bio"
                      name="bio"
                      rows="4"
                      value={formData.bio}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-white text-center mb-6">Experience & Skills</h2>
                 
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      placeholder="Full Name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <input
                      className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      placeholder="Email Address"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-white mb-4">Experience</h3>
                    <h3 className='text-lg font-semibold text-white text-center mb-6'>Note: If you dont have any experience then dont fill the details, keep it as it is.</h3>
                    <div className="space-y-6">
                      {[1, 2].map((expNum) => (
                        <div key={expNum} className="space-y-4 p-4 bg-gray-800 rounded-lg">
                          <input
                            className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                            placeholder="Year"
                            type="text"
                            name={`experienceYear${expNum}`}
                            value={formData[`experienceYear${expNum}`]}
                            onChange={handleChange}
                          />
                          <input
                            className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                            placeholder="Position"
                            type="text"
                            name={`experienceRole${expNum}`}
                            value={formData[`experienceRole${expNum}`]}
                            onChange={handleChange}
                          />
                          <textarea
                            className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                            placeholder="Job Description"
                            name={`experienceDetail${expNum}`}
                            rows="3"
                            value={formData[`experienceDetail${expNum}`]}
                            onChange={handleChange}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-white mb-4">Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[1, 2, 3, 4].map((skillNum) => (
                        <input
                          key={skillNum}
                          className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                          placeholder={`Skill ${skillNum}`}
                          type="text"
                          name={`skill${skillNum}`}
                          value={formData[`skill${skillNum}`]}
                          onChange={handleChange}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-white text-center mb-6">Projects</h2>
                  {[1, 2, 3].map((projectNum) => (
                    <div key={projectNum} className="space-y-4 p-6 bg-gray-800 rounded-lg">
                      <h3 className="text-lg font-medium text-white">Project {projectNum}</h3>
                      <input
                        className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                        placeholder="Project Name"
                        type="text"
                        name={`Project${projectNum}Name`}
                        value={formData[`Project${projectNum}Name`]}
                        onChange={handleChange}
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                          placeholder="Year"
                          type="text"
                          name={`Project${projectNum}Date`}
                          value={formData[`Project${projectNum}Date`]}
                          onChange={handleChange}
                        />
                        <input
                          className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                          placeholder="GitHub Link"
                          type="text"
                          name={`Project${projectNum}Link`}
                          value={formData[`Project${projectNum}Link`]}
                          onChange={handleChange}
                        />
                      </div>
                      <textarea
                        className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                        placeholder="Project Details"
                        name={`Project${projectNum}Detail`}
                        rows="3"
                        value={formData[`Project${projectNum}Detail`]}
                        onChange={handleChange}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-200 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </button>
              )}

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 flex items-center gap-2 ml-auto"
                >
                  Next
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleDownload}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200 flex items-center gap-2 ml-auto"
                >
                  Download Portfolio
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PortfolioForm;
