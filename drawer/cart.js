import React, { Component } from 'react'
import {   StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList ,Picker} from 'react-native'
    import NumericInput from 'react-native-numeric-input'
    import { Avatar, Card, Title, Paragraph,Button } from 'react-native-paper';
    import * as Animatable from 'react-native-animatable';
    import Swipeout from 'react-native-swipeout';
export default class CartWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data:[
            {
              id:1, 
              image: "https://www.shopmefast.com/pub/media/catalog/product/cache/6fca3ba9ded502ee2b0c16695e4385c2/8/1/81d05kheiul._sl1500_.jpg", 
              name:"Handcrafted Bright Color Hand Painted Terracotta/Earthen Clay Decorative Diya Wax Filled Diwali ", 
              Date:"22-08-2020",  
            
            },
            {
              id:2, 
              image: "https://www.shopmefast.com/pub/media/catalog/product/cache/6fca3ba9ded502ee2b0c16695e4385c2/9/1/91luytxvdrl._sl1500_.jpg", 
              name:"Handcrafted Bright Color Hand Painted Terracotta/Earthen Clay", 
              Date:"26-08-2020",  
            },
           
          ]
        }
      }
      
      
      // renderGroupMembers = (group) => {
     



      //   if(group.members) {
      //     return (
      //       // <View style={styles.groupMembersContent}>
      //       //   {group.members.map((prop, key) => {
      //       //     return (
      //       //       <Image key={key} style={styles.memberImage}  source={{uri:prop}}/>
      //       //     );
      //       //   })}
      //       // </View>
          
      //     );
      //   }
      //   return null;
      // }
    
      render() {
        const swipeoutBtns = [
          {
            text: 'OK'
          }
        ]
        return (
         <View style={{flex:1,backgroundColor:'#fff'}}>
            {/* <FlatList
            style={styles.root}
            data={this.state.data}
          
            
            keyExtractor={item => item.id}
  renderItem={this.renderGroupMembers}/>
            <Swipeout right={swipeoutBtns}>
            <Animatable.View animation="fadeInLeft"  duration={1100} style={{width:'100%'}}>
<Button icon="cart" mode="contained" color="black"  onPress={() => alert("Order Placed Successfully")}>
Swipe Left to PLACE ORDER
  </Button>
          </Animatable.View>   
</Swipeout> */}
 
         </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      rect1: {
        width: '100%',
        height: 100,
        backgroundColor: "#fff",
        borderRadius: 11,
        flexDirection: "row",
        marginTop: 10,
        marginRight: 20,
        flex:1,
        borderWidth:1,
        borderColor:'#ccc',
        
      
      },
      image1: {
        width: 100,
        height: 90,
        borderBottomLeftRadius:11,
    
        borderTopLeftRadius:11
        
      },
      root:{
        paddingHorizontal:10
      },
      newdetail:{
        color: "#121212",
        marginLeft: 15,
      marginTop:10,
        fontSize:14,
        fontFamily:"Amiri"
      },
   
      container: {
        padding: 16,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: "#FFFFFF",
        alignItems: 'flex-start'
      },
      avatar: {
        width:55,
        height:55,
        borderRadius:25,
      },
      text: {
        marginBottom: 5,
        flexDirection: 'row',
        flexWrap:'wrap'
      },
      content: {
        flex: 1,
        marginLeft: 16,
        marginRight: 0
      },
      mainContent: {
        marginRight: 60
      },
      memberImage: {
        height: 30,
        width: 30,
        marginRight:4,
        borderRadius:10,
      },
      separator: {
        height: 1,
        backgroundColor: "#CCCCCC"
      },
      countMembers:{
        color:"#20B2AA"
      },
      timeAgo:{
        fontSize:12,
        color:"#696969"
      },
      groupName:{
        fontSize:23,
        color:"#1E90FF"
      },
      groupMembersContent:{
        flexDirection:'row',
        marginTop:10
      }
    });  