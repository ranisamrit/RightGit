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
  Divider,
  
} from 'react-native-paper';
// import * as Animatable from 'react-native-animatable';
import Search from '../assets/SearchIcon.png';
import {  Input,SocialIcon,Icon,Header} from 'react-native-elements';
import Path from '../assets/Path.png';
const Pending = ({navigation}) => {
   
   
return (
          
       
           

<View style = {styles.container}>

             <StatusBar backgroundColor='#F5F5F5' barStyle="light-content"/>
           
             {/* <TouchableOpacity
         
          onPress={() =>
          //   this.callApi()
              // this.props.navigation.navigate('InvoiceDetils')
              navigation.navigate('LorryID')
           }
       >
             <Image
                source={Path}
                style={{ width: 20, height: 20,marginTop:15,left:30
              }}
              />
              </TouchableOpacity>
              <Text style={{ fontSize: 15,left:70,top:-20,color: '#454F63',fontWeight:"bold",color:"#602F56",fontFamily:"normal normal bold 16px/20px Inter"  }}>
              Invoice Details
          </Text>
             */}

<View style={{ position: 'absolute', top: 0, right: 0 }}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                backgroundColor: 'white',
              }}>
           
            </Text>
          </View>

       <ScrollView vartical={true}>
          <View style={{  }}>
          <Text
              style={{ fontSize: 14, color: '#454F63',marginLeft:30,top:15,fontFamily:"normal normal 300 14px/17px Inter",fontWeight:"bold"}}>
         Pickup ID
            </Text>
            <Text style={{ fontSize: 14,left:200,top:-6,color: '#454F63',fontFamily:"normal normal 300 14px/17px Inter",fontWeight:"bold" }}>
         Vehical Out for Pickup 
          </Text>
          <Text
              style={{ fontSize: 14, color: '#454F63',marginLeft:30,top:-4,fontFamily:"normal normal normal 14px/17px Inter",}}>
        Consignor Name
            </Text>
            <Text style={{ fontSize: 11,left:200,top:-20,color: '#454F63',fontFamily:"normal normal 300 14px/17px Inter", }}>
         18/02/2020,12:10 pm
          </Text>
          <TouchableOpacity
          
          onPress={() =>
          //   this.callApi()
              // this.props.navigation.navigate('InvoiceDetils')
              navigation.navigate('InvalidEntryId')
           }
       >
          <Text style={{ fontSize: 14,left:250,top:-5,color: '#602F56',fontFamily:"normal normal 300 14px/17px Inter",fontWeight:"bold" }}>
        See more    >
          </Text>

          </TouchableOpacity>

          </View>
          <Divider style={{ backgroundColor: '#ECECEC',height:3,marginRight:25,marginLeft:25,marginTop:10 }} />

          <Text
              style={{ fontSize: 14, color: '#454F63',marginLeft:30,top:15,fontFamily:"normal normal 300 14px/17px Inter",fontWeight:"bold"}}>
         Pickup ID
            </Text>
            <Text style={{ fontSize: 14,left:200,top:-6,color: '#454F63',fontFamily:"normal normal 300 14px/17px Inter",fontWeight:"bold" }}>
         Vehical Out for Pickup 
          </Text>
          <Text
              style={{ fontSize: 14, color: '#454F63',marginLeft:30,top:-4,fontFamily:"normal normal normal 14px/17px Inter",}}>
        Consignor Name
            </Text>
            <Text style={{ fontSize: 11,left:200,top:-20,color: '#454F63',fontFamily:"normal normal 300 14px/17px Inter", }}>
         18/02/2020,12:10 pm
          </Text>
          <TouchableOpacity
          
          onPress={() =>
          //   this.callApi()
              // this.props.navigation.navigate('InvoiceDetils')
              navigation.navigate('InvalidEntryId')
           }
       >
          <Text style={{ fontSize: 14,left:250,top:-5,color: '#602F56',fontFamily:"normal normal 300 14px/17px Inter",fontWeight:"bold" }}>
        See more    >
          </Text>

          </TouchableOpacity>

          <Divider style={{ backgroundColor: '#ECECEC',height:3,marginRight:25,marginLeft:25,marginTop:10 }} />
          <Text
              style={{ fontSize: 14, color: '#454F63',marginLeft:30,top:15,fontFamily:"normal normal 300 14px/17px Inter",fontWeight:"bold"}}>
         Pickup ID
            </Text>
            <Text style={{ fontSize: 14,left:200,top:-6,color: '#454F63',fontFamily:"normal normal 300 14px/17px Inter",fontWeight:"bold" }}>
         Vehical Out for Pickup 
          </Text>
          <Text
              style={{ fontSize: 14, color: '#454F63',marginLeft:30,top:-4,fontFamily:"normal normal normal 14px/17px Inter",}}>
        Consignor Name
            </Text>
            <Text style={{ fontSize: 11,left:200,top:-20,color: '#454F63',fontFamily:"normal normal 300 14px/17px Inter", }}>
         18/02/2020,12:10 pm
          </Text>

          <TouchableOpacity
          
          onPress={() =>
          //   this.callApi()
              // this.props.navigation.navigate('InvoiceDetils')
              navigation.navigate('InvalidEntryId')
           }
       >
          <Text style={{ fontSize: 14,left:250,top:-5,color: '#602F56',fontFamily:"normal normal 300 14px/17px Inter",fontWeight:"bold" }}>
        See more    >
          </Text>

          </TouchableOpacity>

          <Divider style={{ backgroundColor: '#ECECEC',height:3,marginRight:25,marginLeft:25,marginTop:10 }} />
          <Text
              style={{ fontSize: 14, color: '#454F63',marginLeft:30,top:15,fontFamily:"normal normal 300 14px/17px Inter",fontWeight:"bold"}}>
         Pickup ID
            </Text>
            <Text style={{ fontSize: 14,left:200,top:-6,color: '#454F63',fontFamily:"normal normal 300 14px/17px Inter",fontWeight:"bold" }}>
         Vehical Out for Pickup 
          </Text>
          <Text
              style={{ fontSize: 14, color: '#454F63',marginLeft:30,top:-4,fontFamily:"normal normal normal 14px/17px Inter",}}>
        Consignor Name
            </Text>
            <Text style={{ fontSize: 11,left:200,top:-20,color: '#454F63',fontFamily:"normal normal 300 14px/17px Inter", }}>
         18/02/2020,12:10 pm
          </Text>
          <TouchableOpacity
          
          onPress={() =>
          //   this.callApi()
              // this.props.navigation.navigate('InvoiceDetils')
              navigation.navigate('InvalidEntryId')
           }
       >
          <Text style={{ fontSize: 14,left:250,top:-5,color: '#602F56',fontFamily:"normal normal 300 14px/17px Inter",fontWeight:"bold" }}>
        See more    >
          </Text>

          </TouchableOpacity>


          <Divider style={{ backgroundColor: '#ECECEC',height:3,marginRight:25,marginLeft:25,marginTop:10 }} />


          <Text
              style={{ fontSize: 14, color: '#454F63',marginLeft:30,top:15,fontFamily:"normal normal 300 14px/17px Inter",fontWeight:"bold"}}>
         Pickup ID
            </Text>
            <Text style={{ fontSize: 14,left:200,top:-6,color: '#454F63',fontFamily:"normal normal 300 14px/17px Inter",fontWeight:"bold" }}>
         Vehical Out for Pickup 
          </Text>
          <Text
              style={{ fontSize: 14, color: '#454F63',marginLeft:30,top:-4,fontFamily:"normal normal normal 14px/17px Inter",}}>
        Consignor Name
            </Text>
            <Text style={{ fontSize: 11,left:200,top:-20,color: '#454F63',fontFamily:"normal normal 300 14px/17px Inter", }}>
         18/02/2020,12:10 pm
          </Text>
          <TouchableOpacity
          
          onPress={() =>
          //   this.callApi()
              // this.props.navigation.navigate('InvoiceDetils')
              navigation.navigate('InvalidEntryId')
           }
       >
          <Text style={{ fontSize: 14,left:250,top:-5,color: '#602F56',fontFamily:"normal normal 300 14px/17px Inter",fontWeight:"bold" }}>
        See more    >
          </Text>

          </TouchableOpacity>





          </ScrollView>







        <View style={styles.MainContainer1}>
       <TouchableOpacity
          style={styles.SubmitButtonStyle1}
          activeOpacity = { .10 }
          onPress={() =>
          //   this.callApi()
              // this.props.navigation.navigate('InvoiceDetils')
              navigation.navigate('PickupForm')
           }
       >
 
            <Text style={styles.TextStyle1}>Create a Pickup Request</Text>
          
             </TouchableOpacity>
           </View>   

           </View>
  );
        

    
   }
   export default Pending;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F5F5F5",
  
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
 
  TextStyle1:{
      color:'#FFFFFF',
      textAlign:'center',
      fontWeight:"bold",
      fontSize:14,
      fontFamily: "normal normal normal 16px/20px Inter",
     
  }, 
 
 

});