import React,{Component} from 'react'

class GovernmentRule extends Component{
   
    state={
        selectBlack:false,
        selectWhite:false,
        selectBlue:false,
        selectRed:false,
        regno:'',
        slotNo:''
    }
    selectBlack = () =>{
        this.setState({
            selectBlack:true
        })
    }

    selectWhite = () =>{
        this.setState({
            selectWhite:true
        })
    }

    selectBlue = () =>{
        this.setState({
            selectBlue:true
        })
    }

    selectRed = () =>{
        this.setState({
            selectRed:true
        })
    }

    Black= () =>{
        var regNo=[]
        this.props.cars.map((val) => {  
             
                            let number=val
                            let data=number.split('-')
                            let data1=data.slice(0,4)
                            let RN=data1.join('-')
                            let color=data[4]
                            
                            if(this.state.selectBlack===true && color=='Black'){
                               regNo.push(RN)
                            }
                            else if(this.state.selectWhite===true && color=='White'){
                                regNo.push(RN)
                            }
                            else if(this.state.selectBlue===true && color=='Blue'){
                                regNo.push(RN)
                            }
                            else if(this.state.selectRed===true && color=='Red'){
                                regNo.push(RN)
                            }
                           
                          
        })
      
        const listItems = regNo.map((number) =>
                <li>{number}</li>
         );
         regNo=[]
     
      return (
        <ul>{listItems}</ul>
      );
      
  
    }

    slotNo = () =>{

        this.props.cars.map((val,key) => {  
             
            let number=val
            let data=number.split('-')
            let data1=data.slice(0,4)
            let RN=data1.join('-')
            if(RN===this.state.regno)
             {
                 this.setState({
                    slotNo:key
                 })
             }
            
                   
     })
    }

    handleSlot = (event) =>{
        this.setState({
            regno:event.target.value
        })
           
     
    }
    
      
      
    render(){
        return(
            <div>
                <button className='Black' onClick={this.selectBlack}></button>
                <button className='White' onClick={this.selectWhite}></button>
                <button className='Blue' onClick={this.selectBlue}></button>
                <button className='Red' onClick={this.selectRed}></button>
                <div>{this.Black()}</div>
                <div>
                    <h2>See Where your car is parked</h2>
                    <input type='text' value={this.state.regno} onChange={this.handleSlot} />
                    <button onClick={this.slotNo}>See Slot No</button>
                    <h2>Slot Is {this.state.slotNo+1}</h2>
                </div>
            </div>
        )
    }
}

export default GovernmentRule