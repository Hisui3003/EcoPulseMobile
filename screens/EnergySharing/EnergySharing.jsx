import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { YearRangePicker } from '../../components/index';  // Adjust path based on your structure
import styles from "./styles";
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("screen");

const areas = [
  "Cebu", "Bohol", "Negros Occidental", "Negros Oriental", "Iloilo",
  "Leyte", "Samar", "Aklan", "Capiz", "Antique", "Biliran", "Eastern Samar",
  "Northern Samar", "Southern Leyte"
];

const energyTypes = ["Wind", "Solar", "Geothermal", "Hydro", "Biomass"];

const energyIcons = {
  Solar: { name: "sunny", color: "#FFB800" },
  Hydro: { name: "water", color: "#007BFF" },
  Geothermal: { name: "flame", color: "#FF5733" },
  Wind: { name: "leaf", color: "#4CAF50" },
  Biomass: { name: "leaf", color: "#2E7D32" }
};

const generateEnergyData = () => {
  return areas.map(area => {
    const energyType = energyTypes[Math.floor(Math.random() * energyTypes.length)];
    const powerOutput = (Math.random() * 100).toFixed(1); // Random power value
    return { area, energyType, powerOutput };
  });
};

const EnergySharing = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [energyData, setEnergyData] = useState([]);

  useEffect(() => {
    setEnergyData(generateEnergyData());
  }, [selectedYear]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <View style={styles.titleRow}>
            <Ionicons name="earth" size={24} color="#4CAF50" />
            <Text style={styles.headerTitle}>Energy Sharing Network</Text>
          </View>
        </View>

        {/* Year Picker */}
        <View style={styles.pickerContainer}>
          <YearRangePicker
            initialStartYear={selectedYear}
            initialEndYear={selectedYear}
            onStartYearChange={setSelectedYear}
            onEndYearChange={setSelectedYear}
          />
        </View>

        {/* Energy Data List */}
        <View style={styles.listContainer}>
          <Text style={styles.sectionTitle}>Renewable Energy Distribution - {selectedYear}</Text>
          <ScrollView style={styles.scrollBox}>
            {energyData.map((item, index) => {
              const icon = energyIcons[item.energyType];
              return (
                <View key={index} style={styles.listItem}>
                  <Ionicons name={icon.name} size={48} color={icon.color} />
                  <Text style={styles.areaText}>{item.area}</Text>
                  <Text style={styles.energyType}>{item.energyType}</Text>
                  <Text style={styles.powerOutput}>{item.powerOutput} MW</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>

        {/* Map Panel */}
        <View style={styles.mapContainer}>
          <Text style={styles.sectionTitle}>Visayas Region Map</Text>
          <WebView
            style={styles.map}
            source={{
              uri: "https://www.google.com/maps/@10.3157,123.8854,7z?hl=en",
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EnergySharing;
