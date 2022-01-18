import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100vh;
  text-align: center;

  position: relative;

  background: #f8f9fa;

  img {
    margin-bottom: 3rem;
    width: 25%;
  }

  h1 {
    margin-bottom: 2rem;
    font-weight: 300;
    color: #525252;
    font-size: clamp(1.6rem, 2.5vw, 3rem);
  }

  #about-usage {
    font-size: clamp(1.2rem, 1vw, 2rem);
    letter-spacing: 0.07rem;
    line-height: 2.2rem;
    font-weight: 300;
    width: 62.5%;
    color: #727272;
  }
`;

export const Divisor = styled.div`
  width: 65%;
  height: 1px;
  background: #c4c4c4aa;
  margin: 4rem 0;
`;

export const DownloadWhatsapp = styled.div`
  p {
    display: flex;
    align-items: center;

    span {
      margin-right: 1rem;
    }

    font-size: clamp(1.2rem, 1vw, 2rem);
    letter-spacing: 0.07rem;
    line-height: 2.2rem;
    font-weight: 300;
    color: #727272;

    a {
      color: #129941;
      text-decoration: none;
    }
  }
`;

export const BottomLine = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 6px;
  background: #4adf83;
`;
