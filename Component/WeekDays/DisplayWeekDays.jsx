const DayCheck = ({day}) => {
    let a=new Date('February 23, 2021');
    let day=a.getDay();
              let output=''
              if(day==3){
                   output='wuzz';
               }
               else{
                output='wizz';
               }
           
       return ( 
   
       <div>
           {
               <center>
                   <h3>{output}</h3>
               </center>
           }
       </div>
   
    );
   }
   
   export default DayCheck;