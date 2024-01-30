import React, { createContext, useContext, useState } from 'react';
// import Loading from '../components/Loading';
// import { getCookie } from '../utilities/cookies';
// import { env } from '../utilities/function';
// import { authServer } from '../utilities/axiosPrototypes';
import Login from '../pages/Login';
import { getSession, setSession } from '../utils/function';

const authorizeContext = createContext();

const AuthorizationProvider = ({ children }) => {
    const [content, setContent] = useState(getSession('isLoggedIn') ? children : <Login />);
    const [user, setUser] = useState({});

    const authorize = async loggedIn => {
        if (loggedIn) {
            setSession('isLoggedIn', true);
            setContent(children);
        } else {
            setContent(<Login />);
        }
        // if (typeof cb === 'function') cb(setUser);
    };

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const role = getCookie('role');
    //             if (!role) throw new Error('role not found');
    //             const response = await authServer.get(`/${role}/profile`);
    //             const user = response.data.user;

    //             authorize(true, setUser => setUser(user));
    //         } catch (err) {
    //             console.log(err);
    //             authorize(false);
    //         }
    //     })();
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <authorizeContext.Provider value={{ authorize, setUser, user, setContent }}>
            {content}
        </authorizeContext.Provider>
    );
};

const useAuthorize = () => useContext(authorizeContext)?.authorize;
const useUser = () => useContext(authorizeContext)?.user;
const useSetUser = () => useContext(authorizeContext).setUser;
const useSetContent = () => useContext(authorizeContext).setContent;

export default AuthorizationProvider;
export { useAuthorize, useUser, useSetUser, useSetContent };
