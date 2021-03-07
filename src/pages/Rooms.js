import React from 'react';
import Banner from '../components/Banner';
import BannerContent from '../components/BannerContent';
import {Link} from 'react-router-dom';
import RoomContainer from '../components/RoomContainer';
const Rooms = () => {
    return (
        <>
            <Banner img= 'roomsBanner'>
                <BannerContent title = 'our rooms' >
                    <Link to= '/' className= 'btn-primary'>
                        return home
                    </Link>
                </BannerContent>
            </Banner>
            <RoomContainer/>
        </>
    )
}

export default Rooms
