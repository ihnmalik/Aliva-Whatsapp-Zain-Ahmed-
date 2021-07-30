import * as actions from "./actionTypes";
import { Type } from "../../chatRoom/appData";
export interface TypeData {
  loading: boolean;
  error: string;
  chat: Array<Type>;
}
interface actionType {
  type: string;
  payload: any;
}
let initialState = {
  loading: true,
  error: "",
  chat: [],
};
export default function reducer(
  state: TypeData | any = initialState,
  action: actionType
) {
  switch (action.type) {
    case actions.FETCH_SUCCESS:
      return { ...state, loading: false, chat: action.payload };

    case actions.FETCH_FAIL:
      return console.log("DATA FETCH UNSUCCESSFUL");
    default:
      return state;
  }
}
