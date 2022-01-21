import styled from "styled-components";

import lightBackgroundImage from "../../assets/light-background.jpg";

export const Container = styled.div`
  grid-area: Chat;

  padding-top: 2rem;

  background: linear-gradient(
      to bottom,
      rgba(227, 219, 212, 0.55),
      rgba(227, 219, 212, 0.55)
    ),
    url(${lightBackgroundImage});
  background-repeat: repeat;
  background-size: contain;

  max-height: auto;

  overflow-y: scroll;
  overflow-x: hidden;

  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    width: thin;
  }

  ::-webkit-scrollbar-thumb {
    background: #c7c7c7;
  }

  scrollbar-width: thin;
  scrollbar-color: #c7c7c7;
`;

export const MessageContainer = styled.div`
  padding: 0 5%;
  margin-bottom: 1.2rem;
  display: flex;
  width: 100%;

  &.message-in {
    justify-content: flex-start;
  }

  &.message-out {
    justify-content: flex-end;
  }
`;
