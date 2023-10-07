/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface UserInfo {
  token: string;
  _id: string;
  name: string;
  picture?: string;
  email: string;
  // Define the structure of your user info here
  // For example: id: string; username: string; email: string;
}

interface ChatContextProps {
  selectedChat: any; // Replace 'any' with the actual type if necessary
  setSelectedChat: React.Dispatch<React.SetStateAction<any>> | undefined;
  user: UserInfo | undefined;
  setUser:
    | React.Dispatch<React.SetStateAction<UserInfo | undefined>>
    | undefined;
  notification: any[]; // Replace 'any' with the actual type if necessary
  setNotification: React.Dispatch<React.SetStateAction<any[]>> | undefined;
  chats: any; // Replace 'any' with the actual type if necessary
  setChats: React.Dispatch<React.SetStateAction<any>> | undefined;
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

interface ChatProviderProps {
  children: React.ReactNode;
}
const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState<any>(null);
  const [user, setUser] = useState<UserInfo | undefined>();
  const [notification, setNotification] = useState<any[]>([]);
  const [chats, setChats] = useState<any>([]);

  const navigate = useNavigate();

  useEffect(() => {
   const userInfoString = localStorage.getItem("user");
   const userInfo: UserInfo | null = userInfoString
     ? JSON.parse(userInfoString)
     : null;
    if (userInfo) setUser(userInfo);

    if (!userInfo) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChatState = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChatState must be used within a ChatProvider");
  }
  return context;
};

export default ChatProvider;
