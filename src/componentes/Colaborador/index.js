import { IoIosCloseCircle } from "react-icons/io";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {

    function favoritar(){
        aoFavoritar(colaborador.id_colab)
    }

    return (<div className="colaborador">
        <IoIosCloseCircle 
            size={25} 
            className='deletar' 
            onClick={() => aoDeletar(colaborador.id_colab)} 
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>

        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>

            <div className="favoritar">
                {colaborador.favorito
                    ? <MdFavorite size={25} className="favorito" onClick={favoritar}/>
                    : <MdFavoriteBorder size={25} className="nfavorito" onClick={favoritar}/>
                }
            </div>
        </div>



    </div>)
}

export default Colaborador