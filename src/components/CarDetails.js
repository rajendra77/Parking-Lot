import React, { Component } from 'react';
import '../App.css';
import RowData from './RowData'
class CarDetails extends Component{

    state={
      cars:[],
      showNewCar:false,
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
          showNewCar:true
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
                <button onClick={this.addState}>Show Data</button>
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
        if(this.state.showNewCar===true){
            return(
                <div>
                    <h2>Enter The Registration number and color of car to be parked</h2>
                    <input type='text' value={this.state.newCar} onChange={this.handleNewCar}/>
                    <button onClick={this.addNewcar}>Park Now</button>
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
            <div>

               {this.showData()}
             <div>
                <table>
                    {this.MainTable()}
                    {row}   
                </table>
              
                {this.newCar()}
               
             </div>
   </div>
        )
    }
}

export default CarDetails;