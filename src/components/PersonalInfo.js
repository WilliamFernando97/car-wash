import React from "react";
import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1',
    sessionToken: process.env.REACT_APP_AWS_SESSION_TOKEN
    });

function PersonalInfo({formData, setFormData}) {
    

    return (
        <div className = "personal-info-container">
            <input 
                type="text" 
                placeholder="Nombres Completos" 
                value={formData.nombres} 
                onChange={(e) => {
                    setFormData({...formData, nombres: e.target.value });
                    }}/>
            
            <input 
                type="text" 
                placeholder="Email" 
                value={formData.email} 
                onChange={(e) => {
                    setFormData({...formData, email: e.target.value });
                    }}/>
            
            
            <input 
                type="text" 
                placeholder="Numero de Contacto" 
                value={formData.telefono} 
                onChange={(e) => {
                    setFormData({...formData, telefono: e.target.value });
                    }}/>
            
            
            <input 
                type="text" 
                placeholder="Identificacion Fiscal" 
                value={formData.identificacion} 
                onChange={(e) => {
                    setFormData({...formData, identificacion: e.target.value });
                    }}/>
            
            
            <input 
                type="text" 
                placeholder="Tipo de Identificación" 
                value={formData.tipo_identificacion} 
                onChange={(e) => {
                    setFormData({...formData, tipo_identificacion: e.target.value });
                    }}/>
            

        </div>
        
    )
}

export default PersonalInfo;