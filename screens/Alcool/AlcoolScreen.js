import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image} from 'react-native';
import {SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import styles from './stylesAlcool';



const Alcool = ({navigation}) => {
    const [gasolina, setGasolina] = useState("");
    const [alcool, setAlcool] = useState("");
    function relacaoPreco() 
        {
          const Preco = parseFloat(alcool)/parseFloat(gasolina);
           if (Preco < 0.7) {
            console.log("Vale a pena abastecer com álcool!");
            
           } else {
            console.log ("Vale a pena abastecer com gasolina!")
        }      
       
    }
    
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.LoginMain, styles.shadowbutton]}>
                <View style={styles.IconImage}>
                <Image
                        source={require('../img/gasolina.png')}
                        style={{width: 80, height: 80,}}
                    />
                   
                    
                </View> 
               
                <View style={styles.FormInput}>
                    <TextInput
                        style={styles.Input}
                        placeholder='Gasolina'
                        onChangeText={text => setGasolina(text)}
                        value={gasolina}
                        keyboardType="numeric"
                        
                    />
                </View>
                <View style={styles.FormInput} > 
                    <TextInput 
                        style={styles.Input}
                        placeholder='Alcool'
                        onChangeText={text => setAlcool(text)}
                        value={alcool}
                        keyboardType="numeric"
                    />
                </View>
                <View >
                    <Pressable style={styles.button}  onPress={relacaoPreco}>
                        <Text style={styles.buttoninput}>
                        Calcular
                    </Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );  
}
export default Alcool;