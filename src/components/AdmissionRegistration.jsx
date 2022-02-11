import { Card,Container,Row } from "react-bootstrap";
 import "../styles/admissionregister.css"
const AdmissionRegistration = () => {
  return (
    <>
    
    <div className="admission"> 
    
     <img
                  src="https://wallpaperaccess.com/full/1209573.jpg"
                  alt="First slide"
                className="w-100 "
                
                />
                </div>
      
            <div className="row justify-content-center">
             
            
              <Card className="shadow mt-3">
                <Card.Body>
                  <h3>Calibre University of Technology</h3>
                  <p>Admission Enquiry Form</p>
                </Card.Body>
              </Card>
             
             
             </div>
          
      
    </>
  );
};

export default AdmissionRegistration;
