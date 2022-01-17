import styled from "styled-components";

export const Container = styled.div`
  grid-area: CurrentlyChatting;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #ededed;
  border-bottom: 1px solid #d4d4d4;

  padding: 1rem 1.6rem;
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  width: 100%;

  img {
    width: 4rem;
    height: 4rem;

    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;

    margin-left: 1.5rem;

    h2 {
      font-weight: 400;
      font-size: clamp(1.2rem, 2.5vw, 1.6rem);
      margin-bottom: 0.2rem;
      color: #111;
    }

    p {
      color: #333;
      font-weight: 300;
      font-size: clamp(0.75rem, 2.5vw, 1.3rem);
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;

  padding-left: 1.25rem;

  button {
    width: 4rem;
    height: 4rem;

    border: 0;
    border-radius: 50%;

    background: #ededed;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.15s ease-out;

    cursor: pointer;

    svg {
      opacity: 0.65;
    }

    &:hover,
    &:focus {
      filter: brightness(0.9);
    }
  }

  &:last-child {
    margin-left: 0rem;
  }
`;
