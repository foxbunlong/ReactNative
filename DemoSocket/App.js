import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import WS from 'react-native-websocket';

const Config = require('./Config');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

  onOpen() {
    console.log('Open!')
    // this.ws.send('Hello')
  }

  onMessage(websocketEvent) {
    // console.log(websocketEvent)
    if (websocketEvent.type == 'message') {
      console.log(websocketEvent.data)
    }
    
  }

  onError() {
    console.log
  }

  onClose() {
    console.log
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <WS
          ref={ref => { this.ws = ref }}
          url={Config.url}
          onOpen={() => this.onOpen()}
          onMessage={(websocketEvent) => this.onMessage(websocketEvent)}
          onError={() => this.onError()}
          onClose={() => this.onClose()}
          reconnect // Will try to reconnect onClose
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
