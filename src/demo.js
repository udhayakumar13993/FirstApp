import React, { Component } from 'react'
import ReactDOM from 'react-dom';
class Demo extends Component{

    constructor(props){

        super(props)
            this.state ={

                Name:"udhay ",
                Age:"27 "
            }
                //This helps to make the state to global if we are using normal Function
               this.handleInputChange = this.handleInputChange.bind(this);
        
    }
    handleInputChange(event) {
        //getting the target 
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
        
      componentDidMount(){

        document.getElementById("alert").click();
               
      }
        
        

        createAlert=(e)=>{
                console.log(this.state.Name);
            alert("Name:"+this.state.Name+"\nAge:"+this.state.Age)
        }
    
        render(){

        return(

            <div>
               <h2>Heloo</h2><br/>
               
               <label>Name:</label><input type="text" value={this.state.Name} onChange={this.handleInputChange} name="Name"/><br/>
               <label>Age:</label><input type="number" value={this.state.Age} onChange={this.handleInputChange} name="Age"/><br/>
               
               <button onClick={this.createAlert} id="alert">Alert</button>
            </div>    
        )
    }
}

export default Demo;