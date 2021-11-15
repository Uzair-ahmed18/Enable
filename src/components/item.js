import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import * as Progress from 'react-native-progress';


const Item = ({ bgColor, title,  unfilledColor, proColor, text, iconColor}) => {
    return (
        <View style={[styles.totalOrder ,bgColor && { backgroundColor:bgColor } ]}>
        <Icon name={'shopping-bag'} color={iconColor && iconColor} size={18}  />
         { title && <Text style={styles.text}>{title    }</Text>}
         <Progress.Bar unfilledColor={unfilledColor &&unfilledColor} style={{marginTop:10}} color={proColor && proColor} progress={0.3} width={100} />

        { text && <Text style={styles.text}>{text}</Text>}
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
        fontSize:15,
        paddingTop:8,
        color:'#000',
        fontWeight:'700'
      },
    totalOrder:{
        // backgroundColor:'#dafbe1',
        width:140,
        height:150,
        borderRadius:8,
        padding:10,
        marginVertical:10,
      },
    title:{
        fontSize:18,
        fontFamily:'roboto'
    },
    number:{
        fontSize:30,
        alignSelf:'center',
        paddingTop:20,
        fontWeight:'700'
    }
})
