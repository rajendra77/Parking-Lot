import React, { Component } from 'react';

class Table extends Component {
    
    state={
        carDetails:[],
        alphabets:'ABCDEFGHIJKLMNOPQRSTUVWZXYZ'
    }
    
    carDetailsTable = () =>{
       this.setState({
           carDetails:this.state.carDetails.concat(this.state.alphabets.charAt(Math.floor(Math.random()*this.state.alphabets.length))+
           this.state.alphabets.charAt(Math.floor(Math.random()*this.state.alphabets.length))+"-"+
           Math.floor(Math.random()*100)+"-"+this.state.alphabets.charAt(Math.floor(Math.random()*this.state.alphabets.length))+"-"+
           this.state.alphabets.charAt(Math.floor(Math.random()*this.state.alphabets.length))+
           this.state.alphabets.charAt(Math.floor(Math.random()*this.state.alphabets.length))+"-"+
           Math.floor(Math.random()*10000))
       })
    }
    generateRandomNumber = () =>{
        if(this.props.readyToGenerateNumber===true)
        return(
            <div>
                 <button onClick={this.carDetailsTable}>Generate Car Details</button>
                 <h2>{this.state.carDetails}</h2>
            </div>       
        )
    }
    render(){
    
        return(
        <div>
          {this.generateRandomNumber()}
        </div>
        )
    }
}


export default Table