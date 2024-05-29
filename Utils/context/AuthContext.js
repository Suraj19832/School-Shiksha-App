
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {createContext, useEffect, useState} from "react";

export const AuthContext = createContext()
export const AuthProvider = ({children}) =>{
    const [test, setTest] = useState("Test Me")
    const [myLoading, setmyLoading] = useState(false)
    const [userToken, setuserToken] = useState(null)
    const [UpiLink ,setupiLink]= useState("")
    const [orderid ,setorderid]= useState("")
    const [profileAllData, setprofileAllData] = useState("")
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
    const updateUpiLink = (value) => {
        setupiLink(value);
    };
    const updateOrderid = (value) => {
        setorderid(value);
    };

    useEffect(()=>{
        isLoggedIn()
        console.log(userToken)
    },[])

    return (
        <AuthContext.Provider value={{test,myLoading,userToken,setuserToken,setmyLoading,UpiLink,updateUpiLink ,updateOrderid,orderid,profileAllData,setprofileAllData}}>
            {children}
        </AuthContext.Provider>
    )
}