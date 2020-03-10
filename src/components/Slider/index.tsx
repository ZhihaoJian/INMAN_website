import React, { useState, useEffect } from 'react';

import Banner from '../../assets/img/banner.webp';
import Banner1 from '../../assets/img/banner1.webp';
import Banner2 from '../../assets/img/banner1-2.webp';
import Banner3 from '../../assets/img/banner1-3.webp';
import Banner4 from '../../assets/img/banner3.webp';
import classnames from 'classnames';
import './index.css';


export default () => {

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(current => {
                if (current >= 4) return current = 0;
                else if (current < 0) return current = 4;
                return current + 1
            })
        }, 5000);
        return () => clearInterval(timer);
    }, [current]);

    return (
        <div className='slider-wrapper'>
            <div className='slider' style={{ transform: `translateX(${-current * 1200}px)` }}>
                <div className='slider-item'>
                    <img alt='轮播图' src={Banner4} />
                </div>
                <div className='slider-item'>
                    <img alt='轮播图' src={Banner} />
                </div>
                <div className='slider-item'>
                    <img alt='轮播图' src={Banner1} />
                </div>
                <div className='slider-item'>
                    <img alt='轮播图' src={Banner2} />
                </div>
                <div className='slider-item'>
                    <img alt='轮播图' src={Banner3} />
                </div>
                <div className='slider-item'>
                    <img alt='轮播图' src={Banner4} />
                </div>
                <div className='slider-item'>
                    <img alt='轮播图' src={Banner} />
                </div>
            </div>

            <div className='slider-dot'>
                {[0, 1, 2, 3, 4].map(v => (<span onClick={() => setCurrent(v)} key={v} className={classnames({
                    'slider-dot__item': true,
                    'active': v === current
                })} />))}
            </div>
        </div>
    );
}