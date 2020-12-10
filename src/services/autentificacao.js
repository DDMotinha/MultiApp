import config from './config';
import tokenRetorno from './tokenRetorno'

async function Autentificacao(cpf, senha){
  
    const cpfUse = cpf;
    const senhaUse = senha;

    const url = config();
    const tokenRetornoAutenticacao = await tokenRetorno(4);
    console.log(tokenRetornoAutenticacao);

    const fetchURL =  ""+url+"WSMKUserSenhaSAC.rule?sys=MK0&token="+tokenRetornoAutenticacao+"&user_sac="+cpfUse+"&pass_sac="+senhaUse+""
    const response = await fetch(fetchURL);
    const data = await response.json();
    

    return data;
  };

export default Autentificacao;