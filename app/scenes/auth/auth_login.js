import React, { useState } from 'react';
import { View } from 'react-native';

import * as api from "../../services/auth";
import { useAuth } from "../../providers/auth";

import Form from 'react-native-basic-form';
import CTA from "../../components/CTA";
import { Header, ErrorText } from "../../components/Shared";

export default function Login(props) {
    const { navigation } = props;
    const { navigate } = navigation;

    //1 - DECLARE VARIABLES
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { handleLogin } = useAuth();

    const fields = [
        { name: 'email', label: 'Email Address', required: true },
        { name: 'password', label: 'Password', required: true, secure: true }
    ];
};