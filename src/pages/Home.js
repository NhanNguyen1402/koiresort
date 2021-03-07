import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import BannerContent from '../components/BannerContent';
import FeatureRoom from '../components/FeaturedRoom';
import WhyChoose from '../components/WhyChoose'
import Wellcome from '../components/Wellcome'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
        <Banner>
            <BannerContent 
                title = 'Memories Never End' 
                subtitle='deluxe rooms starting at $120'>
                <Link to= '/rooms' className= 'btn-primary'>
                    our rooms
                </Link>
            </BannerContent>
        </Banner>
        <Wellcome/>
        <WhyChoose/>
        <FeatureRoom/>
        <Footer/>
        </>
    )
}
export default Home




