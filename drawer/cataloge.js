import React, { Component,useState } from 'react'
import {  StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    ImageBackground,
    ScrollView,
    ToastAndroid,
    FlatList,
    SafeAreaView,
    StatusBar,
    TextInput, } from 'react-native'
    const {width} = Dimensions.get('screen');
    console.log(width)
    import Icon from 'react-native-vector-icons/AntDesign';
import COLORS from '../compoents/colors';
import { ProgressBar, Paragraph,Title } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
const categoryList = ['Recommended', 'Algebra', 'Geometry'];


export default class Catalogue extends Component {
    constructor(props) {
        super(props);
        this.state = {
          show:false,
          selectedCategoryIndex :0,
          data: [
            {id:1, title: "Product 1",  image:"https://www.shopmefast.com/pub/media/catalog/product/cache/6fca3ba9ded502ee2b0c16695e4385c2/8/1/81d05kheiul._sl1500_.jpg"},
            {id:2, title: "Product 2", image:"https://www.shopmefast.com/pub/media/catalog/product/cache/6fca3ba9ded502ee2b0c16695e4385c2/9/1/91luytxvdrl._sl1500_.jpg"} ,
            {id:3, title: "Product 3",  image:"https://www.shopmefast.com/pub/media/catalog/product/cache/6fca3ba9ded502ee2b0c16695e4385c2/6/1/61lsu2ihlpl._sl1500_.jpg"}, 
            {id:4, title: "Product 4",  image:"https://www.shopmefast.com/pub/media/catalog/product/cache/6fca3ba9ded502ee2b0c16695e4385c2/4/1/41iqboigldl.jpg"}, 
            {id:5, title: "Product 5",   image:"https://www.shopmefast.com/pub/media/catalog/product/cache/6fca3ba9ded502ee2b0c16695e4385c2/4/1/41q3n_aq5al.jpg"}, 
            {id:6, title: "Product 6",  image:"https://www.shopmefast.com/pub/media/catalog/product/cache/5b1681079e6d95850a60281afa2ff3ab/9/1/912my-ljtfl._sl1500_.jpg"}, 
            {id:7, title: "Product 7", image:"https://www.shopmefast.com/pub/media/catalog/product/cache/5b1681079e6d95850a60281afa2ff3ab/9/1/91efoxglael._sl1500_.jpg"}, 
            {id:8, title: "Product 8",  image:"https://www.shopmefast.com/pub/media/catalog/product/cache/5b1681079e6d95850a60281afa2ff3ab/9/1/91ap92tdvnl._sl1500_.jpg"},
            {id:9, title: "Product 9",   image:"https://www.shopmefast.com/pub/media/catalog/product/cache/5b1681079e6d95850a60281afa2ff3ab/8/1/81pn7b2yhnl._sl1500_.jpg"},
            {id:9, title: "Product 10", image:"https://www.shopmefast.com/pub/media/catalog/product/cache/5b1681079e6d95850a60281afa2ff3ab/8/1/81hrc3s3ztl._sl1500_.jpg"},
          ]
        };
      }

      addProductToCart = () => {
        Alert.alert('Success', 'The product has been added to your cart')
      }    
      toggle = ()=>{
        this.setState({show:!this.state.show})
        ToastAndroid.show("Added to Wishlist", ToastAndroid.SHORT)
      }
   
    render() {
        return (
          <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1,paddingHorizontal:16}}>
            <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
 <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
 <View style={styles.header}>
        <View>
          <Text style={{color: COLORS.black,fontSize:24,fontWeight:'400',lineHeight:34}}>Hi, Christina</Text>
          <Text style={{color: COLORS.lightgrey, fontSize: 14, lineHeight:24,marginTop:5}}>
          What do you want to learn today?
          </Text>
        </View>
      <TouchableOpacity onPress={() => this.props.navigation.navigate("payment")}>
      <Image
          style={styles.profileImage}
          source={require('../assets/bell.png')}
        />
      </TouchableOpacity>
      </View>
        <View style={styles.searchInputContainer}>
            <Icon name="search1" color={COLORS.grey} style={{paddingLeft:15}} size={24} />
            <TextInput placeholder="Search" style={{paddingLeft:12}} placeholderTextColor={COLORS.textplace}/>
          </View>
          <View style={{marginTop:25}}>
            <Text style={styles.head}>Recent Learning</Text>
          </View>
          <View>
         <ScrollView  horizontal >
         <View style={styles.card}>
          {/* House image */}
          <Image  source={require('../assets/img1.png')} resizeMode="cover" style={styles.cardImage} />
          <View style={{marginTop: 10}}>
          


            {/* Facilities container */}
            <View style={{marginTop: 10,paddingLeft:5 }}>
            <Text style={styles.heading}>
              Mathematics
              </Text>
              <Text style={styles.subheading}>
              High School Algebra I: Help and Review
              </Text>
            
