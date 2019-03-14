import React, { Component } from 'react';
import '../App.css';
class Table extends Component {
    
    state={
        carDetails:[],   
    }
    
    carDetailsTable = () =>{
        console.log(this.props.numberOfCars)
        let i=0;
        let x=this.props.numberOfCars
        let alphabets='ABCDEFGHIJKLMNOPQRSTUVWZXYZ'
        let color=['Black','White','Blue','Red']
        let arr=[]
        for(i=0;i<x;i++)
        {       
               arr.push(
                    alphabets.charAt(Math.floor(Math.random()*alphabets.length))+
                    alphabets.charAt(Math.floor(Math.random()*alphabets.length))+"-"+
                    Math.floor(Math.random()*100)+"-"+alphabets.charAt(Math.floor(Math.random()*alphabets.length))+"-"+
                    alphabets.charAt(Math.floor(Math.random()*alphabets.length))+
                    alphabets.charAt(Math.floor(Math.random()*alphabets.length))+"-"+
                    Math.floor(Math.random()*10000)+"-"+
                    color[ Math.floor(Math.random() *4 )])        
          
        } 
        this.setState({
            carDetails:arr
        })     
    }

    CarList = () =>{
        const numbers = this.state.carDetails;
        const listItems = numbers.map((number,index) =>
          <li key={index}>{number}</li>
        );
        return (     
          <ol>{listItems}</ol>
        );
      
      }
      
    generateRandomNumber = () =>{
        if(this.props.readyToGenerateNumber===true)
        return(
            <div>
                 <button onClick={this.carDetailsTable}>Generate Car Details</button>
                  <div className='list'>
                      {this.CarList()}
                  </div>
            </div>       
        )
    }
    render(){
     
        return(
        <div>
          <div>{this.generateRandomNumber()}</div>
          
        </div>
        )
    }
}


export default Table