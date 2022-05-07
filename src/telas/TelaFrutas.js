import React from "react";

/**
 * Essa tela tem como função contemplar o tópico 3 do trabalho, uma tela onde o usuário pode adicionar
 * frutas no dropdown de frutas pelo input existente na tela, também pode selecionar uma fruta
 * para exibir um alerta com o nome dela na tela.
 * @author Alef Faria Silva
 * */
class TelaFrutas extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
            arrayFrutas: ['morango', 'banana', 'limão']
        }
    }
    render() {
        return (
            <>
                <form onSubmit={event => this.handleEvent(event)}>
                    <label> Inserir fruta:</label>
                    &nbsp;&nbsp;
                    <input id={'inputFruta'} placeholder={"Digite o nome da fruta..."}/>
                    &nbsp;&nbsp;
                    <button type="submit"> Inserir Fruta </button>
                </form>
                <hr/>
                <label> Lista de frutas:</label>
                &nbsp;&nbsp;
                <select id={'selectFruta'}>
                    {this.renderOptions()}
                </select>
                <hr/>
                <button onClick={this.showAlert}> Selecionar Fruta</button>
            </>
        )
    }

    /**
     * Essa função mapeia o array de frutas e para cada index do array, cria uma tag option e retorna o resultado
     * @author Alef Faria Silva
     * */
    renderOptions() {
        return this.state.arrayFrutas.map(
            (fruta, i) => <option key={i} value={fruta}> {fruta} </option>
        );
    }

    /**
     * Essa função cria uma cópia do vetor de frutas e insere no novo vetor o valor recebido do input do formulário,
     * digitado pelo usuário
     * @param event evento recebido do form
     * @author Alef Faria Silva
     * */
    handleEvent(event) {
        console.log(event.target[0].value)
        let frutasCopy = this.state.arrayFrutas;
        frutasCopy.push(event.target[0].value);
        this.setState({arrayFrutas: frutasCopy});
        event.preventDefault();
    }

    /**
     * Essa função dispara um alerta em tela, o texto presente no alerta é o valor atual selecionado na lista de frutas
     * @author Alef Faria Silva
     * */
    showAlert() {
        alert(document.getElementById("selectFruta").value);
    }
}

export default TelaFrutas;