            </View>
            <View style={{paddingHorizontal:5,flexDirection:'row',marginBottom:15,marginTop:10}}>
             <ProgressBar progress={0.5} color={COLORS.blue} style={{height:6,width: 120,borderRadius:10 }}  visible={true}/>
             <Text style={[styles.numbers,{marginTop:-9,marginLeft:20}]}>5/10</Text>
             </View>
          </View>
        </View>
        <View style={[styles.card,{marginLeft:10}]}>
          {/* House image */}
          <Image  source={require('../assets/img2.png')} resizeMode="cover" style={styles.cardImage} />
          <View style={{marginTop: 10}}>
          


            {/* Facilities container */}
            <View style={{marginTop: 10,paddingLeft:5 }}>
            <Text style={styles.heading}>
              Mathematics
              </Text>
              <Text style={styles.subheading}>
              Enlargement to Trigonometry
              </Text>
            
            </View>
            <View style={{paddingHorizontal:5,flexDirection:'row',marginBottom:15,marginTop:10}}>
             <ProgressBar progress={0.5} color={COLORS.blue} style={{height:6,width: 120,borderRadius:10 }}  visible={true}/>
             <Text style={[styles.numbers,{marginTop:-9,marginLeft:20}]}>5/10</Text>
             </View>
          </View>
        </View>
     
         </ScrollView>
         <View style={styles.categoryListContainer}>
      {categoryList.map((category, index) => (
      
          <Text
            style={[
              styles.categoryListText,
              index == this.state.selectedCategoryIndex && styles.activeCategoryListText,
            ]}>
            {category}
          </Text>
       
      ))}
    </View>
    <ScrollView  horizontal style={{marginTop:20}} >
         <View style={styles.card1}>
          {/* House image */}
          <Image  source={require('../assets/img1.png')} resizeMode="cover" style={styles.cardImage} />
          <View style={{marginTop: 10}}>
          


            {/* Facilities container */}
            <View style={{marginTop: 10,paddingLeft:5 }}>
           
              <Text style={styles.subheading}>
              Bacterial Biology Overview
              </Text>
            
            </View>
            <View style={{paddingHorizontal:5,flexDirection:'row',marginBottom:15,marginTop:10}}>
            <Text style={[styles.numbers,{marginTop:-9,}]}>12 Lessons</Text>
             <Text style={[styles.numbers,{marginTop:-9,marginLeft:20}]}><Icon name="clockcircleo" size={16} color={COLORS.lightgrey}/> 12h 20m</Text>
             </View>
          </View>
        </View>
        <View style={styles.card1}>
          {/* House image */}
          <Image  source={require('../assets/img1.png')} resizeMode="cover" style={styles.cardImage} />
          <View style={{marginTop: 10}}>
          


            {/* Facilities container */}
            <View style={{marginTop: 10,paddingLeft:5 }}>
           
              <Text style={styles.subheading}>
              Bacterial Biology Overview
              </Text>
            
            </View>
            <View style={{paddingHorizontal:5,flexDirection:'row',marginBottom:15,marginTop:10}}>
            <Text style={[styles.numbers,{marginTop:-9,}]}>12 Lessons</Text>
             <Text style={[styles.numbers,{marginTop:-9,marginLeft:20}]}><Icon name="clockcircleo" size={16} color={COLORS.lightgrey}/> 12h 20m</Text>
             </View>
          </View>
        </View>
        <View style={styles.card1}>
          {/* House image */}
          <Image  source={require('../assets/img1.png')} resizeMode="cover" style={styles.cardImage} />
          <View style={{marginTop: 10}}>
          


            {/* Facilities container */}
            <View style={{marginTop: 10,paddingLeft:5 }}>
           
              <Text style={styles.subheading}>
              Bacterial Biology Overview
              </Text>
            
            </View>
            <View style={{paddingHorizontal:5,flexDirection:'row',marginBottom:15,marginTop:10}}>
            <Text style={[styles.numbers,{marginTop:-9,}]}>12 Lessons</Text>
             <Text style={[styles.numbers,{marginTop:-9,marginLeft:20}]}><Icon name="clockcircleo" size={16} color={COLORS.lightgrey}/> 12h 20m</Text>
             </View>
          </View>
        </View>
         </ScrollView>
          </View>
          <View style={styles.inline}>
        
            <Text style={styles.head}>Latest News</Text>
            <Text style={styles.subhead}>See all</Text>
          </View>
          {/* News Section Started */}
          <View style={{marginBottom:10}}>
          <TouchableOpacity style={styles.rect1} >
           
           <View style={{flex:0.3}} >
       

