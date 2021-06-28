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
