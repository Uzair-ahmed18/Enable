/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import AppNavigator from './src/navigation/AppNaavigation';
 import { LogBox } from 'react-native';
 LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
 LogBox.ignoreAllLogs();//Ignore all log notification
 
 const App: () => Node = () => {
   return (
    <AppNavigator/>
   );
 };
 
 
 export default App;