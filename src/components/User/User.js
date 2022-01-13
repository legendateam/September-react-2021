import "./User.css";

function User(props) {

    let {id, name, phone, email, website} = props;

    return (
        <div className='user'>
            <h2>{id}. {name}</h2>
            <p><b>email: </b>{email}</p>
            <p><b>phone: </b>{phone}</p>
            <p><b>website: </b>{website}</p>
        </div>
    );
}

export default User;