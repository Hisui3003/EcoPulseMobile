import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, ImageBackground } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';

const Register = ({ navigation }) => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Handle registration logic
        console.log(values);
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
              <Text style={styles.title}>Create Account</Text>
              <View style={styles.inputContainer}>
                <Ionicons name="person" size={20} color="#525F7F" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="First Name *"
                  onChangeText={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                  value={values.firstName}
                />
              </View>
              {errors.firstName && touched.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}
              <View style={styles.inputContainer}>
                <Ionicons name="person" size={20} color="#525F7F" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Last Name *"
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  value={values.lastName}
                />
              </View>
              {errors.lastName && touched.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}
              <View style={styles.inputContainer}>
                <Ionicons name="mail" size={20} color="#525F7F" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Email *"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
              </View>
              {errors.email && touched.email && <Text style={styles.errorText}>{errors.email}</Text>}
              <View style={styles.inputContainer}>
                <Ionicons name="lock-closed" size={20} color="#525F7F" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Password *"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
              </View>
              {errors.password && touched.password && <Text style={styles.errorText}>{errors.password}</Text>}
              <View style={styles.inputContainer}>
                <Ionicons name="lock-closed" size={20} color="#525F7F" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Confirm Password *"
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  secureTextEntry
                />
              </View>
              {errors.confirmPassword && touched.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Create Account</Text>
              </TouchableOpacity>
              <Text style={styles.orText}>Or continue with</Text>
              <TouchableOpacity style={styles.googleButton}>
                <Ionicons name="logo-google" size={20} color="#4CAF50" />
                <Text style={styles.googleButtonText}>Sign up with Google</Text>
              </TouchableOpacity>
              <Text style={styles.signupText}>Already have an account? <Text style={styles.signupLink} onPress={() => navigation.navigate('Login')}>Login now</Text></Text>
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

export default Register;
