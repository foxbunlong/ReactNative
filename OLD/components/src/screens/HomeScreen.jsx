import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
    return (
        <View>
            <Text style={styles.text}>Hello World!</Text>
            <Button
                title='Go to components demo'
                onPress={() => {
                    props.navigation.navigate('Components');
                }}
            />
            <TouchableOpacity onPress={() => {
                props.navigation.navigate('List')
            }}>
                <Text>Go to list demo</Text>
            </TouchableOpacity>
            <Button
                title='Go to image screen'
                onPress={() => {
                    props.navigation.navigate('Images');
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});

export default HomeScreen;