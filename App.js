import React from "react";
import TabNavigator from "./TabNavigator";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs(); // ignore the AsyncStorage warnings during dev ~1:35:30
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./hooks/useAuth";

export default function App() {
  return (
    <NavigationContainer>
      {/* higher order component */}
      <AuthProvider>
        {/* passes down auth stuff to children */}
        <TabNavigator/>
      </AuthProvider>
    </NavigationContainer>
    
  );
}

