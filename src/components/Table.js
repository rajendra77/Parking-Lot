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
                    Math.floor(Math.random()*100)+"-"+
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

    generateRandomNumber = () =>{
        if(this.props.readyToGenerateNumber===true)
        return(
            <div >
                 <button  className='button1' onClick={this.carDetailsTable}>Generate Car Details</button>
                 
            </div>       
        )
    }

    render(){
     
        return(
        <div className='tableData'>
          <div>{this.generateRandomNumber()}</div>
          <CarDetails tableStatus={this.state.tableStatus} carDetails={this.state.carDetails} deleteMethod={this.deleteMethod}/>
        </div>
        )
    }
}


export default Table