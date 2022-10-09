import React from 'react';
import SliderItem from './UI/Slider/SliderItem';
import stadion from '../images/stadion.jpeg'
import karakuz from '../images/karakuz.jpeg'
import kai from '../images/kai.jpeg'
import arrow from '../images/arrow.png'
import ArrowButton from '../components/UI/ArrowButton/ArrowButton'
import { TransitionGroup } from 'react-transition-group'
import PostService from '../API/PostService';

const Slider = () => {
    const [sliderProps, setSliderProps] = React.useState([
        {
            backgroundText: 'Массовые мероприятия',
            subtitle: 'Фестиваль',
            title: 'Лето.KARAKUZ',
            description: 'В основе этнофестиваля Каракуз лежат многовековые традиции проведения ярмарок и уличных выступлений.',
            image: karakuz,
            bgColor: '#FFDC62',
            bgTextColor: 'rgba(255, 204, 18, 0.5)'
        },
        {
            backgroundText: 'Площадки',
            subtitle: 'Популярные',
            title: 'Площадки города',
            description: 'Часто используемые площадки, для проведения мероприятий в городе.',
            image: stadion,
            bgColor: '#FFE2B5',
            bgTextColor: 'rgba(248, 190, 103, 0.5)'
        },
        {
            backgroundText: 'Учебное мероприятие',
            subtitle: 'АФ КНИТУ-КАИ',
            title: 'День учителя',
            description: 'День учителя - профессиональный праздник работников сферы образования.',
            image: kai,
            bgColor: '#D3FBD9',
            bgTextColor: 'rgba(183, 250, 193, 0.5)'
        }
    ])


    return (
        <div className='sliderContainer'>
            <ArrowButton key={Math.random()} arrow={arrow} isRight={false} />
            <ArrowButton key={Math.random()} arrow={arrow} isRight={true} />
            <TransitionGroup
            className='sliderContainer'
            >
                {sliderProps.map((item, index) => <SliderItem key={index+1} sliderProps={sliderProps[index]} />)}
            </TransitionGroup>
        </div>
    );
};

export default Slider;