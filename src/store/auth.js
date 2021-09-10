import { createContext, useState } from "react"
const AuthContext=createContext({isAuth:null,setIsAuth:()=>{}})

export const AuthContextProvider=(props)=>{
    const [isAuth,setIsAuth]=useState(false);

    return(
        <AuthContext.Provider
            value={
                {
                    isAuth:isAuth,
                    setIsAuth:setIsAuth
                }
            }
        >
            {props.children}
        </AuthContext.Provider>
    )

};


export default AuthContext;