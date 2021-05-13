import {Component} from 'react';
import Display from '../FormReciever/ParentForm';

class User extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            fname:"",
            lname:"",
            
         }
    }
    onFirstNameChange = (event) => {
        this.setState({
            fname: event.target.value,
        });
      }
      onLastNameChange = (event) => {
        this.setState({
            lname: event.target.value,
        });
      }

    render() { 
        return ( 
                <div>
                    <div>
                        <center><b>First Name: </b><input type = "text" onChange={this.onFirstNameChange} /></center><br/>
                        <center><b>Last Name: <input type = "text" onChange={this.onLastNameChange}/></b></center><br/>
                     </div>
                     <div >
                     <Display firstname={this.state.fname} lastname={this.state.lname}></Display>
                     </div>
                </div>
         );
    }
}
export default User;
