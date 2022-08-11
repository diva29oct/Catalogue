import React, { useEffect,useState } from 'react'
import {  StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ImageBackground,
    ScrollView,
    ToastAndroid,
    FlatList, } from 'react-native'
    import * as Animatable from 'react-native-animatable';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
const DATA = [
    {id:1, title: "Product 1",  image:"https://www.shopmefast.com/pub/media/catalog/product/cache/6fca3ba9ded502ee2b0c16695e4385c2/8/1/81d05kheiul._sl1500_.jpg"},
            {id:2, title: "Product 2", image:"https://www.shopmefast.com/pub/media/catalog/product/cache/6fca3ba9ded502ee2b0c16695e4385c2/9/1/91luytxvdrl._sl1500_.jpg"} ,
            {id:3, title: "Product 3",  image:"https://www.shopmefast.com/pub/media/catalog/product/cache/6fca3ba9ded502ee2b0c16695e4385c2/6/1/61lsu2ihlpl._sl1500_.jpg"}, 
            {id:4, title: "Product 4",  image:"https://www.shopmefast.com/pub/media/catalog/product/cache/6fca3ba9ded502ee2b0c16695e4385c2/4/1/41iqboigldl.jpg"}, 

  ];

  const deleteItemById=({id}) => {
    const filteredData = DATA.filter(item => item.id !== id);
    this.setState({ data: filteredData });
  }
  const ItemView = ({item}) => {
    return (
      // FlatList Item
      <View style={styles.card}>
      <View>

 <TouchableOpacity  style={{  backgroundColor: "#fff",

borderRadius: 5,
overflow: "hidden",
width: '100%',
height: 200,

}}>
 <Image
source={{uri:item.image}}
 resizeMode="contain"
 style={{width:'100%',height:200,backgroundColor:'#fff'}}
 

/>
 </TouchableOpacity>
<View style={{paddingHorizontal:5,height:100}}> 
<View>
<Text  style={{color:'black',fontWeight:'800',fontSize:16}}>{item.title}</Text>


<Text style={{color:'black',fontSize:12}} ellipsizeMode="tail" numberOfLines={1}>Handcrafted Bright Color Hand Painted Terracotta/Earthen</Text>
</View>
<View>

<Text style={{color:'#A4B0BD'}}>{'\u20B9'}565</Text>


</View>
<Animatable.View animation="fadeInLeft"  duration={1100} style={{width:'100%',alignItems:'center'}}>
<Button icon="cart" mode="contained" color="black"  onPress={() => this.props.navigation.navigate("cart")}>
   Add to cart
  </Button>
          </Animatable.View>      
</View>

          </View>
            


            
          
           </View>
    );
  };

const Shortlist = () => {
  const [data, setData] = useState(DATA);
    return (
        <View style={styles.container}>
            {/* <View style={{marginBottom:10,paddingLeft:10}}>
            <Text style={{fontWeight:"800"}}>4 Products in Wishlist</Text>
            </View>
        <FlatList style={styles.list}
          
          contentContainerStyle={styles.listContainer}
          data={data}
          renderItem={ItemView}
          keyExtractor={item => item.id}        
          horizontal={false}
          numColumns={2}
       /> */}
      </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
       backgroundColor:'#fff',paddingVertical:10
      },
      list: {
       
        backgroundColor:"#fff",
      },
      listContainer:{
        alignItems:'center'
      },
      separator: {
        marginTop:1,
      },
      /******** card **************/
      card:{
        shadowColor: '#00000021',
        shadowOffset: {
          width: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        height:300,
        backgroundColor:"white",
        flexBasis: '50%',
        borderWidth:1,
        borderColor:'#ECF1F2',
   
     marginBottom:5,
      borderRadius:5
        
      },
      cardHeader: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
      },
      cardFooter:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 10,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
      },
      cardImage:{
        flex: 1,
        height: 150,
        width: null,
      },
      /******** card components **************/
      title:{
        fontSize:18,
        flex:1,
      },
      price:{
        fontSize:16,
        color: "green",
        marginTop: 5
      },
    
      icon: {
        width:25,
        height:25,
      },
      /******** social bar ******************/
      socialBarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
 
        flex: 1
      },
      socialBarSection: {
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
      },
      socialBarlabel: {
        marginLeft: 8,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        color:'#fff'
      },
      socialBarButton:{
        flexDirection: 'row',
        
        alignItems: 'center',
        backgroundColor:'black',
        color:'#fff'
      },
      image: {
        flex: 1
      },
     
      rect8Filler: {
        flex: 1
      },
      rect8: {
        height: 27,
        backgroundColor: "rgba(21,19,19,0.5)",
        justifyContent: "center"
      },
      text22: {
        color: "rgba(247,252,253,1)",
        fontSize: 14,
        alignSelf: "center"
      },
      addToCarContainer: {
     
      }
    });  
  
export default Shortlist
 