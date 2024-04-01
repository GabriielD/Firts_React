import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
      },
      Input: {
        borderWidth: 2, 
        height: 45,
        padding: 10,
        borderRadius: 15,
        fontFamily: 'Monospace',
        fontSize: 18,
        fontWeight: 'bold',
        color:'black',  
      },
      LoginMain:{
        height:350,
        width:320,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',  
        borderRadius: 20, 
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
        backgroundColor: '#CFC9D9'
      },
      IconImage:{
        paddingBottom: 35,
      },
      FormInput:{
        paddingBottom:10,
        width:220,
        
      },
      buttoninput:{
        fontFamily: 'Monospace',
        fontSize: 18,
        fontWeight: 'bold',
        color:'black',
        justifyContent: 'center',  
        
      },

})
export default styles;