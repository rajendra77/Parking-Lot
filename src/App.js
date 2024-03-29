import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';

class App extends Component {

   state={
    numberOfSpaces:'',
    ready:false,
    readyForCarDetails:false,
    numberOfCars:'',
    readyToGenerateNumber:false
    
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

Proceed = () =>{
  
    this.setState({
      readyToGenerateNumber:true
   })
  
 
}

  render() {
    return (
      <div >
        
        <div className="App">
           <Form Proceed={this.Proceed} numberOfCars={this.state.numberOfCars} makeReadyForCarDetails={this.makeReadyForCarDetails} readyForCarDetails={this.state.readyForCarDetails} handleChangeCar={this.handleChangeCar} readyStatus={this.state.ready} checkReady ={this.checkReady} handleChange={this.handleChange} numberOfSpaces={this.state.numberOfSpaces}/>
           <Table  readyToGenerateNumber= {this.state.readyToGenerateNumber} numberOfCars={this.state.numberOfCars}/>
        </div>
        
      </div>
    );
  }
}

export default App;
