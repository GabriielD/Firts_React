import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Image} from 'react-native';
import {SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';




export default function App() {
  return (

      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container} >
        <SafeAreaView >
          <View>

            <View style={styles.viewLogo}>
              <View style={styles.viewImg}>
                <Image source={require('./img/logo.png')} />
              </View>
              <View>
                <Text style={styles.Title}>
                  Calculadora Premium
                </Text>
              </View>
            </View>
            
            <View  style={styles.options}>
             
              <Pressable style={[styles.button,styles.shadowbutton]} >
                <Text style={styles.SubTitle}>
                  IMC
                </Text>
              </Pressable>
            </View>
            <View>

              <Pressable style={[styles.button,styles.shadowbutton]}  >
                <Text style={styles.SubTitle}>
                  Alcool x Gasolina
                </Text>
              </Pressable>
            </View> 
            <View  style={styles.options}>
              
              <Pressable style={[styles.button,styles.shadowbutton]} >
                <Text style={styles.SubTitle}>
                  Descontos
                </Text>
              </Pressable>
            </View>
            <View>
              <Pressable style={[styles.button,styles.shadowbutton]} disabled >
                <Text style={styles.SubTitle}>
                  Vazio
                </Text>
              </Pressable>
            </View>
            
            
            
          
          </View>
        </SafeAreaView>
      </LinearGradient>
    
  
  );

}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },

    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15 ,
    elevation: 3,
    backgroundColor: '#CFC9D9',
    borderWidth: 2, 
    
  },
  shadowbutton: { 
    shadowColor: 'black',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },

  options:{
    paddingBottom:15,
    paddingTop:15,
  },
  Title:{
    fontFamily: 'Monospace',
    fontSize: 25,
    fontWeight: 600,  
  },
  SubTitle:{
    fontFamily: 'Monospace',
    fontSize: 20,
    fontWeight: 'bold',
    color:'black',  
  },
  viewImg:{
    alignItems:'center',
    paddingBottom: 45,
    
  },
  viewLogo:{
    paddingBottom: 35,
  }
});
