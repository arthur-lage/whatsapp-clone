import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 7.3rem;

  position: relative;

  padding: 1rem 1.6rem;

  cursor: pointer;

  transition: 0.15s ease;

  background: #fff;

  border-bottom: 1px solid #d1d1d17d;

  .contact-options-button {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    right: -20px;
    bottom: 17.5px;
    transition: 0.15s ease-out;
  }

  svg {
    transition: 0.15s ease;
  }

  &:hover {
    background: #f1f1ff;

    .contact-options-button {
      visibility: visible;
      opacity: 1;
      right: 12.5px;
      background: transparent;
      cursor: pointer;
    }

    svg {
      margin-right: 2rem;
    }
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;

    margin-left: 2rem;

    h3 {
      font-weight: 500;
      font-size: clamp(1rem, 2vw, 1.6rem);
      margin-bottom: 0.9rem;
      color: #111;
    }

    p {
      font-weight: 400;
      font-size: clamp(0.8rem, 1vw, 1.4rem);
      color: #444;

      span {
        margin-right: .5rem;
        color: #999;
      }
    }
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  p {
    color: #555;
    font-size: clamp(0.8rem, 1vw, 1.4rem);
    margin-bottom: 0.5rem;
  }

  svg {
    opacity: 0.3;
  }

  i {
    opacity: 0.6;
  }
`;
