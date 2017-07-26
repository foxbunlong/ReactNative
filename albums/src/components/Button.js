import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress }) => {
    const {
        btnStyle,
        textStle
     } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={btnStyle}>
            <Text style={textStle}>
                Buy Now
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '400',
        paddingTop: 10,
        paddingBottom: 10
    },
    btnStyle: {
        flex: 1,
        alignSelf: 'stretch', // fill container
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};

export default Button;
