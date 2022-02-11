import "../styles/login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Upper from "./Upper";
import LogoName from "./LogoName";
import Midbar from "./Midbar";
// import { useTranslation } from "react-i18next";
const Login = () => {
//   const { t } = useTranslation();
  const [displayMessage,setDisplayMessage] = useState(false)
  const [signin, setSignin] = useState({
    email: "",
    password: "",
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

      let resp = await fetch("http://localhost:3030/signup/login", {
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
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <Upper/>
    <LogoName/>
    <Midbar/>
    
    {/* {displayMessage === false ?  */}
     {/* <div className=" text-center">
        <h1 className="display-4">Hello, there!</h1>
          <p className="lead">
            You are about to witness the strength of{" "}
            <strong>
              <em>street knowledge</em>
            </strong>{" "}
          </p> 
      </div>*/}
      <div className="container-fluid ">
        <div className="content">
          <div className="login-with-social mt-4">
            {/* <div className="row justify-content-center">
              <div className="col-xs-12">
                  <h6 className="to-login">To continue, log in.</h6>
                </div> 
            </div>*/}
            <div className="row justify-content-center">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 res">
                <Form className="" onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="email"
                      onChange={(e) => handleInput("email", e.target.value)}
                      value={signin.email}
                    />
                    <Form.Text className="text-muted">
                     {/*  {t("emailshare")} */}
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="password"
                      onChange={(e) => handleInput("password", e.target.value)}
                      value={signin.password}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="d-flex justift-item-center mt-3 ml-3">
                   Submit
                  </Button>
                </Form>

                <div id="sign-up-section">
        <div className="row justify-content-center">
          <div className="col-xs-12 col-md-12 my-2 my-md-1 my-lg-1">
            <div className="divider">{/* <strong>OR</strong> */}</div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xs-12 col-sm-10 col-md-12 col-lg-12 col-xl-12 ">
            <div>
              <h5 className="text-center my-3 dont-have-acc">
                Don't have an account?
              </h5>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-2">
          <div className="col-xs-12 col-sm-10 col-md-12 col-lg-12 col-xl-12 ">
            <div>
              <Link to="/user-signup">
                <button
                  type="button"
                  className="btn btn-outline-secondary signup-btn"
                >
                  SIGN UP
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>


                {/* ************************* */}
              </div>
            </div>
          </div>
        </div>
      </div>:
     {/*  <p>Successfully Logged in!</p>}
      */}
    </>
  );
};

export default Login;
