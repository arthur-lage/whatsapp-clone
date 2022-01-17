import styled from "styled-components";

export const Container = styled.div`
  grid-area: UserPanel;

  padding: 1rem 1.6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #ededed;

  border-bottom: 1px solid #d4d4d4;
  border-right: 1px solid #d4d4d4;
`;

export const ProfilePicture = styled.div`
  cursor: pointer;

  img {
    width: 100%;
    border-radius: 50%;
    height: 100%;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;

  button {
    width: 4rem;
    height: 4rem;

    margin-left: 1rem;
    
    border: 0;
    border-radius: 50%;
    
    background: #ededed;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: .15s ease-out;

    cursor: pointer;

    svg {
      opacity: 0.65;
    }

    &:hover, &:focus {
        filter: brightness(.9);
    }
  }

  &:last-child {
    margin-left: 0rem;
  }
`;
