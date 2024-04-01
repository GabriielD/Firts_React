import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image} from 'react-native';
import {SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './stylesLogin';


const HomeScreen = ({navigation}) => {
    const [text, onChangeText] = React.useState('');
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
                        source={require('../img/user.svg')}
                        style={{width: 50, height: 50,}}/>
                
                    <Text style={styles.Title}>
                        LOGIN
                    </Text>
                </View>
                <View style={styles.FormInput}>
                    <TextInput
                        style={styles.Input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Login"
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.Input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Senha"
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.buttonSelect}>
                    <Pressable style={styles.button}  onPress={() => navigation.navigate('Option')}>
                        <Text style={styles.SubTitle}>
                        Login
                    </Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}



export default HomeScreen;