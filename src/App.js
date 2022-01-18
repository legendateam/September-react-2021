import {useEffect, useState} from "react";

import './App.css';
import Header from "./components/Header/Header";
import Users from "./components/Body/Users";
import usersCervices from "./services/api/users.cervices";

const App = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        usersCervices().getALL().then(user => setUsers(user))
    }, []);
    const restart = () => {
        usersCervices().getALL().then(user => setUsers(user))
    }
    const filterUsers = (form) => {
        if (form.name) {
            setUsers(users.filter(user => user.name.toLowerCase().includes(form.name)))
        }
        if (form.username) {
            setUsers(users.filter(username => username.username.toLowerCase().includes(form.username)))
        }
        if (form.email) {
            setUsers(users.filter(email => email.email.toLowerCase().includes(form.email)))
        }
        if (!form.name && !form.username && !form.email && !users.length) {
            restart()
        }
    }
    return (
        <div>
            <Header filterUsers={filterUsers}/>
            <Users users={users}/>
        </div>
    );
}

export default App;

