import React , {  useState } from 'react'
import { View, Text,StyleSheet,TextInput,Image, StatusBar,TouchableOpacity} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import {AuthContext} from '../navigator/context'

import COLORS from '../compoents/colors';
const LoginWindow = ({navigation}) =>  {
    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isloading:false

       
    });

  
  const {signIn}=React.useContext(AuthContext);

    const textInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
               
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
              
            });
        }
    }
  
    const handlepassword = (val) => {
        setData({
            ...data,
            password: val,
           
           
        });
    }
    const updateSecure = () =>{
        setData({
            ...data,
            secureTextEntry:!data.secureTextEntry
        })
    }
    const loginHandle = () =>{
        const logdata ={
            emailaddress:data.email,
            passworddata:data.password,
            load:data.isloading,
            
        }
console.log("logdata",logdata.emailaddress,logdata.passworddata)
    
        signIn(logdata)
    }
 
        return (
           
            <View style={{flex:1,backgroundColor:'#fff'}} >
            <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
         <View style={styles.header}>
         <Image animation="bounceIn"  source={require('../assets/logo.png')} style={styles.logo}
           resizeMode="contain"
           />
           <Text style={styles.text_header}>Welcome Back,
{'\n'}
Angela Christina</Text>
         </View >
         <View style={styles.footer} animation="slideInUp" iterationCount={1} >

             <View style={{paddingHorizontal:24}}>
            
             <Text style={{fontSize:18,fontWeight:'400',}}>Login</Text>
          
       
             {/* <Text style={styles.text_footer}>Email</Text> */}
             <View style={styles.action}>
                <Text>Username/Email</Text>
                  
<TextInput value="christina.angela123" placeholder="Enter Email Address" placeholderTextColor="#b0b0b0" keyboardType="email-address" style={styles.textInput} autoCapitalize="none"
onChangeText={(val)=>textInputChange(val)}

/>


             </View>
           
             <View style={styles.action}>
             <Text>Password</Text>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <TextInput value='12345' style={[styles.textInput,]} secureTextEntry={true}
     onChangeText={(val)=>handlepassword(val)}
    autoCapitalize="none"/>
<TouchableOpacity>

 
 <Feather name="eye-off" color="grey" size={20}/>
 

 </TouchableOpacity>    
        </View>              


             </View>
             <View>
                <Text style={{textAlign:'right',color:'#4F4F4F'}}>Forgot password?</Text>
             </View>
             <View style={styles.button}>
             <TouchableOpacity
      style={styles.SubmitButtonStyle}
      activeOpacity = { .5 }
      onPress={() =>{loginHandle(data.email,data.password)}}
   >

        <Text style={styles.TextStyle}> Login </Text>


        
        
  </TouchableOpacity>

 
  <Text style={{marginTop:30}}>
      <Text style={{fontSize:18}}><TouchableOpacity onPress={() =>navigation.navigate('register')}
                   
                    >
                        <Text style={{color:COLORS.black,fontSize:12,}}>Don’t have an account ? <Text style={{color:COLORS.blue}}>Register</Text> </Text>
                    </TouchableOpacity> </Text>
  </Text>
             </View>

             </View>
           
         </View>
       
        </View>

           
      
        )
    
}



export default LoginWindow;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#009387'
      },
      header: {
          flex: 1,
          justifyContent: 'center',
          alignItems:'center',
         marginTop:40,
         paddingHorizontal:90
      },
      footer: {
          flex: 2,
          backgroundColor: '#fff',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
         
          paddingVertical: 30,
          elevation:5,
          shadowColor: '#00000021',
          shadowOffset: {
            width: 2
          },
          shadowOpacity: 0.5,
          shadowRadius: 4,
      },
      text_header: {
          color:COLORS.black,
          fontWeight: '400',
          fontSize: 24,
          lineHeight:34,
          marginBottom:35
      },
      text_footer: {
          color: '#05375a',
          fontSize: 18
      },
      action: {
          flexDirection: 'column',
          marginTop: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#9D9B9B',
        marginBottom:30
      },
      actionError: {
          flexDirection: 'row',
          marginTop: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#FF0000',
          paddingBottom: 5
      },
      logo: {
          width: 144,
          height: 144
      },
      textInput: {
         
         
          paddingLeft: 10,
         
          color: COLORS.black,
          fontSize:14,
         
      },
      errorMsg: {
          color: '#FF0000',
          fontSize: 14,
      },
      button: {
          alignItems: 'center',
          marginTop: 30
      },
      signIn: {
          width: '100%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10
      },
      textSign: {
          fontSize: 18,
          fontWeight: 'bold'
      },
      SubmitButtonStyle: {
          width:'100%',
          marginTop:20,
          padding:15,
         
          backgroundColor:COLORS.blue,
          borderRadius:6,
          borderWidth: 1,
          borderColor: '#fff'
        },
       
        TextStyle:{
            color:'#fff',
            textAlign:'center',
            fontSize:14,
            fontFamily:'Raleway-Bold'
        },
  });