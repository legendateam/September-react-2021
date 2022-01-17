import React, {useState} from 'react';

const Header = () => {

    const [form, setForm] = useState({name: '', username: '', email: ''});
    const onFormSubmit = e => {
        e.preventDefault();
        console.log(form);
    };

    const onChangeLogin = e => {
        setForm({...form, [e.target.name]: e.target.value})
    };

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <label>Name:<input type="text" name={"name"} value={form.name} onChange={onChangeLogin}/></label>
                <label>UserName:<input type="text" name={"username"} value={form.username} onChange={onChangeLogin}/></label>
                <label>Email:<input type="text" name={"email"} value={form.email} onChange={onChangeLogin}/></label>
                <button>FIND</button>
            </form>
        </div>
    );
};

export default Header;