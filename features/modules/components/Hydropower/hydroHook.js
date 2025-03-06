// hydroHook.js for React Native
import { useState, useEffect } from 'react';
import { Platform, Alert } from 'react-native';
import api from '../api';

export const useHydroAnalytics = () => {
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
    api.get(`/api/predictions/hydro/?start_year=${startYear}&end_year=${endYear}`)
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
        // Create mock data as fallback
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
    Alert.alert(
      "Feature Not Available",
      "Download functionality is not available in the mobile app version.",
      [{ text: "OK" }]
    );
  };

  const generateMockData = (startYear, endYear) => {
    const data = [];
    const baseValue = 3000;
    const yearSpan = endYear - startYear;
    
    for (let i = 0; i <= yearSpan; i++) {
      const year = startYear + i;
      const value = baseValue + (i * 250) + (Math.random() * 700);
      
      data.push({
        date: `${year}`,
        value: parseFloat(value.toFixed(1))
      });
    }
    
    return data;
  };

  // Water Flow and Turbine Performance Data
  const waterFlowData = Array.from({ length: 7 }, (_, i) => ({
    day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i],
    flowRate: 500 + Math.sin(i * 0.8) * 100 + Math.random() * 50, // m³/s
    power: 4500 + Math.sin(i * 0.8) * 900 + Math.random() * 500 // kWh
  }));

  const turbinePerformance = Array.from({ length: 6 }, (_, i) => ({
    turbine: `Turbine ${i + 1}`,
    efficiency: 92 + Math.sin(i * 0.5) * 4 + Math.random() * 3,
    output: 2800 + Math.sin(i * 0.5) * 350 + Math.random() * 250
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
    waterFlowData,
    turbinePerformance
  };
};

export default useHydroAnalytics;