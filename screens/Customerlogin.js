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
import {  Input,} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../assets/Layer.png';
const Customerlogin = ({navigation}) => {
   
   
  

  
      return (
          
       
             <View style = {styles.container}>
             <StatusBar backgroundColor='#F5F5F5' barStyle="light-content"/>
             <View style={{ flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <Image 
                // animation="bounceIn"
                // duraton="1500"
            source={Logo}
            style={styles.logo}
            resizeMode='center'
            />
               {/* <Text style= {styles.text}>Enriching Supply Chain Solutions</Text> */}
        </View>


           
            
          
           <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            
            <View style={{marginBottom:10,marginTop:10}}>
<Input

  placeholder='Username'
  placeholderTextColor="#000"
  selectionColor="#fff"
 
  // onChangeText = {this.handleusername}
  onChangeText={(value) => 
    
    {
    //   console.log(value)
    //   this.setState({username: value})

  }
}
  style={styles.Input}

  // leftIcon={
    // <Icon
    //   name='user'
    //   size={24}
    //   color='black'

    // />
  // }
/>
<Input


  placeholder='Password'
  placeholderTextColor="#000"
  selectionColor="#fff"
  
  // onChangeText = {this.handlePass}
//   onChangeText={(input) => this.setState({pass: input})}
  secureTextEntry={true}
  autoCapitalize = "none"
  
 

  style={styles.Input}
  
//   leftIcon={
//     <Icon
//       name='user'
//       size={24}
//       color='black'
//     />
//   }

/>
</View>   
     
  
        
        <View style={{flex:1,marginBottom:130,justifyContent:"center"}}>
 

            
           <View style={styles.MainContainer1}>
       <TouchableOpacity
          style={styles.SubmitButtonStyle1}
          // onPress={() => navigation.navigate("Active")}
            onPress={() => navigation.navigate('MainTabScreen')}
       >

            <Text style={styles.TextStyle1}>Login In</Text>
            </TouchableOpacity>
            <TouchableOpacity
      
      activeOpacity = { .10 }
      onPress={() =>
      
          // this.props.navigation.navigate('Customerlogin')
        navigation.navigate('ScreenDetils')}
       
   >
            
            <Text style= {styles.text1}>Need support ?</Text>
             </TouchableOpacity>
             
           </View>
           
       </View> 
   

</Animatable.View>

           </View>
      );
   }
   export default Customerlogin;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F5F5F5"
   
  },
  // text:{
  //   fontFamily: "normal normal normal 17px/20px Inter",
  //   fontSize:15,
  //   color:"#602F56",
  //   // marginLeft:80,
  //   textAlign:'center',
  //   marginTop:-88,
  //   left:20,
  //   paddingBottom:140
  //   // top: "94px",
  //   // left: "98px",
  //   // width: "212px",
  //   // height: "26px",
  // },
  text1:{
    fontFamily: "normal normal 600 14px/17px Inter",
    fontSize:14,
    color:"#602F56",
    // marginLeft:80,
    textAlign:'center',
    paddingTop:70,
    paddingBottom:50
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
    marginTop:190,
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
    marginTop:50,
   
//    marginBottom:100
},
logo: {
  width: "95%",
  height:"100%",
  marginBottom:-300,
  marginTop:-250,
  // paddingBottom:40,
},
});