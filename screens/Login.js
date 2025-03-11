import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, ImageBackground } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';

const Login = ({ navigation }) => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleLogin = () => {
    // Navigate to Home screen within the AppStack
    navigation.navigate('App', { screen: 'Home' });
  };

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Handle login logic
        console.log(values);
        handleLogin();
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <ImageBackground
          source={require('../assets/login-bg.png')}
          style={styles.backgroundImage}
        >
          <StatusBar barStyle="dark-content" />
          <View style={styles.panel}>
            <View style={styles.innerContainer}>
              <Ionicons name="person-circle" size={80} color="#4CAF50" style={styles.icon} />
              <Text style={styles.title}>Login</Text>
              <View style={styles.inputContainer}>
                <Ionicons name="mail" size={20} color="#525F7F" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                />
              </View>
              {errors.username && touched.username && <Text style={styles.errorText}>{errors.username}</Text>}
              <View style={styles.inputContainer}>
                <Ionicons name="lock-closed" size={20} color="#525F7F" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
              </View>
              {errors.password && touched.password && <Text style={styles.errorText}>{errors.password}</Text>}
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <Text style={styles.orText}>Or continue with</Text>
              <TouchableOpacity style={styles.googleButton}>
                <Ionicons name="logo-google" size={20} color="#4CAF50" />
                <Text style={styles.googleButtonText}>Sign in with Google</Text>
              </TouchableOpacity>
              <Text style={styles.signupText}>
                Not a member? 
                <Text style={styles.signupLink} onPress={() => navigation.navigate('Register')}>
                  Sign up now
                </Text>
              </Text>
            </View>
          </View>
        </ImageBackground>
      )}
    </Formik>
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
    borderWidth: 1,
    borderColor: '#eaebee',
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
  innerContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  panel: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
});

export default Login;
