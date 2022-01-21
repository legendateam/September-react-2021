import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {albumsServices} from '../../../../services/albums.services';
import Photo from "../Photo/Photo";

const Photos = () => {
    const params = useParams();
    const albumId = params.albumId;

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        albumsServices.getPhotos(albumId).then(photo => setPhotos(photo))
    },[albumId])


    return (
        <div>
            {
                photos.map(photo => <Photo key={photo.id} photos={photo}/>)
            }
        </div>
    );
};

export {Photos};