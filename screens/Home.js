import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  FlatList
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("screen");

const energyModules = [
  {
    id: "solar",
    title: "Solar Energy",
    icon: "sunny",
    color: "#FF9800",
    gradientColors: ["#FF9800", "#FB8C00"],
    route: "SolarEnergy",
    image: require("../assets/imgs/solar-panel.png"),
    description: "Monitor your solar panel performance",
    stats: "24.5 kWh"
  },
  {
    id: "wind",
    title: "Wind Energy",
    icon: "thunderstorm",
    color: "#03A9F4",
    gradientColors: ["#03A9F4", "#0288D1"],
    route: "WindEnergy",
    image: require("../assets/imgs/wind-turbine.png"),
    description: "Track wind turbine efficiency",
    stats: "8.2 kWh"
  },
  {
    id: "geo",
    title: "Geothermal",
    icon: "flame",
    color: "#F44336",
    gradientColors: ["#F44336", "#D32F2F"],
    route: "GeothermalEnergy",
    image: require("../assets/imgs/geothermal-plant.png"),
    description: "Analyze geothermal system metrics",
    stats: "5.8 kWh"
  },
  {
    id: "hydro",
    title: "Hydropower",
    icon: "water",
    color: "#2196F3",
    gradientColors: ["#2196F3", "#1976D2"],
    route: "HydropowerEnergy",
    image: require("../assets/imgs/hydropower-dam.png"),
    description: "View hydroelectric generation data",
    stats: "12.3 kWh"
  }
];

const quickActions = [
  {
    id: "sharing",
    title: "Energy Sharing",
    icon: "share-social",
    color: "#4CAF50",
    route: "EnergySharing",
    description: "Share surplus energy with community"
  },
  {
    id: "recommendations",
    title: "Recommendations",
    icon: "bulb",
    color: "#FF9800",
    route: "Recommendations",
    description: "Get efficiency suggestions"
  },
  {
    id: "help",
    title: "Help & Support",
    icon: "help-circle",
    color: "#03A9F4",
    route: "HelpSupport",
    description: "Get assistance with your system"
  },
  {
    id: "settings",
    title: "Settings",
    icon: "settings",
    color: "#757575",
    route: "Settings",
    description: "Configure your dashboard"
  }
];

