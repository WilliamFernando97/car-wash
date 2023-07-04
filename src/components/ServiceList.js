import React, {useState} from "react";

import Select from "react-select";
import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1',
    sessionToken: process.env.REACT_APP_AWS_SESSION_TOKEN
    });


function ServiceList({formData, setFormData}) {


    const [selectedOptions, setSelectedOptions] = useState();
    const optionList = [
      { value: "aceite", label: "Cambio de Aceite" },
      { value: "frenos", label: "Cambio de Frenos" },
      { value: "alineacion", label: "Alineación y Balanceo" },
      { value: "diagnostico", label: "Diagnostico General" },
      { value: "electrico", label: "Revisión Sistema Eléctrico" },
      { value: "suspension", label: "Revisión Suspensión" },
      { value: "pintura", label: "Aplicación Nueva Capa De Pintura" },
      { value: "lavado", label: "Lavado Completo" },
      { value: "blindaje", label: "Blindaje Completo" }
  
    ];
  
    function handleSelect(data) {
      setSelectedOptions(data);
      setFormData({...formData,selectedOptions:data});
    }

    return (
        <div className="dropdown-container"> 
        <Select         
          options={optionList}
          placeholder="Seleccione Los Servicios Deseados"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti
        />
      </div>
    );
}

export default ServiceList;