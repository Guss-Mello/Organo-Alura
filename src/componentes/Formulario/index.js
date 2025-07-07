import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';
const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState(props.times[0] || '')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        // console.log('O form foi submetido => ', nome, cargo, imagem, time)
        props.aoColaboradorCadastrado ({
            nome, //se colocar (nome: nome) para criar daria no mesmo, ele ja meio q faz isso automaticamente
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime(props.times[0] || '')
    }

    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true} 
                    valor={nome}
                    label="Nome"
                    placeholder="nome"
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true} 
                    valor={cargo}
                    label="Cargo"
                    placeholder="cargo"
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    valor={imagem} 
                    label="Imagem" 
                    placeholder="endereço da imagem" 
                    aoAlterado={valor => setImagem(valor)} 
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    valor={time} 
                    label="Time" 
                    itens={props.times} 
                    aoAlterado={valor => setTime(valor)} 
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );


}

export default Formulario