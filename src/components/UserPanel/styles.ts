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

export const Options = styled.div`
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.2);
  opacity: 0;
  padding: 1rem 0;
  visibility: hidden;
  background: #fff;
  border-radius: 4px;
  display: flex;
  position: absolute;
  top: 6rem;
  z-index: 10;
  transition: 0.15s ease-out;
  flex-direction: column;

  ul {
    list-style: none;

    li {
      margin-bottom: 1rem;
    }
  }

  button {
    padding: 0 3rem 0 3rem;
    width: 100%;
    height: 4rem;
    border-radius: 0;
    background: #fff;
    justify-content: flex-start;
    margin: 0;

    &:focus {
      background: #dfdfdf;
    }
  }

  &.active {
    opacity: 1;
    visibility: visible;
  }
`;
