import React, { Component } from 'react';
import Lock from '../src/Component/Img/lock.png';

import {Card } from 'react-native-elements';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
  Alert,
  Linking,
  Image as Img,

  Image,
} from 'react-native';
import {  Footer, FooterTab,} from 'native-base';
import CalendarStrip from 'react-native-calendar-strip';
export default class DatePickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    
    return (
  
<View style={style.container}>
    <CalendarStrip
      scrollable
      style={{height:100, paddingTop: 20, paddingBottom: 10}}
      calendarColor={'brown'}
      calendarHeaderStyle={{color: 'yellow'}}
      dateNumberStyle={{color: 'white'}}
      dateNameStyle={{color: 'white'}}
      iconContainer={{flex: 0.1}}
    />
     <Text style={style.btnTxt1}>Avilable Time</Text>

              
                <Text style={style.btnTxt2}>Morning</Text>

               
             
                <TouchableOpacity>
                  
                    <Card containerStyle={style.card1}>

                        <View>
                            <Text  style={{ fontSize: 14, color: "#8b0000" }}>
                                09:00AM
              </Text>

                        </View>
                    </Card>
                   
                </TouchableOpacity>

                <Card containerStyle={style.card2}>

                    <View>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 14, color: "#8b0000" }}>
                            09:00AM
              </Text>
              </TouchableOpacity>
                    </View>

                </Card>




                <Card containerStyle={style.card3}>

                    <View>
                        <Text style={{ fontSize: 14, color: "#8b0000" }}>
                            09:00AM
              </Text>

                    </View>


                </Card>
                <Text style={style.btnTxt2}>Afternoon</Text>

                <Card containerStyle={style.card1}>
                    <Text style={{ fontSize: 14, color: "#8b0000" }}>
                    12:00PM
              </Text>

                </Card>
                <Card containerStyle={style.card2}>
                    <Text style={{ fontSize: 14, color: "#8b0000" }}>
                        01:00PM
              </Text>

                </Card>
                <Card containerStyle={style.card3}>
                    <Text style={{ fontSize: 14, color: "#8b0000" }}>
                        02:00PM
              </Text>

                </Card>
                <Card containerStyle={style.card4}>
                    <Text style={{ fontSize: 14, color: "#8b0000" }}>
                        03:00PM
              </Text>

                </Card>
                <Card containerStyle={style.card5}>
                    <Text style={{ fontSize: 14, color: "#8b0000" }}>
                        04:00PM
              </Text>

                </Card>
                <Card containerStyle={style.card6}>
                    <Text style={{ fontSize: 14, color: "#8b0000" }}>
                        05:00PM
              </Text>

                </Card>
                <Text style={style.btnTxt2}>Evening</Text>
                <Card containerStyle={style.card1}>
                    <Text style={{ fontSize: 14, color: "#8b0000" }}>
                        05:00PM
              </Text>

                </Card>
                <Card containerStyle={style.card2}>
                    <Text style={{ fontSize: 14, color: "#8b0000" }}>
                        05:00PM
              </Text>

                </Card>
                <Card containerStyle={style.card3}>
                    <Text style={{ fontSize: 14, color: "#8b0000" }}>
                        05:00PM
              </Text>

                </Card>
                <Text style={style.btnTxt3}>Notes</Text>
 
             <TextInput
          style={style.textInputStyle}
        //   onChangeText={text => this.SearchFilterFunction(text)}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Any Spacial Request?"
          
        /> 
         <TouchableOpacity
                      style={style.userBtn}
                      // onPress = {() => {this.setState({ isVisible: false})}}
                    >
                      <Text style={style.btnTxt}>Book A Mentor</Text>
                    </TouchableOpacity>
                      {/* <Footer style={style.Footer}>
      <Image
              source={Lock}
              style={{ width: 17,height:18,
             }}
     />
          <FooterTab >
          
          <Image
              source={Lock}
              style={{ width: 17,height:18
             }}
     />

          
          </FooterTab>
        </Footer> */}
                   
  </View>
 
    );
  }
}

const style = StyleSheet.create({
  
   
  container: { flex: 1,
  },

  card1: {
    backgroundColor: '#fff',
    width:90,
    height: 35,
    marginLeft: 30,
   
    marginBottom: 10,
    paddingTop:6,
    paddingRight:10,
    paddingLeft:15
},
card2: {
    width:90,
    height: 35,
    marginLeft: 140,
    marginTop: -45,
    marginBottom: 20,
    paddingTop:6,
    paddingRight:10,
    paddingLeft:15
},
card3: {
    width:90,
    height: 35,
    marginLeft: 250,
    marginTop: -55,
    marginBottom: 20,
    paddingTop:6,
    paddingRight:10,
    paddingLeft:15

},
card4:{
    width:90,
    height: 35,
    marginLeft:30,
    marginBottom:10,
    marginTop:-1,
    paddingTop:6,
    paddingRight:10,
    paddingLeft:15

},
card5:{
    width:90,
    height: 35,
    marginLeft: 140,
    marginTop: -45,
    marginBottom: 20,
    paddingTop:6,
    paddingRight:10,
    paddingLeft:15
},
card6:{
    width:90,
    height: 35,
    marginLeft:250,
    marginBottom:10,
    marginTop: -55,
    paddingTop:6,
    paddingRight:10,
    paddingLeft:15
},





btnTxt1: {

    flexDirection: "row",
    justifyContent: "space-between",

paddingTop:10,
  
    marginLeft: 30,
    fontSize: 20,
    fontWeight: "bold",
    color: "brown",
    paddingTop:15,
    paddingBottom:10
},
btnTxt2: {
    marginRight: 170,
    marginLeft: 30,
    fontSize: 15,
   paddingTop:1,
    fontWeight: "bold",
  
},
btnTxt3:{
    fontSize:20,
    marginLeft:30,
    color:"brown",
    fontWeight:"bold",
   
},
btnTxt: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    width:160,
    height:26,
    marginTop:5,
    marginBottom:5,
    color: "#e9967a",

  },
  userBtn: {
    backgroundColor: "#800000",
    textAlign: 'center',
    borderRadius: 10,
   marginLeft:80,
   marginRight:80,
    marginTop:20,
    paddingLeft:10,
    paddingRight:10

  },


textInputStyle:{
     
  
      paddingTop:10,
      paddingBottom:5,
         flexDirection: 'row',
          justifyContent: 'space-between' ,
           width:"86%",
           height:30,
           marginLeft:30,
      borderColor: '#009688',
      backgroundColor: '#c0c0c0',
    },
       Footer:{
        
      }

  
  });
