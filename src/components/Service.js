import React, { Component } from 'react';
import ServiceTitle from './ServiceTitle';
import {BsFillBriefcaseFill} from 'react-icons/bs';
import {FaSpa} from 'react-icons/fa';
import {IoFastFoodSharp} from 'react-icons/io5';
import {GiBoatFishing} from 'react-icons/gi';

export default class Service extends Component {
    state= {
        services:[
        {
            icon: <BsFillBriefcaseFill/>,
            title: 'Mettings and Events',
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur '
        },
        {
            icon: <FaSpa/>,
            title: 'Spa and Wellness',
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur '
        },
        {
            icon: <IoFastFoodSharp/>,
            title: 'Dinning',
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur '
        },
        {
            icon: <GiBoatFishing/>,
            title: 'Fishing',
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur '
        }
        
    ]} 
    render() {
        return (
            <section className= 'services'>
                <ServiceTitle title = 'services'/> 
                <div className= "services-center">
                    {this.state.services.map((item, index)=>{
                        return <article key={index} className= 'service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
                 
                  
        )
    }
}
