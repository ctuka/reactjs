import { Outlet } from "react-router-dom";
import { AuthContext, initialState, reducer } from "../store/auth-store";
import { useReducer } from "react";




export default function AuthProvider() {

    const [state, dispatch] = useReducer(reducer, initialState);
return (
    <AuthContext.Provider value={{state, dispatch}}>
    <Outlet />
    </AuthContext.Provider>
  )
}
