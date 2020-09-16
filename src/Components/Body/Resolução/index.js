import React, { useState } from 'react';
import './styles.css';
import api from '../../../services/api';


const Resolucao = () => { 
    const [padrao, setPadrao] = useState("")
    const [value, setValue] = useState("")
    
    const req = async () => {
        let res = await api.get(`/api/calculator/${value}`)
        setPadrao(res.data)
    } 

    const [Map, setMap] = useState("")

    setInterval(async () => {
        let res = await api.get(`/api/calculator/historic`)
        setMap(res.data)
    }, 3000)
    
    const number = Object.keys(Map)
    const fac = Object.values(Map)

    return (
    <div>
        <fieldset id="fieldset">
            <label htmlFor="numero" id="numero_text">Número</label>
            <input onChange={e => setValue(e.target.value)} id="numero"></input><button onClick={req} id="button">Enviar</button>
            <div id='resultado'>
                {padrao ? padrao:""}
            </div>
            <div id='historico'>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Number
                            </th>
                            <th>
                                Result
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { number.map( n => (
                            <tr>
                                <td>
                                    { n } 
                                </td>
                                <td>
                                    { Map[n] } 
                                </td>
                                <br></br>
                            </tr>)
                        )}
                    </tbody>
                </table>
            </div>
        </fieldset>
    </div>
)
}

export default Resolucao;