import React, { useState } from "react";
import { ScrollView, View, Text, SafeAreaView, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const { width } = Dimensions.get("screen");

const Recommendations = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <View style={styles.titleRow}>
            <Ionicons name="bulb" size={24} color="#FFD700" />
            <Text style={styles.headerTitle}>Energy Recommendations</Text>
          </View>
        </View>

        {/* Renewable Energy Potential */}
        <View style={styles.panelContainer}>
          <Text style={styles.sectionTitle}>Renewable Energy Potential</Text>
          <Text style={styles.panelText}>
            The Visayas region has significant potential for renewable energy production:
            {"\n"}- Solar: High solar irradiance, especially in Cebu and Iloilo.
            {"\n"}- Wind: Strong wind potential in coastal areas.
            {"\n"}- Hydro: Abundant water resources in Negros and Leyte.
            {"\n"}- Geothermal: Existing plants in Leyte and Negros Occidental.
            {"\n"}- Biomass: Agricultural waste potential in Bohol and Samar.
          </Text>
        </View>

        {/* Future Projections */}
        <View style={styles.panelContainer}>
          <Text style={styles.sectionTitle}>Future Projections ({selectedYear} - {selectedYear + 10})</Text>
          <Text style={styles.panelText}>
            Projections indicate:
            {"\n"}- Solar energy capacity will increase by 50% in the next decade.
            {"\n"}- Wind farms in Northern Samar are expected to double in production.
            {"\n"}- Geothermal plants will be modernized, improving efficiency by 15%.
            {"\n"}- Government incentives will drive a 30% increase in renewable investments.
          </Text>
        </View>

        {/* Cost-Benefit Analysis */}
        <View style={styles.panelContainer}>
          <Text style={styles.sectionTitle}>Cost-Benefit Analysis</Text>
          <Text style={styles.panelText}>
            Investing in renewable energy brings economic and environmental benefits:
            {"\n"}- Average installation cost for solar per kW: PHP 50,000
            {"\n"}- Annual savings per household using solar: PHP 20,000
            {"\n"}- Payback period for solar systems: ~5 years
            {"\n"}- Estimated CO2 reduction per year: 500,000 metric tons
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Recommendations;
