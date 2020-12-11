import config from './config'

async function api(){

        const url = config();
        
        const username = "testeapp";
        const password = "Multiplicteste2020";

        const auther = ""+url+"WSAutenticacaoOperador.rule?sys=MK0&username="+username+"&password="+password+"";
        
        const response = await fetch(auther);
        
        const data = await response.json();
        const token = data.TokenAutenticacao;
        
        return token;
}

export default api;