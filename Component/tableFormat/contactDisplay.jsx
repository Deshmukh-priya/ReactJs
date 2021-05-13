import {contactList} from '../data/contact-list'


const ContactDisplay=(props)=>{
    
    return(
        <table border='1px'>
            <thread>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                </tr>
            </thread>
            <tbody>
                {
                    contactList.map(c=> <tr key={c.id}>
                        <td>{c.id}</td>
                        <td>{c.name}</td>
                        <td>{c.email}</td>
                        <td>{c.mobile}</td>
                    </tr>)
                }
            </tbody>
        </table>
    )
}
export default ContactDisplay;
