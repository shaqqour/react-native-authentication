import React, { useEffect } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { StackActions } from 'react-navigation';

import { useAuth } from "../../providers/auth";

export default function AuthLoading(props) {
    const { navigate } = props.navigation;
    const { getAuthState } = useAuth();

};