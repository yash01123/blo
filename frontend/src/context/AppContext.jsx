'use client';
const { useState, createContext, useContext } = require("react");

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user"))
    );

    const [loggedIn, setLoggedIn] = useState(currentUser !== null);

    const logout = () => {
        localStorage.removeItem("user");
        setCurrentUser(null);
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setLoggedIn(false);
    }

    return <AppContext.Provider
        value={{ currentUser, setCurrentUser, loggedIn, setLoggedIn, logout }}
    >
        {children}
    </AppContext.Provider>
}

const useAppContext = () => useContext(AppContext);

export default useAppContext;