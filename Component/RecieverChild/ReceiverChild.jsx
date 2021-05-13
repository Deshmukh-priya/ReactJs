import { Component } from "react";
import SenderChild from "../senderChild/SenderChild";
class RecieverChild extends Component{
    constructor(props){
        super();
        this.state={
            counter: props.counter
        }
    }
    
    render(){
        return(
            <div>
                <h3>the data from Parent is  :{this.state.fromParent}</h3>
             </div>
        )
    }
componentDidUpdate(prevProps,prevState){
    //prevstate counter and this.state counter
    if ( prevProps.fromParent!==this.props.fromParent)
    this.setState({
        fromParent:this.props.fromParent
    })
}
}

export default RecieverChild;