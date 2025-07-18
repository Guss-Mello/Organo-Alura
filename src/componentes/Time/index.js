import Colaborador from '../Colaborador'
import './time.css'
import hexToRgba from 'hex-to-rgba';

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar}) => {
    return (
        colaboradores.length > 0 && 
        <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.5')}}>

            <input type='color' value={time.cor} className='input-cor' onChange={evento => mudarCor(evento.target.value, time.id_time)} />

            <h3 style={{ borderColor: time.cor }}> {time.nome} </h3>

            <div className='colaboradores'>
                {colaboradores.map((colaborador) => {
                    return( 
                        <Colaborador
                            key={colaborador.id_colab}
                            colaborador={colaborador}
                            corDeFundo={time.cor}
                            aoDeletar = {aoDeletar}
                            aoFavoritar={aoFavoritar}
                        />
                    );
                })}
            </div>
        </section>
    )
}

export default Time