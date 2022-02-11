import{Container,Row,Col} from "react-bootstrap"
import Upper from "./Upper";
import Midbar from "./Midbar";
import LogoName from "./LogoName";
const Admission =()=>{
return(<>
<Upper />
      <LogoName />
      <Midbar />
<Container>
    <Row>
        <Col className="mt-5">
        <h4><a href="/registration">Click here for Registration!</a></h4>
        </Col>
    </Row>

</Container>

</>)
}
export default Admission