import React from 'react';
import TopImage from '../../assets/img/top.webp';
import './index.css';

export default () => {

    

    return (
        <div title='回到顶部' className='back-to-top' onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}>
            <img src={TopImage} alt='backToTop' />
        </div>
    )
}