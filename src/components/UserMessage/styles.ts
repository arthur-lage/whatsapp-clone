import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;

  background: #dcf8c6;

  border-radius: 4px 0 4px 4px;

  width: max-content;
  min-height: 4.5rem;

  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.085);

  padding: 1rem;

  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: -25px;
    width: 0;
    height: 0;
    border-left: 1.6rem solid #dcf8c6;
    border-bottom: 1.6rem solid transparent;
    border-right: 1.6rem solid transparent;
  }
`;

export const Text = styled.div`
  align-self: center;
  margin-right: 1rem;

  color: #222;
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  font-weight: 400;
  line-height: 2rem;
`;

export const Date = styled.div`
  align-self: flex-end;
  color: #333;

  font-size: clamp(.8rem, 2.5vw, 1.2rem);
`;
