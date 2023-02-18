import React from 'react';
import Button from 'elements/Button';
import formatNumber from 'utils/formatNumber.js';

import IconTraveler from 'assets/images/icons/icon_traveler.svg';
import iconTreasure from 'assets/images/icons/icon_treasure.svg';
import IconCities from 'assets/images/icons/icon_cities.svg';

import ImageHero from 'assets/images/img-hero.jpg';
import ImageHeroFrame from 'assets/images/img-hero-frame.jpg';


export default function Hero(props) {

    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        });
    }

    return (
        <section className='container pt-4'>
            <div className='row align-items-center'>
                <div className='col-auto pr-5' style={{width: 530}}>
                    <h1 className='font-weight-bold line-height-1 mb-3'>
                        Forget Busy Work, 
                        Start Next Vacation
                    </h1>

                    <p className='mb-4 font-weight-light text-gray-500 w-75' style={{lineHeight: '170%'}}>
                        We provide what you need to enjoy your holiday with family. Time to make another memorable moments.
                    </p>   

                    <Button className='btn px-5' hasShadow isPrimary onclick={showMostPicked}>
                        Show Me Nows
                    </Button>    

                    <div className='row' style={{marginTop: 80}}>
                        <div className='col-auto' style={{marginRight: 20}}>
                            <img width='36' height='36' src={IconTraveler} alt={`${props.data.travelers} Travelers`}></img>
                            <h6 className='mt-3'>
                                {formatNumber(props.data.travelers)} <span className='text-gray-500 font-weight-light'>travelers</span>
                            </h6>
                        </div>
                        <div className='col-auto' style={{marginRight: 20}}>
                            <img width='36' height='36' src={iconTreasure} alt={`${props.data.treasures} Treaasures`}></img>
                            <h6 className='mt-3'>
                                {formatNumber(props.data.treasures)} <span className='text-gray-500 font-weight-light'>treaasures</span>
                            </h6>
                        </div>
                        <div className='col-auto' style={{marginRight: 20}}>
                            <img width='36' height='36' src={IconCities} alt={`${props.data.cities} Cities`}></img>
                            <h6 className='mt-3'>
                                {formatNumber(props.data.cities)} <span className='text-gray-500 font-weight-light'>cities</span>
                            </h6>
                        </div>
                    </div>         
                </div>

                <div className='col-6 pl-5'>

                    <div style={{width: 520, height: 410, }}>
                        <img src={ImageHero} className='img-fluid position-absolute' style={{margin: '-30px 0 0 -30px', zIndex: 1}} alt='Room with couches'></img>
                        <img src={ImageHeroFrame} className='img-fluid position-absolute' style={{margin: '0 -15px -15px -0'}} alt='Room with couches Frame'></img>
                    </div>

                </div>
            </div>
        </section>
    )
}
