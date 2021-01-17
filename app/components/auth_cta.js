import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function CTA({ title, ctaText, onPress, style, titleStyle, ctaStyle }) {
    return (
        <View style={[styles.footer, style]}>
            {
                title &&
                <Text style={[styles.footerText, titleStyle, ctaText && { marginRight: 5 }]}>
                    {title}
                </Text>
            }

            {
                ctaText &&
                <TouchableOpacity onPress={onPress}>
                    <Text style={[styles.footerCTA, ctaStyle]}>
                        {ctaText}
                    </Text>
                </TouchableOpacity>
            }
        </View>
    )
};