import IncreaseComponent from './components/IncreaseComponent';
import React, { Component, Fragment } from 'react'


class App extends Component {
  constructor(){
    super()
    this.state = {
        compteur: 0,
        buttonText: 'Clique ici'
    }
  }

  increase = () => {
    this.setState({
      compteur: ++this.state.compteur
    })
  }

  render(){
  return (
    <Fragment>
      <p>{this.state.compteur}</p>
      <IncreaseComponent increase={this.increase} buttonText={this.state.buttonText}/>
    </Fragment>
  );
}}

export default App;
