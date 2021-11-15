import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

const Input = ({ label, onChangeText, placeholder,  value }) => {
    return (
        <TextInput
        label={label}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={styles.input}
        value={value}
        mode={'outlined'}
        selectionColor={'gray'}
        outlineColor={'gray' }
        theme={{colors:{ primary:'#005ae0' }}}
        />

    )
}


export default Input;

const styles = StyleSheet.create({
    input:{
        backgroundColor:'#fff',
        borderRadius:8,
        height:45,
        marginTop:10
    }
})
