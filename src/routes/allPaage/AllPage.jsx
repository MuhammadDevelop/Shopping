import React, { useState, useEffect, useContext } from 'react';
import Footer from '../../components/footer/Footer';
import Nav from '../../components/nav/Nav';
import a from './AllPage.module.scss';
import all from '../../../public/video/reack.mp4';
import axios from '../../api';
import star from '../../images/star.png';
import shoes from '../../images/adidas.png';
import serviceOne from "../../images/service1'.png";
import serviceTwo from "../../images/service2.png";
import serviceThree from "../../images/service3.png";
import korzinka from '../../images/headerImg3.png';
import cards from '../../cards/data';
import AppContext from '../../context/store';
import { NavLink } from 'react-router-dom';
import { Carousel } from 'antd';
import { useTranslation } from 'react-i18next';
const AllPage = () => {
    const [userData, setUserData] = useState([]);
    const [state, dispatch] = useContext(AppContext);
    const {t} = useTranslation()
    useEffect(() => {
        const getData = async () => {
            try {
                let response = await axios('/products');
                setUserData(response.data);
            } catch (error) {
                alert(error);
            }
        };
        getData();
    }, []);
    const userFetchData = userData.slice(0,12)
    console.log(userFetchData);
    const handleAddCard = (product) => {
      dispatch({ type: "ADDTOCARD", product });
      console.log(product);
    };

    return (
        <>
            <Nav />
            <div className={a.all}>
                    <video className={a.allImg} src={all} autoPlay loop muted />
                <div className={a.all__imgParent}>
                    <div className={a.aallParentCard}>
                        <h2 className={a.allParentTit}>
                        {t('all')}
                        </h2>
                        <div className={a.allParentCards}>
                            {userFetchData.map(product => {
                                const hasMultipleImages = product.images && product.images.length > 1;

                                return (
                                    <div className={a.all__card} key={product.id}>
                                        <img onClick={() => handleAddCard(product)} src={korzinka} alt="" className={a.all__icon} />
                                        <NavLink to={`/single/${product.id}`}>
                                            {hasMultipleImages ? (
                                                <Carousel autoplay>
                                                    {product.images.map((image, index) => (
                                                        <div key={index}>
                                                            <img
                                                                src={image}
                                                                alt={`Product image ${index + 1}`}
                                                                style={{ width: '100%', height: 'auto' }}
                                                            />
                                                        </div>
                                                    ))}
                                                </Carousel>
                                            ) : (
                                              <img
                                              src='https://cdn.pixabay.com/photo/2013/07/13/14/08/apparel-162192_1280.png'
                                              alt="Product image"
                                              style={{ width: '100%', height: 'auto' }}
                                          />
                                            )}
                                        </NavLink>
                                        <div className={a.all__cardBody}>
                                            <h1 className={a.all__cardTit}>
                                                {product.title}
                                            </h1>

                                            <p className={a.all__cardRaiting}>
                                                {[...Array(5)].map((_, index) => (
                                                    <span key={index} className={`star ${index < Math.floor(product.rating) ? 'filled' : (product.rating % 1 !== 0 && index === Math.floor(product.rating)) ? 'half-filled' : ''}`}>
                                                        &#9733; {/* Yulduz belgisi */}
                                                    </span>
                                                ))}
                                            </p>
                                            <div className={a.all__price}>
                                                <h2 className={a.all__cardPrice}>
                                                    ${product.price}
                                                </h2>
                                                <p className={a.all__sale}>
                                                    $534000
                                                </p>
                                                <p className={a.all__skid}>
                                                    $534000
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className={a.adiddas}>
                    <div className={a.container}>
                        <div className={a.adiddas__parent}>
                            <div className={a.adiddas__leftCard}>
                                <h1 className={a.adiddas__tit}>
                                   {t('adiddasTit')}
                                </h1>
                                <p className={a.adiddas__text}>
                                  {t('adiddasText')}
                                    <button className={a.adiddas__btn}>
                                        {t('adiddasBtn')}
                                    </button>
                                </p>
                            </div>
                            <div className={a.adiddas__rightBanner}>
                                <img src={shoes} alt="" className={a.adiddas__banner} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={a.service}>
                    <div className={a.container}>
                        <ul className={a.service__parent}>
                            <li className={a.service__list}>
                                <img className={a.service__img} src={serviceOne} alt="" />
                                <h3 className={a.service__tit}>
                                   {t('serviceOne')}
                                </h3>
                                <p className={a.service__text}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </li>
                            <li className={a.service__list}>
                                <img className={a.service__img} src={serviceTwo} alt="" />
                                <h3 className={a.service__tit}>
                                {t('serviceTwo')}
                                </h3>
                                <p className={a.service__text}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </li>
                            <li className={a.service__list}>
                                <img className={a.service__img} src={serviceThree} alt="" />
                                <h3 className={a.service__tit}>
                                {t('serviceThree')}
                                </h3>
                                <p className={a.service__text}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={a.rated}>
                    <div className={a.container}>
                        <div className={a.rated__parent}>
                            <h1 className={a.rated__tit}>
                                {t('ratedTit')}
                                <div className={a.rated__cardParent}>
                                    {cards.map(products => (
                                        <div className={a.rated__card} key={products.id}>
                                            <div className={a.img__paernt}>
                                                <img src={products.img} className={a.rated__img} alt="" />
                                            </div>
                                            <div className={a.rated__body}>
                                                <h2 className={a.rated__tit}>
                                                    {products.name}
                                                </h2>
                                                <p className={a.all__cardRaiting}>
                                                    {[...Array(4)].map((_, index) => (
                                                        <span key={index} className={`star ${index < Math.floor(products.raiting) ? 'filled' : (products.raiting % 1 !== 0 && index === Math.floor(products.raiting)) ? 'half-filled' : ''}`}>
                                                            &#9733; {/* Yulduz belgisi */}
                                                        </span>
                                                    ))}
                                                </p>
                                                <div className={a.mapper}>
                                                    <p className={a.rated__price}>
                                                        {products.pirce}
                                                    </p>
                                                    <p className={a.rated__aksia}>
                                                        {products.sale}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AllPage;
