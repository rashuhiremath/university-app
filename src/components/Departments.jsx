import { Container, Row, Col } from "react-bootstrap";
import Upper from "./Upper";
import Midbar from "./Midbar";
import LogoName from "./LogoName";
const Departments = () => {
  return (
    <>
      <Upper />
      <LogoName />
      <Midbar />
      <Container>
        <Row>
          <Col>
            <h5 className="mt-5">Engineering</h5>
            <ul>
              <li>
                <a href="#news">Civil Engineering</a>
              </li>
              <li>
                <a href="#news">Mechanical Engineering</a>
              </li>

              <li>
                <a href="#news">Electrical and Electronics Engineering</a>
              </li>
              <li>
                <a href="#news">Electronics and Communication Engineering</a>
              </li>
              <li>
                <a href="#news">Computer Science and Engineering</a>
              </li>
              <li>
                <a href="#news">Industrial Engineering and Management</a>
              </li>
              <li>
                <a href="#news">Information Science and Engineering</a>
              </li>
              <li>
                <a href="#news">Artificial Intelligence and Machine Learning</a>
              </li>
            </ul>
            <h5 className="mt-5">Post Graduate</h5>
            <ul>
              <li>
                <a href="#news">Master of Bussiness Administration(MBA)</a>
              </li>
              <li>
                <a href="#news">Master of Computer Apllication(MCA)</a>
              </li>
              </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Departments;
