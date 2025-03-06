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
import { YearRangePicker } from '../../../../components/index'; // Adjust path based on your structure
import { useHydroAnalytics } from './hydroHook';
import SimpleChart from './Chart';
import styles from './styles';

const { width } = Dimensions.get("screen");

const Hydro = () => {
  const {
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
  } = useHydroAnalytics();

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0077B6" />
        <Text style={styles.loadingText}>Loading Hydropower Analytics...</Text>
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
            <Ionicons name="water" size={24} color="#0077B6" />
            <Text style={styles.headerTitle}>Hydropower Analytics</Text>
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
          <Text style={styles.generationValue}>{currentProjection} GWh</Text>
          <Text style={styles.generationSubtitle}>Predictive Analysis of Hydropower Generation</Text>
          {generationData.length > 0 && (
            <SimpleChart data={generationData} width={width - 60} height={220} />
          )}
        </View>

        {/* Water Flow Data Section */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Weekly Water Flow Data</Text>
          <Text style={styles.cardSubtitle}>Flow rate and power output trends</Text>
          <View style={styles.tableContainer}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderCell}>Day</Text>
              <Text style={styles.tableHeaderCell}>Flow Rate (m³/s)</Text>
              <Text style={styles.tableHeaderCell}>Power (kWh)</Text>
            </View>
            {waterFlowData.map((item, index) => (
              <View key={index} style={[styles.tableRow, index % 2 === 0 ? styles.tableRowEven : null]}>
                <Text style={styles.tableCell}>{item.day}</Text>
                <Text style={styles.tableCell}>{item.flowRate.toFixed(1)}</Text>
                <Text style={styles.tableCell}>{item.power.toFixed(1)}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Turbine Performance Section */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Turbine Performance</Text>
          <Text style={styles.cardSubtitle}>Efficiency and output of each turbine</Text>
          <View style={styles.tableContainer}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderCell}>Turbine</Text>
              <Text style={styles.tableHeaderCell}>Efficiency (%)</Text>
              <Text style={styles.tableHeaderCell}>Output (kWh)</Text>
            </View>
            {turbinePerformance.map((item, index) => (
              <View key={index} style={[styles.tableRow, index % 2 === 0 ? styles.tableRowEven : null]}>
                <Text style={styles.tableCell}>{item.turbine}</Text>
                <Text style={styles.tableCell}>{item.efficiency.toFixed(1)}</Text>
                <Text style={styles.tableCell}>{item.output.toFixed(1)}</Text>
              </View>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.downloadButton} onPress={handleDownload}>
          <Text style={styles.downloadButtonText}>Download Summary</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Hydro;
