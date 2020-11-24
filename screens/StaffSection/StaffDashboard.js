import React, { Component,useState } from 'react';
// import { Icon, InlineIcon } from '@iconify/react';
// import iosQrScanner from '@iconify/icons-ion/ios-qr-scanner';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  ImageBackground,
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
  Divider,
  Avatar,
} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import {  Input,Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Path from './assets/Path.png'
import Search from './assets/SearchIcon.png';
import Update from './assets/Update.png';
import Package from './assets/package.png';
import Pack from './assets/packgeone.png'
import Transport from './assets/Transport.png'

const StaffDashbord = ({navigation}) => {
   
   
  

  
      return (
          
       
             <View style = {styles.container}>
             <StatusBar backgroundColor='#F5F5F5' barStyle="light-content"/>
             <TextInput
             placeholder="Search"
      style={{ height: 30, borderColor: 'gray', borderWidth: 1,top:90,backgroundColor:"#F5F5F5",
      paddingTop:10,width:"90%",alignSelf:"center" }}
      // onChangeText={text => onChangeText(text)}
      // value={value}
    />
            <Image
                          source={Search}
                          style={{ width: 18,height:18,marginLeft:10,top:60,left:290
                         }}
                        />
                                        
<View style={{flex:1,flexDirection:"row",justifyContent:"space-around",width:"80%",top:20}}>
   
<Card style={{top:100,flex:1,flexDirection:"row",width:150,height:"70%",left:23,borderRadius:10,}}> 
<TouchableOpacity >
<Image 
                // animation="bounceIn"
                // duraton="1500"
            source={Update}
            style={styles.logo}
           
            />  
            </TouchableOpacity>     
            <Text
              style={styles.registerTextStyle}>
           Update Status
            </Text>
</Card>
  

   
<Card style={{top:100,flex:1,flexDirection:"row",width:150,height:"70%",left:48,borderRadius:10,}}>
   <TouchableOpacity 
          activeOpacity = { .10 }
          onPress={() =>
          
              // this.props.navigation.navigate('Customerlogin')
            navigation.navigate('PendingPickups')}>
               <Image 
                // animation="bounceIn"
                // duraton="1500"
            source={Package}
            style={styles.logo1}
            
            />
            </TouchableOpacity >   
            <Text
              style={styles.registerTextStyle1}>
           Pending Pickups
            </Text>
</Card>  

 
</View>

<View style={{flex:1,flexDirection:"row",justifyContent:"space-around",width:"80%",top:20}}>
    
<Card style={{flex:1,flexDirection:"row",width:150,height:"70%",left:5,borderRadius:10,top:30,left:25}}>
  <TouchableOpacity 
          activeOpacity = { .10 }
          onPress={() =>
          
              // this.props.navigation.navigate('Customerlogin')
            navigation.navigate('Staffmaintab')}>
                <Image 
                
            source={Pack}
            style={styles.logo2}
           
            />  
              </TouchableOpacity> 
           <Text
              style={styles.registerTextStyle2}>
           Consignments
            </Text>
</Card>
       

    
              
<Card style={{flex:1,flexDirection:"row",width:150,height:"70%",right:5,borderRadius:10,top:30,left:50}}>
  <TouchableOpacity 
          activeOpacity = { .10 }
          onPress={() =>
          
              // this.props.navigation.navigate('Customerlogin')
            navigation.navigate('PickupForm')}>
          <Image 
                
            source={Transport}
            style={styles.logo3}
           
            /> 
              </TouchableOpacity> 
            <Text
              style={styles.registerTextStyle3}>
           Create Pickup
            </Text>
</Card>  


 </View>
     



     






                       
                       
                        
                     
                         </View>
           
      );
   }
   export default StaffDashbord;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F5F5F5",
   paddingTop:10
  },
  


 
  SubmitButtonStyle1: {
    width:"90%",
    height: 48,
    marginTop:40,
    paddingTop:10,
    // paddingBottom:30,
    marginLeft:20,
    marginBottom:30,
    marginRight:20,
    backgroundColor:'#602F56',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#602F56'
  },
 
 
 
  registerTextStyle: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  //  left:5,
   top:5,
   marginTop:10,
  
  },
  registerTextStyle1:{
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  //  left:10,
  top:5,
   marginTop:25
  },

  registerTextStyle2:{
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    // right:5,
    top:10,
    marginTop:10
  },
  registerTextStyle3:{
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    // right:5,
    top:20,
    marginTop:10
  },
  logo1:{
    alignSelf:"center",
    width:"70%",
    height:"65%",
    left:10,
    top:30
  },
  logo:{
    alignSelf:"center",
    width:"67%",
    height:"72%",
    left:10,
    top:20
  },
  logo2:{
    alignSelf:"center",
    width:"71%",
    height:"65%",
    // left:10,
    top:20
  },
  logo3:{
    alignSelf:"center",
    width:"77%",
    height:"60%",
    // left:10,
    top:30
  }
});