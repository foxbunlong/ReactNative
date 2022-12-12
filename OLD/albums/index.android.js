import React from 'react';
import { AppRegistry, View } from 'react-native'; // Import destructures
import Header from './src/components/header'; // Component nesting
import AlbumList from './src/components/AlbumList';

// const App = () => {
//   return (
//     <Text>Hello world</Text>
//   );
// };

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View >
);

AppRegistry.registerComponent('albums', () => App);