           <Image
                source={require('../assets/news1.png')}
                 resizeMode="cover"
                 style={styles.image1}
               ></Image>
         
 
           </View>
           <View style={{flex:0.7,paddingHorizontal:10}} >
           <Text style={styles.newshead}>Biology </Text>
           <Text style={styles.subheading}>The Effects of Temperature on Enzyme Activity and Biology</Text>
           <View style={{paddingHorizontal:5,flexDirection:'row', justifyContent:'space-between',marginTop:30}}>
           
             <Text style={[styles.numbers,{marginTop:-9}]}><Icon name="clockcircleo" size={16} color={COLORS.lightgrey}/> 1 hour ago</Text>
             <Text style={[styles.numbers,{marginTop:-9,}]}><Icon name="message1" size={16} color={COLORS.lightgrey}/> 12 Lessons</Text>
             </View>
           </View>
           
         </TouchableOpacity>
          </View>
          <View style={{marginBottom:10}}>
          <TouchableOpacity style={styles.rect1} >
           
           <View style={{flex:0.3}} >
       

           <Image
                source={require('../assets/news1.png')}
                 resizeMode="cover"
                 style={styles.image1}
               ></Image>
         
 
           </View>
           <View style={{flex:0.7,paddingHorizontal:10}} >
           <Text style={styles.newshead}>Mathematics </Text>
           <Text style={styles.subheading}>How to Work Out a Percentage Using a Calculator</Text>
           <View style={{paddingHorizontal:5,flexDirection:'row', justifyContent:'space-between',marginTop:30}}>
           
             <Text style={[styles.numbers,{marginTop:-9}]}><Icon name="clockcircleo" size={16} color={COLORS.lightgrey}/> 1 hour ago</Text>
             <Text style={[styles.numbers,{marginTop:-9,}]}><Icon name="message1" size={16} color={COLORS.lightgrey}/> 12 Lessons</Text>
             </View>
           </View>
           
         </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=> AsyncStorage.removeItem('usertoken')}>
            <Text>Signout</Text>
          </TouchableOpacity>
 </ScrollView>
         </SafeAreaView>
        );
      }
    }
    
    const styles = StyleSheet.create({
      rect1: {
        width: '100%',
        height: '100%',
        backgroundColor: "#fff",
        borderRadius: 11,
        flexDirection: "row",
        marginTop: 10,
       
        flex:1
       },
       image1: {
        width: '100%',
        height: '100%',
        borderBottomLeftRadius:11,
        
        borderTopLeftRadius:11
        
       },
      header: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      },
      profileImage: {
        height: 25,
        width: 25,
       
      },
      inline:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:30,
        marginBottom:20
        
      },
      searchInputContainer: {
        height: 54,
        backgroundColor: COLORS.bggray,
       marginTop:18,
        flexDirection: 'row',
        alignItems: 'center',
       
        borderRadius: 6,
      },
      head:{
        fontSize:14,
        fontWeight:'400',
        lineHeight:24,
        color:COLORS.black
      },
      newshead:{
        fontSize:10,
        fontWeight:'600',
        lineHeight:20,
        color:COLORS.textplace,
        marginBottom:5
      },
      subhead:{
        fontSize:12,
        fontWeight:'400',
        lineHeight:24,
        color:COLORS.textplace
      },
      heading:{
        fontSize:10,
        fontWeight:'bold',
        lineHeight:20,
        color:COLORS.black
      },
      subheading:{
        fontSize:12,
        fontWeight:'bold',
        lineHeight:20,
        color:COLORS.black,
        marginTop:5
      },
      numbers:{
        fontSize:10,
        fontWeight:'400',
        lineHeight:20,
        color:COLORS.textplace,
        marginTop:5
      },
      optionsCard: {
        height: 210,
        width: width / 2 - 30,
        elevation: 15,
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 20,
        paddingTop: 10,
        paddingHorizontal: 10,
      },
      optionsCardImage: {
        height: 140,
        borderRadius: 10,
        width: '100%',
      },
      optionListsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 20,
      },
      categoryListText: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 5,
        color: COLORS.lightgrey,
        fontSize:14
      },
      activeCategoryListText: {
        color: COLORS.black,
        borderBottomWidth: 3,
        borderBottomColor:COLORS.blue,
        paddingBottom: 12,
        fontSize:14
      },
      categoryListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        paddingHorizontal: 23,
      },
      card: {
       
        backgroundColor: COLORS.white,
      
        width:180,
        marginRight: 20,
       
        borderWidth:1,
        borderColor:'#E0E0E0',
        borderRadius: 16,
      },
      card1: {
       
        backgroundColor: COLORS.white,
      
        width:140,
        marginRight: 20,
       
        borderWidth:1,
        borderColor:'#E0E0E0',
        borderRadius: 16,
      },
      cardImage: {
        width: '100%',
        height: 120,
        borderTopLeftRadius:16,
        borderTopRightRadius:16
       
      },
      facility: {flexDirection: 'row', marginRight: 15},
      facilityText: {marginLeft: 5, color: COLORS.grey},
    });  
