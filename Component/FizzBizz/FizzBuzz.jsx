import { Component } from "react";
import NumbCheck from "../NumbCheck/numberChecker";
//import './style.css';

class FizzBuzz extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            number:0,
            
            
         }
        //this.colourChange=props.output==='buzz'?'buzz':'fizz';

    }
    onNumberChange = (event) => {
        this.setState({
            number: event.target.value,
           
        });
      }
      
    render() { 
        return ( 
            
                <div >
                   
                        <center><b>Enter Number: </b><input type = "number" onChange={this.onNumberChange} /></center><br/>
                        <div>
                        <NumbCheck number={this.state.number}></NumbCheck>
                     </div>
                     
                </div>
         );
    }
}
export default FizzBuzz;