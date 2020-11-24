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

const Consigmentdetailsform = ({navigation}) => {
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
          
       <ScrollView >
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
              <Text style={{ fontSize: 15,left:70,top:-20,color: '#454F63',fontWeight:"bold",color:"#602F56",
              fontFamily:"normal normal bold 16px/20px Inter"}}>
             Consigment Details
          </Text>
         
              <Card 
            
            style={{
            // elevation: 24,
            borderRadius: 20,
            borderColor:"#ECECEC",
            borderWidth:1,
            marginTop: 10,
            backgroundColor: '#fafcff',
            bottom:10,
            marginLeft: 18,
            // marginRight:-48,
            height:"100%",
            width:"90%",
            paddingBottom:150
            }}>
                 
            <View>
            
            
            
            
           
            <Text style={{color:"#454F63",fontSize:15,textAlign:"center",bottom:10,
            fontFamily:" normal normal normal 14px/17px Inter",marginTop:15,marginRight:230,fontWeight:"bold"}}>Lorry ID</Text>
            
            
            
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
            top:10,
            marginLeft: 18,
            // marginRight:-48,
            height:"25%",
            width:"90%",
            
            }}>
            <Text style={{color:"#454F63",fontSize:14,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",marginTop:7,marginRight:200}}>Lorry ID</Text>
            
            </Card>
            </View>

            <View style={{top:20}} >
          <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",bottom:155,marginRight:240,fontWeight:"bold"}}>Billing</Text>
              <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",bottom:177,marginRight:140,fontWeight:"bold"}}>Party</Text>
        <Card style={{
       elevation: 10,
       borderRadius: 5,
       borderColor:"#ECECEC",
       borderWidth:1,
       marginTop: -10,
       backgroundColor: '#fafcff',
       bottom:160,
       marginLeft: 18,
       // marginRight:-48,
       height:"22%",
       width:"90%",
        
        }}>
        <Text style={{color:"#454F63",fontSize:14,textAlign:"center",
        fontFamily:" normal normal normal 14px/17px Inter",marginTop:7,marginRight:150}}>Select Billing Party</Text>
        
        </Card>
        </View>
            
        <View style={{bottom:165}} >
          <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",bottom:95,marginRight:200,fontWeight:"bold"}}>Consignor</Text>  
        <Card style={{
       elevation: 10,
       borderRadius: 5,
       borderColor:"#ECECEC",
       borderWidth:1,
       marginTop: -10,
       backgroundColor: '#fafcff',
       bottom:80,
       marginLeft: 18,
       // marginRight:-48,
       height:"23%",
       width:"90%",
        
        }}>
        <Text style={{color:"#454F63",fontSize:14,textAlign:"center",
        fontFamily:" normal normal normal 14px/17px Inter",marginTop:7,marginRight:150}}>Select Consignor</Text>
        
        </Card>
        </View>
        <View style={{bottom:295}} >
          <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",bottom:75,marginRight:200,fontWeight:"bold"}}>Consignee</Text>  
        <Card style={{
       elevation: 10,
       borderRadius: 5,
       borderColor:"#ECECEC",
       borderWidth:1,
       marginTop: -10,
       backgroundColor: '#fafcff',
       bottom:60,
       marginLeft: 18,
       // marginRight:-48,
       height:"23%",
       width:"90%",
        
        }}>
        <Text style={{color:"#454F63",fontSize:14,textAlign:"center",
        fontFamily:" normal normal normal 14px/17px Inter",marginTop:7,marginRight:150}}>Select Consignee</Text>
        
        </Card>
        </View>
        <View style={{bottom:430}} >
          <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",bottom:53,marginRight:220,fontWeight:"bold"}}>Project</Text>  
        <Card style={{
       elevation: 10,
       borderRadius: 5,
       borderColor:"#ECECEC",
       borderWidth:1,
       marginTop: -10,
       backgroundColor: '#fafcff',
       bottom:42,
       marginLeft: 18,
       // marginRight:-48,
       height:"23%",
       width:"90%",
        
        }}>
        <Text style={{color:"#454F63",fontSize:14,textAlign:"center",
        fontFamily:" normal normal normal 14px/17px Inter",marginTop:7,marginRight:180}}>Enter Project</Text>
        
        </Card>
        </View>
     
        <View style={{bottom:540}} >
          <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",bottom:60,marginRight:200,fontWeight:"bold"}}>Origin State</Text>  
        <Card style={{
       elevation: 10,
       borderRadius: 5,
       borderColor:"#ECECEC",
       borderWidth:1,
       marginTop: -10,
       backgroundColor: '#fafcff',
       bottom:45,
       marginLeft: 18,
       // marginRight:-48,
       height:"23%",
       width:"40%",
        
        }}>
        <Text style={{color:"#454F63",fontSize:14,textAlign:"center",
        fontFamily:" normal normal normal 14px/17px Inter",marginTop:7,}}>Select State</Text>
        
        </Card>
        </View>
        <View style={{bottom:755,left:160}} >
          <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",bottom:33,marginRight:200,fontWeight:"bold"}}>Origin City</Text>  
        <Card style={{
       elevation: 10,
       borderRadius: 5,
       borderColor:"#ECECEC",
       borderWidth:1,
       marginTop: -10,
       backgroundColor: '#fafcff',
       bottom:18,
       marginLeft: 18,
       // marginRight:-48,
       height:"23%",
       width:"40%",
        
        }}>
        <Text style={{color:"#454F63",fontSize:14,textAlign:"center",
        fontFamily:" normal normal normal 14px/17px Inter",marginTop:7,}}>Select City</Text>
        
        </Card>
        </View>

        <View style={{bottom:910}} >
          <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",top:1,marginRight:200,fontWeight:"bold"}}>Destination</Text>  
            <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",bottom:20,marginRight:70,fontWeight:"bold"}}>State</Text> 
        <Card style={{
       elevation: 10,
       borderRadius: 5,
       borderColor:"#ECECEC",
       borderWidth:1,
       marginTop: -10,
       backgroundColor: '#fafcff',
        bottom:5,
       marginLeft: 18,
       // marginRight:-48,
       height:"23%",
       width:"40%",
        
        }}>
        <Text style={{color:"#454F63",fontSize:14,textAlign:"center",
        fontFamily:" normal normal normal 14px/17px Inter",marginTop:7,}}>Select State</Text>
        
        </Card>
        </View>
        <View style={{bottom:1125,left:160}} >
          <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",top:10,marginRight:160,fontWeight:"bold"}}>Destination City</Text>  
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
       height:"24%",
       width:"40%",
        
        }}>
        <Text style={{color:"#454F63",fontSize:14,textAlign:"center",
        fontFamily:" normal normal normal 14px/17px Inter",marginTop:7,}}>Select City</Text>
        
        </Card>
        </View>
        <View style={{bottom:1305}} >
          <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",top:72,marginRight:220,fontWeight:"bold"}}>Transport </Text>  
             <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",top:50,marginRight:100,fontWeight:"bold"}}>Mode </Text>  
        <Card style={{
       elevation: 10,
       borderRadius: 5,
       borderColor:"#ECECEC",
       borderWidth:1,
       marginTop: -10,
       backgroundColor: '#fafcff',
      top:65,
       marginLeft: 18,
       // marginRight:-48,
       height:"22%",
       width:"90%",
        
        }}>
        <Text style={{color:"#454F63",fontSize:14,textAlign:"center",
        fontFamily:" normal normal normal 14px/17px Inter",marginTop:7,marginRight:180}}>Enter Project</Text>
        
        </Card>
        </View>
         
        <View style={{bottom:1455}} >
          <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",top:95,marginRight:220,fontWeight:"bold"}}>Account</Text>  
             <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",top:73,marginRight:115,fontWeight:"bold"}}>Type</Text>  
        <Card style={{
       elevation: 10,
       borderRadius: 5,
       borderColor:"#ECECEC",
       borderWidth:1,
       marginTop: -10,
       backgroundColor: '#fafcff',
       top:85,
       marginLeft: 18,
       // marginRight:-48,
       height:"22%",
       width:"90%",
        
        }}>
        <Text style={{color:"#454F63",fontSize:14,textAlign:"center",
        fontFamily:" normal normal normal 14px/17px Inter",marginTop:7,marginRight:180}}>Enter Project</Text>
        
        </Card>
        </View>
        <View style={{bottom:1595}} >
          <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",top:115,marginRight:220,fontWeight:"bold"}}>Remarks</Text>  
            
        <Card style={{
       elevation: 10,
       borderRadius: 5,
       borderColor:"#ECECEC",
       borderWidth:1,
       marginTop: -10,
       backgroundColor: '#fafcff',
       top:130,
       marginLeft: 18,
       // marginRight:-48,
       height:"22%",
       width:"90%",
        
        }}>
        <Text style={{color:"#454F63",fontSize:14,textAlign:"center",
        fontFamily:" normal normal normal 14px/17px Inter",marginTop:7,marginRight:180}}>Enter Project</Text>
        
        </Card>
        </View>

        <View style={{bottom:1695}} >
          <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",top:130,marginRight:220,fontWeight:"bold"}}>Number of</Text>  
             <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",top:108,marginRight:80,fontWeight:"bold"}}>Pieces</Text>
        <Card style={{
       elevation: 10,
       borderRadius: 5,
       borderColor:"#ECECEC",
       borderWidth:1,
       marginTop: -10,
       backgroundColor: '#fafcff',
       top:135,
       marginLeft: 20,
       // marginRight:-48,
       height:"20%",
       width:"14%",
        
        }}>
        <Text style={{color:"#454F63",fontSize:14,textAlign:"center",
        fontFamily:" normal normal normal 14px/17px Inter",marginTop:7,}}>00</Text>
        
        </Card>
        <TouchableOpacity
          onPress={() =>
           navigation.navigate('Addinvoice')
           }
       >
        <Text style={{color:"#602F56",fontSize:14,textAlign:"center",left:90,
            fontFamily:" normal normal normal 14px/17px Inter",marginTop:50,fontWeight:"bold"}}>Add invoice Details</Text>
             </TouchableOpacity>
        </View>
            </Card>

            
             
           </View>
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
 
            <Text style={styles.TextStyle1}>Generated Additional Lorry ID</Text>
          
             </TouchableOpacity>
           </View>   
           <View style={styles.MainContainer1}>
       <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .10 }
        //   onPress={() =>
        //   //   this.callApi()
        //       // this.props.navigation.navigate('InvoiceDetils')
        //       navigation.navigate('InvoiceDetils')
        //    }
       >
 
            <Text style={styles.TextStyle}>Save</Text>
          
             </TouchableOpacity>
           </View>   
           </ScrollView>
      );
   }
  
   export default Consigmentdetailsform;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#F5F5F5",
      
     
      },
      
      
            SubmitButtonStyle1: {
              width:"90%",
              height: 48,
              marginTop:25,
              paddingTop:10,
              paddingBottom:30,
              marginLeft:20,
              marginRight:20,
              backgroundColor:'transparent',
              borderRadius:10,
              borderWidth: 1,
              borderColor: '#602F56',
              top:80
            },
           
            TextStyle1:{
                color:'#602F56',
                textAlign:'center',
                fontWeight:"bold",
                fontSize:14,
                fontFamily: "normal normal normal 16px/20px Inter",
               
            }, 
      
            SubmitButtonStyle: {
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
              top:70,
              marginBottom: 100,
            },
           
            TextStyle:{
                color:'#fff',
                textAlign:'center',
                fontWeight:"bold",
                fontSize:14,
                fontFamily: "normal normal normal 16px/20px Inter",
               
            }, 
     
      

});