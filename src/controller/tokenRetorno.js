import config from 'config.js'
import tokenApi from 'Api.js'

function tokenRetorno(cdServico){

    const token = tokenApi();
    
    const url = config();

    const contrasenhaPerfil = "3790d1aa7c63710";

    const response = await fetch(""+url+"WSAutenticacao.rule?sys=MK0&token="+token+"&password="+contrasenhaPerfil+"&cd_servico="+cdServico+"");
    const data = await response.json();
    const tokenRetornoAU = data.Token;

    return tokenRetornoAU;
    
  };

export default tokenRetorno;