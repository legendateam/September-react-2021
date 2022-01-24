import React, {useEffect, useState} from 'react';
import axiosInstance from "../../../../services/axios.service/axios.service";

import css from '../../../styles/episode.module.css'

const Details = ({details}) => {
    let [characters, setCharacters] = useState(null);

    useEffect(() => {
        axiosInstance(details)
            .then(response => response.data)
            .then(character => setCharacters(character))
    }, [])

    return (
        <div className={css.character}>
            {
                !!characters && <div>
                    <div><img src={characters.image} alt={characters.name}/></div>
                    <p><strong>name:</strong> {characters.name}</p>
                    <p><strong>status</strong>: {characters.status}</p>
                    <p><strong>species:</strong> {characters.species}</p>
                    <p><strong>gender:</strong> {characters.gender}</p>
                    <p><strong>origin:</strong> {characters.origin.name}</p>
                    <p><strong>location:</strong> {characters.location.name}</p>
                </div>
            }
        </div>
    );
};

export default Details;