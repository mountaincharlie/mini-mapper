import React, { useState } from 'react';
import Datepicker from '../../components/Datepicker/Datepicker';
import Dropdown from '../../components/Dropdown/Dropdown';
import Map from '../../components/Map/Map';
import Drawtools from '../../components/Drawtools/Drawtools';
import Button from '../../components/Button/Button';
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
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [aoi, setAoi] = useState<any>(null);

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

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    // TODO: check if end date is before start date => note to user
    // this will only trigger an error response though if the Submit is selected
    setEndDate(date);
  };

  const handleDrawCreate = (e: DrawEvents.Created) => {
    const layer = e.layer;
    const drawnGeoJSON = layer.toGeoJSON(); // convert AOI to GeoJSON (for GEE)
    setAoi(drawnGeoJSON);
  };

  const handleDrawDelete = () => {
    setAoi(null); // Clear the AOI when deleted
  };

  const handleSubmit = () => {
    console.log('submit clicked')
  };

  const handleClearForm = () => {
    setSensor('');
    setAnalysis('');
    setStartDate(null);
    setEndDate(null);
    setAoi(null)
  };

  // formpage content
  return (
    <div className="form-page">
      <div className="form-page-inputs">
        {/* Sensors dropdown */}
        <Dropdown
          label="Sensor"
          options={sensorOptions}
          value={sensor}
          onChange={handleSensorChange}
        />
        {/* anaysis type dropdown */}
        <Dropdown
          label="Analysis"
          options={analysisOptions}
          value={analysis}
          onChange={handleAnalysisChange}
        />
        {/* start date picker */}
        <Datepicker
          label="Start Date"
          date={startDate}
          onChange={handleStartDateChange}
        />
        {/* end date picker */}
        <Datepicker
          label="End Date"
          date={endDate}
          onChange={handleEndDateChange}
        />
      </div>
      
      {/* map with drawtools */}
      <Map>
        <Drawtools
          onDrawCreate={handleDrawCreate}
          onDrawDelete={handleDrawDelete}
        />
      </Map>
      {/* aoi textarea */}
      <div className="form-page-aoi">
        <textarea
          className="form-page-aoi-textarea"
          value={aoi ? JSON.stringify(aoi, null, 2) : 'Draw an AOI on the map using the tools in the top right corner'}
          readOnly
        />
       
        <div className="form-page-aoi-buttons-container">
          {/* copy GeoJSON to clipboard - add disable class if no aoi*/}
          <Button
            label="Copy JSON"
            onClick= {handleSubmit}
          />

          {/* clear form */}
          <Button 
          label="Clear"
          onClick= {handleClearForm}
          />
          
          {/* submit */}
          <Button 
          label="Submit"
          onClick= {handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default FormPage;
