import React from "react";

import { Container, ContactInfo, Actions } from "./styles";

type Props = {
  name: string
  image: string
  lastMessageDate: Date
}

type IContact = {
  props: Props
}

const CurrentlyChatting = (props: IContact) => {
  console.log(props.props)

  return (
    <Container>
      <ContactInfo>
        <img src={props.props.image} alt="Contact" />

        <div>
          <h2>{props.props.name}</h2>
          <p>{props.props.lastMessageDate.toString()}</p>
        </div>
      </ContactInfo>
      <Actions>
        <button>
          <svg viewBox="0 0 24 24" width="24" height="24" className="">
            <path
              fill="currentColor"
              d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"
            ></path>
          </svg>
        </button>
        
        <button>
          <svg viewBox="0 0 24 24" width="24" height="24" className="">
            <path
              fill="currentColor"
              d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
            ></path>
          </svg>
        </button>
      </Actions>
    </Container>
  );
};

export default CurrentlyChatting;
