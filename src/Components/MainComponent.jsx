import React, { useState, useRef } from 'react';
import PortfolioForm from './Form';

function MainComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bio: '',
    role1: '',
    role2: '',
    experienceYear1: '',
    experienceRole1: '',
    experienceDetail1: '',
    experienceYear2: '',
    experienceRole2: '',
    experienceDetail2: '',
    CollegeName1: '',
    CollegeBranch1: '',
    CollegeName2: '',
    CollegeBranch2: '',
    skill1: '',
    skill2: '',
    skill3: '',
    skill4: '',
    Project1Name: '',
    Project1Date: '',
    Project1Link: '',
    Project1Detail: '',
    Project2Name: '',
    Project2Date: '',
    Project2Link: '',
    Project2Detail: '',
    Project3Name: '',
    Project3Date: '',
    Project3Link: '',
    Project3Detail: '',
  });

  const previewWindowRef = useRef(null);

  const handleInputChange = (updatedData) => {
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData, ...updatedData };
      if (previewWindowRef.current) {
        previewWindowRef.current.postMessage({ formData: newFormData }, window.location.origin);
      }
      return newFormData;
    });
  };


  const openPreviewInNewTab = () => {
    if (previewWindowRef.current) {
      previewWindowRef.current.close();
    }
    previewWindowRef.current = window.open('/preview', '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-900 py-12 px-1 sm:px-4 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className='font-customFont text-4xl font-bold text-center text-white tracking-wide mb-8'>
          Portfolio Builder
        </h1>

        <div className="mb-6 flex justify-center">
          <button class="bg-slate-950 text-slate-400 border border-slate-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
          onClick={openPreviewInNewTab}
          >
            <span class="bg-slate-400 shadow-slate-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Open Live Preview in New Tab
          </button>
        </div>

        <div className="bg-slate-900 shadow-lg rounded-lg overflow-hidden">
          <div className="p-2">
            <PortfolioForm formData={formData} onInputChange={handleInputChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
