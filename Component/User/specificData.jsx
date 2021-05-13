import React,{Component} from 'react';
import axios from 'axios';

class UserData extends Component{
    constructor(props){
        super(props);
        this.state={
            users:[]
        }
    }
loadUsers=()=>{
    let id=this.props.match.params.id;
    axios.get('http://jsonplaceholder.typicode.com/users/'+ id).then(response=>{
        console.log(response);
        this.setState({
            users:response.data
        })
    })
}
componentDidMount(){
    this.loadUsers();
}
render(){
    return(
        <div>
                    <h3>{this.state.users.id}</h3><hr></hr>
                    <h3>Name: {this.state.users.name}</h3>
                    <h3>Usermail: {this.state.users.email} </h3> 
                    <h3>City: {this.state.users.address && this.state.users.address.city}</h3>
                    
                
        </div>
    );
}
}export default UserData;