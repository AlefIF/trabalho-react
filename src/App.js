import './App.css';
import TelaBemVindo from './telas/TelaBemVindo.js';
import Tela2 from './telas/Tela2';
import Tela3 from './telas/Tela3';
import Tela4 from './telas/Tela4';
import Tela5 from './telas/Tela5';
import React from "react";

/**
 * Essa tela tem como função comportar toda a estrutura do projeto e conseguir mostrar todas as outras telas.
 * @author Gabriel Guimarães de Almeida
 * */
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            telas: this.criaTelas(),
            index: 0
        }
    }

    render() {
        return (
            <div>
                <h1>Trabalho DWA</h1>
                <div>
                    {this.renderBotoesDeNavegacao()}
                </div>
                <div>
                    {this.state.telas[this.state.index].tela}
                </div>
            </div>
        );
    }

    /**
     * Como quais telas deveríamos desenvolver já estavam bem definidas de acordo com os requisitos do trabalho
     * decidimos criar um vetor com todas as telas principais.
     * @author Gabriel Guimarães de Almeida
     * */
    criaTelas() {
        return [
            {
                tela: <TelaBemVindo />,
                label: 'Tela bem-vindo'
            },
            {
                tela: <Tela2 />,//TODO modificar tela quando implementada
                label: 'Tela2'//TODO mudar label
            },
            {
                tela: <Tela3 />,//TODO modificar tela quando implementada
                label: 'Tela3'//TODO mudar label
            },
            {
                tela: <Tela4 />,//TODO modificar tela quando implementada
                label: 'Tela4'//TODO mudar label
            },
            {
                tela: <Tela5 />,//TODO modificar tela quando implementada
                label: 'Tela5'//TODO mudar label
            }
        ];
    }

    /**
     * Esse método é responsável por mudar o index da tela selecionada no vetor de telas no state.
     * @param index {@link Number}: qual é o index que deve ser selecionado
     * @author Gabriel Guimarães de Almeida
     * */
    mudaIndex(index) {
        this.setState({index: index});
    }

    /**
     * Esse método é responsável por verificar se o index passado é o mesmo que está no state. ele é utilizado para
     * desabilitar alguns botoes de navegação.
     * @param index {@link Number}: qual é o index a ser verificado
     * @return {@link Boolean} flag de verificação se o botao deve desabilitado
     * @author Gabriel Guimarães de Almeida
     * */
    isIndexDisabled(index) {
        return index === this.state.index;
    }

    /**
     * Esse método é responsável por renderizar todos os botoes de navegação.
     * @return lista dos botoes de navegação
     * @author Gabriel Guimarães de Almeida
     * */
    renderBotoesDeNavegacao() {
        return this.state.telas.map(
            (tela, i) => (
                <button disabled={this.isIndexDisabled(i)} onClick={() => this.mudaIndex(i)}>{tela.label}</button>
            )
        )
    }
}

export default App;
