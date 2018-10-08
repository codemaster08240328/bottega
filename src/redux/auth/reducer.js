import actions from "./action"
import Immutable from 'seamless-immutable';
const initState = Immutable({ loginsuccess:null, user:null, message:null, loading:null })
export function authReducer(state = initState, action = {}) {
    switch (action.type) {
        case actions.SET_EMAIL: 
            return {
                ...state,
                user:Object.assign({},state.user,action.payload)
            }
        case actions.SET_NAME: 
            return {
                ...state,
                user:Object.assign({},state.user,action.payload)
            }
        case actions.SET_EDUCATION: 
            return {
                ...state,
                user:Object.assign({},state.user,action.payload)
            }
        case actions.SET_LOCATION: 
            return {
                ...state,
                user:Object.assign({},state.user,action.payload)
            }
        case actions.SET_FINAL: 
            return {
                ...state,
                user:Object.assign({},state.user,action.payload)
            }
        default:
            return state
    }
}