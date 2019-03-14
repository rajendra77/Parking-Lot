import React, { Component } from 'react';
import '../App.css';
import CarDetails from './CarDetails'
class Table extends Component {
    
    state={
        carDetails:[],
        tableStatus:false,   
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
            carDetails:arr,
            tableStatus:true,
        })     
    }

  /*  CarList = () =>{
        const numbers = this.state.carDetails;
        const listItems = numbers.map((number,index) =>
          <li key={index}>{number}</li>
        );
        return (     
          <ol>{listItems}</ol>
        ); 
      }
      */
    generateRandomNumber = () =>{
        if(this.props.readyToGenerateNumber===true)
        return(
            <div>
                 <button onClick={this.carDetailsTable}>Generate Car Details</button>
                 
            </div>       
        )
    }
    render(){
     
        return(
        <div>
          <div>{this.generateRandomNumber()}</div>
          <CarDetails tableStatus={this.state.tableStatus} carDetails={this.state.carDetails}/>
        </div>
        )
    }
}


export default Table