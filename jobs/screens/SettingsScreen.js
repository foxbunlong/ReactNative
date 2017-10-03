import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { clearLikedJobs } from '../actions';

class SettingsScreen extends Component {

    // Already fixed in App.js
    // static navigationOptions = {
    //     headerStyle: { marginTop: Platform.OS === 'android' ? 24 : 0 }
    // };

    render() {
        return (
            <View>
                <Button
                    title="Reset Liked Jobs"
                    large
                    icon={{ name: 'delete-forever' }}
                    backgroundColor="#f44336"
                    onPress={this.props.clearLikedJobs} />
            </View>
        );
    }
}

export default connect(null, { clearLikedJobs })(SettingsScreen);
