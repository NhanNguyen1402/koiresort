import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import ServiceTitle from '../components/ServiceTitle'


// get room type
const getChange = (items, value) =>{
    return [...new Set (items.rooms.map(item => item[value]))]
}


export default function RoomFilter(rooms) {
    const context = useContext(RoomContext);
    const {
        handleChange, type, capacity, price, minPrice, maxPrice
    }= context;
    // get room types
    let types = getChange(rooms, 'type');
    types = ['all', ...types];
    types = types.map((item, index)=>{
        return <option value={item} key={index}>{item}</option>
    })
    // get room type end
    // get guests
    let guests = getChange(rooms, 'capacity')
    guests = guests.map((item, index)=>{
        return <option key={index} value={item}>{item}</option>
    })
    // get guests end
    // let price = getChange(rooms, 'price')
    // price = price.map((item, index))

    return (
        <section className='filter-container'>
            <ServiceTitle title="search rooms"/>
            <form className='filter-form'>
                {/* room types */}
                <div className='form-group'>
                    <label htmlFor='type'>room type</label>
                    <select 
                        name='type' 
                        id='type' 
                        value={type} 
                        className='form-control'
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
                {/* guests */}
                <div className='form-group'>
                    <label htmlFor='capacity'>Guests</label>
                    <select 
                        name='capacity' 
                        id='capacity' 
                        value={capacity} 
                        className='form-control'
                        onChange={handleChange}
                    >
                        {guests}
                    </select>
                </div>
                {/* price */}
                <div className='form-group'>
                    <label htmlFor='price'>Room Price ${price}</label>
                    <input type= 'range' name='price' min={minPrice} max={maxPrice}
                    id="price" value={price} onChange={handleChange} className='form-control'/>
                </div>
            </form>
        </section>
    )
}
