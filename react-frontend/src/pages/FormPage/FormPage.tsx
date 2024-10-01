import React, { useState } from 'react';
import Dropdown from '../../components/Dropdown/Dropdown';
import Map from '../../components/Map/Map';
import './FormPage.scss';

// Define the type for your options
interface DropdownOption {
  label: string;
  value: string;
}

const FormPage: React.FC = () => {
  // state management
  const [sensor, setSensor] = useState<string>('');
  const [analysis, setAnalysis] = useState<string>('');
  // const [aoi, setAoi] = useState<any>(null); // Store the selected AOI

  // dropdown options
  const sensorOptions: DropdownOption[] = [
    { label: 'Sentinel-2', value: 'Sentinel-2' }
  ];
  
  const analysisOptions: DropdownOption[] = [
    { label: 'NDVI', value: 'NDVI' }
  ];

  // handlers
  const handleSensorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSensor(e.target.value);
  };

  const handleAnalysisChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAnalysis(e.target.value);
  };

  // const handleDraw = (drawnAoi: any) => {
  //   setAoi(drawnAoi);
  //   console.log("AOI drawn: ", drawnAoi);
  // };

  // formpage content
  return (
    <div className="form-page">
      <div className="form-page-dropdowns">
        {/* Sensors dropdown */}
        <Dropdown
          label="Sensor Type"
          options={sensorOptions}
          value={sensor}
          onChange={handleSensorChange}
        />
        {/* anaysis type dropdown */}
        <Dropdown
          label="Analysis Type"
          options={analysisOptions}
          value={analysis}
          onChange={handleAnalysisChange}
        />
      </div>
      
      <Map />
      {/* <Map onDraw={handleDraw} /> */}
      {/* {aoi && <p>AOI Selected: {JSON.stringify(aoi)}</p>} */}
    </div>
  );
};

export default FormPage;
