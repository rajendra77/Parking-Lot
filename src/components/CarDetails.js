import React, { Component } from 'react';
import '../App.css';
import RowData from './RowData'
class CarDetails extends Component{

    state={
      cars:[],
      showData:false
    }
    
    addState=()=>{
        var data=[]
        console.log(this.props.carDetails)
       this.props.carDetails.map((item)=>{
            data.push(item)
        })
      this.setState({
          cars:data
      })
    
    }
    deleteMethod = key =>{
        
        this.state.cars.splice(key,1)
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
    render(){
        let row=this.state.cars.map((val,key) => {
            return <RowData tableStatus={this.props.tableStatus} key={key} keyVal={key} val={val}
                   deleteMethod={()=> this.deleteMethod(key)}/>
        })
        return(
            <div>

               {this.showData()}
             <div>
                <table>
                  <thead>
                  <tr>
                      <th>Slot No</th>
                      <th>Registration number</th>
                      <th>Color of Car</th>
                      <th>button</th>
                  </tr>
                  </thead>
                   {row}     
              </table>
           </div>
   </div>
        )
    }
}

export default CarDetails;