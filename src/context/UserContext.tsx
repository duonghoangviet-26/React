import { createContext, useContext, useState } from "react";

type User = {
    name: string;
    avarta: string,
};

type UserContextType = {
    user: User | null;
    setUser: (user: User | null) => void;
};

export const UserContext = createContext<UserContextType | any>(null);

export const UserProvider = ({ children }: { children: any }) => {
    const [user, setUser] = useState<User | null>(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};