import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Image} from 'react-native';
import {SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './stylesMenu.js';




const options =  ({navigation}) => {
  return (
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container} >
        <SafeAreaView >
          <View>

            <View style={styles.viewLogo}>
              <View style={styles.viewImg}>
                <Image
                source={require('../img/logo.png')}
                />
              </View>
            </View>
            <View style={[styles.optionsMain,]}>
              <View  style={styles.options}>
              
                <Pressable style={[styles.button,styles.shadowbutton]} onPress={() => navigation.navigate('Imc')} >
                  <Text style={styles.SubTitle}>
                    IMC
                  </Text>
                </Pressable>
              </View>
              <View>

                <Pressable style={[styles.button,styles.shadowbutton]} onPress={() => navigation.navigate('Alcool')}  >
                  <Text style={styles.SubTitle}>
                    Alcool x Gasolina
                  </Text>
                </Pressable>
              </View> 
              <View  style={styles.options}>
                
                <Pressable style={[styles.button,styles.shadowbutton]} onPress={() => navigation.navigate('Descontos')}>
                  <Text style={styles.SubTitle}>
                    Descontos
                  </Text>
                </Pressable>
              </View>
              
            </View>
            
            
            
          
          </View>
        </SafeAreaView>
      </LinearGradient>
    
  
  );

}


export default options;