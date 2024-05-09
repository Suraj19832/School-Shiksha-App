
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {createContext, useEffect, useState} from "react";

export const AuthContext = createContext()
export const AuthProvider = ({children}) =>{
    const [test, setTest] = useState("Test Me")
    const [myLoading, setmyLoading] = useState(false)
    const [userToken, setuserToken] = useState(null)

    const isLoggedIn = async()=>{
        try {
            setmyLoading(true)
            let token = await AsyncStorage.getItem('userToken')
            setuserToken(token)
            setmyLoading(false)
        } catch (e) {
            console.log(`isLogged error ${e}`)
        }
    }

    useEffect(()=>{
        isLoggedIn()
        console.log(userToken)
    },[])

    return (
        <AuthContext.Provider value={{test,myLoading,userToken,setuserToken,setmyLoading}}>
            {children}
        </AuthContext.Provider>
    )
}