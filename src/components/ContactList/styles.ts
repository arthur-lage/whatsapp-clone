import styled from "styled-components";

export const Container = styled.div`
  grid-area: ContactList;

  max-height: auto;

  overflow-y: scroll;
  overflow-x: hidden;

  border-right: 1px solid #d4d4d4;

  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: #c7c7c7;
  }

  scrollbar-width: thin;
  scrollbar-color: #c7c7c7 #ffffff;
`;
