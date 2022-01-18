import styled from "styled-components";

export const Container = styled.div`
  grid-area: SearchForChat;

  background: #f6f6f6;

  padding: 1rem 1.6rem;

  display: flex;
  align-items: center;

  border-bottom: 1px solid #d4d4d4;
  border-right: 1px solid #d4d4d4;

  button {
    background: transparent;
    cursor: pointer;
    opacity: .85;
    font-size: 1.5rem;
    margin-left: 1rem;
  }

  input {
    padding: 1rem;
    padding-left: 2rem;

    width: 100%;
    margin-left: 1rem;
    
    border-radius: 50rem;
    
    font-size: clamp(1.4rem, 1vw, 2rem);
    
    background: #fff;
    
    height: 3.5rem;
  }
`;
