import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, ImageBackground } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Navigate to Home screen within the AppStack
    navigation.navigate('App', { screen: 'Home' });
  };

  return (
    <ImageBackground
      source={require('../assets/login-bg.png')}
      style={styles.backgroundImage}
    >
      <StatusBar barStyle="dark-content" />
      <View style={styles.panel}>
        <Ionicons name="person-circle" size={80} color="#4CAF50" style={styles.icon} />
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="mail" size={20} color="#525F7F" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={20} color="#525F7F" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>Or continue with</Text>
        <TouchableOpacity style={styles.googleButton}>
          <Ionicons name="logo-google" size={20} color="#4CAF50" />
          <Text style={styles.googleButtonText}>Sign in with Google</Text>
        </TouchableOpacity>
        <Text style={styles.signupText}>Not a member? <Text style={styles.signupLink}>Sign up now</Text></Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F9FE",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#525F7F",
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 10,
    borderWidth: 0,
    borderColor: '#E0E0E0',
    fontSize: 16,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
    borderWidth: 0,
    borderColor: '#E0E0E0',
  },
  inputIcon: {
    marginRight: 10,
  },
  orText: {
    marginVertical: 10,
    color: '#525F7F',
  },
  googleButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 20,
    width: '100%',
  },
  googleButtonText: {
    marginLeft: 10,
    color: '#525F7F',
  },
  signupText: {
    color: '#525F7F',
  },
  signupLink: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  panel: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
  },
});

export default Login;
