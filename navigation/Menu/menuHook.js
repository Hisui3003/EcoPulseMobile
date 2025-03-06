// useDrawerNavigation.js
import { useState } from 'react';
import { USER_NAVIGATION, ADMIN_NAVIGATION } from './menuUtil';

/**
 * Custom hook for drawer navigation state management
 */
export const useDrawerNavigation = () => {
  // State for managing which items are expanded
  const [expandedItems, setExpandedItems] = useState(['modules']); // Start with modules expanded
  
  // State for user/admin view toggle
  const [isAdmin, setIsAdmin] = useState(false);
  
  // Get the right navigation data based on user type
  const navigationData = isAdmin ? ADMIN_NAVIGATION : USER_NAVIGATION;

  // Toggle expanded state for an item
  const toggleExpand = (segment) => {
    setExpandedItems((prevItems) => 
      prevItems.includes(segment)
        ? prevItems.filter(item => item !== segment)
        : [...prevItems, segment]
    );
  };

  // Toggle between admin and user view
  const toggleUserType = () => {
    setIsAdmin(!isAdmin);
  };

  // Check if a navigation item is expanded
  const isItemExpanded = (segment) => {
    return expandedItems.includes(segment);
  };

  return {
    navigationData,
    isAdmin,
    expandedItems,
    toggleExpand,
    toggleUserType,
    isItemExpanded,
  };
};