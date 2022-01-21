import React from "react";

import { Container, Text, Date } from "./styles";

type MessageProps = {
  messageText: string;
  messageDate: Date;
};

const ContactMessage = ({ messageText, messageDate }: MessageProps) => {
  const messageHours = messageDate.getHours();
  const messageHoursConverted = messageHours % 12 || 12;
  const messageMinutes =
    messageDate.getMinutes() < 10
      ? `0${messageDate.getMinutes()}`
      : messageDate.getMinutes();

  return (
    <Container>
      <Text>{messageText}</Text>
      <Date>{`${messageHoursConverted}:${messageMinutes} ${
        messageHours < 12 ? " AM" : " PM"
      }`}</Date>
    </Container>
  );
};

export default ContactMessage;
