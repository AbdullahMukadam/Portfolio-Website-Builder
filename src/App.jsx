import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainComponent from './Components/MainComponent';
import PreviewPage from './Components/PreviewPage';
import Home from './Components/Home';


function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preview" element={<PreviewPage />} />
        <Route path="/maincomponent" element={<MainComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
