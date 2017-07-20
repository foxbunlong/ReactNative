import React from 'react';
import { AppRegistry } from 'react-native'; // Import destructures
import Header from './src/components/header'; // Component nesting

// const App = () => {
//   return (
//     <Text>Hello world</Text>
//   );
// };

const App = () => (
  <Header />
);

AppRegistry.registerComponent('albums', () => App);
