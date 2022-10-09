import React from 'react'
import './Banner.css'

const Banner = () => {

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + ' ...' : string
    }

    return (
        <header className='banner' style={{
            backgroundSize: 'cover',
            backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/afc06103-4d6a-4236-b496-34b671a7e9ba/0a1bb975-77bd-4c7e-8524-7fb05c9dd015/US-en-20221003-popsignuptwoweeks-perspective_alpha_website_large.jpg')`,
            backgroundPosition: 'center center'
        }}>
            <div className='banner_contents'>
                <h1 className='banner_title'>
                    Movie Name
                </h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className='banner_description'>{truncate(`This is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test description`, 150)}</h1>
            </div>
            <div className='banner--fadeButton' />
        </header>
    )
}

export default Banner