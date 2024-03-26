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
        // Background Linear Gradient
                colors={['#4c669f', '#3b5998', ]}
                style={styles.background}
             />
            <View style={styles.LoginMain}>
                <View>
                    <Text>
                        Login
                    </Text>
                </View>
                
                    <TextInput
                        style={styles.Input}
                        onChangeText={onChangeText}
                        value={text}
                    />
                    <TextInput
                        style={styles.Input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="useless placeholder"
                        keyboardType="numeric"
                    />
                
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
        borderRadius: 15,
    }

})

export default Login;