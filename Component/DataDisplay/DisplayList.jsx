import Extraction from "./Exactraction"
import { list } from "./list"

const DisplayList=()=>{
    let view=list.map(c=> <Extraction key={c.id} 
        Id={c.id} 
        name={c.name}
        gender={c.gender} 
        contacted={c.contacted}
    ></Extraction>)

    return(
        <div>
            {
                view
            }
        </div>
    )
}
export default DisplayList