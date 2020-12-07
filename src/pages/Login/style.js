import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f0f0f0",
        textAlign: "center",
    },
    containerLogo: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    appLogo: {
        borderColor: "black",
        borderWidth: 1,
    },
    containerInput:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        minWidth: 250,
    },
    input:{
        width: '90%',
        height: '10%',
        minHeight: 45,
        borderRadius: 10,
        textAlign: "center",
        margin: 5,
    },
    containerPlano:{
        flex:1
    },
    btnSubmit: {
        backgroundColor: '#35aaff',
        width: '90%',
        minHeight: 45,
        borderRadius: 10,
        borderColor: '#35aaf0',
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 10,
        textAlign: "center",
        borderWidth: 1,
        borderColor: "#3599f0",
    },
    btnText:{
        color: '#FFF',
        fontSize: 18
    },

  });

export default style;
