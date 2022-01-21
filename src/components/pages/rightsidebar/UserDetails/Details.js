import React from 'react';
import {Link} from 'react-router-dom';

import './Details.css'

const Details = ({detail}) => {
    return (
        <div>
            <ol className={'list_detail'}>
                <li>
                    <ol>
                        <li>id:{detail.id}.</li>
                        <li>name: {detail.name}</li>
                        <li>username: {detail.username}</li>
                        <li>email: {detail.email}</li>
                    </ol>
                </li>

                <li>
                    <ol>
                        <li>street: {detail.address.street}</li>
                        <li>suite: {detail.address.suite}</li>
                        <li>city: {detail.address.city}</li>
                        <li>zipcode: {detail.address.zipcode}}</li>
                    </ol>
                </li>

                <li>
                    <ol>
                        <li>geoLat: {detail.address.geo.lat}</li>
                        <li>geoLng: {detail.address.geo.lng}</li>
                    </ol>
                </li>

                <li>
                    <ol>
                        <li>phone: {detail.phone}</li>
                        <li>website: {detail.website}</li>
                    </ol>
                </li>

                <li>
                    <ol>
                        <li>company: {detail.company.name}</li>
                        <li>catchPhrae: {detail.company.catchPhrase}</li>
                        <li>bs: detail.company.bs}</li>
                    </ol>
                </li>
            </ol>

            <div className={'user_details-btn'}>
                <Link to={'posts'}>
                    <button>show posts</button>
                </Link>
            </div>
        </div>
    );
};

export default Details;