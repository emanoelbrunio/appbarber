import React, {useState} from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import EyeClose from '../../../assets/eyeClose.svg'
import EyeOpen from '../../../assets/eyeOpen.svg'

export default function InputText({placeholder}) {
    const [input, setInput] = useState('');

    const [eye, setEye] = useState(true);

    return (
    <View style={styles.viewInput}>  
        <TextInput
            style={styles.input}
            placeholder={`${placeholder}`}
            placeholderTextColor="#a1a1a1"
            secureTextEntry={eye}
            value={input}
            onChangeText={(txt) => setInput(txt)}
        />

        <TouchableOpacity
            onPress={()=> {
                setEye(!eye)
            }}
            style={styles.viewEye}
        >
            {   
                eye ? <EyeClose width={22} height='20'/> : <EyeOpen width={22} height='20'/>
            }
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({  
    viewInput:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: "#fafafa",
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
    },
    input: {
        width: "90%",
        padding: 0,
        color: "#000"
    },
    viewEye:{
        width: '10%'
    },
    
})