import Upper from "./Upper";
import Midbar from "./Midbar";
import LogoName from "./LogoName";
import { Container,Row,Col } from "react-bootstrap";
import "../styles/placements.css"
import { useState } from "react";
import { Link } from "react-router-dom";


const Placements =()=>{
    const [showimage,setShowImage] = useState(false)

    const showImageClick=()=>{
        setShowImage(true)
    }
 return(<>
 <Upper />
      <LogoName />
      <Midbar />
      
 {/* <Container className="myplacement mt-5">
      <Row>
          <Col md={1} className="active "><a  href="/">Home</a></Col>
    <Col md={1} className="active "> <a href="#news">About</a></Col>
    <Col md={2} className="active mr-0"> <a href="/admission" >Admission</a></Col>
    <Col md={2} className="active "><a href="/Departments" >Departments</a></Col>
    <Col md={1} className="active "><a href="#contact">Contact</a></Col>
    <Col md={1} className="active "> <a href="/placements">Placements</a></Col>
    <Col md={1} className="active "> <a href="#contact">Events</a></Col>
    <Col md={1} className="active "> <a href="/login" >Login</a></Col>
    
    </Row>
    </Container> */}
   
    <div className="container mt-5">           
  <table className="table table-bordered myplacement">
    <thead>
      <tr>
          <Link to="/">
        <th >Home</th>
       </Link>
        <th>Placement Statistics</th>
        <th onClick={showImageClick}>Our Recruiter</th>
        <th>Activities</th>
      </tr>
    </thead>
   
  </table>
</div>

    {
        showimage?<div className="d-flex justify-content-around"><img src="https://www.bits-pilani.ac.in/uploads/Pilani/pilanimanagementadmin/content/Past-Logos3.jpg"></img></div>:null
    }
    
 </>)
}
export default Placements