import React, { Component } from 'react';
import '../App.css';
class CarDetails extends Component{
  
   showTable = () =>{
       if(this.props.tableStatus===true){
        let arr=this.props.carDetails
        console.log('Hello ther'+arr)
    
            const listItems = arr.map((number,index) =>{
                let data=number.split('-')
                let data1=data.slice(0,4)
                let RN=data1.join('-')
                console.log(data)
                console.log(RN)
                return(
                    <tr key={index}>
                         <td>{index+1}</td>
                         <td>{RN}</td>
                         <td>{data[4]}</td>
                   </tr>
                )
               
            }     
            );
            return (     
              <tbody>{listItems}</tbody>
            ); 
        
       }
    
      
   }

    render(){
        return(
            <div>
                <h2>Hello there</h2>
             <div>
                <table>
                  <thead>
                  <tr>
                      <th>Slot No</th>
                      <th>Registration number</th>
                      <th>Color of Car</th>
                  </tr>
                  </thead>
                  
                  
                     {this.showTable()}
                  
                 
              </table>
           </div>
   </div>
        )
    }
}

export default CarDetails;