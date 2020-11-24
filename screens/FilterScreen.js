import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
// import Notification from './Notification';
// import PickupRequests from './PickupRequests';
// import HomeScreen from './HomeScreen';
// import DetailsScreen from './DetailsScreen';
// import ExploreScreen from './ExploreScreen';
// import ProfileScreen from './ProfileScreen';
import One from './One';
import Two from './Two';
import Three from './Three';
// const HomeStack = createStackNavigator();
// const DetailsStack = createStackNavigator();

const TabTop = createMaterialTopTabNavigator();

const FilterScreen = () => (
    <TabTop.Navigator
      initialRouteName="One"
      activeColor="#fff"
      headerMode='screen' 
      tabBarOptions={{
        labelStyle: { fontSize: 14,color:"#1C1C1C",fontFamily:"normal normal medium 16px/20px Inter",fontWeight:"bold" },
        tabStyle: { alignSelf:"center" },
        style: { backgroundColor: '#fff',marginTop:70 },
        
      }}
    >
      <TabTop.Screen
        name="One"
        component={One}
        options={{
            
          tabBarLabel: 'Active',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <TabTop.Screen
        name="Two"
        component={Two}
        options={{
          tabBarLabel: 'COMPLETED',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <TabTop.Screen
        name="Three"
        component={Three}
        options={{
          tabBarLabel: 'VENDORS',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
     
    </TabTop.Navigator>
);

export default FilterScreen;

// const HomeStackScreen = ({navigation}) => (
// <HomeStack.Navigator screenOptions={{
//         headerStyle: {
//         backgroundColor: '#009387',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//         fontWeight: 'bold'
//         }
//     }}>
//         <HomeStack.Screen name="Home" component={HomeScreen} options={{
//         title:'Overview',
//         headerLeft: () => (
//             <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
//         )
//         }} />
// </HomeStack.Navigator>
// );

// const DetailsStackScreen = ({navigation}) => (
// <DetailsStack.Navigator screenOptions={{
//         headerStyle: {
//         backgroundColor: '#1f65ff',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//         fontWeight: 'bold'
//         }
//     }}>
//         <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
//         headerLeft: () => (
//             <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
//         )
//         }} />
// </DetailsStack.Navigator>
// );
  