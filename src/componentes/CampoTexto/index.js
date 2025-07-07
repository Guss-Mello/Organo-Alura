import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    return(
        <div className="campo_texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} placeholder= {`Digite o seu ${props.placeholder}...`} required={props.obrigatorio}/>
        </div>
    )
}

export default CampoTexto