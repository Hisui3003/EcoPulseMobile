// navigation/Menu/menuUtil.js
import React from 'react';

/**
 * Navigation data structures for user and admin views
 */
export const USER_NAVIGATION = [
  {
    kind: 'header',
    segment: 'header-modules',
    title: 'Main Menu',
  },
  {
    kind: 'item',
    segment: 'home',
    title: 'Home',
    iconName: 'home',
    path: 'Home',
  },
  {
    kind: 'item',
    segment: 'modules',
    title: 'Energy Modules',
    iconName: 'modules',
    children: [
      {
        kind: 'item',
        segment: 'solar',
        title: 'Solar Energy',
        iconName: 'solar',
        path: 'SolarEnergy',
      },
      {
        kind: 'item',
        segment: 'wind',
        title: 'Wind Energy',
        iconName: 'wind',
        path: 'WindEnergy',
      },
      {
        kind: 'item',
        segment: 'geothermal',
        title: 'Geothermal',
        iconName: 'geothermal',
        path: 'GeothermalEnergy',
      },
      {
        kind: 'item',
        segment: 'hydropower',
        title: 'Hydropower',
        iconName: 'hydropower',
        path: 'HydropowerEnergy',
      },
      {
        kind: 'item',
        segment: 'biomass',
        title: 'Biomass',
        iconName: 'biomass',
        path: 'BiomassEnergy',
      },
    ],
  },
  {
    kind: 'divider',
    segment: 'divider-analytics',
  },
  {
    kind: 'header',
    segment: 'header-analytics',
    title: 'Analytics',
  },
  {
    kind: 'item',
    segment: 'energy-share',
    title: 'Energy Sharing',
    iconName: 'energyshare',
    path: 'EnergySharing',
  },
  {
    kind: 'item',
    segment: 'recommendations',
    title: 'Recommendations',
    iconName: 'recommendation',
    path: 'Recommendations',
  },
  {
    kind: 'divider',
    segment: 'divider-profile',
  },
  {
    kind: 'item',
    segment: 'profile',
    title: 'Profile',
    iconName: 'profile',
    path: 'Profile',
  },
  {
    kind: 'divider',
    segment: 'divider-support',
  },
  {
    kind: 'header',
    segment: 'header-support',
    title: 'Support',
  },
  {
    kind: 'item',
    segment: 'submit-a-ticket',
    title: 'Submit a Ticket',
    iconName: 'ticket',
    path: 'SubmitTicket',
  },
  {
    kind: 'item',
    segment: 'help-support',
    title: 'Help & Support',
    iconName: 'help',
    path: 'HelpSupport',
  },
  {
    kind: 'item',
    segment: 'elements',
    title: 'Elements',
    iconName: 'settings',
    path: 'Elements',
  },
  {
    kind: 'item',
    segment: 'articles',
    title: 'Articles',
    iconName: 'article',
    path: 'Articles',
  }
];

export const ADMIN_NAVIGATION = [
  {
    kind: 'header',
    segment: 'main-menu',
    title: 'Admin Console',
  },
  {
    kind: 'item',
    segment: 'modules',
    title: 'Modules Management',
    iconName: 'modules',
    children: [
      {
        kind: 'item',
        segment: 'modules-solar',
        title: 'Solar Energy',
        iconName: 'solar',
        path: 'SolarEnergy',
      },
      {
        kind: 'item',
        segment: 'wind',
        title: 'Wind Energy',
        iconName: 'wind',
        path: 'WindEnergy',
      },
      {
        kind: 'item',
        segment: 'geothermal',
        title: 'Geothermal',
        iconName: 'geothermal',
        path: 'GeothermalEnergy',
      },
      {
        kind: 'item',
        segment: 'hydropower',
        title: 'Hydropower',
        iconName: 'hydropower',
        path: 'HydropowerEnergy',
      },
      {
        kind: 'item',
        segment: 'biomass',
        title: 'Biomass',
        iconName: 'biomass',
        path: 'BiomassEnergy',
      },
    ],
  },
  {
    kind: 'item',
    segment: 'manage-users',
    title: 'Manage Users',
    iconName: 'profile',
    path: 'Profile',
  },
  {
    kind: 'item',
    segment: 'analytics',
    title: 'Analytics Dashboard',
    iconName: 'recommendation',
    path: 'Recommendations',
  },
  {
    kind: 'item',
    segment: 'client-tickets',
    title: 'Help Tickets',
    iconName: 'help',
    path: 'HelpSupport',
  },
];

/**
 * Map icon names to the appropriate icon properties
 */
export const getIconForName = (iconName) => {
  const iconMap = {
    home: { family: "Ionicons", name: "home-outline", color: "#4CAF50" },
    modules: { family: "Ionicons", name: "grid-outline", color: "#4CAF50" },
    solar: { family: "Ionicons", name: "sunny-outline", color: "#FF9800" },
    wind: { family: "Ionicons", name: "thunderstorm-outline", color: "#03A9F4" },
    geothermal: { family: "Ionicons", name: "flame-outline", color: "#F44336" },
    hydropower: { family: "Ionicons", name: "water-outline", color: "#2196F3" },
    biomass: { family: "Ionicons", name: "leaf-outline", color: "#8BC34A" },
    energyshare: { family: "Ionicons", name: "share-outline", color: "#4CAF50" },
    recommendation: { family: "Ionicons", name: "bulb-outline", color: "#FFC107" },
    help: { family: "Ionicons", name: "help-circle-outline", color: "#9C27B0" },
    settings: { family: "Ionicons", name: "settings-outline", color: "#607D8B" },
    profile: { family: "Ionicons", name: "person-outline", color: "#3F51B5" },
    article: { family: "Ionicons", name: "document-text-outline", color: "#795548" },
    ticket: { family: "Ionicons", name: "receipt-outline", color: "#E91E63" }
  };

  return iconMap[iconName] || { family: "Ionicons", name: "ellipse-outline", color: "#4CAF50" };
};

/**
 * Get the path from a navigation item that should be opened
 */
export const getNavigationPath = (item) => {
  if (item.path) {
    return item.path; // Return the path name for React Navigation
  }
  return null;
};