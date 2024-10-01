import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import FormPage from './pages/FormPage/FormPage';
import ResultsPage from './pages/ResultsPage/ResultsPage';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


const App: React.FC = () => {
  return (
    <Router>
      {/* <div id="root"> */}
        <Header />
        {/* Routes setup */}
        <div className="content">
          <Routes>
            {/* <Route path="/" element={<FormPage />} /> */}
            <Route path="/" element={<Navigate to="/form" replace />} />
            <Route path="/form" element={<FormPage />} /> 
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </div>
        <Footer />
      {/* </div> */}
    </Router>
  );
};

export default App;
