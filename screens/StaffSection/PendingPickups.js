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
import Staffpending from './Staffpending';
import Inprogress from './Inprogress';
import Scompleted from './Scompleted';

import { View } from 'native-base';
// const HomeStack = createStackNavigator();
// const DetailsStack = createStackNavigator();

const TabTop = createMaterialTopTabNavigator();

const PendingPickups = () => (
 
    <TabTop.Navigator
      initialRouteName="Staffpending"
      activeColor="#fff"
      headerMode='screen' 
      tabBarColor='#000'
      tabBarOptions={{
        
        labelStyle: { fontSize: 14,color:"#1C1C1C",fontFamily:"normal normal medium 16px/20px Inter",fontWeight:"bold" },
        tabStyle: { alignSelf:"center" },
        style: { backgroundColor: '#fff',marginTop:70 },
      }}
      indicatorStyle= {{
        backgroundColor: '#000',
        height: '100%',
        borderBottomColor: '#000',
        borderBottomWidth: 1
      }}
    >
      <TabTop.Screen
        name="Staffpending"
        component={Staffpending}
        options={{
          tabBarLabel: 'Pending',
          tabBarColor: '#000',
          
        }}
      />
      <TabTop.Screen
        name="Inprogress"
        component={Inprogress}
        
        options={{
          
          tabBarLabel: 'In-progress',
          tabBarColor: '#000',
          // tabBarIcon: ({ color }) => (
          //   <Icon name="ios-notifications" color={color} size={26} />
          // ),
        }}
      />
      <TabTop.Screen
        name="Scompleted"
        component={Scompleted}
        options={{
          tabBarLabel: 'completed',
          tabBarColor: '#000',
          // tabBarIcon: ({ color }) => (
          //   <Icon name="ios-person" color={color} size={26} />
          // ),
        }}
      />
     
    </TabTop.Navigator>
);

export default PendingPickups;

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
  