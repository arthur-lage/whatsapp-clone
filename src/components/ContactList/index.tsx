import React from "react";

import { Container } from "./styles";

import Contact from "../Contact";

type ContactType = {
  image: string;
  name: string;
  lastMessage: string;
  lastMessageDate: Date;
  isPinned: boolean;
  isVideo: boolean
  isImage: boolean
};

type Props = {
  contacts: ContactType[];
};

const ContactList = ({ contacts }: Props) => {
  return (
    <Container>
      {contacts.length > 0 ? (
        <div>
          {contacts.map((contactData, key) => (
            <Contact
              image={contactData.image}
              name={contactData.name}
              lastMessage={contactData.lastMessage}
              lastMessageDate={contactData.lastMessageDate}
              isPinned={contactData.isPinned}
              isImage={contactData.isImage}
              isVideo={contactData.isVideo}
              key={key}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </Container>
  );
};

export default ContactList;
