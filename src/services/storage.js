import AsyncStorage from '@react-native-async-storage/async-storage';


async function localStorage(cpf , senha){

        const userApp = {
            cpf: `${cpf}`,
            senha: `${senha}`,
        };
        
        try {
            
            await AsyncStorage.setItem('@app_user', JSON.stringify(userApp))
        
            const currentUser = await AsyncStorage.getItem('@app_user')
        
            console.log(currentUser)
            
            return currentUser

        } catch (error) {

            console.log("errou");

        };
        
}

export default localStorage;