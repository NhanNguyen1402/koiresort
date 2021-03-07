import React from 'react';
import Banner from '../components/Banner';
import BannerContent from '../components/BannerContent';
import {Link} from 'react-router-dom';
import Service from '../components/Service';


const Services = () => {
    return (
        <div>
            <Banner img = 'servicesBanner'>
                <BannerContent 
                    title = 'our services'>
                    <Link to= '/' className= 'btn-primary'>
                        return home
                    </Link>
                </BannerContent>
            </Banner>
            <Service/>
        </div>
        
    )
}
export default Services