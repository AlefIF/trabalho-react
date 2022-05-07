import React from "react";

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

    submitForm(event) {
        this.verificarCep(event.target[0].value);
        event.preventDefault();
    }

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