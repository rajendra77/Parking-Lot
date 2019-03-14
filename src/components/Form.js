import React, { Component } from 'react';

class Form extends Component {

  checkStatus = () => {
   
     if(this.props.readyStatus===true && this.props.numberOfSpaces!=='')
     {
      return (  
        <div>
             <h4>Your Paking lot is Ready for {this.props.numberOfSpaces} Cars</h4>
             <button onClick={this.props.makeReadyForCarDetails}>Now Park Cars</button>
        </div>
        )
     }      
  }

  GenerateCarRandomly= () => {
    
    if(this.props.readyForCarDetails===true)
    {
     return (  
       <div>
           <h4>Enter Random Number of cars to fill parking </h4>
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
        <div className='formContainer'>
                  <h2>Enter the no of parking spaces you want for your parking</h2>
           
                  <input type='number' name='noOfSpace' value={this.props.numberOfSpaces} onChange={this.props.handleChange} /><br/><br/>

                  <button onClick={this.props.checkReady}>Create Parking Lot</button>
           
                  <div>{this.checkStatus()}</div>

                  <div>{this.GenerateCarRandomly()}</div>
                       
        </div>
             
    );
  }
}

export default Form;
