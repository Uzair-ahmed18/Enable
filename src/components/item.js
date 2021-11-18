import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import * as Progress from 'react-native-progress';


const Item = ({ bgColor, title,  unfilledColor, proColor, text, iconColor, type, name}) => {
    return (
        <View style={[styles.totalOrder ,bgColor && { backgroundColor:bgColor } ]}>
        <Icon name={name} color={iconColor && iconColor} size={20}  />
         { title && <Text style={styles.text2}>{title    }</Text>}

        <Text style={styles.text}>{text}</Text>
        <Text style={styles.text2}>{type}</Text>
         </View>
    )
}

export default Item

const styles = StyleSheet.create({
    item:{
        width:130,
        height:150,
        borderRadius:8,
        paddingTop:10,
        alignItems:'center',
        marginVertical:10,

    },
    text:{
        fontSize:18,
        paddingTop:8,
        color:'#000',
        fontWeight:'700',
        alignItems:'center',
        justifyContent: 'center',
      },
      text2:{
        fontSize:15,
        paddingTop:8,
        color:'#000',
        fontWeight:'900',
        justifyContent: 'center',
        alignItems: 'center',

      },
      text3:{
        fontSize:15,
        paddingTop:8,
        color:'#000',
        fontWeight:'900',
        justifyContent: 'center',
        alignItems: 'center',

      },
    totalOrder:{
        // backgroundColor:'#dafbe1',
        width:150,
        height:150,
        borderRadius:20,
        padding:15,
        marginVertical:10,
      }
})
