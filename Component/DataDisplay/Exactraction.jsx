import { Component } from "react"
import "./Card.css"

class Extraction extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            contacted:props.contacted
        }
        
    }
    ContactChange=()=>{
        this.setState({
            contacted:!this.state.contacted
        })

    }
    render(){
        return(
            <div className="contactCard">
                <div>
                   <h3>Id: {this.props.id}</h3>
                </div>
                <div>
                   <h3>Name: {this.props.name}</h3>
                </div>
                <div>
                   <h3>Gender: {this.props.gender}</h3>
                </div>
                <input type='checkbox' checked={this.state.contacted} onChange={this.ContactChange}/>Contacted

            </div>
        )
    }

}
export default Extraction