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
  FlatList,
  TextInput
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
    title: "Sharing",
    icon: "share-social",
    color: "#4CAF50",
    route: "EnergySharing"
  },
  {
    id: "recommendations",
    title: "Tips",
    icon: "bulb",
    color: "#FF9800",
    route: "Recommendations"
  },
  {
    id: "help",
    title: "Help",
    icon: "help-circle",
    color: "#03A9F4",
    route: "HelpSupport"
  },
  {
    id: "settings",
    title: "Settings",
    icon: "settings",
    color: "#757575",
    route: "Settings"
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

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Single Unified Header */}
      <View style={styles.header}>
        <View style={styles.headerTopRow}>
          <TouchableOpacity 
            style={styles.headerButton} 
            onPress={() => navigation.openDrawer()}
          >
            <Ionicons name="menu" size={24} color="#525F7F" />
          </TouchableOpacity>
          
          <Text style={styles.headerTitle}>Home</Text>
          
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.headerButton}>
              <Ionicons name="notifications-outline" size={22} color="#525F7F" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
              <Ionicons name="cart-outline" size={22} color="#525F7F" />
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="What are you looking for?"
            placeholderTextColor="#8D9BB5"
          />
          <Ionicons name="search" size={20} color="#8D9BB5" style={styles.searchIcon} />
        </View>
        
        {/* Quick Links */}
        <View style={styles.quickLinks}>
          <TouchableOpacity style={styles.quickLink}>
            <Ionicons name="location" size={16} color="#4CAF50" />
            <Text style={styles.quickLinkText}>Articles</Text>
          </TouchableOpacity>
          
          <View style={styles.quickLinkDivider} />
          
          <TouchableOpacity style={styles.quickLink}>
            <Ionicons name="checkmark-circle" size={16} color="#3B5998" />
            <Text style={styles.quickLinkText}>Contact</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Green Dashboard Border */}
      <View style={styles.greenBorder} />
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Energy Summary Section */}
        <View style={styles.summarySection}>
          <View style={styles.summaryContainer}>
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
        </View>

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
    backgroundColor: "#FFFFFF",
    paddingTop: 30,
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  headerTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  headerButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#525F7F",
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FB',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    paddingHorizontal: 12,
    height: 44,
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#525F7F',
    height: '100%',
  },
  searchIcon: {
    marginLeft: 8,
  },
  quickLinks: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  quickLink: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  quickLinkText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#525F7F',
    marginLeft: 6,
  },
  quickLinkDivider: {
    width: 1,
    height: 20,
    backgroundColor: '#EEEEEE',
    marginHorizontal: 8,
  },
  greenBorder: {
    height: 3,
    backgroundColor: "#4CAF50",
    width: '100%',
  },
  summarySection: {
    backgroundColor: '#FFF',
    paddingVertical: 15,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  summaryContainer: {
    flexDirection: "row",
    backgroundColor: "#F8F9FB",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  summaryItem: {
    flex: 1,
    alignItems: "center",
  },
  summaryDivider: {
    width: 1,
    backgroundColor: "#E0E0E0",
    marginVertical: 5,
  },
  summaryValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E293B",
  },
  summaryUnit: {
    fontSize: 12,
    color: "#64748B",
  },
  summaryLabel: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 2,
  },
  scrollContainer: {
    paddingBottom: 30,
  },
  welcomeSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E293B",
  },
  welcomeText: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 4,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
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
    height: 160,
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
    padding: 12,
    paddingTop: 30,
    height: "60%",
  },
  moduleIconContainer: {
    position: "absolute",
    top: -15,
    left: 12,
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
  },
  moduleContent: {
    flex: 1,
  },
  moduleTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 2,
  },
  moduleDescription: {
    fontSize: 12,
    color: "rgba(255,255,255,0.85)",
    marginBottom: 4,
  },
  moduleStats: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  moduleStatsValue: {
    fontSize: 16,
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
    justifyContent: "space-around",
    paddingHorizontal: 16,
    marginTop: 8,
  },
  quickAccessItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  quickAccessIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },
  quickAccessText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#1E293B",
    textAlign: "center",
  }
});

export default Home;