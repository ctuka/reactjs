import { createContext} from "react"



export const AuthContext = createContext();

export const initialState = {
    user: null,
    isAuthenticated: false
}

export const types = {
        LOGIN: "LOGIN",
        LOGOUT: "LOGOUT"
}

export const reducer = (state, action) => {
    if(action.type === types.LOGIN) {
        return {
            ...state, 
            user: action.payload,
            isAuthenticated: true
        }
    } else if(action.type === types.LOGOUT) {
        return initialState;
    }
}