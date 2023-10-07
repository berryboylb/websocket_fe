import { UserInfo } from "../Context/ChatProvider";

/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */
export const isSameSenderMargin = (
  messages: any,
  m: any,
  i: number,
  userId: string
) => {
  // console.log(i === messages.length - 1);

  if (
    i < messages.length - 1 &&
    messages[i + 1].sender._id === m.sender._id &&
    messages[i].sender._id !== userId
  )
    return 33;
  else if (
    (i < messages.length - 1 &&
      messages[i + 1].sender._id !== m.sender._id &&
      messages[i].sender._id !== userId) ||
    (i === messages.length - 1 && messages[i].sender._id !== userId)
  )
    return 0;
  else return "auto";
};

export const isSameSender = (messages: any[], m: any, i: number, userId: string) => {
  return (
    i < messages.length - 1 &&
    (messages[i + 1].sender._id !== m.sender._id ||
      messages[i + 1].sender._id === undefined) &&
    messages[i].sender._id !== userId
  );
};

export const isLastMessage = (messages: any[], i: number, userId: string) => {
  return (
    i === messages.length - 1 &&
    messages[messages.length - 1].sender._id !== userId &&
    messages[messages.length - 1].sender._id
  );
};

export const isSameUser = (messages:any[], m:any, i: number) => {
  return i > 0 && messages[i - 1].sender._id === m.sender._id;
};

export const getSender = (loggedUser:UserInfo, users: UserInfo[]) => {
  return users.length > 0 && users[0]?._id === loggedUser?._id ? users[1].name : users[0].name;
};

export const getSenderFull = (loggedUser: UserInfo, users: UserInfo[]) => {
  return users[0]._id === loggedUser._id ? users[1] : users[0];
};
