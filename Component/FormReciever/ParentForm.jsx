import { Component } from "react";


const Display = ({
    firstname,lastname}) => {
    return ( 
        <div>
            {
                <center><h3><i>First name is {firstname} and LastName is {lastname}</i></h3></center>
            }
        </div>

     );
}
 
export default Display;