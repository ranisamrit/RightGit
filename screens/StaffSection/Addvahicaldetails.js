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
  Divider
} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import {  Input,SocialIcon,Icon} from 'react-native-elements';
import Path from './assets/Path.png';

const Addvahicaldetails = ({navigation}) => {
  // const BasicTimeLine = () => {
  //   const data = [
  //     {
  //       time: '09:00',
  //       title: 'Event 1',
  //       description:
  //         'Lorem Ipsum is simply dummy text of the printing.',
  //     },
  //     {
  //       time: '10:45',
  //       title: 'Event 2',
  //       description:
  //         'Lorem Ipsum is simply dummy text of the printing.',
  //     },
  //     {
  //       time: '12:00',
  //       title: 'Event 3',
  //       description:
  //         'Lorem Ipsum is simply dummy text of the printing.',
  //     },
  //     {
  //       time: '14:00',
  //       title: 'Event 4',
  //       description:
  //         'Lorem Ipsum is simply dummy text of the printing.',
  //     },
  //     {
  //       time: '16:30',
  //       title: 'Event 5',
  //       description:
  //         'Lorem Ipsum is simply dummy text of the printing.',
  //     },
  //   ];
   return (
          
       
             <View style = {styles.container}>
              <StatusBar backgroundColor='#F5F5F5' barStyle="light-content"/>
              <TouchableOpacity
         
          onPress={() =>
          //   this.callApi()
              // this.props.navigation.navigate('InvoiceDetils')
              navigation.navigate('Staffpending')
           }
       >
             <Image
                source={Path}
                style={{ width: 20, height: 20,marginTop:15,left:30
              }}
              />
              </TouchableOpacity>
              <Text style={{ fontSize: 15,left:70,top:-20,color: '#454F63',fontWeight:"bold",color:"#602F56",fontFamily:"normal normal bold 16px/20px Inter"  }}>
             Back
          </Text>
              <Card 
            
            style={{
            // elevation: 24,
            borderRadius: 20,
            borderColor:"#ECECEC",
            borderWidth:1,
            marginTop: 10,
            backgroundColor: '#fafcff',
            
            marginLeft: 18,
            // marginRight:-48,
            height:"67%",
            width:"90%",
            
            }}>
                 
            <View>
            
            
            
            
            <Text style={{color:"#454F63",fontSize:14,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",marginTop:10,fontWeight:"bold"}}>Update Pickup Vehicle Details </Text>
            
            <Divider style={{ backgroundColor: '#959DAD',height:1,marginRight:10,marginLeft:10,marginTop:10}} />
            
            <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",marginTop:15,marginRight:240,fontWeight:"bold"}}>Status</Text>
            
            
            
            </View>
            
            <View 
            
            
            
          >
                
            <Card style={{
            elevation: 10,
            borderRadius: 5,
            borderColor:"#ECECEC",
            borderWidth:1,
            marginTop: -10,
            backgroundColor: '#fafcff',
            top:20,
            marginLeft: 18,
            // marginRight:-48,
            height:"32%",
            width:"90%",
            
            }}>
            <Text style={{color:"#454F63",fontSize:14,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",marginTop:7,marginRight:150}}>Consignor Name</Text>
            
            </Card>
            </View>

            <View >
          <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",bottom:80,marginRight:240,fontWeight:"bold"}}>Date</Text>  
        <Card style={{
       elevation: 10,
       borderRadius: 5,
       borderColor:"#ECECEC",
       borderWidth:1,
       marginTop: -10,
       backgroundColor: '#fafcff',
       bottom:70,
       marginLeft: 18,
       // marginRight:-48,
       height:"29%",
       width:"90%",
        
        }}>
        <Text style={{color:"#454F63",fontSize:14,textAlign:"center",
        fontFamily:" normal normal normal 14px/17px Inter",marginTop:7,marginRight:150}}>29/10/2020</Text>
        
        </Card>
        </View>
            
        <View style={{bottom:30}}>
          <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",bottom:130,marginRight:240,fontWeight:"bold"}}>Time</Text>  
        <Card style={{
        elevation: 10,
        borderRadius: 5,
        borderColor:"#ECECEC",
        borderWidth:1,
        marginTop: -10,
        backgroundColor: '#fafcff',
        bottom:111,
        marginLeft: 18,
        // marginRight:-48,
        height:"35%",
        width:"15%",
        
        }}>
        <Text style={{color:"#454F63",fontSize:15,textAlign:"center",
        fontFamily:" normal normal normal 14px/17px Inter",marginTop:15,marginRight:5}}>HH</Text>
        
        </Card>

        
        </View>

        <View style={{bottom:30}}>
          
        <Card style={{
        elevation: 10,
        borderRadius: 5,
        borderColor:"#ECECEC",
        borderWidth:1,
        marginTop: -10,
        backgroundColor: '#fafcff',
        bottom:265,
        marginLeft: 18,
        // marginRight:-48,
        height:"37%",
        width:"15%",
        left:50
        }}>
        <Text style={{color:"#454F63",fontSize:15,textAlign:"center",
        fontFamily:" normal normal normal 14px/17px Inter",marginTop:15,marginRight:5}}>MM</Text>
        
        </Card>

        
        </View>


        <View style={{bottom:30}}>
          
          <Card style={{
          elevation: 10,
          borderRadius: 5,
          borderColor:"#ECECEC",
          borderWidth:1,
          marginTop: -10,
          backgroundColor: '#fafcff',
          bottom:430,
          marginLeft: 18,
          // marginRight:-48,
          height:"37%",
          width:"15%",
          left:100
          }}>
          <Text style={{color:"#454F63",fontSize:15,textAlign:"center",
          fontFamily:" normal normal normal 14px/17px Inter",marginTop:15,marginRight:5}}>AM</Text>
          
          </Card>
  
          
          </View>

          <View style={{bottom:460}} >
          <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",marginRight:240,fontWeight:"bold",bottom:100}}>Vehicle</Text>  
            <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",right:60,fontWeight:"bold",bottom:122}}> Number</Text>  
        <Card style={{
       elevation: 10,
       borderRadius: 5,
       borderColor:"#ECECEC",
       borderWidth:1,
      
       backgroundColor: '#fafcff',
       bottom:120,
       marginLeft: 18,
       // marginRight:-48,
       height:"25%",
       width:"90%",
        
        }}>
        <Text style={{color:"#454F63",fontSize:14,textAlign:"center",
        fontFamily:" normal normal normal 14px/17px Inter",marginTop:7,marginRight:150}}>Vehicle Number</Text>
        
        </Card>
        </View>
        <View style={{bottom:550}} >
          <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",marginRight:240,fontWeight:"bold",bottom:100}}>Vehicle</Text>  
            <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",right:60,fontWeight:"bold",bottom:122}}> Number</Text>  
        <Card style={{
       elevation: 10,
       borderRadius: 5,
       borderColor:"#ECECEC",
       borderWidth:1,
      
       backgroundColor: '#fafcff',
       bottom:120,
       marginLeft: 18,
       // marginRight:-48,
       height:"25%",
       width:"90%",
        
        }}>
        <Text style={{color:"#454F63",fontSize:14,textAlign:"center",
        fontFamily:" normal normal normal 14px/17px Inter",marginTop:7,marginRight:150}}>Vehicle Number</Text>
        
        </Card>
        </View>


            </Card>

            <View style={styles.MainContainer1}>
       <TouchableOpacity
          style={styles.SubmitButtonStyle1}
          activeOpacity = { .10 }
        //   onPress={() =>
        //   //   this.callApi()
        //       // this.props.navigation.navigate('InvoiceDetils')
        //       navigation.navigate('InvoiceDetils')
        //    }
       >
 
            <Text style={styles.TextStyle1}>Update</Text>
          
             </TouchableOpacity>
           </View>   
              
           </View>
      );
   }
  
   export default Addvahicaldetails;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#F5F5F5"
       
      },
      
      
            SubmitButtonStyle1: {
              width:"90%",
              height: 48,
              marginTop:25,
              paddingTop:10,
              paddingBottom:30,
              marginLeft:20,
              marginRight:20,
              backgroundColor:'#602F56',
              borderRadius:10,
              borderWidth: 1,
              borderColor: '#602F56',
              top:80
            },
           
            TextStyle1:{
                color:'#fff',
                textAlign:'center',
                fontWeight:"bold",
                fontSize:14,
                fontFamily: "normal normal normal 16px/20px Inter",
               
            }, 
      
      
     
      

});