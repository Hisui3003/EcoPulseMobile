import React from "react";
import { StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Block, Text, theme } from "galio-framework";

import IconExtra from "./Icon";
import argonTheme from "../constants/Theme";

class DrawerItem extends React.Component {
  renderIcon = () => {
    const { title, focused } = this.props;
    
    // Map each menu item to the corresponding Material icon
    switch (title) {
      case "Home":
        return (
          <IconExtra
            name="home"
            family="MaterialIcons"
            size={22}
            color={focused ? "white" : argonTheme.COLORS.PRIMARY}
          />
        );
      case "Modules Management":
        return (
          <IconExtra
            name="dashboard"
            family="MaterialIcons" 
            size={22}
            color={focused ? "white" : argonTheme.COLORS.PRIMARY}
          />
        );
      case "Solar Energy":
        return (
          <IconExtra
            name="wb-sunny"
            family="MaterialIcons"
            size={22}
            color={focused ? "white" : "#FFC107"}
          />
        );
      case "Wind Energy":
        return (
          <IconExtra
            name="air"
            family="MaterialIcons"
            size={22}
            color={focused ? "white" : "#03A9F4"}
          />
        );
      case "Geothermal":
        return (
          <IconExtra
            name="local-fire-department"
            family="MaterialIcons"
            size={22}
            color={focused ? "white" : "#FF5722"}
          />
        );
      case "Hydropower":
        return (
          <IconExtra
            name="water-drop"
            family="MaterialIcons"
            size={22}
            color={focused ? "white" : "#2196F3"}
          />
        );
      case "Biomass":
        return (
          <IconExtra
            name="eco"
            family="MaterialIcons"
            size={22}
            color={focused ? "white" : "#4CAF50"}
          />
        );
      case "Analytics Dashboard":
        return (
          <IconExtra
            name="bar-chart"
            family="MaterialIcons"
            size={22}
            color={focused ? "white" : "#FF9800"}
          />
        );
      case "Help Tickets":
        return (
          <IconExtra
            name="help"
            family="MaterialIcons"
            size={22}
            color={focused ? "white" : "#607D8B"}
          />
        );
      case "Log out":
        return (
          <IconExtra
            name="logout"
            family="MaterialIcons"
            size={22}
            color={focused ? "white" : "rgba(0,0,0,0.5)"}
          />
        );
      default:
        return null;
    }
  };

  render() {
    const { focused, title, navigation } = this.props;
    
    // Filter out admin view items
    if (title === "Manage Users" || title === "Admin Console" || title === "Admin") {
      return null;
    }

    const containerStyles = [
      styles.defaultStyle,
      focused ? [styles.activeStyle, styles.shadow] : null
    ];

    return (
      <TouchableOpacity
        style={{ height: 60 }}
        onPress={() => {
          if (title === "Getting Started") {
            Linking.openURL("https://demos.creative-tim.com/argon-pro-react-native/docs/")
              .catch(err => console.error("An error occurred", err));
          } else {
            navigation.navigate(title);
          }
        }}
      >
        <Block flex row style={containerStyles}>
          <Block middle flex={0.1} style={{ marginRight: 5 }}>
            {this.renderIcon()}
          </Block>
          <Block row center flex={0.9}>
            <Text
              size={15}
              bold={focused ? true : false}
              color={focused ? "white" : "rgba(0,0,0,0.5)"}
            >
              {title}
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 16,
    paddingHorizontal: 16
  },
  activeStyle: {
    backgroundColor: argonTheme.COLORS.ACTIVE,
    borderRadius: 4
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.1
  }
});

export default DrawerItem;