import AsyncStorage from '@react-native-async-storage/async-storage';


async function localStorage(cpf , senha){

        const userApp = {
            cpf: `${cpf}`,
            senha: `${senha}`,
        };

        if (await AsyncStorage.getItem('@app_user') !== null){

            try {
            
                const currentUser = await AsyncStorage.getItem('@app_user')
            
                console.log(currentUser)
                
                return currentUser
    
            } catch (error) {
    
                console.log("errou");
    
            };



        } else {

            try {
            
                await AsyncStorage.setItem('@app_user', JSON(userApp))
            
                const currentUser = await AsyncStorage.getItem('@app_user')
            
                console.log(currentUser)
                
                return currentUser
    
            } catch (error) {
    
                console.log("errou");
    
            };

        }
        
        
}

export default localStorage;