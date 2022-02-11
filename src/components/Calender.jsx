import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
import { Card, Container, ListGroup ,Row,Col} from "react-bootstrap";
// import "../../src/styles/calender.css";
import "../styles/calender.css"
import { fetchTheEvents } from "./redux-store/actions/index.js";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import Upper from "./Upper";
import Midbar from "./Midbar";
import LogoName from "./LogoName";
const mapStateToProps = (state) => ({
  events: state.calender.events,
});

const mapDispatchToProps = (dispatch) => ({
  getEvents: () => {
    console.log("i am here to run");
    dispatch(fetchTheEvents());
  },
});
const Calender = ({ events, getEvents }) => {
//   const { t } = useTranslation();
  console.log(events);

  useEffect(() => {
    // fetchTheCalender()
    getEvents();
  }, []);

  return (

    
    <>
      {/* <Card style={{ width: "22rem" }} className=" mt-4">
        <Card.Header>{t("calender")}</Card.Header>
         <ListGroup variant="flush"> */}
        <Upper />
      <LogoName />
      <Midbar />
<Container className="mt-5">
    <Row>
        <Col md={6}>
      {events.map((cal) => (
        <Card border="light" className="event shadow my-3 ">
          <Card.Header  className="header py-0">{cal.date}</Card.Header>
          <Card.Body >
            <Card.Title className="pt-0">{cal.event}</Card.Title>
            <Card.Text className="py-0">
              <small>{cal.type}</small>
              <br />
              <small>{cal.time}</small>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
      </Col>
      </Row>
      </Container>
     
    </>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Calender);