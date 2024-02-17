import { createContext, useState, ReactNode, useContext } from "react";
import { UserContextProps, User } from "../types/Types";

const initialUser: User | undefined = undefined;

export const UserContext = createContext<UserContextProps | undefined>(
    undefined
);

export const useUserContext = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useUserContext must be used within a UserProvider");
    }

    return context as UserContextProps;
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState<User | undefined | null>(initialUser);

    const contextValue: UserContextProps = { user, setUser };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};
