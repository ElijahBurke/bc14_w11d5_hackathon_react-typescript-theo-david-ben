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
        <div className="inputsearch">
        <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText onChange={handleInputChange}  className="input-search" placeholder="Search" />
        </span>
        <div className="card flex justify-content-center">
        <Button className="button-search" onClick={handleClick} label="Submit" />
        </div>
    </div>
    </div>
    
  )
}

export default Inputs