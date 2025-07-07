import Banner from './componentes/Banner/Banner';
import { useState } from 'react';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {
// => se chama arrow function, é uma alternativa mais curta à declaração de função tradicional. 
// Frequentemente utilizada em componentes funcionais e para manipulação de eventos. 
  const times = [
    {
      nome: 'Programacao',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF55D9'
    },
    {
      nome: 'Inovacao e Gestao',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    // console.log(colaborador)
    // "debugger" ele debuga o codigo no navegador 
    setColaboradores([...colaboradores, colaborador]) 
    //... é o operador spread (espalhamento) do JavaScript, e ele é super útil para manipular arrays e objetos.
    //“Crie um novo array contendo todos os itens do array colaboradores atual, e depois adicione o novo colaborador no final.”
  }

    return (
      <div className="App">
        <Banner />

        <Formulario 
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
        />

        {times.map(time => <Time 
          key={time.nome} 
          nome={time.nome} 
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />)}

        <Rodape />

      </div>
    );
}

export default App;
