import { act } from '@testing-library/react'
import { AnyAction } from 'redux'
import * as actions from '../ActionTypes'

let initialState = {chat:[]}

export const ChatReducer = (state:any=initialState, action:any) =>{
    switch(action.type){
        case actions.NEW_CHAT:
            return{
                ...state, chat:action.payload

            }
            // return console.log("Check")
        case actions.FAILED:
            return state
        default:
            return state
    }
}