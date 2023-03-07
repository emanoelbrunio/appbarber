import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

export default function Cta({txt, route, navigation}){
    return (
        <TouchableOpacity
            style={styles.btt}
            onPress={()=>{
                navigation.navigate(`${route}`)
            }}
        >
            <Text style={styles.bttTxt}> {txt} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btt: {
        backgroundColor: "#90CA9f",
        padding: 15,
        borderRadius: 10,
        width: "100%",
        alignItems: "center"
    },
    bttTxt: {
        color: "#000",
        fontSize: 18, 
        fontWeight: 700
    }
})