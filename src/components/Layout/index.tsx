import React, { useState } from "react";

import CurrentlyChatting from "../CurrentlyChatting";
import UserPanel from "../UserPanel";
import SearchForChat from "../SearchForChat";
import Chat from "../Chat";

import { Grid } from "./styles";
import ContactList from "../ContactList";

import FemaleImage from "../../assets/contact-female.jpg";
import MaleImage from "../../assets/contact-male.jpg";
import KeepYourPhoneConnected from "../KeepYourPhoneConnected";

const Layout: React.FC = () => {
  const [contacts, setContacts] = useState([
    {
      image: FemaleImage,
      name: "Jada",
      lastMessage: "Hi",
      lastMessageDate: new Date(1642507223235),
      isPinned: true,
      isImage: false,
      isVideo: true,
    },
    {
      image: MaleImage,
      name: "Dani",
      lastMessage: "Hi",
      lastMessageDate: new Date(1642507223235),
      isPinned: true,
      isImage: true,
      isVideo: false,
    },
    {
      image: MaleImage,
      name: "Lyle",
      lastMessage: "Hi",
      lastMessageDate: new Date(1642507223235),
      isPinned: true,
      isImage: false,
      isVideo: false,
    },
    {
      image: MaleImage,
      name: "Gregory",
      lastMessage: "Hi",
      lastMessageDate: new Date(1642507223235),
      isPinned: false,
      isImage: false,
      isVideo: true,
    },
    {
      image: MaleImage,
      name: "Samuel",
      lastMessage: "Hi",
      lastMessageDate: new Date(1642507223235),
      isPinned: false,
      isImage: true,
      isVideo: false,
    },
    {
      image: MaleImage,
      name: "Mario",
      lastMessage: "Hi",
      lastMessageDate: new Date(1642507223235),
      isPinned: false,
      isImage: true,
      isVideo: false,
    },
    {
      image: FemaleImage,
      name: "Pearl",
      lastMessage: "Hi",
      lastMessageDate: new Date(1642507223235),
      isPinned: false,
      isImage: false,
      isVideo: false,
    },
    {
      image: FemaleImage,
      name: "Karen",
      lastMessage: "Hi",
      lastMessageDate: new Date(1642507223235),
      isPinned: false,
      isImage: false,
      isVideo: false,
    },
    {
      image: FemaleImage,
      name: "Florii",
      lastMessage: "Hi",
      lastMessageDate: new Date(1642507223235),
      isPinned: false,
      isImage: false,
      isVideo: false,
    },
    {
      image: FemaleImage,
      name: "Aviva",
      lastMessage: "Hi",
      lastMessageDate: new Date(1642507223235),
      isPinned: false,
      isImage: false,
      isVideo: false,
    },
    {
      image: FemaleImage,
      name: "Cristina",
      lastMessage: "Hi",
      lastMessageDate: new Date(1642507223235),
      isPinned: false,
      isImage: false,
      isVideo: false,
    },
  ]);

  const [isChatting, setIsChatting] = useState(false);

  return (
    <Grid>
      <UserPanel />
      <SearchForChat />
      {isChatting && <CurrentlyChatting />}
      <ContactList contacts={contacts} />
      {isChatting ? <Chat /> : <KeepYourPhoneConnected />}
    </Grid>
  );
};

export default Layout;
