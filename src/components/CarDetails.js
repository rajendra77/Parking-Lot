import React, { Component } from 'react';
import '../App.css';
import RowData from './RowData'
import GovernmentRule from './GovernmentRule'
class CarDetails extends Component{

    state={
      cars:[],
      showCars:false,
      newCar:'',
      checkNewCar:false,
    }
    
    addState=()=>{
        var data=[]
        console.log(this.props.carDetails)
        this.props.carDetails.map((item)=>{
            data.push(item)
        })
       this.setState({
          cars:data,
          showCars:true
      })
    }

    deleteMethod = key =>{
        
        this.state.cars[key]=''
        this.setState({
            cars:this.state.cars
        })   
    }

    showData=()=>{
        if(this.props.tableStatus===true){
            return(
                <button className='button1' onClick={this.addState}>Show Data</button>
            )
            
        }
    }

    addNewcar=()=>{
       var n=this.state.cars.length
       var i=0
       var data=[]
       var flag=true
       for(i=0;i<n;i++){
           if(this.state.cars[i]=='' && flag===true){
                   data.push(this.state.newCar)
                   flag=false
            }
            else{
               data.push(this.state.cars[i])
            }    
       }
       if(this.state.newCar!='' && flag==true){
           data.push(this.state.newCar)
           flag=false
       }
       this.setState({
           cars:data,
           checkNewCar:true,
           newCar:''
       })
    }


    handleNewCar=(event)=>{
        this.setState({
            newCar:event.target.value
        })
    }


    newCar = () =>{
        if(this.state.showCars===true){
            return(
                <div className='details'>
                    <h2>Park New Car</h2>
                    <input placeholder='Ex. RP-12-AM-8356-Red' type='text' value={this.state.newCar} onChange={this.handleNewCar}/>
                    <button className='button' onClick={this.addNewcar}>Park Now</button>
                    
                </div>     
            )
        }
        
    }


    MainTable=()=>{
        if(this.props.tableStatus===true){
            return(
                
                  <thead>
                  <tr>
                      <th>Slot No</th>
                      <th>Registration number</th>
                      <th>Color of Car</th>
                      <th>button</th>
                  </tr>
                  </thead>
                     
             
                   
            )
        }
    }


    render(){
        let row=this.state.cars.map((val,key) => {
          
            return <RowData  tableStatus={this.props.tableStatus} key={key} keyVal={key} val={val}
                   deleteMethod={()=> this.deleteMethod(key)}/>
        })
        return(
            <div className='mainTable'>

               <div>{this.showData()}</div>
             <div className='govRule'>
                <table>
                    {this.MainTable()}
                    {row}   
                </table>
              
                {this.newCar()}
               
             </div>
             <GovernmentRule cars={this.state.cars} showCars={this.state.showCars}/>
   </div>
        )
    }
}

export default CarDetails;