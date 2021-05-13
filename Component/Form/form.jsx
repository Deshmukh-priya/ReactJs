import axios from 'axios';
import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.state = {  
            
            data:{
                id:'',
                name:'',
                username:'',
                email:''
            },
            error:{
                id:'',
                name:'',
                username:'',
                email:''
            }

        }
       
    
    }
    
    handleChange=(e)=>{
        let{name,value}=e.target;
        let error ='';
        switch(name){
            case 'id':
                error=value.length === 0 ? 'id is Mandatory.' :
                 (value.length >3 ? 'id must have atmost 3 charaters':'')
                break;
            case 'name':
                error=value.length === 0 ? 'Name is Mandatory.' :
                 (value.length <3 ? 'Name must have atleast 3 charaters':'')
                break;
            case 'username':
                error=value.length === 0 ? 'Name is Mandatory.' :
                 (value.length <3 ? 'Name must have atleast 3 charaters':'')
                break;
            case 'email':
                error=value.length === 0 ? 'Name is Mandatory.' :''
                
                 break;
                                        

        }
        this.setState({
            error:{
                ...this.state.error,
                [name]:error
            }
        });
        this.setState({
            data:{
            ...this.state.data,
            [name]:value
            }
        });
        
    }
    validateForm=()=>{
        let valid=true;
        Object.values(this.state.error).forEach(val=>val.length>0 && (valid=false));
        return valid;
    }
    
    handleSubmit=(e)=>{
        e.preventDefault();
        if(this.validateForm() && this.state.data.name!=='' && this.state.data.username!==''&& this.state.data.email!==''){
        axios.post('http://jsonplaceholder.typicode.com/users',this.state.data).then(response=>{
            console.log(response.data);
            
        });
        alert('Form submitted successfully')
    }
    else{
        alert("Form data is invalid");
    }
    }
    render() { 
        console.log(this.state.data);
        return (  
            
            <div style={{ width: '300px', margin: '10px', padding: '10px', border: '2px solid blue' }}>
                <form onSubmit={this.handleSubmit}>
                   
                    <div className='form-group' style={{ marginBottom: '20px' }}>
                        <label>Id</label>
                        <input type='text'
                               name='id'
                               value={this.state.data.id}
                               onChange={this.handleChange}
                               className='form-control' />
                               {
                                   this.state.error.id.length>0 && <div className='alert alert-danger'>{this.state.error.id}</div>
                               }
                    </div>
                    <div className='form-group' style={{ marginBottom: '20px' }}>
                        <label>Name</label>
                        <input type='text'
                               name='name'
                               value={this.state.data.name}
                               onChange={this.handleChange}
                               className='form-control' />

                               {
                                   this.state.error.name.length>0 && <div className='alert alert-danger'>{this.state.error.name}</div>
                               }
                    </div>
                    <div className='form-group' style={{ marginBottom: '20px' }}>
                        <label>User Name</label>
                        <input type='text'
                               name='username'
                               value={this.state.data.username}
                               onChange={this.handleChange}
                               className='form-control' />
                               {
                                   this.state.error.username.length>0 && <div className='alert alert-danger'>{this.state.error.username}</div>
                               }
                    </div>
                    <div className='form-group' style={{ marginBottom: '20px' }}>
                        <label>Email Id</label>
                        <input type='text'
                               name='email'
                               value={this.state.data.email}
                               onChange={this.handleChange}
                               className='form-control' />
                               {
                                   this.state.error.email.length>0 && <div className='alert alert-danger'>{this.state.error.email}</div>
                               }
                    </div>
                    <div>
                        <button className='btn btn-primary'>Submit</button>{
                            
                        }
                    </div>
                </form>
            </div>
        );
    }
}
 
export default Form;