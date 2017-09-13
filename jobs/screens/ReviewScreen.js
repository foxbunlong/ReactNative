import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
    static navigationOptions = {
        title: 'Review Jobs',
        // header: () => {
        //     return {
        //         right: <Text>Right</Text>
        //     };
        // }

        // Fix Go right button due to changes in framework
        headerRight: <Button title="Settings" onPress={() => {
            }} />
    }

    render() {
        return (
            <View>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
            </View>
        );
    }
}

export default ReviewScreen;
