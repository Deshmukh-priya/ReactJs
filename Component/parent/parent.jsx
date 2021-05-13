import { Component } from "react";
import RecieverChild from "../RecieverChild/ReceiverChild";
import SenderChild from "../senderChild/SenderChild";

class Parent extends Component{
    constructor(props){
        super(props);
        this.state={
            message:'<Reciever child..>'
        }
    }
    getvalue=(e)=>{
        this.setState({
            message:e
        })
    }
    
    render(){
        return(
            <div>
                <h3>Message from child  : {this.state.message}</h3>
                <RecieverChild fromParent={this.state.message}></RecieverChild>
                 <SenderChild onSend={this.getvalue}></SenderChild>
             </div>
        )
    }
}
export default Parent;