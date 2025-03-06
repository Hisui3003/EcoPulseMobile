// Updated Solar.jsx with connection error handling
import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  Dimensions,
  Alert
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { YearRangePicker } from '../../../../components/index';  // Adjust path based on your structure
import { useSolarAnalytics } from './solarHook';
import SimpleChart from './Chart';
import styles from './styles';

const { width } = Dimensions.get("screen");

const Solar = () => {
  const {
    generationData,
    currentProjection,
    loading,
    error,
    connectionStatus,
    selectedStartYear,
    selectedEndYear,
    handleStartYearChange,
    handleEndYearChange,
    handleDownload,
    retryFetch,
    solarIrradianceData,
    panelPerformance
  } = useSolarAnalytics();

  // Handle loading state
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FFB800" />
        <Text style={styles.loadingText}>
          Loading Solar Analytics...
        </Text>
      </View>
    );
  }

  // Handle connection error
  if (error && connectionStatus === 'disconnected') {
    return (
      <View style={styles.errorContainer}>
        <Ionicons name="cloud-offline" size={48} color="#FF6B6B" />
        <Text style={styles.errorTitle}>Connection Error</Text>
        <Text style={styles.errorText}>
          {error}
        </Text>
        <Text style={styles.errorSubtext}>
          Note: Using mock data for demonstration purposes.
        </Text>
        <TouchableOpacity
          style={styles.retryButton}
          onPress={retryFetch}
        >
          <Text style={styles.retryButtonText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.headerContainer}>
          <View style={styles.titleRow}>
            <Ionicons name="sunny" size={24} color="#FFB800" />
            <Text style={styles.headerTitle}>Solar Energy Analytics</Text>
          </View>

          {/* Show connection status indicator */}
          <View style={styles.connectionIndicator}>
            <View
              style={[
                styles.connectionDot,
                { backgroundColor: connectionStatus === 'connected' ? '#4CAF50' :
                                  connectionStatus === 'disconnected' ? '#FF6B6B' :
                                  '#FFC107' }
              ]}
            />
            <Text style={styles.connectionText}>
              {connectionStatus === 'connected' ? 'Connected to API' :
               connectionStatus === 'disconnected' ? 'Using mock data' :
               'Connection status unknown'}
            </Text>
          </View>

          <Text style={styles.selectedRange}>
            Selected Range: {selectedStartYear} - {selectedEndYear} ({selectedEndYear - selectedStartYear} years)
          </Text>
        </View>

        <View style={styles.pickerContainer}>
          <YearRangePicker
            initialStartYear={selectedStartYear}
            initialEndYear={selectedEndYear}
            onStartYearChange={handleStartYearChange}
            onEndYearChange={handleEndYearChange}
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Power Generation Trend</Text>
          <Text style={styles.generationValue}>{currentProjection} GWH</Text>
          <Text style={styles.generationSubtitle}>Predictive Analysis Generation projection</Text>

          {generationData.length > 0 && (
            <SimpleChart
              data={generationData}
              width={width - 60}
              height={220}
            />
          )}
        </View>

        {/* Daily Solar Irradiance Section */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Daily Solar Irradiance</Text>
          <Text style={styles.cardSubtitle}>Last 7 days irradiance and power output</Text>

          <View style={styles.tableContainer}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderCell}>Day</Text>
              <Text style={styles.tableHeaderCell}>Irradiance (W/m²)</Text>
              <Text style={styles.tableHeaderCell}>Power (kWh)</Text>
            </View>

            {solarIrradianceData.map((item, index) => (
              <View key={index} style={[styles.tableRow, index % 2 === 0 ? styles.tableRowEven : null]}>
                <Text style={styles.tableCell}>{item.day}</Text>
                <Text style={styles.tableCell}>{item.irradiance.toFixed(1)}</Text>
                <Text style={styles.tableCell}>{item.power.toFixed(1)}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Panel Performance Section */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Panel Performance</Text>
          <Text style={styles.cardSubtitle}>Current efficiency and output by array</Text>

          <View style={styles.tableContainer}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderCell}>Array</Text>
              <Text style={styles.tableHeaderCell}>Efficiency (%)</Text>
              <Text style={styles.tableHeaderCell}>Output (kWh)</Text>
            </View>

            {panelPerformance.map((item, index) => (
              <View key={index} style={[styles.tableRow, index % 2 === 0 ? styles.tableRowEven : null]}>
                <Text style={styles.tableCell}>{item.array}</Text>
                <Text style={styles.tableCell}>{item.efficiency.toFixed(1)}</Text>
                <Text style={styles.tableCell}>{item.output.toFixed(1)}</Text>
              </View>
            ))}
          </View>
        </View>

        <TouchableOpacity
          style={styles.downloadButton}
          onPress={handleDownload}
        >
          <Text style={styles.downloadButtonText}>Download Summary</Text>
        </TouchableOpacity>

        {/* Connection tester button for development */}
        {__DEV__ && (
          <TouchableOpacity
            style={styles.debugButton}
            onPress={() => {
              Alert.alert(
                "API Connection Info",
                `Connection Status: ${connectionStatus}\n` +
                `Error: ${error || 'None'}\n` +
                `Platform: ${Platform.OS}\n` +
                `Data Source: ${connectionStatus === 'connected' ? 'API' : 'Mock Data'}`,
                [
                  {
                    text: "Test Connection",
                    onPress: retryFetch
                  },
                  {
                    text: "OK"
                  }
                ]
              );
            }}
          >
            <Ionicons name="code-working" size={16} color="#fff" />
            <Text style={styles.debugButtonText}>Debug Connection</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Solar;