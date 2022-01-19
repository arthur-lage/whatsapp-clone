import React, { useContext, createContext, useState } from "react";

type IChat = {
  image: string;
  name: string;
  lastMessage: string;
  lastMessageDate: Date;
  isPinned: boolean;
  isVideo: boolean;
  isImage: boolean;
  received: boolean;
  read: boolean;
};

type IChatContext = {
  isChatting: boolean;
  setIsChatting: any;
  currentChat: IChat | undefined;
  setCurrentChat: any;
};

type ChatType = {
  children: React.ReactNode;
};

export const ChatContext = createContext({} as IChatContext);

export function ChatProvider({ children }: ChatType) {
  const [isChatting, setIsChatting] = useState(false);
  const [currentChat, setCurrentChat] = useState();

  const value = {
    isChatting,
    setIsChatting,
    currentChat,
    setCurrentChat,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export function useChat() {
  const value = useContext(ChatContext);
  return value;
}
