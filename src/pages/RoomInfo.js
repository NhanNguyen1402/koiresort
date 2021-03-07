import React, { Component } from 'react'
import Banner from '../components/Banner'
import BannerContent from '../components/BannerContent'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'


export default class RoomInfo extends Component {
    constructor(props){
        super(props);
        // console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug
        }
    }
    static contextType = RoomContext;
    // componentDidMount(){

    // }
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if (!room){
            return <div className= 'error'>
                <h3>no such room could be found !!!</h3>
                <Link to = '/rooms' className = 'btn-primary'>
                    back to rooms
                </Link>
            </div>
        }
        const {name, description, capacity, size, price, extras,
        breakfast, images} = room;
        return (
            <>
                <Banner img= 'roomsBanner'>
                    <BannerContent title = {`${name} room`} >
                        <Link to= '/rooms' className= 'btn-primary'>
                            back to rooms
                        </Link>
                    </BannerContent>
                </Banner>
                <section className ='single-room'>
                    <div className= 'single-room-images'>
                        {images.map((item, index)=>{
                            return <img key={index} src={item} alt={name}/>
                        })}
                    </div>
                    <div className= 'single-room-info'>
                        <article className= 'desc'>
                            <h3>detail</h3>
                            <p>{description}</p>
                        </article>
                        <article className= 'info'>
                            <h3>info</h3>
                            <h6>price: ${price}</h6>
                            <h6>size: {size} SQFT</h6>
                            <h6>
                                max capaticy: {''}
                                {capacity > 1 ? `${capacity} people`: `${capacity} person`}
                            </h6>
                            <h6>{breakfast && "free breakfast included"}</h6>
                        </article>
                    </div>
                </section>
                <section className= 'room-extras'>
                    <h6>extras</h6>
                    <ul className= 'extras'>
                        {extras.map((item, index)=> {
                            return <li key= {index}>- {item}</li>
                        })}
                    </ul>
                </section>
            </>
        )
    }
}
