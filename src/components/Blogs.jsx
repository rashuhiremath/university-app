import { useEffect, useState } from "react";
import { Card,Container,Col,Row} from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { fetchTheBlogs } from "./redux-store/actions/index.js";
import Upper from "./Upper";
import Midbar from "./Midbar";
import LogoName from "./LogoName";
const Blogs = () => {

    const blogs = useSelector(state=>state.blogs.blog)
const dispatch = useDispatch()
  /* const [blog, setBlog] = useState([]);

  const fetchTheBlogs = async () => {
    try {
      let response = await fetch("http://localhost:3005/universityBlog");
      let data = await response.json();
      setBlog(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }; */
  useEffect(() => {
   dispatch(fetchTheBlogs())
  }, []);
  return (
    <>
    <Upper />
      <LogoName />
      <Midbar />
     
    <Container className="mt-5">
       <Row>
        <Col md={6} className="mr-5">
      {blogs.map((b) => (
        <Card className="  mb-4 shadow">
          <Card.Body>
            <Card.Text>{b.name}</Card.Text>
          </Card.Body>
          <Card.Img variant="bottom" src={b.image} />
          <Card.Text>{b.title}</Card.Text>
          <small>{b.detail}</small>
        </Card>
      ))}
      </Col>
      </Row>
      </Container>
    </>
  );
};

export default Blogs;
