import React from 'react';
import { View, Text } from 'react-native';

//HEADER COMPONENT
export const Header = (props) => {
    let { title, style } = props;

    return (
        <View style={[styles.header, style]}>
            <Text style={styles.headerText}>
                {title}
            </Text>
        </View>
    )
};

Header.defaultProps = {
    title: "",
    style: {}
};