import React, { useState } from 'react';
import { View } from 'react-native';

import * as api from "../../services/auth";
import { useAuth } from "../../providers/auth";

import Form from 'react-native-basic-form';
import { Header, ErrorText } from "../../components/Shared";

export default function Username(props) {
    const { navigation } = props;

    // DECLARE VARIABLES
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { state, updateUser } = useAuth();

};