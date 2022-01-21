import React from 'react';
import {Link} from 'react-router-dom';

const Details = ({details}) => {
    return (
        <div>
            <div>
                <h4>id:{details.id} --- userId: {details.userId}</h4>
                <p>
                    {details.title}
                </p>
                <p>
                    {details.body}
                </p>
            </div>
            <div>
                <Link to={'comments'}><button>show comments</button></Link>
            </div>
        </div>
    );
};

export default Details;