import {BsFillChatDotsFill} from "react-icons/bs"
import ChatBot from "./ChatBot"
import { useState } from "react"
import { Container,Row,Col } from "react-bootstrap"
import "../../styles/popup.css"
const PopUp=()=>{
    const [pop,setPop] = useState(false)
    const popClick=()=>{

        pop === false ? setPop(true) :setPop(false)
    }
    return(<>

    <Container>
        <Row>
            <Col className="popup">
            <BsFillChatDotsFill onClick={popClick}/>
            </Col>

        </Row>
    </Container>
    {
        
        pop? <ChatBot/>:<></>
    }
    </>)
}
export default PopUp