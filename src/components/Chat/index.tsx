import React from "react";

import { Container, MessageContainer } from "./styles";

import UserMessage from "../UserMessage";
import ContactMessage from "../ContactMessage";

const Chat: React.FC = ({ chattingTo }: any) => {
  return (
    <Container>
      <MessageContainer className="message-out">
        <UserMessage messageText={"Hi"} messageDate={new Date(1642703136230)} />
      </MessageContainer>
      <MessageContainer className="message-in">
        <ContactMessage
          messageText={"Hi"}
          messageDate={new Date(1642703136230)}
        />
      </MessageContainer>
      <MessageContainer className="message-out">
        <UserMessage
          messageText={"How are you?"}
          messageDate={new Date(1642703136230)}
        />
      </MessageContainer>
      <MessageContainer className="message-in">
        <ContactMessage
          messageText={"Good. And you?"}
          messageDate={new Date(1642703136230)}
        />
      </MessageContainer>
      <MessageContainer className="message-out">
        <UserMessage messageText={"Hi"} messageDate={new Date(1642703136230)} />
      </MessageContainer>
      <MessageContainer className="message-in">
        <ContactMessage
          messageText={"Hi"}
          messageDate={new Date(1642703136230)}
        />
      </MessageContainer>
      <MessageContainer className="message-out">
        <UserMessage
          messageText={"How are you?"}
          messageDate={new Date(1642703136230)}
        />
      </MessageContainer>
      <MessageContainer className="message-in">
        <ContactMessage
          messageText={"Good. And you?"}
          messageDate={new Date(1642703136230)}
        />
      </MessageContainer>
      <MessageContainer className="message-out">
        <UserMessage messageText={"Hi"} messageDate={new Date(1642703136230)} />
      </MessageContainer>
      <MessageContainer className="message-in">
        <ContactMessage
          messageText={"Hi"}
          messageDate={new Date(1642703136230)}
        />
      </MessageContainer>
      <MessageContainer className="message-out">
        <UserMessage
          messageText={"How are you?"}
          messageDate={new Date(1642703136230)}
        />
      </MessageContainer>
      <MessageContainer className="message-in">
        <ContactMessage
          messageText={"Good. And you?"}
          messageDate={new Date(1642703136230)}
        />
      </MessageContainer>
    </Container>
  );
};

export default Chat;
