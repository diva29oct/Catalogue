import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Catalogue from '../drawer/cataloge';
import Shortlist from '../drawer/wishlist';
import CartWindow from '../drawer/cart';
import Request from '../drawer/service'
import Detailswindow from '../drawer/details';
import PaymentWindow from '../drawer/payment';
const Tab = createBottomTabNavigator();
const catloguescreen = createStackNavigator();
const cartstack = createStackNavigator();

const wishstack = createStackNavigator();

const Catstack = ({navigation}) => (
  <catloguescreen.Navigator initialRouteName="catmain">
      <catloguescreen.Screen name="catmain" component={Catalogue} options={{headerShown:null,headerTintColor:'#fff', headerStyle: {
      backgroundColor: '#625aa7'
    },
      headerLeft: () => (
       
        <Icon name="bars" size={25} color="#fff" onPress={()=> {navigation.openDrawer()}} style={{marginLeft:10}}/>
    )
    }}/>
    <catloguescreen.Screen name="payment" component={PaymentWindow} options={{headerShown:null}}/>
      <catloguescreen.Screen name="detail" component={Detailswindow} options={{headerTitle:'Product Details'}}/>
      
      
  
  </catloguescreen.Navigator>
  );
  const Cartmain = ({navigation}) => (
    <cartstack.Navigator initialRouteName="cart">
        <cartstack.Screen name="cart" component={CartWindow} options={{headerShown:false, backgroundColor: 'red',
        headerLeft: () => (
         
          <Icon name="bars" size={25} color="black" onPress={()=> {navigation.openDrawer()}} style={{marginLeft:10}}/>
      )
      }}/>
        
        
    
    </cartstack.Navigator>
    );
    const Wishmain = ({navigation}) => (
      <wishstack.Navigator initialRouteName="cart">
          <wishstack.Screen name="wishlist" component={Shortlist} options={{headerShown:false,
          headerLeft: () => (
           
            <Icon name="bars" size={25} color="black" onPress={()=> {navigation.openDrawer()}} style={{marginLeft:10}}/>
        )
        }}/>
          
          
      
      </wishstack.Navigator>
      );
const Maintab = () => {
    return (
        <Tab.Navigator
        initialRouteName="Home"
        
        activeColor="black"
        barStyle={{ backgroundColor: '#fff',paddingBottom:0 }}
        tabBarOptions={{
          showLabel: false,
          activeTintColor:'#51C3FE',
          inactiveTintColor:'#535C68',
          labelStyle:{
            fontSize:11,
            textTransform:'uppercase',
            fontFamily:'Raleway-Bold',
           
            
          }
        }}
      >
        <Tab.Screen
          name="Home"
          component={Catstack}
          
          options={{
            
            tabBarLabel:'Home',
            tabBarIcon: ({ color }) => (
              <Icon name="home" size={20} color="#51C3FE"/>
             ),
          }}
        />
          <Tab.Screen
          name="Wish"
          component={PaymentWindow}
          
          options={{
            
            tabBarLabel: 'Wishlist',
            tabBarIcon: ({ color }) => (
              <Feather name="book" size={20} color="#323178"/>
             ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cartmain}
          options={{
           
            tabBarLabel:'Cart',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-circle-outline" size={20} color="#323178"/>
             ),
          }}
        />
       
        
    
       
         
      </Tab.Navigator>
    )
}

export default Maintab
