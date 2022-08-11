import React from 'react'
import { View, Text,StyleSheet,Dimensions,Image,TouchableOpacity,ImageBackground} from 'react-native'
import  LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {Button} from 'react-native-paper'

import * as Animatable from 'react-native-animatable';
export default function SplashWindow({navigation}) {
    return (
       

        
        <View style={styles.container} >
           
           <View style={styles.header}>
               <Animatable.Image animation="bounceIn"  source={require('../assets/multi.jpg')} style={styles.logo}
               resizeMode="cover"
               />
            
               </View>
                <View style={styles.footer}>
              
             
  
            
              <View style={{flex:1,}}>
              <Text style={styles.subhead}>Want to get started earning amazing {'\n'} rewards and making the planet better?</Text>
              
                   
                                    
                                    <View style={{alignContent:'center',alignItems:'center'}}>
                        <Image   style={{marginTop:10}} resizeMode="contain"/>
                        </View>
                  
                  
                        <View style={{marginTop:40}} >
              <Animatable.View style={{alignItems:'center'}} animation="fadeInUpBig">
                        
                        <TouchableOpacity
                              style={styles.SubmitButtonStyle}
                              activeOpacity = { .5 }
                              onPress={()=>navigation.navigate('login')}
                           >
                     
                                <Text style={styles.TextStyle}> Let's Get Statred</Text>
                                
                          </TouchableOpacity>
                        
                                    </Animatable.View>
              </View>
           
              </View>
              
        </View>
        </View>
       
    )
}
const {height} = Dimensions.get("screen");
const height_logo = height * 0.20;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  backgroundColor:'#fff'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 2,
    
  },
  logo: {
      width:'100%',
      height:200
      
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  SubmitButtonStyle: {
    width:'80%',
   margin:0,
    paddingTop:10,
    paddingBottom:10,
    borderRadius:20,

    backgroundColor:'#0a5687',
  
    borderWidth: 1,
    borderColor: '#fff'
  },
  SubmitButtonStyle1: {
    width:'100%',
  
    paddingTop:5,
    paddingBottom:5,
   
   margin:0,
    backgroundColor:'#ed6f6b',

    borderRadius:20,
    borderWidth: 1,
    borderColor: '#fff'
  },
  TextStyle:{
      color:'#fff',
      textAlign:'center',
      fontFamily:"Amiri-Regular",
      fontSize:20
  },
  text: {
      color: '#2B8C89',
      fontFamily:"Raleway-Bold",
      fontSize:26
  },
  subhead:{
      marginTop:10,
    color: 'black',
    fontFamily:"Amiri-Regular",
    fontSize:14,textAlign:'center'
  },
  button: {
      alignItems: 'center',
      marginTop: 30,
      width:300,
      height:100
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});