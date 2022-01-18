import React from "react";

import { Container, Left, Right } from "./styles";

type Props = {
  image: string;
  name: string;
  lastMessage: string;
  lastMessageDate: Date;
  isPinned: boolean;
  isVideo: boolean;
  isImage: boolean;
};

const Contact = (props: Props) => {
  const messageHours =
    props.lastMessageDate.getHours() < 10
      ? `0${props.lastMessageDate.getHours()}`
      : props.lastMessageDate.getHours();
  const messageMinutes =
    props.lastMessageDate.getMinutes() < 10
      ? `0${props.lastMessageDate.getMinutes()}`
      : props.lastMessageDate.getMinutes();

  return (
    <Container>
      <Left>
        <img src={props.image} alt="Contact" />
        <div>
          <h3>{props.name}</h3>
          <p>
            {props.isImage && (
              <span>
                <i className="fas fa-camera"></i>
              </span>
            )}
            {props.isVideo && (
              <span>
                <i className="fas fa-video"></i>
              </span>
            )}
            {props.lastMessage}
          </p>
        </div>
      </Left>
      <Right>
        <p>
          {messageHours}:{messageMinutes}{" "}
          {messageHours > 12 ? <span>PM</span> : <span>AM</span>}
        </p>
        {props.isPinned && (
          <div>
            <svg viewBox="0 0 19 19" width="19" height="19" className="">
              <path
                fill="currentColor"
                d="M9.5 18.419C4.574 18.419.581 14.426.581 9.5S4.574.581 9.5.581s8.919 3.993 8.919 8.919-3.993 8.919-8.919 8.919zm2.121-5.708-.082-2.99 1.647-1.963a1.583 1.583 0 0 0-.188-2.232l-.32-.269a1.58 1.58 0 0 0-2.231.203L8.803 7.42l-2.964.439a.282.282 0 0 0-.14.496l5.458 4.58c.186.157.47.019.464-.224zM5.62 13.994a.504.504 0 0 0 .688-.038l2.204-2.307-1.085-.91-1.889 2.571a.504.504 0 0 0 .082.684z"
              ></path>
            </svg>
          </div>
        )}
        <button className="contact-options-button">
          <i className="fas fa-chevron-down"></i>
        </button>
      </Right>
    </Container>
  );
};

export default Contact;
