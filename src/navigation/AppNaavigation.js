import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginScreen from './../screens/LoginScreen';
import Dashboard from './../screens/Dashboard';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feedback from "./../screens/Feedback";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Button from '../components/button';
import Notifications1 from "../screens/Notifications";

  function Thanks(navigation) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{ fontSize: 30, color: "black"}}>Thank you for submitting!</Text>
        <View style={{ paddingTop:70}}>
      </View>
      </View>
    );
  }
const Tab = createBottomTabNavigator()

const BottonTabs = ({ navigation, route }) => {
  const { paramKey } = route.params;
    return (
        <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >  
      <Tab.Screen
        name="Dashboard"
        component={() => <Dashboard paramKey={route.params.paramKey} />}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon name="signal" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Notifications1}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Report"
        component={Feedback}
        options={{
          tabBarLabel: 'Report',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bug-check-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


const Stack =  createStackNavigator();


function AppNavigator() {
    return (
        
        <NavigationContainer  initialRouteName="LoginScreen">
            <Stack.Navigator
        headerMode={'none'}
        initialRouteName={'LoginScreen'}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="BottonTabs" component={BottonTabs} />
        </Stack.Navigator>
        </NavigationContainer>

    )
}
export default AppNavigator;
