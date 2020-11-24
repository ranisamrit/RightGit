import React, { Component } from 'react';
import { AppRegistry,View,Text,StyleSheet
,Button,TouchableOpacity,StatusBar,Image,TextInput,ScrollView } from 'react-native';

export default class menu extends Component{
static navigationOptions= ({navigation}) =>({
		  title: 'Side Menu',
	});

  static Cards = [

    
  ];

	render(){
		const { navigate } = this.props.navigation;
		return(
	  <ScrollView >

<View style={styles.viewStyle}>
               <TextInput
                 style={styles.textInputStyle}
                //  onChangeText={text => this.SearchFilterFunction(text)}
                //  value={this.state.text}
                  underlineColorAndroid="transparent"
                  placeholder="Search Here"
        />
 </View >
	    <TouchableOpacity
		style={styles.cat}
		onPress={() => navigate('Products',{cat:'',id:'1'})}>
	    {/* <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.userBtn}
              onPress={() => this.props.navigation.navigate('Go')}
            >
              <Text style={styles.btnTxt}>GET STATUS</Text>
            </TouchableOpacity> */}
            <View style={styles.innerContainer}>
              <Text style={styles.welcome2}>Date</Text>
              
              <TextInput
                placeholder="An awesome place"
                onChangeText={this.placeNameChangedHandler}
                style={styles.textStyle}
              />

            </View>
          {/* </View> */}
	   </TouchableOpacity>
	   <TouchableOpacity
		style={styles.cat}
		onPress={() => navigate('Products',{cat:'Automobiles',id:'2'})}>
	   <Text style={styles.btnText}> Automobiles  </Text>
	   </TouchableOpacity>
	    <TouchableOpacity
		 style={styles.cat}
		 onPress={() => navigate('Products',{cat:'Movies',id:'3'})}>
		<Text style={styles.btnText}> Movies  </Text>
	    </TouchableOpacity>
	    <TouchableOpacity
		 style={styles.cat}
		 onPress={() => navigate('Products',{cat:'Movies',id:'3'})}>
		<Text style={styles.btnText}> Movies  </Text>
	    </TouchableOpacity>

	 
      </ScrollView>
		);
	}
}
const styles = StyleSheet.create({
    

	cat:{
		backgroundColor:'#e9967a',
        padding:70,margin:10,width:'95%',
     
	},
	cat2:{
		backgroundColor:'blue',
		padding:10,margin:10,width:'95%'
	},
	pageName:{
		margin:10,fontWeight:'bold',
		color:'#000', textAlign:'center'
    },
    innerContainer: {
        // flex: 1,  
       
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    
      },
      textStyle: {
      
        width: "50%",  
      
      },
    

//   btnTxt: {
//     fontSize: 18,
//     textAlign: 'center',
//     margin:10,
//     color: "#fff",

//   },
//   userBtn: {
//     backgroundColor: "#800000",
//     borderRadius:10,
//   marginTop:100,
 
//   },
//   btnContainer:{
//      height:"12%",
     
//   }
});


AppRegistry.registerComponent('menu', () => menu);