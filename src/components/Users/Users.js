import {useEffect, useState} from "react";

import User from "../User/User";
import './Users.css'

function Users() {

    let [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(user => setUsers(user))
    },[])

    return (
        <div className='users'>
            {
                users.map(user => <User
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    username={user.username}
                    email={user.email}
                    phone={user.phone}
                    website={user.website}
                />)
            }
        </div>
    );
}

export default Users;