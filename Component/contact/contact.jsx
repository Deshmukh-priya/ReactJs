
import { Component } from "react";
import "./contact.css";
class Contact extends Component{
       constructor(props){
        super(props);
        this.styleObj ={
        
        textDecoration:'underline'
    };
    
     this.title=props.gender === 'M' ?  'Mr.' : 'Ms.' ;
     this.classes= props.gender === 'M' ? 'contactCard male' : 'contactCard female';
     
     this.state={
        contacted:props.contacted
     }
    }
     contactchanged=()=>{
         this.setState({
             contacted:!this.state.contacted
             
         });
     }

     render(){
         console.log(this.state.contacted);
         this.contactedChange=this.state.contacted===true?'contactCard checked':this.classes;
    return (
        <div className={this.classes,this.contactedChange}>
        <div>
        <h3 style={this.styleObj}>{this.title}{this.props.name}</h3>
        <hr/>
        {
            //this.props.mobile && 
            <h3>Mobile:{this.props.mobile}</h3>
        }
        {
           // props.email ? <h3>Email:{props.email}</h3> : <h3>No Mail Id</h3>
           <h3>Email Id:{this.props.email? this.props.email:<span>***@cap.com</span>}</h3>
        }
        </div>
            <hr/>
            
            <input type='checkbox' checked={this.state.contacted } onChange={this.contactchanged}/>Contacted
            
            
        </div>
        
     );
    }
}
 
export default Contact;