import React, { useState, useEffect } from 'react'

import { View,StyleSheet ,StatusBar} from 'react-native'

import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer'
import {Avatar,Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch} from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome'

import LinearGradient from 'react-native-linear-gradient';

Icon.loadFont();

import {AuthContext} from './context'

export default function Drawercontent(props) {


const { signOut }= React.useContext(AuthContext);

// const username = AsyncStorage.getItem('usertoken')
// console.log("Drawer NAme",username)
 const [user,setUser]=useState('')
 const [userimg,setUserimg]=useState('')
// //const {username}= this.props.route.params
// const getResponse = async () => {
//     const response = await fetch("https://randomuser.me/api/")
//     const data = await response.json();
//     const [item] = data.results
//     setUser(item)
//     console.log("data",item)
//   };
const drawerimg =  async()=>{
    const userimg = await AsyncStorage.getItem('imageval')
    setUserimg(userimg)
}


const fetchData = async () => {
   
    try {
        const userid = await AsyncStorage.getItem('usertoken')
        // console.log("customdrawer",userid)
        const response = await fetch(GLOBAL.BASE_URL+'/api/v1/user/get_user_profile?sup_user_id='+ userid);
        const data = await response.json();

         setUser(data.data);
        console.log("user",user.sup_image)
    } catch (error) {
        throw error;
    }
};

useEffect(() => {
   
    fetchData()
    drawerimg()
        
        
}, [userimg]);


    return (
        
        <LinearGradient colors={['#625aa7','#9287d9']}  style={{flex:1}}>
            
      <DrawerContentScrollView {...props}>
<View style={styles.drawerContent}>
    <View style={styles.userInfoSection}>
        <Text>TEst</Text>
    {/* <Text>{name}</Text> */}
        {/* <View style={{flexDirection:'row',marginTop:50}}>
        <View>
            <Avatar.Image source={{uri:userimg}}  size={60}/>
        </View>
        <View style={{marginLeft:15,flexDirection:'column'}}>
   
            <Title style={styles.title}>{user.sup_name}</Title>
            <Caption style={styles.caption}>{user.sup_email}</Caption>
        </View>
        </View> */}
       
    </View>
<Drawer.Section style={styles.drawerSection}>
<DrawerItem style={styles.draweritem} labelStyle={styles.labelname} label='Dashboard' icon={() =>(
    <Icon name="laptop" color="#fff" size={28}/>
)} onPress={() => {props.navigation.navigate('Home')}}/>
{/* <DrawerItem style={styles.draweritem}  labelStyle={styles.labelname}  label='Active Challenges'icon={() =>(
    <Icon name="users" color="#fff" size={28}/>
)} onPress = {() =>{props.navigation.navigate('ChallengeScreen', { screen: 'Active Challenges' }) }}/>
<DrawerItem style={styles.draweritem}  labelStyle={styles.labelname}  label='Completed Challenges'icon={() =>(
    <Icon name="trophy" color="#fff" size={28}/>
)} onPress = {() =>{props.navigation.navigate('Completed Challenges',)}}/>
<DrawerItem style={styles.draweritem}  labelStyle={styles.labelname}  label='Rewards Earned' icon={({color,size}) =>(
      <Icon name="gift" color="#fff" size={28}/>
)} onPress = {() =>{props.navigation.navigate('Rewards')}}/>
<DrawerItem style={styles.draweritem}  labelStyle={styles.labelname}  label='My Impact' icon={({color,size}) =>(
     <Icon name="signal" color="#fff" size={28}/>
)}
onPress = {() =>{props.navigation.navigate('Impact')}}
/>

<DrawerItem style={styles.draweritem}  labelStyle={styles.labelname}  label=' My Profile' icon={() =>(
    <Icon name="user" color="#fff" size={28}/>
)}
onPress={() => {props.navigation.navigate('Profile')}}
/>


<DrawerItem style={styles.draweritem}  labelStyle={styles.labelname}  label='How it works' icon={({color,size}) =>(
    <Icon name="video-camera" color="#fff" size={28}/>)} onPress={() => {props.navigation.navigate('Work')}}/>
    <DrawerItem style={styles.draweritem}  labelStyle={styles.labelname}  label='News' icon={({color,size}) =>(
    <Icon name="newspaper-o" color="#fff" size={28}/>)} onPress={() => {props.navigation.navigate('News')}}/>
    <DrawerItem style={styles.draweritem}  labelStyle={styles.labelname}  label='Update Password' icon={({color,size}) =>(
    <Icon name="edit" color="#fff" size={28}/>)} onPress={() => {props.navigation.navigate('pass')}}/>
 */}



<DrawerItem style={styles.draweritem}  labelStyle={styles.labelname}  label='sign out' icon={({color,size}) =>(
    <Icon name="sign-out" color="#fff" size={28}/>
)} onPress={() =>{signOut()}}/>
</Drawer.Section>



</View>
      </DrawerContentScrollView>
  
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    drawerContent:{
        flex:1
    },
    userInfoSection:{
     paddingLeft:20,backgroundColor:'#fff',flexDirection:'row',height:150
    },
    title:{
        fontSize:20,
        marginTop:3,
        fontWeight:'bold',fontFamily:'Raleway-Bold'
    },
    caption:{
        fontSize:14,
        lineHeight:20,fontFamily:'Raleway-Regular'
    },
    row:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center'
    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:15
    },
    labelname:{
        color:'#fff',fontFamily:'Raleway-Bold',textTransform:'uppercase',
        fontSize:14,letterSpacing:2
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:3
    },
    drawerSection:{
        marginTop:15,
    },
    draweritem:{
        borderBottomWidth:2,borderBottomColor:'#fff',color:'#fff'
    },
    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor:'black',
        borderTopWidth:1
    },
    preference:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16
    }
})