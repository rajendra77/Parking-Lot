import React,{Component} from 'react'

class GovernmentRule extends Component{
   
    state={
        selectBlack:false,
        selectWhite:false,
        selectBlue:false,
        selectRed:false,
        selectBlack1:false,
        selectWhite1:false,
        selectBlue1:false,
        selectRed1:false,
        selectedColor:'',
        selectedColor1:'',
        regno:'',
        slotNo:'',
        slotNoOfColor:[],
        seeSlot:false
       
    }
    selectBlack = () =>{
        this.setState({
             selectedColor:'Black cars are',
             selectBlack:true,
             selectWhite:false,
             selectBlue:false,
              selectRed:false,
        })
    }

    selectWhite = () =>{
        this.setState({
            selectedColor:'White cars are',
            selectBlack:false,
            selectWhite:true,
            selectBlue:false,
            selectRed:false,
        })
    }

    selectBlue = () =>{
        this.setState({
            selectedColor:'Blue cars are',
            selectBlack:false,
            selectWhite:false,
            selectBlue:true,
            selectRed:false,
        })
    }

    selectRed = () =>{
        this.setState({
            selectedColor:'Red cars are',
            selectBlack:false,
            selectWhite:false,
            selectBlue:false,
            selectRed:true,
        })
    }

    selectBlack1 = () =>{
        this.setState({
             selectedColor1:'Black cars are',
             selectBlack1:true,
             selectWhite1:false,
             selectBlue:false,
              selectRed:false,
        })
    }

    selectWhite1 = () =>{
        this.setState({
            selectedColor1:'White cars are',
            selectBlack1:false,
            selectWhite:true,
            selectBlue:false,
            selectRed:false,
        })
    }

    selectBlue1 = () =>{
        this.setState({
            selectedColor1:'Blue cars are',
            selectBlack1:false,
            selectWhite1:false,
            selectBlue1:true,
            selectRed1:false,
        })
    }

    selectRed1 = () =>{
        this.setState({
            selectedColor1:'Red cars are',
            selectBlack:false,
            selectWhite:false,
            selectBlue:false,
            selectRed:true,
        })
    }
   
    showRegNo= () =>{
        var selectedColor =this.state.selectedColor
       
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
          <div>
              <h4>{selectedColor}</h4>
              <ul>{listItems}</ul>
          </div>
        
      );
      
  
    }

    showAllSotNoOfColor= () =>{
        var selectedColor1 =this.state.selectedColor1
       
        var allSlotNo=[]
        this.props.cars.map((val ,key) => {  
             
                            let number=val
                            let data=number.split('-')
                            let data1=data.slice(0,4)
                            let RN=data1.join('-')
                            let color=data[4]
                            
                            if(this.state.selectBlack1===true && color=='Black'){
                               
                               allSlotNo.push(key)
                            }
                            else if(this.state.selectWhite1===true && color=='White'){
                                
                                allSlotNo.push(key)
                            }
                            else if(this.state.selectBlue1===true && color=='Blue'){
                               
                                allSlotNo.push(key)
                            }
                            else if(this.state.selectRed1===true && color=='Red'){
                               
                                allSlotNo.push(key)
                            }
                           
                          
        })
      
        
        const listItems1 = allSlotNo.map((number) =>
                <li>{number}</li>
         );
         allSlotNo=[]
     
      return (
          <div>
              <h4>{selectedColor1}</h4>
              <ul>{listItems1}</ul>
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

    showSlotNoColor =  () =>{
        if(this.props.showCars===true){
            return(
                <div>
                      <h3>Select the color to see All Slots</h3>
                      <button className='Black' onClick={this.selectBlack1}></button>
                      <button className='White' onClick={this.selectWhite1}></button>
                      <button className='Blue' onClick={this.selectBlue1}></button>
                      <button className='Red' onClick={this.selectRed1}></button>
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
                    {this.seeYourCarSlot()}
                </div>
                <div>
                    {this.showRegNoColor()}
                </div>
                <div>{this.showRegNo()}</div>
                <div>
                    {this.showSlotNoColor()}
                </div>
                <div>{this.showAllSotNoOfColor()}</div>
              
            </div>
        )
    }
}

export default GovernmentRule