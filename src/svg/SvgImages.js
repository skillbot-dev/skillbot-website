import React from 'react'
import HeroImg from '../images/hero.svg';
import WorkshopsImg from '../images/workshops.svg';
import MarketingImg from '../images/marketing.svg';
import GlobalOrientationImg from '../images/globalorientation.svg';

export const GlobalOrientation = (props) => (
    <img src={GlobalOrientationImg} alt="Orientation" />
);
export const Marketing = (props) => (
    <img src={MarketingImg} alt="Marketing" />
);

export const Workshops = (props) => (
    <img src={WorkshopsImg} alt="Workshops" />
);

export const HeroImage = (props) => (
    <img src={HeroImg} alt="Hero" />
);