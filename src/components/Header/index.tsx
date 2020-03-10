import React from 'react';
import Logo from '../../assets/img/logo.png';
import './index.css';

export default () => {
    return (
        <header className='header'>
            <img alt='Logo' src={Logo} className='header-logo' />
            <ul className='header-menu'>
                <li className='active'><a>首页</a></li>
                <li><a>品牌</a></li>
                <li><a>产品</a></li>
                <li><a>政策</a></li>
                <li><a>联系</a></li>
            </ul>
        </header>
    )
}