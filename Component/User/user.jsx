import React,{Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class Users extends Component{
    constructor(props){
        super(props);
        this.state={
            users:[],
            loading:true

        }
    }
loadUsers=()=>{
    axios.get('http://jsonplaceholder.typicode.com/users').then(response=>{
        console.log(response);
        this.setState({
            users:response.data,
            loading:false
        })
    })
}
componentDidMount(){
    this.loadUsers();
}
render(){
    let loading;

    
    return(
        <div>
            <ul>
                {
                    this.state.loading?<p>Loading...</p>:this.state.users.map(user=><li key={user.id
                    }><Link to={ '/users/' +
                    user.id}>{user.name}</Link>{user.name}</li>)
                }
            </ul>
        </div>
    );
}
}export default Users;