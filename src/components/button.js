import React from 'react'
import { Button, StyleSheet,Text,  TouchableOpacity} from 'react-native';


const button = ({ title, onButtonPress  }) => {
    return ( 
        <TouchableOpacity style={styles.btn} onPress={()=> onButtonPress()}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default button

const styles = StyleSheet.create({
    btn:{
        height:40,
        backgroundColor:'#005ae0' ,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        height:45 
    },
    text:{
        fontSize:16,
        fontWeight:'500',
        color:'#fff'

    }
})
