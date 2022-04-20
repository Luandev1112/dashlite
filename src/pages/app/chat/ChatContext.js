import React, { useState, createContext } from "react";
import { chatData, addUserData } from "./ChatData";

export const ChatContext = createContext();

export const ChatContextProvider = (props) => {
  const [chat, setChat] = useState(chatData);
  const [favData, setFavData] = useState(chatData);
  const [userData, setUserData] = useState(addUserData);

  // Function for deleting a conversation
  const deleteConvo = (id) => {
    let data = chat;
    data = data.filter((item) => item.id !== id);
    setChat([...data]);
  };

  // Universal function for any props
  const propAction = (id, prop) => {
    let data = chat;
    const index = data.findIndex((item) => item.id === id);
    data[index][prop] = true;
    setChat([...data]);
  };

  // Function to add favourite to favourite list
  const favAction = (id) => {
    let data = favData;
    const index = data.findIndex((item) => item.id === id);
    data[index].fav = true;
    setFavData([...data]);
    setChat([...data]);
  };

  // Function to change nickame
  const changeNickname = (id, name) => {
    const data = chat;
    const index = data.findIndex((item) => item.id === id);
    data[index].nickname = name;
    setChat([...data]);
  };

  // Function to change theme
  const changeTheme = (id, name) => {
    const data = chat;
    const index = data.findIndex((item) => item.id === id);
    data[index].chatTheme = name;
    setChat([...data]);
  };

  // Removes user from group
  const deleteUser = (id, userId) => {
    let data = chat;
    const grouped = data.findIndex((item) => item.id === id);
    const group = data.find((item) => item.id === id);
    const user = group.user.filter((user) => user.id !== userId);
    group.user = user;
    data[grouped] = group;
    setChat([...data]);
  };

  // Makes a user admin
  const makeAdmin = (id, userId) => {
    let data = chat;
    const grouped = data.findIndex((item) => item.id === id);
    const group = data.find((item) => item.id === id);
    group.user.forEach((element) => {
      element.role = "User";
    });
    const userIndex = group.user.findIndex((item) => item.id === userId);
    group.user[userIndex].role = "Admin";
    data[grouped] = group;
    setChat([...data]);
  };

  // Add a user to a chat
  const addUserToChat = (id, object) => {
    let data = chat;
    const group = data.find((item) => item.id === id);
    let newUserGroup = [...group.user, object];
    group.user = newUserGroup;
    setChat(data);
    let newUserData = userData;
    let user = newUserData.filter((el) => el.id !== object.id);
    setUserData(user);
  };

  return (
    <ChatContext.Provider
      value={{
        chatState: [chat, setChat],
        chatData: chat,
        fav: [favData],
        userData: userData,
        deleteConvo: deleteConvo,
        propAction: propAction,
        favAction: favAction,
        changeNickname: changeNickname,
        changeTheme: changeTheme,
        deleteUser: deleteUser,
        makeAdmin: makeAdmin,
        addUserToChat: addUserToChat,
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};
