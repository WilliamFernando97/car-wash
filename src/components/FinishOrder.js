import React, {Component} from "react";
import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1',
    sessionToken: process.env.REACT_APP_AWS_SESSION_TOKEN
    });


function FinishOrder({formData, setFormData}) {

    return(
        <div className = "summary-info-container"> 
        <ul > 
        <li>Nombres: </li>
        <li>Apellidos: </li>
        <li>Email:</li>
        <li>Teléfono: </li>
        <li>Identificación: </li>
        <li>Tipo de Identificación: </li>
        <li>Marca: </li>
        <li>Modelo: </li>
        <li>Placa:</li>
        <li>Nivel: </li>
        <li>Información: </li>
        <li>Servicios: </li>
        </ul>
      </div>
    );
}



export default FinishOrder;