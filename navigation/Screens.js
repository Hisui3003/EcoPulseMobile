import { Animated, Dimensions, Easing } from "react-native";
// header for screens
import { Header, Icon } from "../components";
import { argonTheme, tabs } from "../constants";

import Articles from "../screens/Articles";
import { Block } from "galio-framework";
// drawer
import CustomDrawerContent from "./Menu/Menu";
import Elements from "../screens/Elements";
// screens
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import Pro from "../screens/Pro";
import Profile from "../screens/Profile";
import React from "react";
import Register from "../screens/Register";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

// Import energy module screens
import SolarScreen from "../features/modules/components/Solar/Solar";
import WindScreen from "../features/modules/components/Wind/Wind";
import GeothermalScreen from "../features/modules/components/Geothermal/Geothermal";
import HydropowerScreen from "../features/modules/components/Hydropower/Hydropower";
import BiomassScreen from "../features/modules/components/Biomass/Biomass";

// Import energy sharing screen
import EnergySharingScreen from "../screens/EnergySharing/EnergySharing";
import RecommendationsScreen from "../screens/Recommendations/Recommendations";
// import HelpSupportScreen from "../screens/HelpSupport";

import Login from "../screens/Login";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

let BioModuleStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="BiomassEnergy"
        component={BiomassScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Biomass Energy" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      /> 
    </Stack.Navigator>
  )
}

let HydroModuleStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="HydropowerEnergy"
        component={HydropowerScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Hydropower" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
    </Stack.Navigator>
  )
}

let GeoModuleStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="GeothermalEnergy"
        component={GeothermalScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Geothermal Energy" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
    </Stack.Navigator>
  )
}

let WindModuleStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="WindEnergy"
        component={WindScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Wind Energy" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
    </Stack.Navigator>
  )
}

// Energy modules stack
function ModulesStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: true,
      }}
    >
      {/* <Stack.Screen
        name="WindEnergy"
        component={WindScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Wind Energy" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      /> */}
      <Stack.Screen
        name="SolarEnergy"
        component={SolarScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Solar Energy" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      {/* <Stack.Screen
        name="GeothermalEnergy"
        component={GeothermalScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Geothermal Energy" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <Stack.Screen
        name="HydropowerEnergy"
        component={HydropowerScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Hydropower" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <Stack.Screen
        name="BiomassEnergy"
        component={BiomassScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Biomass Energy" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      /> */}
    </Stack.Navigator>
  );
}

// Energy sharing stack
function EnergySharingStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="EnergySharing"
        component={EnergySharingScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Energy Sharing" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      /> 
    </Stack.Navigator>
  );
}

// Recommendations stack
function RecommendationsStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Recommendations"
        component={RecommendationsScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Recommendations" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
    </Stack.Navigator>
  );
}

// Help & Support stack
function HelpSupportStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="HelpSupport"
        component={HelpSupportScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Help & Support" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
    </Stack.Navigator>
  );
}

function ElementsStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Elements"
        component={Elements}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Elements" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function ArticlesStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Articles" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title="Profile"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Home"
              search
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8,
      }}
      drawerContentOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal",
        },
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Account"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Elements"
        component={ElementsStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Articles"
        component={ArticlesStack}
        options={{
          headerShown: false,
        }}
      />
      
      {/* Energy Module Screens */}
      <Drawer.Screen
        name="SolarEnergy"
        component={ModulesStack}
        options={{
          headerShown: false,
        }}
      />
      
      <Drawer.Screen
        name="WindEnergy"
        component={WindModuleStack}
        options={{
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="GeothermalEnergy"
        component={GeoModuleStack}
        options={{
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="HydropowerEnergy"
        component={HydroModuleStack}
        options={{
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="BiomassEnergy"
        component={BioModuleStack}
        options={{
          headerShown: false,
        }}
      />



      <Drawer.Screen
        name="EnergySharing"
        component={EnergySharingStack}
        options={{
          headerShown: false,
        }}
      />
      
      <Drawer.Screen
        name="Recommendations"
        component={RecommendationsStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="HelpSupport"
        component={HelpSupportStack}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}