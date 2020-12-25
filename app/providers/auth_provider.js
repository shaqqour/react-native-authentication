import React, { useReducer } from 'react';
import { AsyncStorage } from 'react-native';



//Context
const AuthContext = React.createContext();

function AuthProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState || {});

    // Get Auth state
    const getAuthState = async () => {
        try {
            // Get token && user
            let token = await AsyncStorage.getItem(TOKEN_KEY);
            let user = await AsyncStorage.getItem(USER_KEY);
            user = JSON.parse(user);

            if (token !== null && user !== null) await handleLogin({ token, user });
            else await handleLogout();

            return {token, user};

        } catch (error) {
            throw new Error(error);
        }
    };

    //Handle Login
    const handleLogin = async(data) => {
        //do something
    }

    //Handle Logout
    const handleLogin = async () => {
        //do something
    }

}