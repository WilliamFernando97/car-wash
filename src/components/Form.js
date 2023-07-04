import React, {useState} from "react";
import PersonalInfo from "./PersonalInfo";
import CarInfo from "./CarInfo";
//import SignUpInfo from "./SignUpInfo";
import ServiceList from "./ServiceList";
import FinishOrder from "./FinishOrder";
import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1',
    sessionToken: process.env.REACT_APP_AWS_SESSION_TOKEN
    });


function Form() {
    const [page,setPage] = useState(0);
    const [formData, setFormData] =useState({
        nombres: "",
        apellidos:"",
        email:"",
        telefono:"",
        identificacion:"",
        tipo_identificacion:"",
        marca: "",
        modelo:"",
        placa:"",
        nivel:"",
        informacion:"",
        servicios:"",
    });



    const FormTitles = ["Datos del cliente","Datos del vehículo","Selección de servicios","Orden de trabajo"];

    const PageDisplay = () => {
        if (page === 0) {
            return <PersonalInfo  formData={formData} setFormData={setFormData}/>;
        } else if (page === 1) {
            return <CarInfo formData={formData} setFormData={setFormData} />;
        } else if (page === 2) {
            return <ServiceList formData={formData} setFormData={setFormData} />;
        } else  {
            return <FinishOrder />;
        }
    }

    return (<div className = "form">
                <div className="progressbar">
                    <div 
                    
                        style={{width: page===0 ? "25%" : page == 1 ? "50%" : page == 2 ? "75%" : "100%"}}>

                    </div>
                    
                    </div>
                
                <div className="form-container">
                <div className="header"><h1>Taller Automecánico Hamilton</h1></div>
                    <h1>{FormTitles[page]}</h1>
                <div className="body">{PageDisplay()}</div>
                <div className="footer">
                    <button
                        disabled={page == 0}
                        onClick={()=>{
                            setPage((currPage)=>currPage - 1)}}                         
                        >Anterior
                    </button>
                    <button
                        onClick={() => {
                        if (page === FormTitles.length - 1) {
                            alert("Formulario Enviado");
                            console.log(formData);
                        } else {
                            setPage((currPage) => currPage + 1);
                        }
                        }}>
                            {page === FormTitles.length - 1 ? "Enviar" : "Siguiente"}
                    </button>
                </div>
                </div>
        </div>);
}

export default Form

