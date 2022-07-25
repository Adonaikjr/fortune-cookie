import { Component, useState } from 'react'



class App extends Component {
 
  constructor(props) {
    super(props);
    this.state = { frasetext: '' };
    this.frases = ['Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.', 'Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho.', 'A sorte não existe. Aquilo a que chamas sorte é o cuidado com os pormenores.'];
    this.openbiscoito = this.openbiscoito.bind(this)
  }

  openbiscoito() {
    let state = this.state;
    let numberRandow = Math.floor(Math.random() * this.frases.length);
    state.frasetext = this.frases[numberRandow];
    this.setState(state);
  }

  render() {
    return (
      <>
        <h1>img biscoito</h1>
        <Button title='Abrir biscoito' openbiscoito={this.openbiscoito} />
        <h3>{ this.state.frasetext }</h3>
      </>
  )
  }
};


class Button extends Component {
  render(){
  return(
    <>
      <button onClick={this.props.openbiscoito}> { this.props.title } </button>
    </>
  )
}
}

export default App
