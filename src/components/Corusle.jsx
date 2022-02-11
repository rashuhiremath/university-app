import { Carousel, Container, Row, Col } from "react-bootstrap";
import "../styles/corusle.css";
const Corusle = () => {
  return (
    <>
      <Row>
        <Col>
          <Carousel  >
            <Carousel.Item className=" quick-scroll">
              <img
              
                className="d-block w-100 carousel-control  "
                src="https://wallpaperaccess.com/full/1209573.jpg"
                alt="First slide"
               
              />
            </Carousel.Item>
            <Carousel.Item className=" quick-scroll">
              <img
                className="d-block w-100 carousel-control "
                src="https://media.istockphoto.com/photos/graduating-class-picture-id480952865?k=20&m=480952865&s=612x612&w=0&h=Et_3NofPcvUgzdQHuhsYgFerEsCxVvSSLB7XUHx-Fis="
                alt="Second slide"
               
              />
            </Carousel.Item>
            <Carousel.Item className=" quick-scroll">
              <img
                className="d-block w-100 carousel-control "
                src="https://media.istockphoto.com/photos/multiethnic-students-sitting-at-college-library-picture-id1079655830?s=612x612"
                alt="Third slide"
               
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </>
  );
};
export default Corusle;
