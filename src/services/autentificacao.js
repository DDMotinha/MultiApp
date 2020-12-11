import config from './config';
import tokenRetorno from './tokenRetorno';
import localStorage from './storage';

async function Autentificacao(){

    const retornoStorage = await localStorage();

    const cpfUse = retornoStorage.cpf;
    const senhaUse = retornoStorage.senha;

    const url = config();
    const tokenRetornoAutenticacao = await tokenRetorno(4);

    const fetchURL =  ""+url+"WSMKUserSenhaSAC.rule?sys=MK0&token="+tokenRetornoAutenticacao+"&user_sac="+cpfUse+"&pass_sac="+senhaUse+""
    const response = await fetch(fetchURL);
    const data = await response.json();
    

    return data;
  };

export default Autentificacao;