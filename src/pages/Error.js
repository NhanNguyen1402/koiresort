import React from 'react';
import Banner from '../components/Banner';
import BannerContent from '../components/BannerContent';
import {Link} from 'react-router-dom';

export default function Error() {
    return (
        <Banner img= 'errorBanner'>
            <BannerContent 
                title = '404' 
                subtitle='page not found'>
                <Link to= '/' className= 'btn-primary'>
                    return home
                </Link>
            </BannerContent>
        </Banner>
    )
}
