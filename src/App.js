import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';


class App extends Component {

   state={
    numberOfSpaces:'',
    ready:false,
    readyForCarDetails:false,
    numberOfCars:'',
   
   }

 
  handleChange = (event) =>{

    this.setState({
      numberOfSpaces:event.target.value,
      ready:false,
    })
  }
checkReady = () =>{

  this.setState({
     ready:true, 
  })
 }

 makeReadyForCarDetails = () =>{
  this.setState({
    readyForCarDetails:true, 
 })
}

handleChangeCar = (event) =>{
  this.setState({
    numberOfCars:event.target.value, 
 })
}


  render() {
    return (
      <div className="App">
        <Form numberOfCars={this.state.numberOfCars} makeReadyForCarDetails={this.makeReadyForCarDetails} readyForCarDetails={this.state.readyForCarDetails} handleChangeCar={this.handleChangeCar} readyStatus={this.state.ready} checkReady ={this.checkReady} handleChange={this.handleChange} numberOfSpaces={this.state.numberOfSpaces}/>
        
      </div>
    );
  }
}

export default App;
