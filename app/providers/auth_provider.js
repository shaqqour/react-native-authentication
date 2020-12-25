import React, { useReducer } from 'react';



//Context
const AuthContext = React.createContext();

function AuthProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState || {});
}