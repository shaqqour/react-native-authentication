import Axios from 'axios';
import React, { useMemo, useReducer } from 'react';
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
        try {
            //Store data
            let {token, user} = data;
            let data_ = [[USER_KEY, JSON.stringify(user)], [TOKEN_KEY, token]];
            await AsyncStorage.multiSet(data_);

            //AXIOS Authorization header
            Axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

            //Dispatch to Reducer
            dispatch({type: LOGGED_IN, user: data.user});

        } catch(error) {
            throw new Error(error);
        }
    };

    //Handle Logout
    const handleLogout = async () => {
        try {

            //Remove data
            await AsyncStorage.multiRemove(keys);

            //AXIOS Authorization header
            delete axios.defaults.headers.common["Authorization"];

            //Dispatch to reducer
            dispatch({ type: LOGGED_OUT });
        } catch (error) {
            throw new Error(error);
        }
    };

    //Update user local storage data and dispatch to reducer
    const updateUser = async(user) => {
        try {
            await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
            dispatch({type: LOGGED_IN, user}); //Dispatch to reducer
        } catch(error) {
            throw new Error(error)
        }
    };

    const value = useMemo(() => {
        return { state, getAuthState, handleLogin, handleLogout, updateUser };
    }, [state]);

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    );

}