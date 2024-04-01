import {StyleSheet} from 'react-native';

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
        borderRadius: 20, 
    },
    Input: {
        borderWidth: 2, 
        height: 45,
        padding: 10,
        borderRadius: 15,
        width:200,
        fontSize: 15,
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
        fontWeight: 800,
        paddingTop:10,
        fontVariant: 'small-caps',
        letterSpacing: 2,
    },
    SubTitle:{
        fontFamily: 'Monospace',
        fontSize: 18,
        fontWeight: 'bold',
        color:'black',
        alignItems: 'center',
        letterSpacing: 2,

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
        padding: 8,
        borderRadius: 15,
        backgroundColor: '#CFC9D9',
    },
    buttonSelect:{
        paddingTop: 10,
       
    },
    
})

export default styles;