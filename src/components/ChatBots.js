import React from 'react';
import ChatBot from "react-simple-chatbot";
// import PropTypes from 'prop-types';

// ChatBot.propTypes = {

// };

function ChatBots(props) {
    const steps = [
      {
        id: "0",
        message: "Welcome to react chatbot!",
        trigger: "1",
      },
      {
        id: "1",
        message: "Bye!",
        end: true,
      },
      {
        id: "2",
        message: "Bye!",
        end: true,
      },
    ];
    return <ChatBot steps={steps} ></ChatBot>;
}

export default ChatBots;
