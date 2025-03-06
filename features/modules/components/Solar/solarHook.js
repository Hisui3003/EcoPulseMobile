// solarHook.js for React Native
import { useState, useEffect } from 'react';
import { Platform, Alert } from 'react-native';
import api from '../api';

export const useSolarAnalytics = () => {
  const [generationData, setGenerationData] = useState([]);
  const [currentProjection, setCurrentProjection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedStartYear, setSelectedStartYear] = useState(new Date().getFullYear());
  const [selectedEndYear, setSelectedEndYear] = useState(new Date().getFullYear() + 1);

  useEffect(() => {
    fetchData(selectedStartYear, selectedEndYear);
  }, [selectedStartYear, selectedEndYear]);

  const fetchData = (startYear, endYear) => {
    setLoading(true);
    api.get(`/api/predictions/solar/?start_year=${startYear}&end_year=${endYear}`)
      .then(response => {
        const data = response.data.predictions;
        const formattedData = data.map(item => ({
          date: item.Year,
          value: item['Predicted Production']
        }));

        setGenerationData(formattedData);
        if (formattedData.length > 0) {
          setCurrentProjection(formattedData[formattedData.length - 1].value);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // Create mock data as fallback - keeping this for mobile
        const mockData = generateMockData(startYear, endYear);
        setGenerationData(mockData);
        setCurrentProjection(mockData[mockData.length - 1].value);
        
        // Show an alert for development purposes
        if (__DEV__) {
          Alert.alert(
            "API Error",
            "Using mock data instead. Check your API connection.",
            [{ text: "OK" }]
          );
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleStartYearChange = (year) => setSelectedStartYear(year);
  const handleEndYearChange = (year) => setSelectedEndYear(year);

  const handleDownload = async () => {
    // In a mobile app, you might want to share data instead of downloading
    Alert.alert(
      "Feature Not Available",
      "Download functionality is not available in the mobile app version.",
      [{ text: "OK" }]
    );
  };

  // Generate mock data for fallback
  const generateMockData = (startYear, endYear) => {
    const data = [];
    const baseValue = 2500;
    const yearSpan = endYear - startYear;
    
    for (let i = 0; i <= yearSpan; i++) {
      const year = startYear + i;
      // Generate a value with some randomness and an upward trend
      const value = baseValue + (i * 200) + (Math.random() * 600);
      
      data.push({
        date: `${year}`,
        value: parseFloat(value.toFixed(1))
      });
    }
    
    return data;
  };

  // Adding additional data to match web version
  const solarIrradianceData = Array.from({ length: 7 }, (_, i) => ({
    day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i],
    irradiance: 800 + Math.sin(i * 0.8) * 200 + Math.random() * 100,
    power: 4200 + Math.sin(i * 0.8) * 800 + Math.random() * 400
  }));

  const panelPerformance = Array.from({ length: 6 }, (_, i) => ({
    array: `Array ${i + 1}`,
    efficiency: 95 + Math.sin(i * 0.5) * 3 + Math.random() * 2,
    output: 2500 + Math.sin(i * 0.5) * 300 + Math.random() * 200
  }));

  return {
    generationData,
    currentProjection,
    loading,
    selectedStartYear,
    selectedEndYear,
    handleStartYearChange,
    handleEndYearChange,
    handleDownload,
    solarIrradianceData,
    panelPerformance
  };
};

export default useSolarAnalytics;