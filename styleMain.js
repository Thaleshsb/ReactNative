import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    // main
    boxMain: {
        backgroundColor: '#ffffff',
        width:'100%',
        height:'100%'
    },
    // header
    boxHeader: {
        bottom:0,
        height: 70,
        width: '100%',
        backgroundColor: '#011C40',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    iconHeader:{
        textAlign: 'center',
        height: 29,
        width:199.86,
    },
    //form
    boxForm:{
        display: 'flex',
        justifyContent: 'center',
        height:'80%'
    },
    inputForm:{
        backgroundColor:'#F0F8FF',
        width: 340,
    height: 55,
    alignSelf: 'center',
    borderRadius: 10,
    fontSize: 24,
    paddingLeft: 20
    },
    textForm:{
        fontStyle: 'normal',
        left:40,
        fontSize: 24,
        lineHeight: 32,
        color: '#202022'
    },
    titleForm:{
        fontWeight: 'bold',
        fontSize:25,
        textAlign:'center',
        paddingBottom:100
        
    },
    buttonForm:{
        marginTop: 40,
        width: 400,
        height: 65,
        fontStyle: 'normal',
        fontSize: 24,
        alignItems:'center',
       
    },
    //footer
    boxFooter: {
        //53.29
        height:70 ,
        width: '100%',
        backgroundColor: '#011C40',
        justifyContent: 'center',
        alignItems:'center' 
    },
    separaFooter:{
        display:'flex',
        flexDirection:'row',
        
    },
    iconFooter:{
        height: 33,
        width:33,
        margin:33,
    },
    //Areas
    TheBigBoxArea:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height:'80%'
    },
    BigBoxArea:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxAreaL: {
        backgroundColor: '#ffffff',
        width:'100%',
        flexDirection:'column',
    },
    boxAreaD: {
        backgroundColor: '#ffffff',
        width:'100%',
      
        flexDirection:'column',
       
    },
    blocoArea1:{
        backgroundColor: '#2AB888',
        height: 160,
        width:160,
        borderRadius:10,
        margin:15
    },
    blocoArea2:{
        backgroundColor: '#2C5BA8',
        height: 160,
        width:160,
        borderRadius:10,
        margin:15
    },
    blocoArea3:{
        backgroundColor: '#A457BF',
        height: 160,
        width:160,
        borderRadius:10,
        margin:15
    },
    blocoArea4:{
        backgroundColor: '#F5953B',
        height: 160,
        width:160,
        borderRadius:10,
        margin:15
    },
    blocoArea5:{
        backgroundColor: '#2393D9',
        height: 160,
        width:160,
        borderRadius:10,
        margin:15
    },
    blocoArea6:{
        backgroundColor: '#E66267',
        height: 160,
        width:160,
        borderRadius:10,
        margin:15
    },
    iconArea1:{
        marginTop:10,
        marginBottom: 10,
        height: 60,
        width:60,
        alignSelf:'center'
    },
    iconArea2:{
        marginTop:10,
        marginBottom: 10,
        height: 60,
        width:60,
        alignSelf:'center'
    },
    iconArea3:{
        marginTop:10,
        marginBottom: 10,
        height: 60,
        width:60,
        alignSelf:'center'
    },
    iconArea4:{
        marginTop:10,
        marginBottom: 10,
        height: 60,
        width:46.64,
        alignSelf:'center'
    },
    iconArea5:{
        marginTop:10,
        marginBottom: 10,
        height: 60,
        width:60,
        alignSelf:'center'
    },
    iconArea6:{
        marginTop:10,
        marginBottom: 10,
        height: 50,
        width:92.5,
        alignSelf:'center'
    },
    textArea:{
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 17,
    }


})

export default styles