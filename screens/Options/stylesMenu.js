import { StyleSheet, Text, View, TextInput, Pressable, Image} from 'react-native';

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
export default styles;
