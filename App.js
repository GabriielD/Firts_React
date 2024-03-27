import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Image} from 'react-native';
import {SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

    
const Login = () => {
    const [text, onChangeText] = React.useState('Login');
    const [number, onChangeNumber] = React.useState(''); 
    return(
        <SafeAreaView style={styles.container}>
             <LinearGradient
                colors={['#4c669f', '#3b5998', ]}
                style={styles.background}
             />
            <View style={[styles.LoginMain, styles.shadowbutton]}>
                <View style={styles.h1}>    
                    <Image 
                        source={require('./img/user.svg')}
                        style={{width: 50, height: 50,}}/>
                
                    <Text style={styles.Title}>
                        Login
                    </Text>
                </View>
                <View style={styles.FormInput}>
                    <TextInput
                        style={styles.Input}
                        onChangeText={onChangeText}
                        value={text}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.Input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="senha"
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.buttonSelect}>
                    <Pressable style={styles.button} >
                        <Text style={styles.SubTitle}>
                        Logar
                    </Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 250,
    },
  
      container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'gray',
    },
    LoginMain:{
        height:350,
        width:320,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',   
    },
    Input: {
        borderWidth: 2, 
        height: 40,
        padding: 10,
        borderRadius: 20,
    },
    FormInput:{
        paddingBottom:10,

    },
    h1:{
        paddingTop: 0,
        paddingBottom:40,
        alignItems: 'center',
        justifyContent: 'center',   
    },
    Title:{
        fontFamily: 'Monospace',
        fontSize: 25,
        fontWeight: 600,
        paddingTop:10,
    },
    shadowbutton: { 
        shadowColor: 'black',
        shadowOffset: {width: 6, height: 8},
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    button:{
    
        borderWidth: 2, 
        height: 40,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#CFC9D9'
    },
    buttonSelect:{
        paddingTop: 10,
       
    },
    
})

export default Login;