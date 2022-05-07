import React from "react";

/**
 * Essa tela tem como função contemplar o tópico 5 do trabalho, página que renderiza uma lista simples de pelo menos
 * 2 (duas) informações vindas de uma API.
 * @author Wayne Nascimento Souza
 * */
class TelaAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logradouro: '',
            bairro: '',
            cep: '',
            localidade: '',
            uf: ''
        }
    }

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={e => this.submitForm(e)}>
                        <label>CEP:
                            <input type="text"/>
                        </label>
                        <button type="submit">Buscar</button>
                    </form>
                </div>
                <div>
                    {this.renderAPI()}
                </div>
            </div>
        )
    }

    /**
     * Essa função realiza a requisição ao webservice de CEPs do ViaCep
     * @param e evento recebido do form
     * @author Wayne Nascimento Souza
     * */
    verificarCep = (e) => {
        const cep = e.replace(/\D/g, '');
        if(cep.length === 8) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => response.json().then(data => {
                this.setState({
                    logradouro: data.logradouro,
                    bairro: data.bairro,
                    cep: data.cep,
                    localidade: data.localidade,
                    uf: data.uf
                });
            }).catch(err => console.log(err)));
        }
    }

    /**
     * Essa função realiza o tratamento de qualquer submit que o formulário receba, nele é enviado o valor do input
     * @param event evento recebido do form
     * @author Wayne Nascimento Souza
     * */
    submitForm(event) {
        this.verificarCep(event.target[0].value);
        event.preventDefault();
    }

    /**
     * Essa função realiza a impressão das informações vindas da API na tela
     * @return elementos recuperados da API
     * @author Wayne Nascimento Souza
     * */
    renderAPI() {
        if(this.state.logradouro) {
            return (
                <div>
                    <p>Logradouro: {this.state.logradouro}</p>
                    <p>Bairro: {this.state.bairro}</p>
                    <p>CEP: {this.state.cep}</p>
                    <p>Cidade: {this.state.localidade}</p>
                    <p>Estado: {this.state.uf}</p>
                </div>
            )
        }
    }
}

export default TelaAPI;