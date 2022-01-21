import styled from "styled-components";

export const Container = styled.div`
  grid-area: MessageInput;

  display: flex;
  align-items: center;

  padding: 0 1.8rem;

  background: #F0F0F0;

  input {
    color: #333;
    font-size: clamp(.85rem, 2.5vw, 1.6rem);
    font-weight: 300;
    border: 0;
    background: #fff;
    border-radius: 50rem;
    width: 100%;
    padding: 1rem 1rem 1rem 1.5rem;
  }

  button {
    background: transparent;
    cursor: pointer;
    margin-right: 1.25rem;
  }

  button :last-child {
    margin-right: 0;
    margin-left: 1.5rem;
  }

  svg {
    opacity: .6;
    width: 2.6rem;
    height: 2.6rem;
  }
`;
