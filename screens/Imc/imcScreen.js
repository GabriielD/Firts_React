import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image} from 'react-native';
import {SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import styles from './stylesImc';



const imc = ({navigation}) => {
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");
    function calcularIMC() 
        {
        const alturaMetros = altura / 100;
        const calculo = peso / (alturaMetros * alturaMetros);
        console.log(`Seu IMC é: ${calculo}`);
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.LoginMain, styles.shadowbutton]}>
                <View style={styles.IconImage}>
                    <Image
                        source={require('../img/imc.png')}
                        style={{width: 100, height: 80,}}
                    />
                    
                </View> 
               
                <View style={styles.FormInput}>
                    <TextInput
                        style={styles.Input}
                        placeholder='Altura'
                        onChangeText={text => setAltura(text)}
                        value={altura}
                        keyboardType="numeric"
                        
                    />
                </View>
                <View style={styles.FormInput} > 
                    <TextInput 
                        style={styles.Input}
                        placeholder='Peso'
                        onChangeText={text => setPeso(text)}
                        value={peso}
                        keyboardType="numeric"
                    />
                </View>
                <View >
                    <Pressable style={styles.button}  onPress={calcularIMC}>
                        <Text style={styles.buttoninput}>
                        Calcular
                    </Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );  
}
export default imc;