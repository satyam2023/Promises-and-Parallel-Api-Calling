/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ParallelApi from './src/Views/ParalleleApi';



function App(): React.JSX.Element {
 

  return (
 
      <ParallelApi/>

  );
}



export default App;
