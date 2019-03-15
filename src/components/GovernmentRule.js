import React,{Component} from 'react'

class GovernmentRule extends Component{
   
    state={
        selectBlack:false,
        selectWhite:false,
        selectBlue:false,
        selectRed:false,
        regno:'',
        slotNo:'',
        slotNoOfColor:[],
        seeSlot:false
       
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
   
    showRegNo= () =>{
        var name=''
        var regNo=[]
        this.props.cars.map((val) => {  
             
                            let number=val
                            let data=number.split('-')
                            let data1=data.slice(0,4)
                            let RN=data1.join('-')
                            let color=data[4]
                            
                            if(this.state.selectBlack===true && color=='Black'){
                               name='Registartion numbers of Cars'
                               regNo.push(RN)
                            }
                            else if(this.state.selectWhite===true && color=='White'){
                                name='Registartion numbers of Cars'
                                regNo.push(RN)
                            }
                            else if(this.state.selectBlue===true && color=='Blue'){
                                name='Registartion numbers of Cars'
                                regNo.push(RN)
                            }
                            else if(this.state.selectRed===true && color=='Red'){
                                name='Registartion numbers of Cars'
                                regNo.push(RN)
                            }
                           
                          
        })
      
        
        const listItems = regNo.map((number) =>
                <li>{number}</li>
         );
         regNo=[]
     
      return (
          <div>
              <h4>{name}</h4>
              <ol>{listItems}</ol>
          </div>
        
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
                    slotNo:key,
                    seeSlot:true
                 })
             }
                        
     })
     
    }

    showRegNoColor=()=>{
        if(this.props.showCars===true){
            return(
                <div>
                      <h3>Select the color to see that Color Cars</h3>
                      <button className='Black' onClick={this.selectBlack}></button>
                      <button className='White' onClick={this.selectWhite}></button>
                      <button className='Blue' onClick={this.selectBlue}></button>
                      <button className='Red' onClick={this.selectRed}></button>
                </div>
            )
        }
    }

    showSlotNo= () =>{
        if(this.state.seeSlot===true){
            return(
                <h3> Slot No of this car is {this.state.slotNo+1}</h3>
            )
        }
    }

    seeYourCarSlot= () =>{
        if(this.props.showCars===true){
            return(
                <div>
                    <h2>See Where your car is parked</h2>
                    <input placeholder='Enter Reg No' type='text' value={this.state.regno} onChange={this.handleSlot} /><br/>
                    <button className='button1' onClick={this.slotNo}>See Slot No</button>
                    {this.showSlotNo()}
                
                </div>
            )
        }
    }

    handleSlot = (event) =>{
        this.setState({
            regno:event.target.value
        })
           
     
    }
    
      
      
    render(){
        return(
            <div className='gov'>
                <div>
                    {this.showRegNoColor()}
                </div>
              
                <div>{this.showRegNo()}</div>
                <div>
                    {this.seeYourCarSlot()}
                </div>
            </div>
        )
    }
}

export default GovernmentRule