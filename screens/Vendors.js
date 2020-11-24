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
import Transport from '../assets/Transport.png';


import {  Input,SocialIcon,Icon} from 'react-native-elements';
const Vendors = ({navigation}) => {
   
   
  

  
      return (
          
       
        <View style = {styles.container}>
        <StatusBar backgroundColor='#F5F5F5' barStyle="light-content"/>
    <ScrollView vartical={true} marginBottom={10}>
        <Card
            style={{
              elevation: 24,
              borderRadius: 12,
              marginTop: 20,
              backgroundColor: '#fafcff',
              padding: 18,
              marginLeft: 18,
              marginRight:-48,
              height:192,
              width:"90%",
              
            }}>
       <View>
       <Title style={{color:"#454F63",fontSize:14,
            fontFamily:"normal normal bold 16px/19px Lato",paddingBottom:20,
            marginRight:100,fontWeight:"bold"}}>Sharma Traders, Pune</Title>
     <Card
          style={{
          
            // borderRadius: 12,
            marginTop: -10,
            backgroundColor: '#ECECEC',
            padding: 10,
            marginLeft: 10,
          
            height:60,
            width:"90%",
            
          }}>
      <View>
      <Text style={{color:"#454F63",fontSize:12,
            fontFamily:"normal normal bold 16px/19px Lato",paddingBottom:5,
           }}>Office No.7,Akansha-1,Road No.14,</Text>
           <Text style={{color:"#454F63",fontSize:12,
            fontFamily:"normal normal bold 16px/19px Lato",paddingBottom:20,
           }}>Opp PMC Garden,Pune,401132</Text>
      </View>
    </Card>
    <Text style={{color:"#454F63",fontSize:10,left:60,top:30,
            fontFamily:"normal normal bold 16px/19px Lato",
           }}>3 Active Consignments</Text>
             
    <View style={styles.MainContainer1}>
           <TouchableOpacity
              style={styles.SubmitButtonStyle3}
              activeOpacity = { .10 }
              // onPress={() =>
              
                  // this.props.navigation.navigate('ScreenDetils')
                  onPress={() => navigation.navigate("VendorName")}
               
           >
     
                <Text style={styles.TextStyle3}>Details</Text>
              
                 </TouchableOpacity>
                 <Image
              source={Transport}
              style={{ flexDirection: 'row', justifyContent: 'space-between' ,width: 40, height: 26, 
              marginLeft: 10,marginTop:-35,backgroundColor:"transparent"}}
            />
               </View>
               </View>
      
              </Card>
              <Card
            style={{
              elevation: 24,
              borderRadius: 12,
              marginTop: 20,
              backgroundColor: '#fafcff',
              padding: 18,
              marginLeft: 18,
              marginRight:-48,
              height:192,
              width:"90%",
              
            }}>
       <View>
       <Title style={{color:"#454F63",fontSize:14,
            fontFamily:"normal normal bold 16px/19px Lato",paddingBottom:20,
            marginRight:100,fontWeight:"bold"}}>Sharma Traders, Pune</Title>
     <Card
          style={{
          
            // borderRadius: 12,
            marginTop: -10,
            backgroundColor: '#ECECEC',
            padding: 10,
            marginLeft: 10,
          
            height:60,
            width:"90%",
            
          }}>
      <View>
      <Text style={{color:"#454F63",fontSize:12,
            fontFamily:"normal normal bold 16px/19px Lato",paddingBottom:5,
           }}>Office No.7,Akansha-1,Road No.14,</Text>
           <Text style={{color:"#454F63",fontSize:12,
            fontFamily:"normal normal bold 16px/19px Lato",paddingBottom:20,
           }}>Opp PMC Garden,Pune,401132</Text>
      </View>
    </Card>
    <Text style={{color:"#454F63",fontSize:10,left:60,top:30,
            fontFamily:"normal normal bold 16px/19px Lato",
           }}>3 Active Consignments</Text>
             
    <View style={styles.MainContainer1}>
           <TouchableOpacity
              style={styles.SubmitButtonStyle3}
              activeOpacity = { .10 }
              // onPress={() =>
              
                  // this.props.navigation.navigate('ScreenDetils')
                  onPress={() => navigation.navigate("ScreenDetils")}
               
           >
     
                <Text style={styles.TextStyle3}>Details</Text>
              
                 </TouchableOpacity>
                 <Image
              source={Transport}
              style={{ flexDirection: 'row', justifyContent: 'space-between' ,width: 40, height: 26, 
              marginLeft: 10,marginTop:-35,backgroundColor:"transparent"}}
            />
               </View>
               </View>
      
              </Card>
              <Card
            style={{
              elevation: 24,
              borderRadius: 12,
              marginTop: 20,
              backgroundColor: '#fafcff',
              padding: 18,
              marginLeft: 18,
              marginRight:-48,
              height:192,
              width:"90%",
              
            }}>
       <View>
       <Title style={{color:"#454F63",fontSize:14,
            fontFamily:"normal normal bold 16px/19px Lato",paddingBottom:20,
            marginRight:100,fontWeight:"bold"}}>Sharma Traders, Pune</Title>
     <Card
          style={{
          
            // borderRadius: 12,
            marginTop: -10,
            backgroundColor: '#ECECEC',
            padding: 10,
            marginLeft: 10,
          
            height:60,
            width:"90%",
            
          }}>
      <View>
      <Text style={{color:"#454F63",fontSize:12,
            fontFamily:"normal normal bold 16px/19px Lato",paddingBottom:5,
           }}>Office No.7,Akansha-1,Road No.14,</Text>
           <Text style={{color:"#454F63",fontSize:12,
            fontFamily:"normal normal bold 16px/19px Lato",paddingBottom:20,
           }}>Opp PMC Garden,Pune,401132</Text>
      </View>
    </Card>
    <Text style={{color:"#454F63",fontSize:10,left:60,top:30,
            fontFamily:"normal normal bold 16px/19px Lato",
           }}>3 Active Consignments</Text>
             
    <View style={styles.MainContainer1}>
           <TouchableOpacity
              style={styles.SubmitButtonStyle3}
              activeOpacity = { .10 }
              // onPress={() =>
              
                  // this.props.navigation.navigate('ScreenDetils')
                  onPress={() => navigation.navigate("ScreenDetils")}
               
           >
     
                <Text style={styles.TextStyle3}>Details</Text>
              
                 </TouchableOpacity>
                 <Image
              source={Transport}
              style={{ flexDirection: 'row', justifyContent: 'space-between' ,width: 40, height: 26, 
              marginLeft: 10,marginTop:-35,backgroundColor:"transparent"}}
            />
               </View>
               </View>
      
              </Card>
              <Card
            style={{
              elevation: 24,
              borderRadius: 12,
              marginTop: 20,
              backgroundColor: '#fafcff',
              padding: 18,
              marginLeft: 18,
              marginRight:-48,
              height:192,
              width:"90%",
              
            }}>
       <View>
       <Title style={{color:"#454F63",fontSize:14,
            fontFamily:"normal normal bold 16px/19px Lato",paddingBottom:20,
            marginRight:100,fontWeight:"bold"}}>Sharma Traders, Pune</Title>
     <Card
          style={{
          
            // borderRadius: 12,
            marginTop: -10,
            backgroundColor: '#ECECEC',
            // padding: 10,
            marginLeft: 10,
          paddingTop:20,
            height:50,
            padding:5,
            width:"70%",
            
          }}>
      <View style={{flex:1,justifyContent:"center"}}>
      <Text style={{color:"#454F63",fontSize:12,
            fontFamily:"normal normal bold 16px/19px Lato",paddingBottom:5,
           }}>Office No.7,Akansha-1,Road No.14,</Text>
           <Text style={{color:"#454F63",fontSize:12,
            fontFamily:"normal normal bold 16px/19px Lato",paddingBottom:20,
           }}>Opp PMC Garden,Pune,401132</Text>
      </View>
    </Card>
    <Text style={{color:"#454F63",fontSize:10,left:60,top:30,
            fontFamily:"normal normal bold 16px/19px Lato",
           }}>3 Active Consignments</Text>
             
    <View style={styles.MainContainer1}>
           <TouchableOpacity
              style={styles.SubmitButtonStyle3}
              activeOpacity = { .10 }
              // onPress={() =>
              
                  // this.props.navigation.navigate('ScreenDetils')
                  onPress={() => navigation.navigate("ScreenDetils")}
               
           >
     
                <Text style={styles.TextStyle3}>Details</Text>
              
                 </TouchableOpacity>
                 <Image
              source={Transport}
              style={{ flexDirection: 'row', justifyContent: 'space-between' ,width: 40, height: 26, 
              marginLeft: 10,marginTop:-35,}}
            />
               </View>
               </View>
      
              </Card>
      
        </ScrollView>
          </View>
      );
   }
   export default Vendors;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F5F5F5"
   
  },
  SubmitButtonStyle3: {
    width:"25%",
    height: 35,
    marginTop:10,
    textAlign:'center',
    paddingTop:5,
    // paddingBottom:20,
    marginLeft:220,
    marginRight:20,
    backgroundColor:'transparent',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#602F56'
  },
  TextStyle3:{
      color:'#602F56',
      textAlign:'center',
      // fontWeight:"bold",
      fontSize:14,
      fontFamily: "normal normal normal 14px/17px Inter",
     
  },

});