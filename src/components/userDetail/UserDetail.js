import React, {useState} from 'react';

const UserDetail = ({userDetails,id,saveIdUsersForPost}) => {

    return (
        <div className={'UserDetail'}>
            {
                userDetails && <p>{userDetails}<button onClick={(e)=>saveIdUsersForPost(e)} value={id}>show posts</button></p>
            }
        </div>
    );
};

export default UserDetail;