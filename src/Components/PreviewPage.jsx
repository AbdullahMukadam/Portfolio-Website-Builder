import React, { useEffect, useState } from 'react';
import Preview from './Preview';

function PreviewPage() {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== window.location.origin) return; 
      const data = event.data;
      if (data && data.formData) {
        
        setFormData(data.formData);
      }
    };
  
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return <Preview formData={formData} />;
}

export default PreviewPage;
