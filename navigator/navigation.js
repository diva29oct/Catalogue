import React , { useEffect }from 'react'
import { View, Text,ActivityIndicator } from 'react-native'
import {AuthContext} from '../navigator/context'
import Drawercontent from './customdrawer'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer,useIsFocused } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer';
import Maintab from './bottomtab';
import AboutWindow from '../drawer/about';
import RootStackScreen from './rootstack';
export default function Navigators() {
    const [isloading, setIsloading] = React.useState(true);
    // const [userToken, setUserToken] = React.useState(null);
    const Drawer = createDrawerNavigator();
  const initialLoginstate = {
    isloading:true,
    username:null,
    userToken:null
  };
  
  const loginReducer = ( prevState,action) =>{
    switch(action.type){
      case 'RETRIEVE_TOKEN':
        return{
          ...prevState,
          userToken:action.token,
          isloading:false
        };
        case 'LOGIN':
          return{
            ...prevState,
            username:action.id,
            userToken:action.token,
            isloading:false
          };
          case 'LOGOUT':
            return{
              ...prevState,
              username:null,
              userToken:null,
              isloading:false
            };
            case 'REGISTER':
              return{
                ...prevState,
                username:action.id,
                userToken:action.token,
                isloading:false
              };
  
    }
  };

  const [loginState,dispatch] = React.useReducer(loginReducer,initialLoginstate)
    const authContext = React.useMemo(() =>({
     signIn:async logdata =>{
      
    
      
          
      AsyncStorage.setItem('usertoken','test')
      dispatch({type:'LOGIN',token:'userToken'})
          
  
  
  
      
     },
     signOut:() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
         AsyncStorage.removeItem('usertoken');
        
  
  
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
  
    }),[]);
   
    useEffect(() => {
      
      setTimeout(async() => {
        // setIsLoading(false);
        let userToken;
        userToken = null;
        try {
          userToken = await AsyncStorage.getItem('usertoken');
  //alert(userToken)
  
        } catch(e) {
          console.log(e);
        }
        // console.log('user token: ', userToken);
        dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
      }, 1000);
    }, []);
    if(loginState.isloading ){
          return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <ActivityIndicator size="large" animating={isloading}/>
            </View>
          )
    }
    return (
        <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {loginState.userToken !== null?(

           <Drawer.Navigator initialRouteName="Dashboard"  >
            <Drawer.Screen name="Dashboard" component={Maintab} options={{headerShown:false}}/>
           
        
      
           
            </Drawer.Navigator>
          ):
        <RootStackScreen/>
          }
        
      </NavigationContainer> 
     </AuthContext.Provider>
    )
}
