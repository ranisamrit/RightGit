import React, { Component } from 'react';
import CardsContainer from './Component/CardsContainer';
import {  Button,Divider,Card ,SearchBar } from 'react-native-elements';
import { Avatar } from 'react-native-paper';
import Ment_Oe from '../src/Component/Img/Photo.jpg';
import Ment_Oene from '../src/Component/Img/Photoone.jpg';
import Ment_Oeee from '../src/Component/Img/harishankobalasingam8PMvB4VyVXAunsplash.jpg';
import Ment_Onnnn from '../src/Component/Img/luisvillasmilhh3ViD0r0Rcunsplash.jpg';
import Ment_ssss from '../src/Component/Img/Groupthree.png';
// import Search from '../src/Component/Img/MentOeAssetsicons/SearchIcon.png';
import Account from '../src/Account';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
 
  TouchableOpacity,
  Image,
  ScrollView,
  Modal
} from 'react-native';
// import {Card} from 'react-native-shadow-cards';

import { Input } from 'native-base';


export default class App extends Component {
   
        constructor(props) {
          super(props);
          //setting default state
          this.state = {
            isVisible:false
      
        }
    }
    
  

   render() {
       
    const state = this.state;
    const element = (data, index) => (
        <Image
        source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',}}
        //borderRadius style will help us make the Round Shape Image
        style={{ width: 200, height: 200, borderRadius: 200 / 2 }}
      />
 
    );
      return (
          
         <ScrollView>
             <View style = {styles.container}>
                 
           
            
           
         
         
      <TouchableOpacity   onPress={()=> this.props.navigation.navigate('Account')}>
        <Image
          source={Ment_ssss}
          style={{ flexDirection: 'row', justifyContent: 'space-between' ,width: 30, height: 20, 
          marginLeft: 305, position: 'relative',marginTop:19}}
        />
          </TouchableOpacity>
            <View>
           
        <TextInput
          style={{
         
             borderRadius:5,
             flexDirection: 'row', justifyContent: 'space-between' ,
         width:"300%",
            paddingBottom:10,
            paddingTop:10,
            marginBottom:30,
                  height:40,
                    marginTop:-25,
            marginLeft:20,
            marginRight:-50,
                paddingLeft:40,
            borderColor: '#009688',
            backgroundColor: '#FFFFFF',}}
        //   onChangeText={text => this.SearchFilterFunction(text)}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
          
        />
       <Image
              source={Search}
              style={{ width: 18,height:18,marginTop:-60,marginBottom:25,marginLeft:30
             }}
            />
        </View>
       

      
        
        {/* <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          renderItem={({ item }) => (
            <Text style={styles.textStyle}>{item.title}</Text>
          )}
          
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
        /> */}
         
    
      
     
      <Modal  animationType = {"slide"} transparent = {true}
            visible = {this.state.isVisible}
            onRequestClose = {() =>{ console.log("") } }
            onBackdropPress={() => {this.setState({ isVisible: false})}
            }
           >

         
          <View style={{ fontSize: 15, backgroundColor:'#e9967a',height:"60%",borderRadius:30,
          width:"90%",margin:15,marginBottom:60,marginTop:150,paddingTop:10,paddingBottom:10,paddingLeft:10,
          paddingRight:10}}> 
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Avatar.Image style={{ marginTop:12 , marginLeft:20 }} size={75} source={ Ment_Onnnn}/>
          <View> 
            
             {/* <TextInput
          style={styles.textInputStyle}
        //   onChangeText={text => this.SearchFilterFunction(text)}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
          
        /> */}
          <Text style={{ marginTop:15 ,marginLeft:6,fontSize:20,color:"#8b0000"}}>
      Ferrero Matheues
              </Text>
              <View>
          <Text style={{ marginTop:2 ,marginLeft:6,color:"#8b0000"}}>
              Price: 200
              </Text>
              
              </View>
            
              <Text style={{ marginTop:2 ,marginLeft:6,color:"#8b0000"}}>
                Duration: 30 Min
              </Text>

                    </View>
                    <Text style={{ marginTop:40 ,marginRight:5,fontSize:20,color:"#8b0000"}}>
                4.8
              </Text>
   
          </View>
<View>
<Text multiline={true}
	numberOfLines={4}
  blurOnSubmit={false} 
  
  style={{  marginLeft:20,marginTop:20,fontSize:20 ,alignSelf : "center" ,width:"90%",color:"#8b0000"}}>
    Bio: Rani Samrit is my name please contact me if you need any help. Rani Samrit is
     my name please contact me if you need any help.</Text>
<Text style={{  marginLeft:20,marginTop:20,fontSize:20,color:"#8b0000"}}>Languages:</Text>
<Text style={{  marginLeft:20,marginTop:10,color:"#8b0000"}}>English, Hindi, French</Text>
         <TouchableOpacity
              style={styles.userBtn}
              onPress = {() => {this.setState({ isVisible: false})}}
            >
              <Text style={styles.btnTxt}>Book A Session</Text>
            </TouchableOpacity>

</View>
     
          </View>




        </Modal>
      
        

        
      <TouchableOpacity onPress = {() => {this.setState({ isVisible: true})}}
            >
             <Card containerStyle={styles.card}>
				
				<View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Avatar.Image size={70} source={ Ment_Onnnn}/>
					<View>
          <Text style={{ marginTop:15 ,marginLeft:10,fontSize:18,color:"#8b0000"}}>
      Ferrero Matheues
              </Text>
              <View>
          <Text style={{ marginTop:2 ,marginLeft:10}}>
            Bio
              </Text>
              
              </View>
            
              <Text style={{ marginTop:2 ,marginLeft:10}}>
               Languages
              </Text>

                    </View>
                    <Text style={{ marginBottom:23,marginLeft:30}}>
             INR 300
              </Text>
              <Text style={{marginTop:20 ,marginLeft:-50,paddingRight:10}}>
              30min
              </Text>
              <Text style={{marginTop:57,marginLeft:-49,paddingRight:20}}>
             4.2
              </Text>
          </View>
        
			</Card>
            </TouchableOpacity>
            </View>



            <Card containerStyle={styles.card}>
				
				<View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Avatar.Image size={70} source={   Ment_Oeee}/>
					<View>
          <Text style={{ marginTop:15 ,marginLeft:10,fontSize:18,color:"#8b0000"}}>
      Ferrero Matheues
              </Text>
              <View>
          <Text style={{ marginTop:2 ,marginLeft:10}}>
            Bio
              </Text>
              
              </View>
            
              <Text style={{ marginTop:2 ,marginLeft:10}}>
               Languages
              </Text>

                    </View>
                    <Text style={{ marginBottom:23,marginLeft:30}}>
             INR 300
              </Text>
              <Text style={{marginTop:20 ,marginLeft:-50,paddingRight:10}}>
              30min
              </Text>
              <Text style={{marginTop:57,marginLeft:-49,paddingRight:50}}>
             4.2
              </Text>
          </View>
        
			</Card>
     
           
      <Card containerStyle={styles.card}>
				
				<View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Avatar.Image size={70} source={     Ment_Oe}/>
					<View>
          <Text style={{ marginTop:15 ,marginLeft:10,fontSize:18,color:"#8b0000"}}>
      Ferrero Matheues
              </Text>
              <View>
          <Text style={{ marginTop:2 ,marginLeft:10}}>
            Bio
              </Text>
              
              </View>
            
              <Text style={{ marginTop:2 ,marginLeft:10}}>
               Languages
              </Text>

                    </View>
                    <Text style={{ marginBottom:23,marginLeft:30}}>
             INR 300
              </Text>
              <Text style={{marginTop:20 ,marginLeft:-50,paddingRight:10}}>
              30min
              </Text>
              <Text style={{marginTop:57,marginLeft:-49,paddingRight:50}}>
             4.2
              </Text>
          </View>
        
			</Card>




      <Card containerStyle={styles.card}>
				
				<View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Avatar.Image size={70} source={   Ment_Oene}/>
					<View>
          <Text style={{ marginTop:15 ,marginLeft:10,fontSize:18,color:"#8b0000"}}>
      Ferrero Matheues
              </Text>
              <View>
          <Text style={{ marginTop:2 ,marginLeft:10}}>
            Bio
              </Text>
              
              </View>
            
              <Text style={{ marginTop:2 ,marginLeft:10}}>
               Languages
              </Text>

                    </View>
                    <Text style={{ marginBottom:23,marginLeft:30}}>
             INR 300
              </Text>
              <Text style={{marginTop:20 ,marginLeft:-50,paddingRight:10}}>
              30min
              </Text>
              <Text style={{marginTop:57,marginLeft:-49,paddingRight:50}}>
             4.2
              </Text>
          </View>
        
			</Card>
    
 
      <Card containerStyle={styles.card}>
				
				<View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <Avatar.Image size={75} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdzwVTM2Qz3A7SqUsdzLsUBfjtz4y5xgAyZw&usqp=CAU',}}/>
					<View>
          <Text style={{ marginTop:15 ,marginLeft:10,fontSize:18,color:"#8b0000"}}>
      Ferrero Matheues
              </Text>
              <View>
          <Text style={{ marginTop:2 ,marginLeft:10}}>
            Bio
              </Text>
              
              </View>
            
              <Text style={{ marginTop:2 ,marginLeft:10}}>
               Languages
              </Text>

                    </View>
                    <Text style={{ marginBottom:23,marginLeft:30}}>
             INR 300
              </Text>
              <Text style={{marginTop:20 ,marginLeft:-50,paddingRight:10}}>
              30min
              </Text>
              <Text style={{marginTop:57,marginLeft:-49,paddingRight:50}}>
             4.2
              </Text>
          </View>
        
			</Card>
      <Card containerStyle={styles.card}>
				
				<View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <Avatar.Image size={75} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdzwVTM2Qz3A7SqUsdzLsUBfjtz4y5xgAyZw&usqp=CAU',}}/>
					<View>
          <Text style={{ marginTop:15 ,marginLeft:10,fontSize:18,color:"#8b0000"}}>
      Ferrero Matheues
              </Text>
              <View>
          <Text style={{ marginTop:2 ,marginLeft:10}}>
            Bio
              </Text>
              
              </View>
            
              <Text style={{ marginTop:2 ,marginLeft:10}}>
               Languages
              </Text>

                    </View>
                    <Text style={{ marginBottom:23,marginLeft:30}}>
             INR 300
              </Text>
              <Text style={{marginTop:20 ,marginLeft:-50,paddingRight:10}}>
              30min
              </Text>
              <Text style={{marginTop:57,marginLeft:-49,paddingRight:50}}>
             4.2
              </Text>
          </View>
        
			</Card>
      <Card containerStyle={styles.card}>
				
				<View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <Avatar.Image size={75} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdzwVTM2Qz3A7SqUsdzLsUBfjtz4y5xgAyZw&usqp=CAU',}}/>
					<View>
          <Text style={{ marginTop:15 ,marginLeft:10,fontSize:18,color:"#8b0000"}}>
      Ferrero Matheues
              </Text>
              <View>
          <Text style={{ marginTop:2 ,marginLeft:10}}>
            Bio
              </Text>
              
              </View>
            
              <Text style={{ marginTop:2 ,marginLeft:10}}>
               Languages
              </Text>

                    </View>
                    <Text style={{ marginBottom:23,marginLeft:30}}>
             INR 300
              </Text>
              <Text style={{marginTop:20 ,marginLeft:-50,paddingRight:10}}>
              30min
              </Text>
              <Text style={{marginTop:57,marginLeft:-49,paddingRight:50}}>
             4.2
              </Text>
          </View>
        
			</Card>
      </ScrollView>
      );
   }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft:3,
    paddingRight:5,
    paddingBottom:10,
    paddingTop:10,
    flexWrap: 'wrap',
    alignItems: 'flex-start' // if you want to fill rows left to right
  },
    card:{
		backgroundColor:'#fff',
	
        borderRadius:20,
        marginRight:20
	},
	time:{
		fontSize:13,
		color:'#000'
	},
	notes: {
		fontSize: 15,
		color:'#fff',
		textTransform:'capitalize'
    },
    // time1:{
    //     fontSize:16,
    //     color:"rgba(56, 172, 236, 1)",
    // },
   
   
      textInputStyle: {
        height: 40,
       
       marginRight:70,
        paddingLeft: 30,
        borderColor: '#009688',
        backgroundColor: '#FFFFFF',
       
      },
      card1:{
        backgroundColor:'#e9967a',
        marginBottom:30,
        marginTop:200,
        borderRadius:20,
        height:300
      },
      container1:{
          marginBottom:10,
          marginTop:10
      },
   
        modalContainer: {
        
            backgroundColor: "white",
            borderRadius: 40,
          height:"600%",
          width:"100%",
            alignItems: "center",
            shadowColor: "#000",
           
          },
          btnContainer1: {
          
            alignItems: 'center',
            marginBottom:400,
          },
          btnTxt: {
            fontSize: 18,
            textAlign: 'center',
            margin: 10,
            color: "#e9967a",
        
          },
          userBtn: {
            backgroundColor: "#800000",
            textAlign: 'center',
            borderRadius: 10,
            marginRight: 50,
            marginLeft: 50,
            marginTop:50
          
        
          },
          viewcontainer: {
            height: 40,
            width: 40,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 8,
            marginBottom: 10,
            marginTop: -10,
          },
        
     
});