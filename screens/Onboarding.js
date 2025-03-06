import React from "react";
import { StyleSheet, Dimensions, View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("screen");

class Onboarding extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar hidden />
        
        {/* Background Image */}
        <Image
          source={require('../assets/imgs/ecopulse-logo-onboarding.png')}
          style={styles.backgroundImage}
        />
        
        {/* Overlay Gradient */}
        <LinearGradient
          colors={["rgba(0,0,0,0.1)", "rgba(0,0,0,0.8)"]}
          style={styles.gradient}
        />
        
        {/* Content */}
        <View style={styles.content}>
          {/* Logo or App Icon */}
          <Image
            source={require('../assets/imgs/ecopulse-logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          
          <Text style={styles.title}>EcoEnergy</Text>
          <Text style={styles.subtitle}>
            Monitor and optimize your renewable energy systems with our comprehensive dashboard
          </Text>
          
          {/* Get Started Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("App")}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width,
    height,
    position: "absolute",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: height,
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 30,
    paddingBottom: 50,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "rgba(255,255,255,0.8)",
    marginBottom: 30,
    lineHeight: 26,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Onboarding;