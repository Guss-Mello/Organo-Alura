import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    return(
        (props.colaboradores.length > 0) ? <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador 
                    key={colaborador.nome}
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem}
                    corDeFundo={props.corPrimaria}
                />)}
            </div>
        </section>
        : '' 
        // a "?" eh tipo um if, se o (props.colaboradores.length > 0) for vdd faz toda a parada de cima ai
        // se n for vdd, ele retorna o : '' que eh simplesmente nada
        // poderia ter utilizado simplesmente o && no lugar da "?" e do ": '' "
    )
}

export default Time