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
  Picker
} from 'react-native-paper';
// import * as Animatable from 'react-native-animatable';
import Search from '../assets/SearchIcon.png';
import {  Input,SocialIcon,Icon,Header} from 'react-native-elements';
import Path from '../assets/Path.png';
 import DropDownPicker from 'react-native-dropdown-picker';

const PickupForm = ({navigation}) => {
  //  this.state = {
  //   Consignor: 'Single'
  // }
  
return (
          
       
           

<View style = {styles.container}>

             <StatusBar backgroundColor='#F5F5F5' barStyle="light-content"/>
           
             <TouchableOpacity
         
          onPress={() =>
          //   this.callApi()
              // this.props.navigation.navigate('InvoiceDetils')
              navigation.navigate('AddNewConsignor')
           }
       >
             <Image
                source={Path}
                style={{ width: 20, height: 20,marginTop:15,left:30
              }}
              />
              </TouchableOpacity>
              <Text style={{ fontSize: 15,left:70,top:-20,color: '#454F63',fontWeight:"bold",
              color:"#602F56",fontFamily:"normal normal bold 16px/20px Inter"  }}>
              Pickup  from
          </Text>
            

          <Card
style={{
elevation: 24,
borderRadius: 24,

backgroundColor: '#fafcff',
padding: 18,
marginLeft: 18,
// marginRight:-48,
height:"95%",
width:"90%",
bottom:10
}}>
<Text style={{ fontSize: 15,left:10,top:-5,color: '#000',fontWeight:"bold",
              fontFamily:"normal normal bold 16px/20px Inter"  }}>
              Billing Party
          </Text>
<Card style={{
elevation: 24,
borderRadius: 5,

backgroundColor: '#fafcff',
padding: 18,
// marginLeft: 18,
// marginRight:-48,
height:"7%",
width:"95%",
bottom:2
}}>
  <Text style={{fontWeight:"bold",color:"#454F63",fontFamily:"normal normal medium 14px/17px Inter",
  fontSize:14,bottom:5}}>Brembo Brake</Text>
</Card>
<Text style={{ fontSize: 15,left:10,top:5,color: '#000',fontWeight:"bold",
              fontFamily:"normal normal bold 16px/20px Inter"  }}>
              Consignor
          </Text>

          <DropDownPicker
          items={[
            { label: 'Single', value: 'Single', icon: () => <Icon name="Single" size={18} color="#900" />, hidden: true },
            { label: 'Single', value: 'Divorce', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'Single', value: 'Awaiting Divorce', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'Single', value: 'Widow', icon: () => <Icon name="flag" size={18} color="#900" /> },

          ]}
          // defaultValue={this.state.country}
          containerStyle={{ height:"7%",
          width:"75%", alignSelf: "center", right:35, top:10,elevation: 24,
          borderRadius: 5,
          
          backgroundColor: '#fafcff', }}
          style={{
            // backgroundColor: '#00000014', borderStartColor: '#9E9E9E',
            // borderEndColor: '#9E9E9E',
            // borderTopColor: '#9E9E9E',
            // borderBottomColor: '#9E9E9E',
          }}
          itemStyle={{
            justifyContent: 'flex-start'
          }}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
        // onChangeItem={item => this.setState({
        //     country: item.value
        // })}
        />
 <TouchableOpacity
          style={styles.SubmitButtonStyle1}
          activeOpacity = { .10 }
          onPress={() =>
        //   //   this.callApi()
        //       // this.props.navigation.navigate('InvoiceDetils')
              navigation.navigate('AddNewConsignor')
           }
       >
        <Text style={styles.TextStyle1}>Add New</Text>
          
             </TouchableOpacity>

             <Text style={{ fontSize: 15,left:10,bottom:55,color: '#000',fontWeight:"bold",
              fontFamily:"normal normal bold 16px/20px Inter"  }}>
              Request By
          </Text>

          <DropDownPicker
          items={[
            { label: '1', value: 'Single', icon: () => <Icon name="Single" size={18} color="#900" />, hidden: true },
            { label: '2', value: 'Divorce', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: '3', value: 'Awaiting Divorce', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: '4', value: 'Widow', icon: () => <Icon name="flag" size={18} color="#900" /> },

          ]}
          // defaultValue={this.state.country}
          containerStyle={{ height:"7%",
          width:"95%", alignSelf: "center",bottom:50,elevation: 24,right:5,
          borderRadius: 5,
          
          backgroundColor: '#fafcff', }}
          style={{
            // backgroundColor: '#00000014', borderStartColor: '#9E9E9E',
            // borderEndColor: '#9E9E9E',
            // borderTopColor: '#9E9E9E',
            // borderBottomColor: '#9E9E9E',
          }}
          // itemStyle={{
          //   justifyContent: 'flex-start'
          // }}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
        // onChangeItem={item => this.setState({
        //     country: item.value
        // })}
        />
       <Text style={{ fontSize: 15,left:10,bottom:45,color: '#000',fontWeight:"bold",
              fontFamily:"normal normal bold 16px/20px Inter"  }}>
              Project
          </Text>

          <DropDownPicker
          items={[
            { label: '1', value: 'Single', icon: () => <Icon name="Single" size={18} color="#900" />, hidden: true },
            { label: '2', value: 'Divorce', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: '3', value: 'Awaiting Divorce', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: '4', value: 'Widow', icon: () => <Icon name="flag" size={18} color="#900" /> },

          ]}
          // defaultValue={this.state.country}
          containerStyle={{ height:"7%",
          width:"95%", alignSelf: "center",bottom:40,elevation: 24,right:5,
          borderRadius: 5,
          
          backgroundColor: '#fafcff', }}
          style={{
            // backgroundColor: '#00000014', borderStartColor: '#9E9E9E',
            // borderEndColor: '#9E9E9E',
            // borderTopColor: '#9E9E9E',
            // borderBottomColor: '#9E9E9E',
          }}
          itemStyle={{
            justifyContent: 'flex-start'
          }}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
        // onChangeItem={item => this.setState({
        //     country: item.value
        // })}
        />

          <Text style={{ fontSize: 15,left:10,bottom:40,color: '#000',fontWeight:"bold",
              fontFamily:"normal normal bold 16px/20px Inter"  }}>
              State
          </Text>

          <DropDownPicker
          items={[
            { label: '1', value: 'Single', icon: () => <Icon name="Single" size={18} color="#900" />, hidden: true },
            { label: '2', value: 'Divorce', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: '3', value: 'Awaiting Divorce', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: '4', value: 'Widow', icon: () => <Icon name="flag" size={18} color="#900" /> },

          ]}
          // defaultValue={this.state.country}
          containerStyle={{ height:"7%",
          width:"45%", alignSelf: "center",bottom:35,elevation: 24,right:85,
          borderRadius: 5,
          
          backgroundColor: '#fafcff', }}
          style={{
            // backgroundColor: '#00000014', borderStartColor: '#9E9E9E',
            // borderEndColor: '#9E9E9E',
            // borderTopColor: '#9E9E9E',
            // borderBottomColor: '#9E9E9E',
          }}
          itemStyle={{
            justifyContent: 'flex-start'
          }}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
        // onChangeItem={item => this.setState({
        //     country: item.value
        // })}
        />

<Text style={{ fontSize: 15,left:180,bottom:111,color: '#000',fontWeight:"bold",
              fontFamily:"normal normal bold 16px/20px Inter"  }}>
              City
          </Text>

          <DropDownPicker
          items={[
            { label: 'Pune', value: 'Pune', icon: () => <Icon name="Single" size={18} color="#900" />, hidden: true },
            { label: 'Bangalore', value: 'Bangalore', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'Hyderabad', value: 'Hyderabad', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'Delhi', value: 'Delhi', icon: () => <Icon name="flag" size={18} color="#900" /> },

          ]}
          // defaultValue={this.state.country}
          containerStyle={{ height:"7%",flexDirection:"row",
          width:"45%", alignSelf: "center",bottom:106,elevation: 24,left:75,
          borderRadius: 5,
          
          backgroundColor: '#fafcff', }}
          style={{
            // backgroundColor: '#00000014', borderStartColor: '#9E9E9E',
            // borderEndColor: '#9E9E9E',
            // borderTopColor: '#9E9E9E',
            // borderBottomColor: '#9E9E9E',
          }}
          itemStyle={{
            justifyContent: 'flex-start'
          }}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
        // onChangeItem={item => this.setState({
        //     country: item.value
        // })}
        />

<Text style={{ fontSize: 15,left:10,bottom:100,color: '#000',fontWeight:"bold",
              fontFamily:"normal normal bold 16px/20px Inter"  }}>
             Schedule Pickup
          </Text>
<DropDownPicker
          items={[
            { label: '1', value: 'Single', icon: () => <Icon name="Single" size={18} color="#900" />, hidden: true },
            { label: '2', value: 'Divorce', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: '3', value: 'Awaiting Divorce', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: '4', value: 'Widow', icon: () => <Icon name="flag" size={18} color="#900" /> },

          ]}
          // defaultValue={this.state.country}
          containerStyle={{ height:"7%",
          width:"95%", alignSelf: "center",bottom:95,elevation: 24,right:5,
          borderRadius: 5,
          
          backgroundColor: '#fafcff', }}
          style={{
            // backgroundColor: '#00000014', borderStartColor: '#9E9E9E',
            // borderEndColor: '#9E9E9E',
            // borderTopColor: '#9E9E9E',
            // borderBottomColor: '#9E9E9E',
          }}
          itemStyle={{
            justifyContent: 'flex-start'
          }}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
        // onChangeItem={item => this.setState({
        //     country: item.value
        // })}
        />


<Text style={{ fontSize: 15,left:10,bottom:95,color: '#000',fontWeight:"bold",
              fontFamily:"normal normal bold 16px/20px Inter"  }}>
             Contact Person Name
          </Text>
          <Card style={{
elevation: 24,
borderRadius: 5,

backgroundColor: '#fafcff',
padding: 18,
// marginLeft: 18,
// marginRight:-48,
height:"6%",
width:"95%",
bottom:90
}}>
  <Text style={{fontWeight:"bold",color:"#454F63",fontFamily:"normal normal medium 14px/17px Inter",
  fontSize:14,bottom:8}}>Enter Name</Text>
</Card>
<Text style={{ fontSize: 15,left:10,bottom:85,color: '#000',fontWeight:"bold",
              fontFamily:"normal normal bold 16px/20px Inter"  }}>
             Contact Person Number
          </Text>
          <Card style={{
elevation: 24,
borderRadius: 5,

backgroundColor: '#fafcff',
padding: 18,
// marginLeft: 18,
// marginRight:-48,
height:"6%",
width:"95%",
bottom:80
}}>
  <Text style={{fontWeight:"bold",color:"#454F63",fontFamily:"normal normal medium 14px/17px Inter",
  fontSize:14,bottom:8}}>91+</Text>
</Card>

<TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .10 }
          onPress={() =>
        //   //   this.callApi()
        //       // this.props.navigation.navigate('InvoiceDetils')
              navigation.navigate('Pickupsuccessfullreq')
           }
       >
        <Text style={styles.TextStyle}>Submit</Text>
          
             </TouchableOpacity>







</Card>
</View>
           
  );
        

    
   }
   export default PickupForm;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F5F5F5",
  bottom:15,
  
  },
 
  SubmitButtonStyle1: {
    width:"23%",
    height: 40,
    bottom:33,
    left:235,
    paddingTop:10,
    // paddingBottom:30,
    marginLeft:20,
    marginBottom:30,
    marginRight:20,
    backgroundColor:'#fff',
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
  SubmitButtonStyle: {
    width:"90%",
        height: 48,
        // marginTop:360,
        bottom:55,
        paddingTop:20,
        paddingBottom:15,
        marginLeft:20,
        marginRight:20,
        backgroundColor:'#602F56',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#602F56'
  },
 
  TextStyle:{
      color:'#fff',
      marginTop:-8,
      textAlign:'center',
      fontWeight:"bold",
      fontSize:14,
      fontFamily: "normal normal normal 16px/20px Inter",
     
  }, 

});