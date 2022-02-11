import LogoName from "./LogoName"
import Midbar from "./Midbar"
import Upper from "./Upper"
import Corusle from "./Corusle"
import Lastbar from "./Lastbar"
import "../styles/video.css"
import Footer from "./Footer"
//import ChatBot from "./chatbot/ChatBot"
import Welcome from "./Welcome"
import PopUp from "./chatbot/PopUp"
import Chat from "./chatbot/Chat"

const Home=()=>{
return(<>
<Upper/>
<LogoName/>
 <Midbar/>  
 <Corusle/>
 <Welcome/>
 <Lastbar/>
 {/* <Chat/> */}
 <Footer/>
  <PopUp/> 
 {/* <img src="https://youtu.be/tzMpWiGL8D8"/> */}
</>)

}
export default Home