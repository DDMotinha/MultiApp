import React, {useState, useEffect} from  'react';

function apiRest(){
    const URL = "URL";
    const TOKEN = "TOKEN";

    const [get, setGet] = useState(Value(URL));
    
    function consumeApi(){

        fetch(URL, {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringfy(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Sucesso:', data);
        })
        .catch((error) => {
            console.error('Erro:', error)
        })
    };

}

export default apiRest;