import styled from "styled-components";

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 30vw auto;
  grid-template-rows: 6rem 5rem auto;

  grid-template-areas:
    "UserPanel CurrentlyChatting"
    "SearchForChat Chat"
    "ContactList Chat";

  height: 100vh;
`;
