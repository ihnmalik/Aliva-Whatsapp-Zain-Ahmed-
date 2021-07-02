interface Type {
  _id: number;
  title: string;
  lastMsg?: string;
  msgTime?: string;
  chat?: Chat;
}
interface Chat {
  [chat: number]: ChatDetails;
}
interface ChatDetails {
  userId?: number;
  msg?: string;
}
// interface Data {
//   // [dataChat: number]: Type;
// }

const dataChat: Array<Type> = [
  {
    _id: 1,
    title: "Test Chat Room",
    lastMsg: "This is a test message",
    msgTime: "08:10 PM",
    chat: [
      {
        userId: 1,
        msg: "First Test Message",
      },
    ],
  },
  {
    _id: 2,
    title: "Test Chat Room",
    lastMsg: "This is a test message",
    msgTime: "08:10 PM",
    chat: [
      {
        userId: 2,
        msg: "first message",
      },
    ],
  },
  {
    _id: 3,
    title: "User 1",
    lastMsg: "This is a test message",
    msgTime: "08:10 PM",
    chat: [
      {
        userId: 3,
        msg: "first message",
      },
    ],
  },
  {
    _id: 4,
    title: "New User",
    lastMsg: "This is a test message",
    msgTime: "08:10 PM",
    chat: [
      {
        userId: 4,
        msg: "first message",
      },
    ],
  },
  {
    _id: 5,
    title: "Chat room xvz",
    lastMsg: "This is a test message",
    msgTime: "08:10 PM",
    chat: [
      {
        userId: 5,
        msg: "first message",
      },
    ],
  },
  {
    _id: 6,
    title: "Lorem Ipsum",
    chat: [
      {
        userId: 6,
        msg: "first message",
      },
    ],
    lastMsg: "This is a test message",
    msgTime: "08:10 PM",
  },
  {
    _id: 7,
    title: "New Chat Room",
    lastMsg: "This is a test message",
    msgTime: "08:10 PM",
    chat: [
      {
        userId: 7,
        msg: "first message",
      },
    ],
  },
  {
    _id: 8,
    title: "AlivaTech",
    lastMsg: "This is a test message",
    msgTime: "08:10 PM",
    chat: [
      {
        userId: 8,
        msg: "first message",
      },
    ],
  },
  {
    _id: 9,
    title: "abc User",
    lastMsg: "This is a test message",
    msgTime: "08:10 PM",
    chat: [
      {
        userId: 9,
        msg: "first message",
      },
    ],
  },
  {
    _id: 10,
    title: "Test Chat Room",
    lastMsg: "This is a test message",
    msgTime: "08:10 PM",
    chat: [
      {
        userId: 10,
        msg: "first message",
      },
    ],
  },
  {
    _id: 11,
    title: "abc xyz",
    lastMsg: "This is a test message",
    msgTime: "08:10 PM",
    chat: [
      {
        userId: 11,
        msg: "first message",
      },
    ],
  },
  {
    _id: 12,
    title: "Test Chat Room",
    lastMsg: "This is a test message",
    msgTime: "08:10 PM",
    chat: [
      {
        userId: 12,
        msg: "first message",
      },
    ],
  },
  {
    _id: 13,
    title: "Test Chat Room",
    lastMsg: "This is a test message",
    msgTime: "08:10 PM",
    chat: [
      {
        userId: 13,
        msg: "first message",
      },
    ],
  },
  {
    _id: 14,
    title: "Test Chat Room",
    lastMsg: "This is a test message",
    msgTime: "08:10 PM",
    chat: [
      {
        userId: 14,
        msg: "first message",
      },
    ],
  },
  {
    _id: 15,
    title: "Test Chat Room",
    lastMsg: "This is a test message",
    msgTime: "08:10 PM",
    chat: [
      {
        userId: 15,
        msg: "first message",
      },
    ],
  },
];
export function ChatData() {
  return dataChat;
}
