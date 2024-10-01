import React, { useState } from 'react';
import Map from '../../components/Map/Map';
import './ResultsPage.scss';

const ResultsPage: React.FC = () => {


  // results content
  return (
    <div className="form-page">
      <h1>Results</h1>
      <Map />
    </div>
  );
};

export default ResultsPage;
