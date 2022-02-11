import { Form, Button } from "react-bootstrap";
 import { useTranslation } from "react-i18next"; 
import { useState } from "react";
import Upper from "./Upper";
import Midbar from "./Midbar";
import LogoName from "./LogoName";

const Signup =()=>{
     const { t } = useTranslation(); 
    const [show,setShow]= useState(false)
    const [signin, setSignin] = useState({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      checkbox: false,
    });
   
   
    const handleInput = (propertyName, value) => {
      setSignin({
        ...signin,
        [propertyName]: value,
      });
    };
  
    const handleSubmit = async (e) => {
      try {
        e.preventDefault();
  
        let resp = await fetch("http://localhost:3030/signup", {
          method: "POST",
          body: JSON.stringify(signin),
          headers: {
            "Content-type": "application/json",
          },
        });
        if (resp.ok) {
          let data = await resp.json();
          console.log(data);
          setSignin({
            firstname: "",
      lastname: "",
      email: "",
      password: "",
      checkbox: true,
          });
          setShow(true)
           
       
      }
      } catch (error) {
        console.log(error)
      
      }
    };
    return(
        <>
         <div className="container-fluid ">
          <div className="content">
            <div className="login-with-social mt-4">
              <div className="row justify-content-center">
                {/* <div className="col-xs-12">
                  <h6 className="to-login">To continue, log in.</h6>
                </div> */}
              </div>
              <div className="row justify-content-center">
                
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 res">
        { show === false ?
      <Form className="" onSubmit={handleSubmit}>
    
        <Form.Group controlId="formBasicEmail">
          <Form.Label>{t("firstname")}</Form.Label>
          <Form.Control  placeholder=""  onChange={(e) => handleInput("firstname", e.target.value)}
                value={signin.firstname}
                type="text"/>
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>{t("lastname")}</Form.Label>
          <Form.Control  placeholder=""  onChange={(e) => handleInput("lastname", e.target.value)}
                value={signin.lastname}
                type="text"/>
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>{t("email")}</Form.Label>
          <Form.Control type="email" placeholder={t("email")} onChange={(e) => handleInput("email", e.target.value)}
                value={signin.email}
                /> 
          <Form.Text className="text-muted">{t("emailshare")}</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>{t("password")}</Form.Label>
          <Form.Control type="password" placeholder={t("password")}  onChange={(e) => handleInput("password", e.target.value)}
                value={signin.password}
               />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label={t("checkbox")}  onChange={(e) => handleInput("checkbox", e.target.checked)}
                value={signin.checkbox}
                />
        </Form.Group>
        <Button variant="primary" type="submit">
          {t("starttochat")}
        </Button>
      </Form> :

    /*  <Upper />
      <LogoName />
      <Midbar /> */
        <p className="text-dark">Thank you for your interest!</p>
    
    }
     </div>
            </div>
            </div>
            </div>
            </div>
        </>
    )
}
export default Signup