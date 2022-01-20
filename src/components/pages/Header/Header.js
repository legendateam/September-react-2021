import React from 'react';
import {Link,useNavigate} from "react-router-dom";

import css from './Header.module.css'
import logo from '../../pages/Header/logo/Blue-Big-Bird-Final-Logo.webp'

const Header = () => {
    const navigator = useNavigate();

    return (
        <div className={css.header}>
            <div className={css.wrapper}>
                    <img src={logo} alt={'okten'} onClick={() => navigator('/')}/>
                <div className={css.header__button}>
                    <Link to={'/users'}><button>users</button></Link>
                    <Link to={'/posts'}><button>posts</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;