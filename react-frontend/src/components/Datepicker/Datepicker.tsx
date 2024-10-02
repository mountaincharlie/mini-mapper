import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import './Datepicker.scss';


interface DatepickerProps {
  label: string;
  date: Date| null;
  onChange: (date: Date | null) => void;
}

const Datepicker: React.FC<DatepickerProps> = ({ label, date, onChange }) => {
  return (
    <div className="datepicker">
      <label>{label}</label>
      <DatePicker
        selected={date}
        onChange={onChange} //only when value has changed
      />
    </div>
  );
};

export default Datepicker;
