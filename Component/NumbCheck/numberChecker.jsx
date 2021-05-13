
const NumbCheck = ({number}) => {
 let arr=[]      
    if(number>0 && number<100){
        for(let i=1;i<=number;++i){

            if(i%3===0 && i%5===0){
                
                arr.push('fizzbuzz');
            }
            else if(i%3==0){
                arr.push('fizz');
            }
            else if(i%5==0){
                arr.push('buzz');
            }
            else{
                arr.push(i);
            }
        }
    }
    else{
        alert("Enter only positive value and greater than 100");
    }

        
    return ( 
      

    <div>
        {
            <center>
                <h3>{arr.map(item => {
                         return<ul style={{color:item==='fizz'?'blue':item==='buzz'?"green":""}}>{item}</ul>;
                     })}
                     
                     
                </h3>
            </center>
        }
    </div>

 );
}


export default NumbCheck;