import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, TouchableOpacity, Text } from 'react-native';
import Logobarber from '../../../assets/barber.svg'

import Cta from '../../Components/Cta';
import InputText from '../../Components/InputText';
import InputPass from '../../Components/InputPass';

export default function SignIn({navigation}) {
 return (
    <View style={styles.container}>

      <Logobarber height="30%" />

      <KeyboardAvoidingView
        style={styles.areaInputs}
        behavior= {(Platform.OS === 'ios')? "padding" : null}
      >

        <InputText placeholder={'Nome:'}/>
        <InputText placeholder={'E-mail: '}/>
        <InputPass placeholder={'Senha: '}/>
        <InputPass placeholder={'Repita sua senha:  '}/>
        <Cta txt={'Criar conta'} route={'SignIn'} navigation={navigation}/>

      </KeyboardAvoidingView>

      <TouchableOpacity style={styles.txts}>
        <Text style={styles.txtFooter}>Ainda não possui conta?</Text>
        <Text style={styles.txtFooterCta}>Faça uma conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "100%",
    height: "100%",
    padding: 20,
    paddingTop: 75,
    backgroundColor: "#90CA9f60"
  },
  areaInputs: {
    width: '100%',
  },
  txts:{
    flexDirection: 'row'
  },
  txtFooter: {
    fontSize: 18,
    color: '#000',
    marginRight: 5,
  },
  txtFooterCta: {
    color: '#90CA9f',
    fontSize: 18,
    fontWeight: 700,
  }

})