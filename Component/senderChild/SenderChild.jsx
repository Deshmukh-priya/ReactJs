import { Component } from "react";
class SenderChild extends Component{
    constructor(props){
        super(props);
        this.state={
            counter:0

        }
    }
    incrementCounter=()=>{
        this.setState({
            counter: this.state.counter +0
        })
        //return this.state.counter;
        
    }
    shouldComponentUpdate(nextProps,nextState){
        return this.state.counter!==nextState.counter
    }
    /*componentDidUpdate(prevProps,prevState){
        //prevstate counter and this.state counter
        if(prevState.counter!==this.state.counter)
        this.props.onSend(this.state.counter);
    }*/
    render(){
       console.log("Sender");
        return(
            
            <div>
                <button onClick={this.incrementCounter}>Send to Parent</button>
            </div>
        )
    }
}
export default SenderChild;