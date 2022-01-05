// Librairies
import React from 'react';
import { Text, StyleSheet } from 'react-native';

function Logo(props) {
    return (
        <Text
            style={{ ...styles.title, fontSize: props.dimensions.window.width * 0.055 }}
        >
            STARBUCKS
        </Text>
    );
}

const styles = StyleSheet.create({
    title: {
        color: '#006341',
        textTransform: 'uppercase',
        fontFamily: 'Montserrat-Black',
    },
});

export default Logo;
