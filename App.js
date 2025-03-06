import React, { useCallback, useEffect, useState } from "react";
import { Image, View, StatusBar } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import { GalioProvider } from "galio-framework"; // Keep galio for now since it might be used in other components

// Before rendering any navigation stack
import { enableScreens } from "react-native-screens";
enableScreens();

// Directly import the original Screens component from your existing code
// Don't use ScreensNative until we resolve the error
import Screens from "./navigation/Screens";
import { argonTheme } from "./constants";

// Keep expo-splash-screen visible while loading resources
SplashScreen.preventAutoHideAsync();

// Image assets to preload - use require instead of referencing Images object
const assetImages = [
  require("./assets/imgs/ecopulse-logo-onboarding.png"),
  require("./assets/imgs/ecopulse-logo.png"),
  // Any other critical images
];

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Load assets and fonts
        const fontAssets = Font.loadAsync({
          ArgonExtra: require("./assets/font/argon.ttf"),
          // Any other fonts your app needs
        });
        
        const imageAssets = cacheImages(assetImages);
        
        // Wait for both fonts and images to load
        await Promise.all([...imageAssets, fontAssets]);
      } catch (error) {
        console.warn("Error loading assets:", error);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }
    
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // Hide the splash screen once resources are loaded
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <GalioProvider theme={argonTheme}>
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="dark-content" />
          <Screens />
        </View>
      </GalioProvider>
    </NavigationContainer>
  );
}