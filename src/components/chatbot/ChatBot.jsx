import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';


import config from './config.js';
import MessageParser from './MessageParser.js';
import ActionProvider from './ActionProvider.js';

const ChatBot = () => {
  return (
    <div >
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        
      />
    </div>
  );
};
export default ChatBot
//https://youtu.be/jcOKU9f86XE