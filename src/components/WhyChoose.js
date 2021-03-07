import React, { Component } from 'react'
import kind from '../images/kind.jpg'
import ob from '../images/ob.jpg'
import inva from '../images/inva.jpg'
import ServiceTitle from './ServiceTitle';



export default class WhyChoose extends Component {
    state ={
        koi:[
            {
                img: kind,
                info: 'Being kind to the Environment and each other – Active Community Involvement.'
            },
            {
                img: ob,
                info: 'Being proactive towards guests’ needs and wants. Paying attention to detail and following up at every opportunity. Exceeding our guests’ expectations.'
            },
            {
                img: inva,
                info: 'Think outside the square, Creativity, Passion, and dare to be different.'
            }
        ]
    }
    render() {
        return (
            <section className='services'>
                <ServiceTitle title = 'Why Choose'/>
                <div className= "services-center">
                    {this.state.koi.map((item, index)=>{
                        return <article key={index} className= 'service'>
                            <img src={item.img} alt =""/>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}




