import config from './config'
import tokenApi from './api'

async function tokenRetorno(cdServico){

    const token = await tokenApi();
    const url = await config();

    const contrasenhaPerfil = "3790d1aa7c63710";

    const tokenURL = ""+url+"WSAutenticacao.rule?sys=MK0&token="+token+"&password="+contrasenhaPerfil+"&cd_servico="+cdServico+"";
    
    const response = await fetch(tokenURL);
    const data = await response.json();
    const tokenRetornoAU = data.Token;
    
    return tokenRetornoAU;
    
  };

export default tokenRetorno;