import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("screen");

const energyModules = [
  {
    title: "Solar Energy",
    icon: "sunny",
    color: "#FF9800",
    route: "SolarEnergy",
    image: require("../assets/imgs/solar-panel.png"),
    description: "Monitor your solar panel performance"
  },
  // {
  //   title: "Wind Energy",
  //   icon: "thunderstorm",
  //   color: "#03A9F4",
  //   route: "WindEnergy",
  //   image: require("../assets/imgs/wind-turbine.jpg"),
  //   description: "Track wind turbine efficiency"
  // },
  // {
  //   title: "Geothermal",
  //   icon: "flame",
  //   color: "#F44336",
  //   route: "GeothermalEnergy",
  //   image: require("../assets/imgs/geothermal-plant.jpg"),
  //   description: "Analyze geothermal system metrics"
  // },
  // {
  //   title: "Hydropower",
  //   icon: "water",
  //   color: "#2196F3",
  //   route: "HydropowerEnergy",
  //   image: require("../assets/imgs/hydropower-dam.jpg"),
  //   description: "View hydroelectric generation data"
  // }
];

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={28} color="#525F7F" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Home</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="#525F7F" />
        </TouchableOpacity>
      </View>
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Welcome back!</Text>
          <Text style={styles.welcomeText}>
            Monitor and manage your renewable energy systems
          </Text>
        </View>
        
        {/* Energy Summary Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Today's Energy Summary</Text>
          </View>
          <View style={styles.summaryContainer}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryValue}>24.5 kWh</Text>
              <Text style={styles.summaryLabel}>Production</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryValue}>18.3 kWh</Text>
              <Text style={styles.summaryLabel}>Consumption</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryValue}>6.2 kWh</Text>
              <Text style={styles.summaryLabel}>Net</Text>
            </View>
          </View>
        </View>
        
        {/* Energy Modules Section */}
        <View style={styles.modulesSection}>
          <Text style={styles.sectionTitle}>Energy Modules</Text>
          <View style={styles.moduleGrid}>
            {energyModules.map((module, index) => (
              <TouchableOpacity
                key={index}
                style={styles.moduleCard}
                onPress={() => navigation.navigate(module.route)}
              >
                <Image source={module.image} style={styles.moduleImage} />
                <View style={styles.moduleOverlay}>
                  <View 
                    style={[
                      styles.moduleIconContainer, 
                      { backgroundColor: module.color }
                    ]}
                  >
                    <Ionicons name={module.icon} size={24} color="#FFF" />
                  </View>
                  <Text style={styles.moduleTitle}>{module.title}</Text>
                  <Text style={styles.moduleDescription}>{module.description}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        {/* Quick Actions */}
        <View style={styles.actionsSection}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionButtons}>
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={() => navigation.navigate('EnergySharing')}
            >
              <Ionicons name="share-social" size={22} color="#4CAF50" />
              <Text style={styles.actionButtonText}>Energy Sharing</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={() => navigation.navigate('Recommendations')}
            >
              <Ionicons name="bulb" size={22} color="#4CAF50" />
              <Text style={styles.actionButtonText}>Recommendations</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={() => navigation.navigate('HelpSupport')}
            >
              <Ionicons name="help-circle" size={22} color="#4CAF50" />
              <Text style={styles.actionButtonText}>Help & Support</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FE",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#525F7F",
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
    color: "#525F7F",
  },
  welcomeText: {
    fontSize: 16,
    color: "#8898AA",
    marginTop: 5,
  },
  card: {
    marginHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 20,
  },
  cardHeader: {
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#525F7F",
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  summaryItem: {
    alignItems: "center",
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#525F7F",
  },
  summaryLabel: {
    fontSize: 14,
    color: "#8898AA",
    marginTop: 5,
  },
  modulesSection: {
    paddingHorizontal: 16,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#525F7F",
    marginBottom: 15,
  },
  moduleGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  moduleCard: {
    width: (width - 40) / 2,
    height: 160,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
    position: "relative",
  },
  moduleImage: {
    width: "100%",
    height: "100%",
  },
  moduleOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  moduleIconContainer: {
    position: "absolute",
    top: -20,
    left: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  moduleTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
    marginTop: 5,
  },
  moduleDescription: {
    fontSize: 12,
    color: "rgba(255,255,255,0.8)",
    marginTop: 2,
  },
  actionsSection: {
    paddingHorizontal: 16,
    marginTop: 10,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
    width: (width - 48) / 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  actionButtonText: {
    fontSize: 12,
    color: "#525F7F",
    marginTop: 5,
    textAlign: "center",
  },
});

export default Home;