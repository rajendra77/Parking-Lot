import React, { Component } from 'react';
import '../App.css';

class RowData extends Component{
      
    showTable = () =>{
        if(this.props.tableStatus===true ){
         let number=this.props.val
                 let data=number.split('-')
                 let data1=data.slice(0,4)
                 let RN=data1.join('-')
                 
                 return(
                     <tr key={this.props.keyVal}>
                          <td>{this.props.keyVal+1}</td>
                          <td>{RN}</td>
                          <td>{data[4]}</td>
                          <td><button onClick={this.props.deleteMethod}>Remove Car</button></td>
                    </tr>
                 )
        }   
    }
    
    render(){
        return(
            <tbody>
                {this.showTable()}
            </tbody>
        )
    }
}

export default RowData;