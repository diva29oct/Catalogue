
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  
  ToastAndroid,
  ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SliderBox } from 'react-native-image-slider-box';
export default class Detailswindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show:false,
      images: [         
        "https://www.shopmefast.com/pub/media/catalog/product/cache/fdf3919f3131e4327310cc70e8295c3f/8/1/81d05kheiul._sl1500_.jpg", 
         "https://www.shopmefast.com/pub/media/catalog/product/cache/fdf3919f3131e4327310cc70e8295c3f/8/1/81j03qu2pyl._sl1500_.jpg",  
         "https://www.shopmefast.com/pub/media/catalog/product/cache/fdf3919f3131e4327310cc70e8295c3f/8/1/81yabgsqy4l._sl1500_.jpg",
         // Network image        
          //  require('./assets/images/girl.jpg'),          // Local image       
        ]  
    };
  }
  toggle = ()=>{
    this.setState({show:!this.state.show})
    ToastAndroid.show("Added to Wishlist", ToastAndroid.SHORT)
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={{
          flex: 1,
            height:350,
            backgroundColor:'#fff'
        }}>
      <SliderBox   
images={this.state.images}   
sliderBoxHeight={300}   
onCurrentImagePressed={
  index => console.warn(`image ${index} pressed`)
}  
resizeMethod={'resize'}

resizeMode="cover"
dotColor="#FFEE58"   
inactiveDotColor="#90A4AE"   
paginationBoxVerticalPadding={20}   
autoplay   
imageLoadingColor="#ccc"
circleLoop />
 <TouchableOpacity style={{paddingHorizontal:10,paddingBottom:2,position:'relative',top:-30,left:10}} onPress={this.toggle}>
                         {this.state.show == false ?  <Icon name="heart-o" size={22} style={{marginLeft:-10}} color="gray" />:   <Icon name="heart" size={22} color="red" style={{marginLeft:-10}}/>}
                        
                          </TouchableOpacity>
        </View>
       
        <Animatable.View  animation="fadeInLeftBig"   style={{
          flex: 1, backgroundColor: '#fff',elevation:10, paddingHorizontal: 10,borderTopLeftRadius:20,borderTopRightRadius:20,borderLeftWidth:1,borderTopWidth:1,borderRightWidth:1,borderLeftColor:'#ccc',borderRightColor:'#ccc',borderTopColor:'#ccc'
        }}>
<ScrollView showsVerticalScrollIndicator={false}>
<Text style={styles.price}>Handmade Earthenware Clay Terracotta Decorative Bowl/Flower Pot (Multicolor, Dia. :7.8 Inches, H:3.5 Inches.) </Text>
          <View style={{flexDirection:'row',paddingTop:10}}>
         <Text style={styles.name}>6IN-MITTI-DECO</Text>
         
<Text style={{color:'black',flex:0.2}}>{'\u20B9'}565</Text>

         </View>
         <View style={{marginTop:10}}>
           <Text style={{color:'black',fontWeight:'700'}}>Product Details</Text>
         </View>
          <View style={{ flexDirection: 'row', paddingTop: 5, paddingBottom: 5 }}>
            <Text style={{ flex: 0.4,color:'black' }}>Type</Text>
            <Text style={{ flex: 0.6,color:'black' }}>Raw Material</Text>
          </View>
          <View style={{ flexDirection: 'row',  paddingTop: 5, paddingBottom: 5 }}>
            <Text style={{ flex: 0.4,color:'black' }}>Category</Text>
            <Text style={{ flex: 0.6 ,color:'black'}}>Handicrafted</Text>
          </View>
         
          <View style={{}}>
              <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
              natoque penatibus
            </Text>
          </View>

        
          <Animatable.View animation="fadeInLeft"  duration={1100} style={styles.addToCarContainer}>
          <Button icon="cart" mode="contained" color="black"  onPress={() => this.props.navigation.navigate("cart")}>
   Add to cart
  </Button>
          </Animatable.View>
</ScrollView>
   
        
        </Animatable.View>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  productImg: {
    flex: 1
  },
  name: {
    fontSize: 14,
    color: "gray",
   flex:0.8,
    textAlign: 'justify'
  },
  price: {
    marginTop: 10,
    fontSize: 14,
    color: "#2B2B52",
    textAlign: 'justify',
  fontWeight:'700'
  },
  description: {
    textAlign: 'justify',
    marginTop: 5,
    color: "#696969",
  },
  star: {
    width: 40,
    height: 40,
  },
  btnColor: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginHorizontal: 3
  },
  btnSize: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderColor: '#778899',
    borderWidth: 1,
    marginHorizontal: 3,
    backgroundColor: 'white',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20
  },
  contentColors: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20
  },
  contentSize: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20
  },
  separator: {
    height: 2,
    backgroundColor: "#eeeeee",
    marginTop: 20,
    marginHorizontal: 30
  },
  shareButton: {
    marginTop: 10,
    height: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: "black",
  },
  shareButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  addToCarContainer: {
    marginHorizontal: 30,
    marginTop:30,marginBottom:20
  }
});   