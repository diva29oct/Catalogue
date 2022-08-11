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
import React, { Component } from 'react'
import COLORS from '../compoents/colors'
import  Icon  from 'react-native-vector-icons/FontAwesome5'
import { RadioButton } from 'react-native-paper';
export default function PaymentWindow ()
{
    const [checked, setChecked] = React.useState('C');
 
    return (
      <ScrollView style={{flex:1,backgroundColor:'#fff'}}>
        <View style={styles.header}>
            <View style={styles.subheader}>
                <View>
                    <Icon name="list-ol" size={24} color={COLORS.blue} style={styles.icon}/>
                    <Text style={styles.headtext}>Review</Text>
                </View>
                <View>
                    <Icon name="wallet" size={24} color={COLORS.blue} style={styles.icon}/>
                    <Text style={styles.headtext}>Payment Method</Text>
                </View>
                <View>
                    <Icon name="money-check" size={24} color={COLORS.bggray} style={styles.icon}/>
                    <Text style={styles.headtext}>Payment</Text>
                </View>
            </View>
        </View>
        <View style={styles.paytype}>
            <Text style={styles.head}>Payment Method</Text>
            <View style={checked=='C'?styles.cardblue:styles.card}>
           <View style={styles.insidecard}>
          <View style={{flexDirection:'row'}}>
          <RadioButton
           color={COLORS.blue}
           value='C'
        status={checked === 'C' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('C')}
      />
      <Text style={checked=='C'?styles.cardtext1:styles.cardtext}>Credit Card</Text>
          </View>
      <Image
          style={styles.cimage}
          resizeMode="contain"
          source={require('../assets/visa.png')}
        />
           </View>
            </View>
            <View style={checked=='P'?styles.cardblue:styles.card}>
           <View style={styles.insidecard}>
          <View style={{flexDirection:'row'}}>
          <RadioButton
          color={COLORS.blue}
                  value='P'
        status={checked === 'P' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('P')}
      />
      <Text style={checked=='P'?styles.cardtext1:styles.cardtext}>PayPal</Text>
          </View>
      <Image
          style={[styles.cimage,{marginTop:0}]}
          resizeMode="contain"
          source={require('../assets/pal.png')}
        />
           </View>
            </View>
            <View style={checked=='A'?styles.cardblue:styles.card}>
           <View style={styles.insidecard}>
          <View style={{flexDirection:'row'}}>
          <RadioButton
           color={COLORS.blue}
           value='A'
        status={checked === 'A' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('A')}
      />
      <Text style={checked=='A'?styles.cardtext1:styles.cardtext}>Apple Pay</Text>
          </View>
      <Image
          style={[styles.cimage,{marginTop:0}]}
          resizeMode="contain"
          source={require('../assets/pay.png')}
        />
           </View>
            </View>
        </View>
        <View style={styles.footer}>
            <View style={styles.subfooter}>
                <View>
                    <Text style={styles.footertext}>Purchase Date</Text>
                    <Text style={styles.footertextsub}>01/09/2020</Text>
                </View>
                <View>
                    <Text style={styles.footertext}>Price</Text>
                    <Text style={styles.footertextsub}>$240</Text>
                </View>
                <View>
                    <Text style={styles.footertext}>Discount</Text>
                    <Text style={styles.footertextsub}>$120</Text>
                </View>
            </View>
            <View style={{marginTop:30,borderWidth:1,borderColor:COLORS.bggray}}/>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:16,marginTop:40}}>
                <Text style={{lineHeight:50}}>Total Price</Text>
                <Text style={{lineHeight:50}}>$120</Text>
                <TouchableOpacity style={styles.btncontainer}>
                    <Text style={styles.btntext}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
       
      </ScrollView>
    )
 
}
const styles = StyleSheet.create({
    container:{
flex:1,
justifyContent:'space-between'
    },
    btncontainer:{
        borderRadius:6,
        width:130,
        backgroundColor:COLORS.blue,
        padding:20
    },
    btntext:{
        color:COLORS.white,
        fontSize:12,
        textAlign:'center'
    },
    card:{
        flexDirection:'row',borderWidth:1,borderColor:COLORS.bggray,borderRadius:4,marginTop:15
    },
    cardblue:{
        flexDirection:'row',borderWidth:1,borderColor:COLORS.blue,borderRadius:4,marginTop:15
    },
    cimage:{
        width:100,
        height:50,
        marginTop:-10
    },
    insidecard:{
        paddingHorizontal:15,paddingVertical:15,flexDirection:'row',justifyContent:'space-between',flex:1
    },
    cardtext:{
        marginTop:10,
        color:COLORS.black
        
    },
    cardtext1:{
        marginTop:10,
        color:COLORS.blue
    },
    head:{
        fontSize:14,
        fontWeight:'400',
        lineHeight:24,
        color:COLORS.black
      },
      footertext:{
        fontSize:12,
        fontWeight:'400',
        lineHeight:22,
        color:COLORS.black,
        textAlign:'center',
        marginBottom:5
      },
      footertextsub:{
        fontSize:10,
        fontWeight:'400',
        lineHeight:22,
        color:COLORS.black,
        textAlign:'center',
        marginBottom:5
      },
    headtext:{
        fontSize:12,
        fontWeight:'400',
        lineHeight:22,
        color:COLORS.blue,
        textAlign:'center'
      },
    header:{
flex:0.5,
height:80,
backgroundColor:COLORS.offwhite,
shadowColor: '#470000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        elevation: 3
    },
    subheader:{
        paddingHorizontal:34,
        paddingVertical:15,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    subfooter:{
        paddingHorizontal:15,
        paddingVertical:30,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    icon:{
        marginBottom:10,
        textAlign:'center'
    },
    footer:{
flex:1
    },
    paytype:{
flex:2,
paddingHorizontal:15,
paddingVertical:15
    }
})