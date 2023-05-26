import React from 'react'; import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";


function Inputs(handleClick: any) {

  

  return (
    <div className="inputs">Inputs
    <div className="card flex justify-content-center">
            <Button label="Submit" />
        </div>
        <br />
        <div className="card flex flex-wrap justify-content-center gap-3">
        <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText placeholder="Search" />
        </span>
    </div>
    </div>
  )
}

export default Inputs