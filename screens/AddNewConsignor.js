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
import DropDownPicker from 'react-native-dropdown-picker';
import Path from '../assets/Path.png';
const AddNewConsignor = ({navigation}) => {
//   this.state = {
//     countries: ['uk']
// }
 

   
return (
          
       
           

<View style = {styles.container}>

             <StatusBar backgroundColor='#F5F5F5' barStyle="light-content"/>
           
             <TouchableOpacity
         
          onPress={() =>
          //   this.callApi()
              // this.props.navigation.navigate('InvoiceDetils')
              navigation.navigate('PickupForm')
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
            height:"40%",
            width:"90%",
            
            }}>
                 
            <View>
            
            
            
            
            <Text style={{color:"#454F63",fontSize:14,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",marginTop:10,fontWeight:"bold"}}>New Consignor Details </Text>
            
            <Divider style={{ backgroundColor: '#959DAD',height:1,marginRight:10,marginLeft:10,marginTop:10}} />
            
            <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",marginTop:15,marginRight:240,fontWeight:"bold"}}>Name</Text>
            
            
            
            </View>
            
            <View style={{marginTop:20,width:"100%",elevation: 20,
            
            
            
            }}>
                
            <Card style={{
            elevation: 10,
            borderRadius: 5,
            borderColor:"#ECECEC",
            borderWidth:1,
            marginTop: -10,
            backgroundColor: '#fafcff',
            
            marginLeft: 18,
            // marginRight:-48,
            height:"45%",
            width:"90%",
            
            }}>
            <Text style={{color:"#454F63",fontSize:14,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",marginTop:7,marginRight:150}}>Consignor Name</Text>
            
            </Card>
            </View>
            <View>
            
            
            <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",bottom:50,left:40,fontWeight:"bold"}}>State</Text>
            
            
            
            </View>
            <DropDownPicker
    items={[
        {label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" />},
        {label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" />},
    ]}
 
    // multiple={true}
    // multipleText="%d items have been selected."
    // min={0}
    // max={10}
 
    // defaultValue={this.state.countries}
    containerStyle={{height: 40,bottom:40, elevation: 10,width:130,left:180}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    // onChangeItem={item => this.setState({
    //     countries: item // an array of the selected items
    // })}
/>
           <View>
            
            
            <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",bottom:110,right:120,fontWeight:"bold"}}>City</Text>
            
            
            
            </View>
            <DropDownPicker
    items={[
        {label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" />},
        {label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" />},
    ]}
 
    // multiple={true}
    // multipleText="%d items have been selected."
    // min={0}
    // max={10}
 
    // defaultValue={this.state.countries}
    containerStyle={{height: 40,bottom:102, elevation: 10,width:130,left:15}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    // onChangeItem={item => this.setState({
    //     countries: item // an array of the selected items
    // })}
/>
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
 
            <Text style={styles.TextStyle1}>Add New Consignor</Text>
          
             </TouchableOpacity>
           </View>   


           






        

           </View>
  );
        

    
   }
   export default AddNewConsignor;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F5F5F5",
  
  },
  SubmitButtonStyle1: {
    width:"90%",
    height: 48,
    marginTop:100,
    paddingTop:10,
    // paddingBottom:30,
    marginLeft:20,
    marginBottom:30,
    marginRight:20,
    backgroundColor:'#602F56',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#602F56',
    top:200
  },
 
  TextStyle1:{
      color:'#FFFFFF',
      textAlign:'center',
      fontWeight:"bold",
      fontSize:14,
      fontFamily: "normal normal normal 16px/20px Inter",
     
  }, 
 
 

});