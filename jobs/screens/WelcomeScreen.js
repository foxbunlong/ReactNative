import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
    { text: 'Welcome to JobApp', color: '#03A9F4' },
    { text: 'Use this to get a job', color: '#009688' },
    { text: 'Set your location and swipe away', color: '#03A9F4' },
    { text: 'Set your location and swipe away 2', color: '#009688' }
];

class WelcomeScreen extends Component {
    onSlidesComplete = () => {
        // Send to component after rendering
        this.props.navigation.navigate('auth');
    }

    render() {
        return (
            <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
        );
    }
}

export default WelcomeScreen;
