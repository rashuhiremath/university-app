import "../styles/footer.css";
import { Container, Row, Col } from "react-bootstrap";
import {FaFacebookF} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsYoutube} from "react-icons/bs"
const Footer = () => {
  return (
    <>
      <div className="smallf"></div>
      {/* <div className="row">
      <div  col-xs-12 col-sm-12 col-md-12 col-lg-12"> */}

      <Row className="bigf py-5">
        <Col md={3}></Col>
        <Col md={3}>
          <p>
            © 2022 CUT. All rights reserved. Calibre University of Technology
            (CUT)
          </p>
        </Col>
        <Col md={3}>
            <ul className="list-unstyled icons d-flex justify-content-around pt-4 px-0 ">
                <li><FaFacebookF/></li>
                <li><BsInstagram/></li>
                <li><BsTwitter/></li>
                <li><BsYoutube/></li>
            
                </ul>
        </Col>
        <Col md={3}>
          <ul className="list-unstyled contact">
            <li>Contact us</li>
            <li>Calibre University of Technology</li>
            <li>Germany -0990</li>

            <li>principalCUT@gmail.com</li>
          </ul>
        </Col>
      </Row>
    </>
  );
};
export default Footer;
