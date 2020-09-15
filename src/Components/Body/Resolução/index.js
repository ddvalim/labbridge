import React, { useState } from 'react';
import './styles.css';
import api from '../../../services/api';


const Resolucao = () => { 
    const [padrao, setPadrao] = useState("")
    const [value, setValue] = useState("")
    
    const req = async () => {
        let a = await api.get(`/api/calculator/${value}`)
        setPadrao(a.data)
    } 
    return (
    <div>
        <fieldset id="fieldset">
            <label htmlFor="numero" id="numero_text">Número</label>
            <input onChange={e => setValue(e.target.value)} id="numero"></input><button onClick={req} id="button">Enviar</button>
            <div id='resultado'>
                {padrao ? padrao:""}
            </div>
        </fieldset>
    </div>
)
}

export default Resolucao;