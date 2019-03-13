import React, { Component } from 'react';

class Form extends Component {

  checkStatus = () => {
   
     if(this.props.readyStatus===true && this.props.numberOfSpaces!=='')
     {
      return (  
        <div>
             <h1>Your Paking lot is Ready for {this.props.numberOfSpaces} Cars</h1>
             <button onClick={this.props.makeReadyForCarDetails}>Proceed</button>
        </div>
        )
     }      
  }

  GenerateCarRandomly= () => {
    
    if(this.props.readyForCarDetails===true)
    {
     return (  
       <div>
           <h2>Enter Random Number of cars to fill parking </h2>
           <input type='text' name='noOfCars' value={this.props.numberOfCars} onChange={this.props.handleChangeCar}/>
           <br/>
           <button onClick={this.props.Proceed}>Proceed</button>
           <br/>
         
       </div>
       )
    }      
 }
  

  render() {
  
    return (
        <div>
                  <h2>Enter the no of parking spaces you want for your parking</h2>
           
                  <input type='text' name='noOfSpace' value={this.props.numberOfSpaces} onChange={this.props.handleChange} />
                  <button onClick={this.props.checkReady}>Create</button>
           
                  <div>{this.checkStatus()}</div>

                  <div>{this.GenerateCarRandomly()}</div>
                       
        </div>
             
    );
  }
}

export default Form;
