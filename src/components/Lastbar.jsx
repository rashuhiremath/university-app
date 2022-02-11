import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "../styles/lastbar.css";
import ReactPlayer from "react-player";
import "../styles/video.css";
import { useState } from "react";
import Calender from "./Calender";
import Blogs from "./Blogs";
const Lastbar = () => {
  const [blog,setBlog] = useState(false)
  const [event,setEvent] = useState(false)
  const blogClick=()=>{
    setBlog(true)
    setEvent(false)
  }
  const eventClick=()=>{
    setBlog(false)
    setEvent(true)
  }
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col md={3} className="px-1">
            
            <Card className="shadow maincard">
              <Card.Header className="lastcard "> Glimpse of CUT</Card.Header>
              
            </Card>
                  <div>
                <ReactPlayer
                  height="200px" 
                  width="275px"
                  url="https://youtu.be/tzMpWiGL8D8"
                />
                </div>
              
          </Col>
          <Col md={3} className="px-1">
            <Card className="shadow maincard">
              <Card.Header className="lastcard "> Placements</Card.Header>
              <Card.Img
                variant="top"
                src="https://www.vhv.rs/dpng/d/430-4303668_honda-graduate-program-scholarship-student-images-in-png.png"
              />
              <Card.Body>
                <Card.Text className="font">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="px-1">
            <Card className="shadow maincard">
              <Card.Header className="lastcard "> Library</Card.Header>
              <Card.Img
                variant="top"
                src="https://www.lib.chalmers.se/media/80502/goerdetsjaelv.jpg?anchor=center&mode=crop&width=480&height=480&rnd=132787695090000000"
              />
              <Card.Body>
                <Card.Text className="font"> 
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="px-1">
            <Card className="shadow maincard">
              <Card.Header className="lastcard ">Quick Links</Card.Header>
             
              <Card.Body className="mycolor">
              <ul className="list-unstyled font">
              <li>
                <a href="/events" onClick={eventClick}>Upcoming Events</a>
              </li>
              <li>
                <a href="/blogs" onClick={blogClick}>Blogs</a>
              </li>

              <li>
                <a href="/gallary">Gallary</a>
              </li>
              <li>
                <a href="#news">Electronics and Communication Engineering</a>
              </li>
              
            </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {
        blog?<Blogs/>:null
      }
      {
        event?<Calender/>:null
      }
    </>
  );
};
export default Lastbar;
