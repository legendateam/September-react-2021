import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import css from '../../../styles/episode.module.css'
import {episodeService} from "../../../../services/episode.service/episode.service";
import Details from "../Details/Details";

const EpisodeDetails = () => {
    const {id} = useParams();

    const [details, setDetails] = useState([]);

    useEffect(()=> {
        episodeService.getOne(id).then(value => setDetails(value.characters))
    },[])

    return (
        <div className={css.details}>
            {
                details.map((detail, index) => <Details key={index} details={detail}/>)
            }
        </div>
    );
};

export {EpisodeDetails};