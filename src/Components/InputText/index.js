import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default function InputText({placeholder}) {
 return (
   <View>  
    <TextInput
        style={styles.input}
        placeholder={`${placeholder}`}
        placeholderTextColor="#a1a1a1"
        />
   </View>
  );
}

const styles = StyleSheet.create({  
    input: {
        width: "100%",
        backgroundColor: "#fafafa",
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        color: "#000"
    }
})