export const SearchCustom = (value: any, searchList: any) => {
  const results: any = searchList.filter((ChatroomListFiltered: any) =>
    ChatroomListFiltered.title.toString().toLowerCase().includes(value)
  );
  return results;
};

export const currentTimeCustom = () => {
  var today = new Date();
  const currentTime =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return currentTime;
};

export const formatAMPM = (date: any) => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};
