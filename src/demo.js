import React,{Component} from 'react';
class Demo extends Component{

    constructor(props){

        super(props)
            this.state ={

                Name:" ",
                Age:" "
            }
                //This helps to make the state to global if we are using normal Function
                //this.handleChange = this.handleChange.bind(this);
        
    }
        handleNameChange=(e)=>{

            this.setState(
                {
                    Name:e.target.value                    
                }
        );}
        
        handleAgeChange=(e)=>{

            this.setState(
                {
                    Age:e.target.value                    
                }

                );
        }

        createAlert=(e)=>{

            alert("Name:"+this.state.Name+"\nAge:"+this.state.Age)
        }
    render(){

        return(

            <div>
               <h2>Heloo</h2><br/>
               
               <input type="text" value={this.state.Name} onChange={this.handleNameChange}/><br/>
               <input type="text" value={this.state.Age} onChange={this.handleAgeChange}/><br/>
               
               <button onClick={this.createAlert}>Submit</button>  
            </div>    
        )
    }
}

export default Demo;