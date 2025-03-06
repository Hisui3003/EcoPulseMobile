import { registerRootComponent } from 'expo';
import { AppRegistry } from 'react-native';
import App from './App';

// Register the app component
AppRegistry.registerComponent('main', () => App);

// Expo also provides a registerRootComponent function
// which internally uses AppRegistry
registerRootComponent(App);

// This ensures the app works both in Expo and when built as a standalone app