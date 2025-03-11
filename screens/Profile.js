import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from "react-native";
import Header from '../components/Header';

const Profile = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatNewPassword, setRepeatNewPassword] = useState('');
  const [activeTab, setActiveTab] = useState('Profile'); // State to manage active tab
  const [errors, setErrors] = useState({});

  const validateProfile = () => {
    const newErrors = {};
    if (!firstName) newErrors.firstName = 'First Name is required';
    if (!lastName) newErrors.lastName = 'Last Name is required';
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePassword = () => {
    const newErrors = {};
    if (!currentPassword) newErrors.currentPassword = 'Current Password is required';
    if (!newPassword) newErrors.newPassword = 'New Password is required';
    if (newPassword !== repeatNewPassword) newErrors.repeatNewPassword = 'Passwords do not match';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProfileSubmit = () => {
    if (validateProfile()) {
      // Handle save changes logic
      console.log({ firstName, lastName, email, phone });
    }
  };

  const handlePasswordSubmit = () => {
    if (validatePassword()) {
      // Handle update password logic
      console.log({ currentPassword, newPassword });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header Container */}
      <View style={styles.headerContainer}>
        <Header title="Profile" navigation={navigation} />
      </View>

      {/* Account Settings Container */}
      <View style={styles.accountSettingsContainer}>
        <Text style={styles.title}>Account Settings</Text>
        <Text style={styles.subtitle}>Manage your personal information and account security</Text>
      </View>
      
      {/* Tab Container */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tabButton} onPress={() => setActiveTab('Profile')}>
          <Text style={activeTab === 'Profile' ? styles.activeTab : styles.inactiveTab}>Profile</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.tabButton} onPress={() => setActiveTab('Security')}>
          <Text style={activeTab === 'Security' ? styles.activeTab : styles.inactiveTab}>Security</Text>
        </TouchableOpacity>
      </View>

      {/* Panel Container */}
      <View style={styles.panelContainer}>
        {activeTab === 'Profile' ? (
          <View style={styles.panel}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="First Name"
                onChangeText={setFirstName}
                value={firstName}
              />
              {errors.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Last Name"
                onChangeText={setLastName}
                value={lastName}
              />
              {errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
              />
              {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Phone"
                onChangeText={setPhone}
                value={phone}
              />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleProfileSubmit}>
              <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.panel}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Current Password"
                secureTextEntry
                onChangeText={setCurrentPassword}
                value={currentPassword}
              />
              {errors.currentPassword && <Text style={styles.errorText}>{errors.currentPassword}</Text>}
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="New Password"
                secureTextEntry
                onChangeText={setNewPassword}
                value={newPassword}
              />
              {errors.newPassword && <Text style={styles.errorText}>{errors.newPassword}</Text>}
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Repeat New Password"
                secureTextEntry
                onChangeText={setRepeatNewPassword}
                value={repeatNewPassword}
              />
              {errors.repeatNewPassword && <Text style={styles.errorText}>{errors.repeatNewPassword}</Text>}
            </View>
            <TouchableOpacity style={styles.button} onPress={handlePasswordSubmit}>
              <Text style={styles.buttonText}>Update Password</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <TouchableOpacity style={styles.deactivateButton}>
        <Text style={styles.deactivateText}>Deactivate Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headerContainer: {
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  accountSettingsContainer: {
    backgroundColor: '#157f3d',
    padding: 20,
    marginTop: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  divider: {
    width: 1,
    height: 20,
    backgroundColor: '#D3D3D3',
  },
  activeTab: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#157f3d',
  },
  inactiveTab: {
    fontSize: 16,
    color: '#525F7F',
  },
  panelContainer: {
    flex: 1,
    padding: 10,
    width: '100%',
  },
  panel: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    height: 50,
    borderColor: '#eaebee',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
  },
  button: {
    backgroundColor: '#157f3d',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  deactivateButton: {
    marginTop: 10,
    marginBottom: 40,
  },
  deactivateText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});

export default Profile;
