import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { StyleSheet, Text, View, Button } from 'react-native';

import HomeScreen from './HomeScreen';
import HospitalScreen from './HospitalScreen';
import LikeScreen from './LikeScreen';
import RestaurantScreen from './RestaurantScreen';


const HomeStack = createStackNavigator();
const HospitalStack = createStackNavigator();
const RestaurantStack = createStackNavigator();
const LikeStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator screenOptions = {{
        headerStyle: {
          backgroundColor: '#009387'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen}
        options={{
          title: "Accueil",
          headerLeft: () => (
            <MaterialCommunityIcons name="menu" color="#fff" size={26} onPress={() => navigation.openDrawer()} />
          )
        }}/>
    </HomeStack.Navigator>
  )
}

const HospitalStackScreen = ({navigation}) => {
  return (
    <HospitalStack.Navigator screenOptions = {{
        headerStyle: {
          backgroundColor: '#0040ff'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
      <HospitalStack.Screen name="Hospital" component={HospitalScreen}
      options={{
        title: "Hopitaux",
        headerLeft: () => (
          <MaterialCommunityIcons name="menu" color="#fff" size={26} onPress={() => navigation.openDrawer()} />
        )
      }}/>
    </HospitalStack.Navigator>
  )
}

const RestaurantStackScreen = ({navigation}) => {
  return (
    <RestaurantStack.Navigator screenOptions = {{
        headerStyle: {
          backgroundColor: '#4f33ff'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
      <RestaurantStack.Screen name="Restaurant" component={RestaurantScreen}
      options={{
        title: "Restaurants",
        headerLeft: () => (
          <MaterialCommunityIcons name="menu" color="#fff" size={26} onPress={() => navigation.openDrawer()} />
        )
      }}/>
    </RestaurantStack.Navigator>
  )
}

const LikeStackScreen = ({navigation}) => {
  return (
    <LikeStack.Navigator screenOptions = {{
        headerStyle: {
          backgroundColor: '#004ba0'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
      <LikeStack.Screen name="Like" component={LikeScreen}
      options={{
        title: "Favoris",
        headerLeft: () => (
          <MaterialCommunityIcons name="menu" color="#fff" size={26} onPress={() => navigation.openDrawer()} />
        )
      }}/>
    </LikeStack.Navigator>
  )
}

const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Accueil',
          tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Hospital"
        component={HospitalStackScreen}
        options={{
          tabBarLabel: 'Hôpitaux',
          tabBarIcon: "#0040ff",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="hospital-box" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Restaurant"
        component={RestaurantStackScreen}
        options={{
          tabBarLabel: 'Restaurants',
          tabBarColor: "#4f33ff",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="silverware-fork-knife" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Like"
        component={LikeStackScreen}
        options={{
          tabBarLabel: 'Favoris',
          tabBarColor: "#004ba0",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cards-heart" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default MainTabScreen;
