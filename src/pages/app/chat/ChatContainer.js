import React from "react";
import Chat from "./Chat";
import { ChatContextProvider } from "./ChatContext";

const ChatContainer = () => {
  return (
    <ChatContextProvider>
      <Chat />
    </ChatContextProvider>
  );
};
export default ChatContainer;
