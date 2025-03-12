import React from "react";
import { Block, Text } from "galio-framework";
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import Images from "../../constants/Images";
import Icon from "../../components/Icon";
import { useDrawerNavigation } from "./menuHook";
import { getIconForName, getNavigationPath } from "./menuUtil";

// Individual navigation item component
const NavigationItem = ({ item, navigation, isExpanded, toggleExpand, isChild = false }) => {
  const iconInfo = getIconForName(item.iconName);
  const hasChildren = item.children && item.children.length > 0;
  
  const handlePress = () => {
    if (hasChildren) {
      toggleExpand(item.segment);
    } else if (item.path) {
      const screenName = getNavigationPath(item);
      if (screenName) {
        navigation.navigate(screenName);
      }
    }
  };

  return (
    <>
      <TouchableOpacity
        style={[
          styles.navItem,
          isChild && styles.childItem,
          hasChildren && isExpanded && styles.expandedItem
        ]}
        onPress={handlePress}
      >
        <View style={styles.navItemContent}>
          {item.iconName && (
            <Icon 
              family={iconInfo.family}
              name={iconInfo.name}
              size={18}
              color={iconInfo.color}
              style={styles.navItemIcon}
            />
          )}
          
          <Text style={styles.navItemText}>
            {item.title}
          </Text>
          
          {hasChildren && (
            <Icon
              family="Feather"
              name={isExpanded ? "chevron-down" : "chevron-right"}
              size={16}
              style={styles.expandIcon}
              color="#A8A8A8"
            />
          )}
        </View>
      </TouchableOpacity>

      {/* Children items */}
      {hasChildren && isExpanded && (
        <View style={styles.childrenContainer}>
          {item.children.map((child) => (
            <NavigationItem
              key={child.segment}
              item={child}
              navigation={navigation}
              isExpanded={false}
              toggleExpand={toggleExpand}
              isChild={true}
            />
          ))}
        </View>
      )}
    </>
  );
};

// Navigation header component
const NavigationHeader = ({ title }) => (
  <Text style={styles.sectionHeader}>{title}</Text>
);

// Navigation divider component
const NavigationDivider = () => (
  <View style={styles.divider} />
);

// Main drawer content component
function CustomDrawerContent({ navigation }) {
  const {
    navigationData,
    isAdmin,
    isItemExpanded,
    toggleExpand,
  } = useDrawerNavigation();

  // Render a navigation item based on its kind
  const renderNavigationItem = (item) => {
    switch (item.kind) {
      case 'header':
        return <NavigationHeader key={item.segment} title={item.title} />;
      
      case 'divider':
        return <NavigationDivider key={item.segment} />;
      
      case 'item':
        return (
          <NavigationItem
            key={item.segment}
            item={item}
            navigation={navigation}
            isExpanded={isItemExpanded(item.segment)}
            toggleExpand={toggleExpand}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo and user type toggle */}
      <Block style={styles.header}>
        <Image source={Images.Logo} style={styles.logo} />
      </Block>

      {/* Navigation items */}
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Block style={styles.navigationContainer}>
          {navigationData.map(renderNavigationItem)}
        </Block>
      </ScrollView>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
    alignItems: "center",
  },
  logo: {
    height: 30,
    width: 120,
    resizeMode: "contain",
  },
  toggleButton: {
    marginTop: 10,
    paddingVertical: 5,
  },
  toggleText: {
    color: "#FF5678",
    fontSize: 14,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 5,
  },
  navigationContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  sectionHeader: {
    fontSize: 14,
    color: "#A8A8A8",
    marginTop: 20,
    marginBottom: 8,
    paddingLeft: 8,
  },
  divider: {
    height: 1,
    backgroundColor: "#F0F0F0",
    marginVertical: 12,
  },
  navItem: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginVertical: 2,
  },
  navItemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  navItemIcon: {
    marginRight: 12,
    width: 20,
  },
  navItemText: {
    fontSize: 14,
    flex: 1,
    color: "#333333",
  },
  expandIcon: {
    marginLeft: 8,
  },
  expandedItem: {
    backgroundColor: "#FFF0F5",
  },
  childItem: {
    paddingLeft: 20,
  },
  childrenContainer: {
    marginLeft: 16,
  },
  logoutButton: {
    padding: 16,
    alignItems: "center",
    marginBottom: 15,
  },
  logoutButtonText: {
    color: "#FF5678",
    fontSize: 14,
  },
});

export default CustomDrawerContent;