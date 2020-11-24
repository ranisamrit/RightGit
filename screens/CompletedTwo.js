import React, { Component,useState } from 'react';
// import { Icon, InlineIcon } from '@iconify/react';
// import iosQrScanner from '@iconify/icons-ion/ios-qr-scanner';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  
  ActivityIndicator,
 StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  
} from 'react-native';

import {
  TouchableRipple,
  Switch,
  Title,
  Card,
  TextInput,
  Paragraph,
  Button,
  Avatar,
} from 'react-native-paper';
// import * as Animatable from 'react-native-animatable';
import Search from '../assets/SearchIcon.png';
import {  Input,SocialIcon,Icon} from 'react-native-elements';

const CompletedTwo = ({navigation}) => {
   
   
  

  
      return (
          
       
           

<View style = {styles.container}>
    
  <StatusBar backgroundColor='#F5F5F5' barStyle="light-content"/>
 
  
<ScrollView vartical={true} marginBottom={10}>

 
  </ScrollView>
    </View>
  );
        

    
   }
   export default CompletedTwo;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F5F5F5",
  
  },
  SubmitButtonStyle4: {
    width:"25%",
    height: 35,
    marginTop:-45,
    textAlign:'center',
    paddingTop:5,
    // paddingBottom:20,
    marginLeft:220,
    marginRight:20,
    backgroundColor:'transparent',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#62D248'
  },
  TextStyle:{
    color:'#602F56',
    textAlign:'center',
    // fontWeight:"bold",
    fontSize:16,
    fontFamily: "normal normal bold 16px/20px Inter",
    marginTop:20
  },
  TextStyle4:{
    color:'#62D248',
    textAlign:'center',
    // fontWeight:"bold",
    fontSize:14,
    fontFamily: "normal normal normal 14px/17px Inter",
   
  },

});