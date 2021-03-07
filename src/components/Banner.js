import React from 'react'

const Banner = ({children, img}) => {
    return (
        <header className = {img}>
            {children}
        </header>
    )
}
Banner.defaultProps = {
    img:'defaultBanner'
}
export default Banner

