interface Type {
  _id: string;
  title: string;
  lastMsg: string;
  msgTime: string;
}
interface Data {
  [dataChat: number]: Type;
}

const dataChat: Data = [
  {
    _id: "001",
    title: "Test Chat Room",
    lastMsg: "This is a test message",
    msgTime: "08:10 PM",
  },
  {
    _id: "002",
    title: "User 1",
    lastMsg: "This is a test message",
    msgTime: "08:10 PM",
  },
  {
    _id: "003",
    title: "New User",
    lastMsg: "This is a test message",
    msgTime: "08:10 PM",
  },
  {
    _id: "004",
    title: "Chat room xvz",
    lastMsg: "This is a test message",
    msgTime: "08:10 PM",
  },
  {
    _id: "005",
    title: "Lorem Ipsum",
    lastMsg: "This is a test message",
    msgTime: "08:10 PM",
  },
  {
    _id: "006",
    title: "New Chat Room",
    lastMsg: "This is a test message",
    msgTime: "08:10 PM",
  },
  {
    _id: "007",
    title: "AlivaTech",
    lastMsg: "This is a test message",
    msgTime: "08:10 PM",
  },
  {
    _id: "008",
    title: "abc User",
    lastMsg: "This is a test message",
    msgTime: "08:10 PM",
  },
  {
    _id: "009",
    title: "Test Chat Room",
    lastMsg: "This is a test message",
    msgTime: "08:10 PM",
  },
  {
    _id: "011",
    title: "User abc",
    lastMsg: "This is a test message",
    msgTime: "08:10 PM",
  },
  {
    _id: "012",
    title: "abc xyz",
    lastMsg: "This is a test message",
    msgTime: "08:10 PM",
  },
  {
    _id: "013",
    title: "Test Chat Room",
    lastMsg: "This is a test message",
    msgTime: "08:10 PM",
  },
  {
    _id: "014",
    title: "Test Chat Room",
    lastMsg: "This is a test message",
    msgTime: "08:10 PM",
  },
  {
    _id: "015",
    title: "Test Chat Room",
    lastMsg: "This is a test message",
    msgTime: "08:10 PM",
  },
  {
    _id: "016",
    title: "Test Chat Room",
    lastMsg: "This is a test message",
    msgTime: "08:10 PM",
  },
];
export function ChatData() {
  return dataChat;
}
