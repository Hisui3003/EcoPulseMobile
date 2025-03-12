import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';

const SubmitTicket = ({ navigation }) => {
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState(''); // Leave the email input blank
  const [category, setCategory] = useState('Select Category');
  const [priority, setPriority] = useState('Select Priority');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});
  const [activePanel, setActivePanel] = useState('faq'); // Set initial active panel to 'faq'
  const [expandedQuestions, setExpandedQuestions] = useState({
    resetPassword: false,
    billingInfo: false,
    billing: false,
    paymentMethods: false,
  }); // Initialize all questions as false

  const validateForm = () => {
    const newErrors = {};
    if (!subject) newErrors.subject = 'Subject is required';
    if (!email) newErrors.email = 'Email is required';
    if (category === 'Select Category') newErrors.category = 'Category is required';
    if (priority === 'Select Priority') newErrors.priority = 'Priority is required';
    if (!description) newErrors.description = 'Description is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Handle ticket submission logic
      console.log({ subject, email, category, priority, description });
      // Reset form or navigate
    }
  };

  const toggleQuestion = (question) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [question]: !prev[question],
    }));
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header Container */}
      <View style={styles.headerContainer}>
        <Header title="Support" navigation={navigation} />
      </View>

      {/* Button Container */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, activePanel === 'faq' && styles.activeButton]} 
          onPress={() => setActivePanel(activePanel === 'faq' ? '' : 'faq')}
        >
          <Text style={styles.buttonText}>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, activePanel === 'submit' && styles.activeButton]} 
          onPress={() => setActivePanel(activePanel === 'submit' ? '' : 'submit')}
        >
          <Text style={styles.buttonText}>Submit a Ticket</Text>
        </TouchableOpacity>
      </View>

      {/* FAQ Panel */}
      {activePanel === 'faq' && (
        <View style={styles.panel}>
          <Text style={styles.panelTitle}>Account Management</Text>
          <TouchableOpacity onPress={() => toggleQuestion('resetPassword')} style={styles.questionContainer}>
            <Text style={styles.question}>How do I reset my password?</Text>
            <Icon name={expandedQuestions.resetPassword ? "chevron-up" : "chevron-down"} size={20} />
          </TouchableOpacity>
          {expandedQuestions.resetPassword && (
            <View style={styles.answerContainer}>
              <Text style={styles.answer}>To reset your password, go to the settings page and follow the instructions.</Text>
            </View>
          )}
          <TouchableOpacity onPress={() => toggleQuestion('billingInfo')} style={styles.questionContainer}>
            <Text style={styles.question}>How do I update my billing information?</Text>
            <Icon name={expandedQuestions.billingInfo ? "chevron-up" : "chevron-down"} size={20} />
          </TouchableOpacity>
          {expandedQuestions.billingInfo && (
            <View style={styles.answerContainer}>
              <Text style={styles.answer}>You can update your billing information in the billing section of your account settings.</Text>
            </View>
          )}

          <Text style={styles.panelTitle}>Billing & Payments</Text>
          <TouchableOpacity onPress={() => toggleQuestion('billing')} style={styles.questionContainer}>
            <Text style={styles.question}>When will I be billed?</Text>
            <Icon name={expandedQuestions.billing ? "chevron-up" : "chevron-down"} size={20} />
          </TouchableOpacity>
          {expandedQuestions.billing && (
            <View style={styles.answerContainer}>
              <Text style={styles.answer}>Billing occurs on the first of every month.</Text>
            </View>
          )}
          <TouchableOpacity onPress={() => toggleQuestion('paymentMethods')} style={styles.questionContainer}>
            <Text style={styles.question}>What payment methods do you accept?</Text>
            <Icon name={expandedQuestions.paymentMethods ? "chevron-up" : "chevron-down"} size={20} />
          </TouchableOpacity>
          {expandedQuestions.paymentMethods && (
            <View style={styles.answerContainer}>
              <Text style={styles.answer}>We accept credit cards, PayPal, and bank transfers.</Text>
            </View>
          )}

          {/* Support Information */}
          <View style={styles.supportContainer}>
            <Text style={styles.supportTitle}>Support</Text>
            <Text style={styles.supportText}>Email Support: eco-plus-support@gmail.com</Text>
            <Text style={styles.supportText}>Phone Support: +1 (555) 123-4567</Text>
            <Text style={styles.supportText}>Live Chat: Available 24/7</Text>
          </View>
        </View>
      )}

      {/* Submit Ticket Panel */}
      {activePanel === 'submit' && (
        <View style={styles.formContainer}>
          <Text style={styles.title}>Submit a Support Ticket</Text>

          <Text style={styles.label}>Subject</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter subject"
            onChangeText={setSubject}
            value={subject}
          />
          {errors.subject && <Text style={styles.errorText}>{errors.subject}</Text>}

          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter email"
            onChangeText={setEmail}
            value={email}
            editable={true} // Make it editable
          />
          <Text style={styles.infoText}>This email is associated with your account and cannot be changed.</Text>
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

          <Text style={styles.label}>Category</Text>
          <TextInput
            style={styles.input}
            placeholder="Select Category"
            onChangeText={setCategory}
            value={category}
          />
          {errors.category && <Text style={styles.errorText}>{errors.category}</Text>}

          <Text style={styles.label}>Priority</Text>
          <TextInput
            style={styles.input}
            placeholder="Select Priority"
            onChangeText={setPriority}
            value={priority}
          />
          {errors.priority && <Text style={styles.errorText}>{errors.priority}</Text>}

          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.descriptionInput]}
            placeholder="Enter description"
            multiline
            numberOfLines={4}
            onChangeText={setDescription}
            value={description}
          />
          {errors.description && <Text style={styles.errorText}>{errors.description}</Text>}

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit Ticket</Text>
          </TouchableOpacity>
        </View>
      )}
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  activeButton: {
    backgroundColor: '#3E8E41',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  panel: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 20,
  },
  panelTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  question: {
    fontSize: 16,
  },
  answerContainer: {
    paddingLeft: 20,
    paddingBottom: 10,
  },
  answer: {
    fontSize: 14,
    color: '#555',
  },
  supportContainer: {
    marginTop: 20,
  },
  supportTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  supportText: {
    fontSize: 16,
    marginBottom: 5,
  },
  formContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: '#eaebee',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    marginBottom: 10,
  },
  descriptionInput: {
    height: 100,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  infoText: {
    fontSize: 12,
    color: '#525F7F',
    marginBottom: 10,
  },
});

export default SubmitTicket;
