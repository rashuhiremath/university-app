import "../styles/upper.css"
import { Container,Row,Col } from "react-bootstrap"
import {AiFillPhone} from "react-icons/ai"
import {MdEmail} from "react-icons/md"
const Upper =()=>{
return(
    <>
   
<div className="top">
  <Container className="">
  <Row>
    <Col >
    <ul className="list-unstyled d-flex myul"><li><AiFillPhone className="phone d-flex d-flex-column"/></li>
      
      <li className="mylist pt-1 "> <a href="" className="a_top_hypers "> +462345678</a></li>
      <li className="line px-2">|</li>
      <li ><MdEmail className="phone"/></li>
      
      <li className="mylist pt-1"> <a href="" className="a_top_hypers"> calibre@gmail.com</a></li></ul>
    </Col>
  </Row>
  </Container>

</div>



 
    </>
)
}
export default Upper