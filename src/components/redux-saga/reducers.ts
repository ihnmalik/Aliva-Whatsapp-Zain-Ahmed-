import * as actions from "./actionTypes";
let initialState = {
  loading: true,
  error: "",
  chat: [],
};
export default function reducer(state: any = initialState, action: any) {
  switch (action.type) {
    case actions.FETCH_SUCCESS:
      return { ...state, loading: false, chat: action.payload };

    case actions.FETCH_FAIL:
      return console.log("DATA FETCH UNSUCCESSFUL");
    default:
      return state;
  }
}
