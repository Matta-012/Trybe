import './Content.css';
import { Component } from "react";

class Content extends Component {
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];

    return (
      conteudos.map(({ conteudo, bloco, status }) => {
        return <div key={conteudo} className="content-container">
          <span>{ `O conteúdo é: ${conteudo}` }</span>
          <br />
          <span>{ `Status: ${bloco}` }</span>
          <br />
          <span>{ `Bloco: ${status}` }</span>
          <br />
        </div>
      })
    );
  }
}

export default Content;