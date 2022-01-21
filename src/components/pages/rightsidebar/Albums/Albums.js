import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from 'react-router-dom';

import {usersServices} from '../../../../services/users.services';
import Album from '../Album/Album';

const Albums = () => {
    const params = useParams();
    const id = params.id;

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        usersServices.getAlbums(id).then(album => setAlbums(album))
    },[id])
    return (
        <div>
            <div>
                {
                    albums.map(album => <Album key={album.id} albums={album}/>)
                }
            </div>
            <Outlet/>
        </div>
    );
};

export {Albums};