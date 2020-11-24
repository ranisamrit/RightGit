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
import * as Animatable from 'react-native-animatable';
import {  Input,SocialIcon,Icon} from 'react-native-elements';
const ScreenDetils = ({navigation}) => {
   
   
  

  
      return (
          
       
             <View style = {styles.container}>
              <StatusBar backgroundColor='#F5F5F5' barStyle="light-content"/>


        
<Card
style={{
elevation: 24,
borderRadius: 24,
marginTop: 250,
backgroundColor: '#fafcff',
padding: 18,
marginLeft: 18,
// marginRight:-48,
height:192,
width:"90%",

}}>
<View>
<Card.Content>
<Title style={{color:"#172B4D",fontSize:16,textAlign:"center",
fontFamily:"normal normal normal 16px/24px Inter",paddingBottom:3}}>Login Error Received</Title>
<Text style={{color:"#172B4D",fontSize:12,textAlign:"center",
fontFamily:" normal normal normal 14px/20px Inter",marginBottom:10}}>Please get in touch with your Branch Manager</Text>
</Card.Content>


<TouchableOpacity

onPress={() =>

    navigation.navigate('Customerlogin')
  
}
>
<Text style={{color:"#602F56",fontSize:14,textAlign:"center",
fontFamily:" normal normal normal 12px/20px Inter",marginTop:60}}>BACK TO LOGIN</Text>

</TouchableOpacity>



</View>
</Card>




           </View>
      );
   }
   export default ScreenDetils;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F5F5F5"
   
  },
  text:{
    fontFamily: "normal normal normal 17px/20px Inter",
    fontSize:17,
    color:"#602F56",
    // marginLeft:80,
    textAlign:'center',
    paddingTop:100,
    paddingBottom:100
    // top: "94px",
    // left: "98px",
    // width: "212px",
    // height: "26px",
  },
  text1:{
    fontFamily: "normal normal 600 14px/17px Inter",
    fontSize:14,
    color:"#602F56",
    // marginLeft:80,
    textAlign:'center',
    paddingTop:100,
    paddingBottom:100
    // top: "94px",
    // left: "98px",
    // width: "212px",
    // height: "26px",
  },
  
  SubmitButtonStyle: {
    width:"90%",
    height: 48,
    marginTop:-10,
    paddingTop:10,
    paddingBottom:15,
    marginLeft:20,
    marginRight:20,
    backgroundColor:'transparent',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#602F56'
  },
 
  TextStyle:{
      color:'#602F56',
      textAlign:'center',
      fontWeight:"bold",
      fontSize:14,
      fontFamily: "normal normal normal 16px/20px Inter",
  },


 
  SubmitButtonStyle1: {
    width:"90%",
    height: 48,
    marginTop:10,
    paddingTop:10,
    paddingBottom:15,
    marginLeft:20,
    marginRight:20,
    backgroundColor:'transparent',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#602F56'
  },
 
  TextStyle1:{
      color:'#602F56',
      textAlign:'center',
      fontWeight:"bold",
      fontSize:14,
      fontFamily: "normal normal normal 16px/20px Inter",
     
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 10,
    paddingVertical: 30,
    marginTop:5,
   
//    marginBottom:100
},

});