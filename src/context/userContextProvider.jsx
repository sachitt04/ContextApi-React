import React from "react";
import userContext from "./userContext";
// now lets make userContextProvider

 export const UserContextProvider = ({children}) => { // these children are props coming 
const [user , setUser] = React.useState(null)
    return(
        <userContext.Provider value={{user,setUser}}>
            {children}

        </userContext.Provider>
    )
}