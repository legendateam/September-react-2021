import {Link} from "react-router-dom";

import css from '../../../styles/episode.module.css'

const Episode = ({episodes}) => {

    const {id,name,air_date,episode} = episodes;

    return (
        <div className={css.episode}>
            <h2>{name}</h2>
            <h4>{episode}</h4>
            <h4>{air_date}</h4>
            <Link to={id.toString()}>episode details</Link>
        </div>
    );
};

export default Episode;