import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import Logo from '../assets/Layer.png';
const SplashScreen = ({navigation}) => {
    const { colors } = useTheme();

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#F5F5F5' barStyle="light-content"/>
          <TouchableOpacity  style={styles.SubmitButtonStyle}
          // activeOpacity = { .5 }
          // onPress={() =>
         
          //     this.props.navigation.navigate('TrackNow')
          //  }
          onPress={() =>
             navigation.navigate("SignInScreen")}
          >
       <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <Image 
                // animation="bounceIn"
                // duraton="1500"
            source={Logo}
            style={styles.logo}
            resizeMode='center'
            />
               <Text style= {styles.text}>Enriching Supply Chain Solutions</Text>
        </View>

{/* <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
           <Text style={{ textAlign: 'left', fontSize: 15, backgroundColor:'grey'}}>
                <Image  source={Logo} style={{width: 100, height: 100, borderRadius:70}} />
                <Text style={{ backgroundColor:'lightblue', }}>Enriching Supply Chain Solutions</Text> 
             </Text>
          </View>         */}
        </TouchableOpacity>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#F5F5F5'
  },
 
  text:{
    flexDirection:'column',alignItems:'center',justifyContent:'center',
    fontFamily: "normal normal normal 17px/20px Inter",
    fontSize:15,
    color:"#602F56",
    // marginLeft:80,
    textAlign:'center',
    // paddingTop:-30,
    // paddingBottom:200,
    marginBottom:300,
    // marginTop:-270,
    bottom:454,
left:25
    // top: "94px",
    // left: "98px",
    // width: "212px",
    // height: "26px",
  },
  logo: {
    width: "95%",
    height:"100%",
    marginTop:-100,
    alignSelf:"center"
    // paddingBottom:40,
},
});

