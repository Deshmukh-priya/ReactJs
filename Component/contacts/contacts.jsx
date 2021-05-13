import Contact from '../contact/contact';
import {contactList} from '../data/contact-list'


const Contacts=()=>{
    let contacts=contactList.map(c=> <Contact key={c.id}
                                               name={c.name}
                                               email={c.email}
                                               mobile={c.mobile}
                                               gender={c.gender}
                                               contacted={c.contacted}></Contact>)
    return(
        <div>
            
            {contacts}

        </div>
        
       

    )
}
export default Contacts;
