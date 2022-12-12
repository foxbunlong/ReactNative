import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {

    const greeting = <Text style={styles.subHeaderStyle}>Hello again!</Text>;

    return (
        <View>
            <Text style={styles.textStyle} >Hello World from components screen</Text>
            {greeting}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;