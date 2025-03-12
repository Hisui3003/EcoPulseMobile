import React from 'react';
import * as Font from 'expo-font';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import { Icon } from 'galio-framework';
import { MaterialIcons } from '@expo/vector-icons';

import argonConfig from '../assets/config/argon.json';
const ArgonExtra = require('../assets/font/argon.ttf');
const IconArgonExtra = createIconSetFromIcoMoon(argonConfig, 'ArgonExtra');

class IconExtra extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    try {
      await Font.loadAsync({ ArgonExtra: ArgonExtra });
      this.setState({ fontLoaded: true });
      console.log("ArgonExtra font loaded successfully");
    } catch (error) {
      console.error("Failed to load ArgonExtra font:", error);
    }
  }

  render() {
    const { name, family, ...rest } = this.props;
    
    // If the font is loaded and we're using ArgonExtra, use the custom icon set
    if (family === 'ArgonExtra' && this.state.fontLoaded) {
      return <IconArgonExtra name={name} family={family} {...rest} />;
    }
    
    // Convert any Ionicons naming pattern to Material Icons equivalents
    if (name.includes('-outline')) {
      const baseName = name.replace('-outline', '');
      switch (baseName) {
        case 'home':
          return <MaterialIcons name="home" {...rest} />;
        case 'share':
          return <MaterialIcons name="share" {...rest} />;
        case 'bulb':
          return <MaterialIcons name="lightbulb" {...rest} />;
        case 'settings':
          return <MaterialIcons name="settings" {...rest} />;
        case 'document-text':
          return <MaterialIcons name="description" {...rest} />;
        case 'sunny':
          return <MaterialIcons name="wb-sunny" {...rest} />;
        case 'thunderstorm':
          return <MaterialIcons name="air" {...rest} />;
        case 'flame':
          return <MaterialIcons name="local-fire-department" {...rest} />;
        case 'water':
          return <MaterialIcons name="water-drop" {...rest} />;
        case 'leaf':
          return <MaterialIcons name="eco" {...rest} />;
        case 'grid':
          return <MaterialIcons name="dashboard" {...rest} />;
        case 'help-circle':
          return <MaterialIcons name="help" {...rest} />;
        default:
          return <MaterialIcons name="circle" size={rest.size || 14} color={rest.color || 'black'} />;
      }
    }
    
    // Direct MaterialIcons usage
    if (family === 'MaterialIcons') {
      return <MaterialIcons name={name} {...rest} />;
    }
    
    // Map common icon names to MaterialIcons
    switch (name) {
      case 'home':
        return <MaterialIcons name="home" {...rest} />;
      case 'dashboard':
        return <MaterialIcons name="dashboard" {...rest} />;
      case 'wb-sunny':
        return <MaterialIcons name="wb-sunny" {...rest} />;
      case 'air':
        return <MaterialIcons name="air" {...rest} />;
      case 'local-fire-department':
        return <MaterialIcons name="local-fire-department" {...rest} />;
      case 'water-drop':
        return <MaterialIcons name="water-drop" {...rest} />;
      case 'eco':
        return <MaterialIcons name="eco" {...rest} />;
      case 'people':
        return <MaterialIcons name="people" {...rest} />;
      case 'bar-chart':
        return <MaterialIcons name="bar-chart" {...rest} />;
      case 'help':
        return <MaterialIcons name="help" {...rest} />;
      case 'logout':
        return <MaterialIcons name="logout" {...rest} />;
      case 'settings':
        return <MaterialIcons name="settings" {...rest} />;
      case 'share':
        return <MaterialIcons name="share" {...rest} />;
      case 'lightbulb':
        return <MaterialIcons name="lightbulb" {...rest} />;
      
      // Map ArgonExtra icons to MaterialIcons
      case 'shop':
        return <MaterialIcons name="home" {...rest} />;
      case 'map-big':
        return <MaterialIcons name="dashboard" {...rest} />;
      case 'spaceship':
        return <MaterialIcons name="wb-sunny" {...rest} />;
      case 'chart-pie-35':
        return <MaterialIcons name="air" {...rest} />;
      case 'calendar-date':
        return <MaterialIcons name="local-fire-department" {...rest} />;
      case 'profile-circle':
        return <MaterialIcons name="people" {...rest} />;
      case 'cart':
        return <MaterialIcons name="bar-chart" {...rest} />;
      case 'settings-gear-65':
        return <MaterialIcons name="settings" {...rest} />;
        
      // For any other icon family, try to use a sensible default
      default:
        if (name && family) {
          try {
            return <Icon name={name} family={family} {...rest} />;
          } catch (error) {
            return <MaterialIcons name="circle" size={rest.size || 14} color={rest.color || 'black'} />;
          }
        }
        return <MaterialIcons name="circle" size={rest.size || 14} color={rest.color || 'black'} />;
    }
  }
}

export default IconExtra;