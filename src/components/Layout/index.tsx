import React, { useEffect, useState } from "react";

import CurrentlyChatting from "../CurrentlyChatting";
import UserPanel from "../UserPanel";
import SearchForChat from "../SearchForChat";
import Chat from "../Chat";

import { Grid } from "./styles";
import ContactList from "../ContactList";

import FemaleImage from "../../assets/contact-female.jpg";
import MaleImage from "../../assets/contact-male.jpg";
import KeepYourPhoneConnected from "../KeepYourPhoneConnected";
import { useSearch } from "../../contexts/SearchContext";

const Layout: React.FC = () => {
  const { currentSearch } = useSearch();

  const contactsArray = [
    {
      image: FemaleImage,
      name: "Jada",
      lastMessage: "Hi",
      lastMessageDate: new Date(1642507223235),
      isPinned: true,
      isImage: false,
      isVideo: true,
      received: true,
      read: true
    },
    {
      image: MaleImage,
      name: "Dani",
      lastMessage: "Hi",
      lastMessageDate: new Date(1642507223235),
      isPinned: true,
      isImage: true,
      isVideo: false,
      received: true,
      read: true
    },
    {
      image: MaleImage,
      name: "Lyle",
      lastMessage: "Hi",
      lastMessageDate: new Date(1642507223235),
      isPinned: true,
      isImage: false,
      isVideo: false,
      received: false,
      read: false
    },
    {
      image: MaleImage,
      name: "Gregory",
      lastMessage: "Hi",
      lastMessageDate: new Date(1642507223235),
      isPinned: false,
      isImage: false,
      isVideo: true,
      received: true,
      read: false
    },
    {
      image: MaleImage,
      name: "Samuel",
      lastMessage: "Hi",
      lastMessageDate: new Date(1642507223235),
      isPinned: false,
      isImage: true,
      isVideo: false,
      received: true,
      read: false
    },
    {
      image: MaleImage,
      name: "Mario",
      lastMessage: "Hi",
      lastMessageDate: new Date(1642507223235),
      isPinned: false,
      isImage: true,
      isVideo: false,
      received: true,
      read: true
    },
    {
      image: FemaleImage,
      name: "Pearl",
      lastMessage: "Hi",
      lastMessageDate: new Date(1642507223235),
      isPinned: false,
      isImage: false,
      isVideo: false,
      received: false,
      read: false
    },
    {
      image: FemaleImage,
      name: "Karen",
      lastMessage: "Hi",
      lastMessageDate: new Date(1642507223235),
      isPinned: false,
      isImage: false,
      isVideo: false,
      received: true,
      read: false
    },
    {
      image: FemaleImage,
      name: "Florii",
      lastMessage: "Hi",
      lastMessageDate: new Date(1642507223235),
      isPinned: false,
      received: true,
      read: true
    },
    {
      image: FemaleImage,
      name: "Aviva",
      lastMessage: "Hi",
      lastMessageDate: new Date(1642507223235),
      isPinned: false,
      isImage: false,
      isVideo: false,
      received: true,
      read: false
    },
    {
      image: FemaleImage,
      name: "Cristina",
      lastMessage: "Hi",
      lastMessageDate: new Date(1642507223235),
      isPinned: false,
      isImage: false,
      isVideo: false,
      received: false,
      read: false
    },
  ];

  const [contacts, setContacts] = useState<any>([]);

  const [isChatting, setIsChatting] = useState(false);

  useEffect(() => {
    if(currentSearch === "") {
      setContacts(contactsArray)
    } else {
      const filteredArray = contactsArray.filter(contact => contact.name.toLowerCase().includes(currentSearch.toLowerCase()))
      setContacts(filteredArray)
    }
  }, [currentSearch]);

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
