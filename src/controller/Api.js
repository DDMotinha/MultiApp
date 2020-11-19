import config from 'config.js'

async function tokenApi(){

    try {

        const url = config();

        const username = "USUARIO";
        const password = "SENHA";

        const auther = ""+url+"WSAutenticacaoOperador.rule?sys=MK0&username="+username+"&password="+password+"";

        const response = await fetch(auther);
        const data = await response.json();
        let token = data.TokenAutenticacao;
        
        return token;

    } catch (error) {
        console.log(error);
    }
}

export default tokenApi;