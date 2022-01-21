import styled from "styled-components";

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 30vw auto;
  grid-template-rows: 6rem 5rem auto 6.2rem;

  grid-template-areas:
    "UserPanel CurrentlyChatting"
    "SearchForChat Chat"
    "ContactList Chat"
    "ContactList MessageInput";

  height: 100vh;
`;
