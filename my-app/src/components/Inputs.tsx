import React, { ChangeEvent } from 'react'; 
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";


interface InputsProps {
  handleClick: () => void;
  handleCityName: (cityName: string) => void;
}

const Inputs: React.FC<InputsProps> = ({ handleClick, handleCityName }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleCityName(event.target.value);
  };

  return (
    <div className="inputs">
    <div className="card flex justify-content-center">
            <Button onClick={handleClick} label="Submit" />
        </div>
        <br />
        <div className="card flex flex-wrap justify-content-center gap-3">
        <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText onChange={handleInputChange} placeholder="Search" />
        </span>
    </div>
    </div>
  )
}

export default Inputs