import React from "react";

/**
 * Essa tela tem como função contemplar o tópico 2 do trabalho, uma tela onde o usuário pode adicionar e remover
 * imagens, as quais estão no diretório "/public/tela2/", na tela.
 * @author Gabriel Guimarães de Almeida
 * */
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

    /**
     * Essa função realiza o tratamento de qualquer submit que o formulário receba, nele é adicionado ou retirado
     * as imagens do state.
     * @param event evento recebido do form
     * @author Gabriel Guimarães de Almeida
     * */
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

    /**
     * Essa função realiza a cosntrução dos elementos das imagens na tela para o usuário
     * @return vetor de elementos "<img>"
     * @author Gabriel Guimarães de Almeida
     * */
    renderImagens() {
        return this.state.imagens.map(
            (imagem, i) => (
                <img height="200px" width="200px" key={i} alt={imagem} src={require('../../public/tela2/' + imagem + '.png')} />
            )
        )
    }
}

export default TelaImagensGaleria;