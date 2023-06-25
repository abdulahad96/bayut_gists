import React, { createContext, useEffect, useState } from 'react';
import { getGistForUser, getPublicGists } from '../services/gistService';

const GistContext = createContext();
const GistContextProvider = ({ children }) => {
    const [publicGist, setPublicGists] = useState(null);
    const [userGists, setUserGists] = useState(null);
    useEffect(() => {
        getPublicGist()
    }, [])
    const getPublicGist = async () => {
        let isMounted = true;
        try{
            const data = await getPublicGists()
            if (isMounted) {
                setPublicGists(data.data)
              }

        }catch(err){
            // console.log(err)
        }
    }
    const getUserGist = async (userName) => {
        if (userName === '' || userName === ' ') {
            setUserGists(null)
        }
        else {
            try {
                const gists = await getGistForUser(userName)
                setUserGists(gists.data)

            } catch (err) {
                // console.log(err)
            }
        }
    }

    // Define any other state or functions you want to expose to consuming components

    return (
        <GistContext.Provider value={{ publicGist, getPublicGist, userGists, getUserGist }}>
            {children}
        </GistContext.Provider>
    );
};

export { GistContext, GistContextProvider };