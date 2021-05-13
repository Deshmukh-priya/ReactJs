import {Component} from "react";

class Click extends Component{
    constructor(){
        super();
    this.state={
        counter:0
    }
}
    incrementCounter=()=>{
        this.setState({
            counter: this.state.counter +2
        })
        console.log(this.state.counter);

    }

    
    render=()=>{
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.incrementCounter}>Click to increment</button>
            </div>
        )
    }
}
export default Click;