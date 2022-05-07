import React from "react";

class TelaImagensGaleria extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            imagens: []
        }
    }

    render() {

        return (
            <div>
                <div>
                    <form onSubmit={form => this.submitForm(form)}>
                        <input type="number" name="numero_imagem" min={1} max={10}/>
                        <button type="submit" onClick={() => this.setState({remove: false})}>
                            Adicionar imagem
                        </button>
                        <button type="submit" onClick={() => this.setState({remove: true})}>
                            Remover imagem
                        </button>
                    </form>
                </div>
                <div>
                    {this.renderImagens()}
                </div>
            </div>
        )
    }

    submitForm(event) {
        let numeroImagem = event.target[0].value

        let imagensCopy = this.state.imagens
        if(!this.state.remove){
            imagensCopy.push(numeroImagem)
        }else{
            imagensCopy = imagensCopy.filter(imagem => imagem !== numeroImagem)
        }
        this.setState({imagens: imagensCopy})

        event.preventDefault()
    }

    renderImagens() {
        return this.state.imagens.map(
            (imagem, i) => (
                <img height="200px" width="200px" key={i} alt={imagem} src={require('../../public/tela2/' + imagem + '.png')} />
            )
        )
    }
}

export default TelaImagensGaleria;