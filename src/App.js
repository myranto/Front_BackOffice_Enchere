import { Component, useState } from "react";
import img from './logo.svg'
import Formulaire from "./component/Form";
import './App.css'

export default class App extends Component{
  constructor (props) {
    super(props);
    this.state= {
      text:"",
      fruits:[
        {id:0,nom:"mangue"}
      ]
    }
  }

  envoyer= (event)=>{
    event.preventDefault();
    const fruitcopy = [...this.state.fruits];
    fruitcopy.push({id:1,nom:this.state.text});
    this.setState({
    fruits:fruitcopy,text:""
    })
  }

  fonction= (event)=>{
    this.setState({
      text:event.target.value
    })
  }
 

  render () {
    return (
      <div className="mita">
       <h1>Insertion Categorie</h1>
      <Formulaire submit={this.envoyer} valiny={this.state.text} Change={this.fonction} fruits={this.state.fruits}></Formulaire>
    </div>
    );
  }


}

