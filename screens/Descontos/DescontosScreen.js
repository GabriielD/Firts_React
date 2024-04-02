import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image} from 'react-native';
import {SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import styles from './stylesDescontos';

const Descontos = ({navigation}) => {
    const [porcentagem, setporcentagem] = useState("");
    const [valor, setValor] = useState("");
    function CalcularDesconto() 
        {
            const desconto = valor * (porcentagem / 100);
            const valorComDesconto = valor - desconto;
            console.log(valorComDesconto);
    }
    
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.LoginMain, styles.shadowbutton]}>
                <View style={styles.IconImage}>
                <Image
                        source={require('../img/promocao.png')}
                        style={{width: 80, height: 80,}}
                    />
                   
                    
                </View> 
               
                <View style={styles.FormInput}>
                    <TextInput
                        style={styles.Input}
                        placeholder='Porcentagem de Desconto'
                        onChangeText={text => setporcentagem(text)}
                        value={porcentagem}
                        keyboardType="numeric"
                        
                    />
                </View>
                <View style={styles.FormInput} > 
                    <TextInput 
                        style={styles.Input}
                        placeholder='Valor do produto'
                        onChangeText={text => setValor(text)}
                        value={valor}
                        keyboardType="numeric"
                    />
                </View>
                <View >
                    <Pressable style={styles.button}  onPress={CalcularDesconto}>
                        <Text style={styles.buttoninput}>
                        Calcular
                    </Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );  
}
export default Descontos;