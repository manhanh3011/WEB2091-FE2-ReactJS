import { createContext } from "react";

type UserContextType = {
    username: string;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({children}: {children: any}) => {
    const username = "anhtmph58125";

    return (
        <UserContext.Provider value={{username}} >
            {children}
        </UserContext.Provider>
    )
    
}