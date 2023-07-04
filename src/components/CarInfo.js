import React, {useState} from "react";
import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1',
    sessionToken: process.env.REACT_APP_AWS_SESSION_TOKEN
    });

function CarInfo({formData, setFormData}) {
    return (
        <div className = "car-info-container">
        <input 
            type="text" 
            placeholder="Marca" 
            value={formData.marca} 
            onChange={(e) => {
                setFormData({...formData, marca: e.target.value });
                }}/>
        
        <input 
            type="text" 
            placeholder="Modelo" 
            value={formData.modelo} 
            onChange={(e) => {
                setFormData({...formData, modelo: e.target.value });
                }}/>
        
        
        <input 
            type="text" 
            placeholder="Placa" 
            value={formData.placa} 
            onChange={(e) => {
                setFormData({...formData, placa: e.target.value });
                }}/>
        
        
        <input 
            type="text" 
            placeholder="Nivel Tanque de Gasolina" 
            value={formData.nivel} 
            onChange={(e) => {
                setFormData({...formData, nivel: e.target.value });
                }}/>
        
        
        <input 
            type="text" 
            placeholder="Información Adicional" 
            value={formData.informacion} 
            onChange={(e) => {
                setFormData({...formData, informacion: e.target.value });
                }}/>




        </div>
    )
}

export default CarInfo;