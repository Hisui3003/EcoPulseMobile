// Complete api.js file with improved networking configuration

import { Platform } from 'react-native';

// Get local IP address for development - this is just an example
// You'll need to replace this with your actual computer's IP address on your network
const MY_LOCAL_IP = '192.168.1.X'; // Replace X with your actual IP's last digits

// API Base URL configuration
export const getBaseUrl = () => {
  if (!__DEV__) {
    return "https://production-api-url.com";
  }

  // Different handling based on platform and environment
  if (Platform.OS === 'android') {
    // For Android emulator
    return 'http://10.0.2.2:8000';
  } else if (Platform.OS === 'ios') {
    // For iOS simulator
    return 'http://localhost:8000';
  } else {
    // For physical devices (both platforms)
    return `http://${MY_LOCAL_IP}:8000`;
  }
};

const BASE_URL = getBaseUrl();
console.log('API Base URL:', BASE_URL);

// Add a configurable timeout that can be longer for slower connections
const DEFAULT_TIMEOUT = 15000; // 15 seconds

// Implement a fetch with timeout since React Native's fetch doesn't support timeout option
const fetchWithTimeout = async (url, options = {}, timeout = DEFAULT_TIMEOUT) => {
  // Create an abort controller to handle timeouts
  const controller = new AbortController();
  const { signal } = controller;

  // Set up the timeout
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    // Execute the fetch with the signal
    const response = await fetch(url, { ...options, signal });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      throw new Error('Request timeout: The server took too long to respond');
    }
    throw error;
  }
};

const api = {
  get: async (url, timeout = DEFAULT_TIMEOUT) => {
    const fullUrl = `${BASE_URL}${url}`;
    console.log('Fetching from URL:', fullUrl);

    try {
      const response = await fetchWithTimeout(
        fullUrl,
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        },
        timeout
      );

      console.log('Response status:', response.status);

      if (!response.ok) {
        console.error('Response error:', response.status, response.statusText);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Data received successfully');
      return { data };
    } catch (error) {
      console.error('Fetch error details:', error.message);

      // More specific error handling
      if (error.message.includes('Network request failed')) {
        console.error('Network connectivity issue - check if server is running and accessible');
      } else if (error.message.includes('timeout')) {
        console.error('Request timed out - server might be overloaded or unreachable');
      } else if (error.message.includes('JSON')) {
        console.error('Invalid JSON response from server');
      }

      throw error;
    }
  },

  post: async (url, data = {}, timeout = DEFAULT_TIMEOUT) => {
    const fullUrl = `${BASE_URL}${url}`;
    console.log('POSTing to URL:', fullUrl);

    try {
      const response = await fetchWithTimeout(
        fullUrl,
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        },
        timeout
      );

      if (!response.ok) {
        console.error('POST response error:', response.status, response.statusText);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      return { data: responseData };
    } catch (error) {
      console.error('POST error details:', error.message);
      throw error;
    }
  },

  // Test connection method with enhanced error handling
  testConnection: async () => {
    try {
      console.log('Testing connection to:', `${BASE_URL}/api/test/`);
      const response = await fetchWithTimeout(
        `${BASE_URL}/api/test/`,
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          }
        },
        5000 // Shorter timeout for connection test
      );

      console.log('Test connection status:', response.status);
      return response.ok;
    } catch (error) {
      console.error('Connection test failed:', error.message);
      return false;
    }
  }
};
api.getBaseUrl = getBaseUrl;
export default api;