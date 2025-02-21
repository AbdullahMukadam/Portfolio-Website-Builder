import React, { useState } from 'react'

function Navbar() {
    const [open, setOpen] = useState(false)

    const hnadlenav = () => {
        setOpen(!open)
        
    }
    return (
        
        <div className='w-full bg-red-500 relative '>
            <div className={`absolute z-40 w-full bg-red-500 rounded-lg ${open ? "h-screen " : "h-0"} transition-all transition-800 flex items-center justify-center md:hidden`}>
               <div className={`w-[50%] h-[50%] flex items-center flex-col  ${open ? "block transition-all transition-300 delay-500" : "hidden"}`}>
                  <a href="#home" className={`text-[19vw] font-customFont  capitalize hover:border-b-4 border-black m-0 transition-all transition-300`}>Home</a>
                    <a href="#projects" className={`text-[19vw] font-customFont  capitalize hover:border-b-4 border-black transition-all transition-300`}>Projects</a>
                  
               </div>
            </div>
            <div className='w-full bg-red-500 relative flex items-center justify-between'>
            <div className='w-[50%] h-full bg-red-500 p-2'>
                <img className='h-16 mix-blend-multiply' src="/logo.png" alt="logo" />
            </div>
            <div className='w-[50%] h-full p-2 flex justify-end z-50 ' >
                <label
                    htmlFor="nav_bar_icon"
                    className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center space-y-1.5 md:hidden"
                    
                >
                    <input id="nav_bar_icon" type="checkbox" className="hidden peer" onClick={hnadlenav}/>
                    <div
                        className="w-2/3 h-1.5 bg-black rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[-30deg] peer-checked:translate-y-[-5px]"
                    ></div>
                    <div
                        className="w-full h-1.5 bg-black rounded-lg transition-all duration-300 origin-center peer-checked:rotate-90 peer-checked:translate-x-4"
                    ></div>
                    <div
                        className="w-2/3 h-1.5 bg-black rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[30deg] peer-checked:translate-y-[5px]"
                    ></div>
                </label>
                <div className='w-full hidden h-full md:block'>
                    <div className='w-full h-full flex items-center gap-7 justify-end'>
                    <a href="/#home" className='text-[3vw] font-customFont capitalize hover:border-b-4 border-black m-0 transition-all transition-300'>Home</a>
                    <a href="/#project" className='text-[3vw] font-customFont capitalize hover:border-b-4 border-black transition-all transition-300'>Projects</a>
                   
                    </div>
               
                </div>
                
            </div>
            </div>
            
        </div>
    )
}

export default Navbar
