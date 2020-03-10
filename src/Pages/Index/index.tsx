import React from 'react';
import Header from '../../components/Header/index.tsx';
import Slider from '../../components/Slider/index.tsx';
import CategoryItem from '../../components/CategoryItem/index.tsx';
import ShopImage from '../../assets/img/qie7.webp';
import ShopGirlsImage from '../../assets/img/qie8.webp';
import Footer from '../../components/Footer/index.tsx';
import BackToTop from '../../components/BackToTop/index.tsx'

export default () => {
    return (
        <div>
            <Header />
            <Slider />
            <CategoryItem />
            <img style={{ marginBottom: 16 }} alt='shop' src={ShopImage} />
            <img style={{ marginBottom: 86 }} alt='shop' src={ShopGirlsImage} />
            <Footer />
            <BackToTop/>
        </div>
    )
}