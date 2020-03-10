import React, { useState } from 'react';
import classnames from 'classnames';
import ProductImage1 from '../../assets/img/product_1.webp';
import ProductImage2 from '../../assets/img/product_2.webp';
import ProductImage3 from '../../assets/img/product_3.webp';
import ProductImage4 from '../../assets/img/product_4.webp';
import ProductImage5 from '../../assets/img/product_5.webp';
import ProductImage6 from '../../assets/img/product_6.webp';
import './index.css';

export default () => {
    const categoryList = ['服饰', '配饰', '女鞋', '箱包', '童装', '家具'];
    const imgUrl = [ProductImage1, ProductImage2, ProductImage3, ProductImage4, ProductImage5, ProductImage6];
    const [current, setCurrent] = useState(0);

    return (
        <div className='category-container'>
            <div className='category-buttons'>
                {categoryList.map((v, idx) => (<div onClick={(e) => setCurrent(idx)} className={classnames({
                    'active': idx === current
                })} key={v}>{v}</div>))}
            </div>
            <div className='category-image'>
                {imgUrl.map((url, idx) => <img style={idx === current ? { display: 'block' } : { display: "none" }} alt={categoryList[idx]} src={url} />)}
            </div>
        </div>
    )
}