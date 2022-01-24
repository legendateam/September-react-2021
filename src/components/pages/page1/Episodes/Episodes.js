import React, {useEffect, useState} from 'react';

import css from '../../../styles/episode.module.css';
import {episodeService} from "../../../../services/episode.service/episode.service";
import Episode from "../Episode/Episode";
import '../../../Wrap/Wrap.css'

const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);

    const [pageNumb, setPageNumb] = useState(1);

    useEffect(()=> {
        episodeService.getAllPage(pageNumb).then(value => setEpisodes([...value.results]))
    },[pageNumb])

    return (
        <div>
            <div className={css.episodes}>
                {
                    episodes.map(episode => <Episode key={episode.id} episodes={episode}/>)
                }
            </div>
            <div className={'btn__Previous_Next'}>
                <button onClick={() => {
                    if(pageNumb===3) {
                        setPageNumb(pageNumb-1)
                    } else if (pageNumb === 2) {
                        setPageNumb(pageNumb-1)
                    }
                }}>Previous</button>
                <button onClick={() => {
                    if(pageNumb===1) {
                        setPageNumb(pageNumb+1)
                    } else if (pageNumb===2) {
                        setPageNumb(pageNumb+1)
                    }
                }}>Next</button>
            </div>
        </div>
    );
};

export {Episodes};