const Home = ({ navigation }) => {
  // Render energy module item
  const renderEnergyModule = ({ item }) => (
    <TouchableOpacity
      style={styles.moduleCard}
      onPress={() => navigation.navigate(item.route)}
    >
      <Image source={item.image} style={styles.moduleImage} />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.85)']}
        style={styles.moduleOverlay}
      >
        <View 
          style={[
            styles.moduleIconContainer, 
            { backgroundColor: item.color }
          ]}
        >
          <Ionicons name={item.icon} size={20} color="#FFF" />
        </View>
        <View style={styles.moduleContent}>
          <Text style={styles.moduleTitle}>{item.title}</Text>
          <Text style={styles.moduleDescription}>{item.description}</Text>
        </View>
        <View style={styles.moduleStats}>
          <Text style={styles.moduleStatsValue}>{item.stats}</Text>
          <Text style={styles.moduleStatsLabel}>Today</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  // Render quick action item
  const renderQuickAction = ({ item }) => (
    <TouchableOpacity 
      style={styles.actionCard}
      onPress={() => navigation.navigate(item.route)}
    >
      <View style={[styles.actionIconContainer, { backgroundColor: item.color }]}>
        <Ionicons name={item.icon} size={24} color="#FFF" />
      </View>
      <Text style={styles.actionTitle}>{item.title}</Text>
      <Text style={styles.actionDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4CAF50" />
      
      {/* Header */}
      <LinearGradient
        colors={['#4CAF50', '#3E8E41']}
        start={[0, 0]}
        end={[1, 0]}
        style={styles.header}
      >
        <View style={styles.headerTopRow}>
          <TouchableOpacity 
            style={styles.headerButton} 
            onPress={() => navigation.openDrawer()}
          >
            <Ionicons name="menu" size={26} color="#FFF" />
          </TouchableOpacity>
          
          <Text style={styles.headerTitle}>Dashboard</Text>
          
          <TouchableOpacity style={styles.headerButton}>
            <Ionicons name="notifications-outline" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.energySummaryContainer}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>24.5</Text>
            <Text style={styles.summaryUnit}>kWh</Text>
            <Text style={styles.summaryLabel}>Production</Text>
          </View>
          
          <View style={styles.summaryDivider} />
          
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>18.3</Text>
            <Text style={styles.summaryUnit}>kWh</Text>
            <Text style={styles.summaryLabel}>Consumption</Text>
          </View>
          
          <View style={styles.summaryDivider} />
          
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>6.2</Text>
            <Text style={styles.summaryUnit}>kWh</Text>
            <Text style={styles.summaryLabel}>Net</Text>
          </View>
        </View>
      </LinearGradient>
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Welcome Back, Alex</Text>
          <Text style={styles.welcomeText}>
            Your renewable energy systems are performing well today
          </Text>
        </View>
        
        {/* Energy Modules Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Energy Systems</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <FlatList
            data={energyModules}
            renderItem={renderEnergyModule}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.modulesListContainer}
          />
        </View>
        
        {/* Quick Actions */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Quick Access</Text>
          </View>
          
          <View style={styles.quickAccessGrid}>
            {quickActions.map((action) => (
              <TouchableOpacity 
                key={action.id}
                style={styles.quickAccessItem}
                onPress={() => navigation.navigate(action.route)}
              >
                <View style={[styles.quickAccessIcon, { backgroundColor: action.color }]}>
                  <Ionicons name={action.icon} size={22} color="#FFF" />
                </View>
                <Text style={styles.quickAccessText}>{action.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        {/* Recommendation Card */}
        <View style={styles.recommendationCard}>
          <View style={styles.recommendationContent}>
            <View style={styles.recommendationIconContainer}>
              <Ionicons name="bulb" size={24} color="#FFD600" />
            </View>
            <View style={styles.recommendationTextContainer}>
              <Text style={styles.recommendationTitle}>Energy Saving Tip</Text>
              <Text style={styles.recommendationText}>
                Adjust your solar panels by 15° east to increase morning energy production.
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.recommendationButton}>
            <Text style={styles.recommendationButtonText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },
  header: {
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },
  headerTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
  energySummaryContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginTop: 8,
  },
  summaryItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  summaryDivider: {
    width: 1,
    backgroundColor: "rgba(255,255,255,0.3)",
    marginVertical: 5,
  },
  summaryValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFF",
  },
  summaryUnit: {
    fontSize: 14,
    color: "rgba(255,255,255,0.9)",
    fontWeight: "500",
  },
  summaryLabel: {
    fontSize: 12,
    color: "rgba(255,255,255,0.8)",
    marginTop: 4,
  },
  scrollContainer: {
    paddingBottom: 30,
  },
  welcomeSection: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E293B",
  },
  welcomeText: {
    fontSize: 15,
    color: "#64748B",
    marginTop: 5,
    lineHeight: 22,
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E293B",
  },
  seeAllText: {
    fontSize: 14,
    color: "#4CAF50",
    fontWeight: "600",
  },
  modulesListContainer: {
    paddingLeft: 16,
    paddingRight: 8,
  },
  moduleCard: {
    width: width * 0.8,
    height: 180,
    borderRadius: 12,
    overflow: "hidden",
    marginRight: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  moduleImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  moduleOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    paddingTop: 30,
    height: "60%",
  },
  moduleIconContainer: {
    position: "absolute",
    top: -20,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  moduleContent: {
    flex: 1,
  },
  moduleTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 4,
  },
  moduleDescription: {
    fontSize: 14,
    color: "rgba(255,255,255,0.85)",
    marginBottom: 8,
  },
  moduleStats: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  moduleStatsValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
    marginRight: 5,
  },
  moduleStatsLabel: {
    fontSize: 12,
    color: "rgba(255,255,255,0.85)",
  },
  quickAccessGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 8,
  },
  quickAccessItem: {
    width: (width - 32) / 4,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    marginBottom: 16,
  },
  quickAccessIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  quickAccessText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#1E293B",
    textAlign: "center",
  },
  recommendationCard: {
    margin: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  recommendationContent: {
    flexDirection: "row",
    marginBottom: 16,
  },
  recommendationIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "rgba(255, 214, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  recommendationTextContainer: {
    flex: 1,
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 4,
  },
  recommendationText: {
    fontSize: 14,
    color: "#64748B",
    lineHeight: 20,
  },
  recommendationButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
  },
  recommendationButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
  },
  actionCard: {
    width: (width - 48) / 2,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  actionIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 4,
  },
  actionDescription: {
    fontSize: 12,
    color: "#64748B",
    lineHeight: 18,
  }
});

export default Home;