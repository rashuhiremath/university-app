import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "../styles/midbar.css";
import "../styles/dropdown.css";
import Departments from "./Departments";
import Admission from "./Admission";
const Midbar = () => {
  const [department, setDepartment] = useState(false);
  const [admission, setAdmission] = useState(false);
  const [login, setLogin] = useState(false);
  const departmentClick = () => {
    setDepartment(true);
  };
  const admissionClick = () => {
    setDepartment(false);
    setAdmission(true);
  };
  const loginClick = () => {
    setDepartment(false);
    setAdmission(false);
    setLogin(true);
  };
  return (
    <>
      <div className="topnav fixed">
        <Container>
          <Row className="d-flex">
            <Col className="active ">
              <a href="/">Home</a>
            </Col>
            <Col className="active ">
              {" "}
              <a href="#news">About</a>
            </Col>
            <Col className="active mr-0">
              {" "}
              <a href="/admission" onClick={admissionClick}>
                Admission
              </a>
            </Col>
            <Col className="active ">
              <a href="/Departments" onclick={departmentClick}>
                Departments
              </a>
            </Col>
            <Col className="active ">
              <a href="#contact">Contact</a>
            </Col>
            <Col className="active ">
              {" "}
              <a href="/placements">Placements</a>
            </Col>
            
            <Col className="active ">
              {" "}
              <a href="/login" onClick={loginClick}>
                Login
              </a>
            </Col>
            <Col className=" d-flex active ">
            {" "}
              <select className=" lang"
               
                /*  value={localStorage.getItem("i18nextlng")}
              onChange={handleChange} */
              >
                {/* <BiWorld size={30}/> */}
                <option value="en" >
                  en
                </option>
                <option value="de" >
                  de
                </option>
              </select>
            </Col>
          </Row>
        </Container>
        {department ? <Departments /> : null}
        {admission ? <Admission /> : null}
      </div>
      <div style={{ paddingLeft: 16 }}></div>
    </>
  );
};

export default Midbar;
