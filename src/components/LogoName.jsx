import { Container, Row, Col } from "react-bootstrap";
import "../styles/logoname.css";

const LogoName = () => {
  return (
    <>
      <Container className="fixed">
        <Row>
          <Col md={1}>
            <img
             /*  src="https://previews.123rf.com/images/captainvector/captainvector1703/captainvector170309945/74377645-university-logo-element.jpg" */
              src="https://thumbs.dreamstime.com/b/university-education-logo-design-open-book-laurel-branch-book-laurel-icon-isolated-white-background-university-186836789.jpg"
             
             alt=""
              width="100px"
              height="100px"
            />
          </Col>
          <Col md={11}>
            <h1 className="pt-4 px-4 color">Calibre University of Technology</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LogoName;
