// constants/routes.js
// Unlike the web version, we don't use lazy loading in React Native
// Instead, we directly import the components

// User Dashboard & Features
export const userRoutes = {
    // Dashboard: require('../screens/Dashboard').default,
    // EnergySharing: require('../screens/EnergySharing').default,
    // HelpSupport: require('../screens/HelpSupport').default,
    // Recommendations: require('../screens/Recommendations').default,
    // UserProfile: require('../screens/Profile').default
  };
  
  // Energy Modules
  export const moduleRoutes = {
    Solar: require('./features/modules/components/Solar/Solar').default,
    // Wind: require('../screens/Modules/Wind').default,
    // Geo: require('../screens/Modules/Geothermal').default,
    // Hydro: require('../screens/Modules/Hydropower').default,
    // Biomass: require('../screens/Modules/Biomass').default
  };
  
  // Admin Routes
  export const adminRoutes = {
    // Dashboard: require('../screens/Admin/Dashboard').default,
    // Analytics: require('../screens/Admin/Analytics').default,
    // UserManagement: require('../screens/Admin/UserManagement').default,
    // UserProfile: require('../screens/Profile').default,  // Same component for admin profile
    // SolarAdmin: require('./features/modules/components/Solar/Solar').default,
    // WindAdmin: require('../screens/Admin/Modules/Wind').default,
    // GeoAdmin: require('../screens/Admin/Modules/Geothermal').default,
    // HydroAdmin: require('../screens/Admin/Modules/Hydropower').default,
    // BioAdmin: require('../screens/Admin/Modules/Biomass').default,
    // // Ticket management routes
    // AdminDetailView: require('../screens/Admin/Tickets/DetailView').default,
    // AdminTicket: require('../screens/Admin/Tickets/Ticket').default,
    // TicketDashboard: require('../screens/Admin/Tickets/Dashboard').default
  };
  
  // Error Pages
  export const errorRoutes = {
    // NotFound: require('../screens/Errors/NotFound').default
  };
  
  // For convenience, we also export all routes as a flat object for direct reference
  export const allRoutes = {
    ...userRoutes,
    ...moduleRoutes,
    ...adminRoutes,
    ...errorRoutes
  };