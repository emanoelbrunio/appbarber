import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Logobarber from '../../../assets/barber.svg'
import Cta from '../../Components/Cta';
export default function Preload({navigation}) {

    return (
        <View style={styles.container}>
            <Logobarber width="80%"/>

            <TouchableOpacity
                style={styles.bttNext}
                onPress={()=> {
                    navigation.navigate('SignIn')
                }}
            >
                <Text style={styles.textBttNext}>Prosseguir</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#90CA9f",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    bttNext: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        width: "100%",
        alignItems: "center"
    },
    textBttNext: {
        color: "#000",
        fontSize: 20,
        fontWeight: 700,
    }
})