import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import scanbarcodeApp from './scanbarcodeApp';
import TrackBarcode from './TrackBarcode';
import LorryID from './LorryID';
import InvoiceDetils from './InvoiceDetils';
import Customerlogin from './Customerlogin';
import ScreenDetils from './ScreenDetils';
import MainTabScreen from './MainTabScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <RootStack.Screen name="scanbarcodeApp" component={scanbarcodeApp}/>
        <RootStack.Screen name="TrackBarcode" component={TrackBarcode}/>
        <RootStack.Screen name="LorryID" component={LorryID}/>
        <RootStack.Screen name="InvoiceDetils" component={InvoiceDetils}/>
        <RootStack.Screen name="Customerlogin" component={Customerlogin}/>
        <RootStack.Screen name="ScreenDetils" component={ScreenDetils}/>
        <RootStack.Screen name="MainTabScreen" component={MainTabScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;