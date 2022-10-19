import React, { useEffect, useState } from 'react'
import './Nav.css'
import Netflix from '../../assets/images/netflix.png'
// import { useHistory } from 'react-router-dom'

const Nav = () => {
    const [show, handleShow] = useState(false)
    // const history = useHistory

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar)
        return () => window.removeEventListener('scroll', transitionNavbar)
    }, [])

    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className='nav_contents'>
                {/* <img onClick={() => history.push('/')} className='nav_logo' src={Netflix} alt=' Netflix logo' /> */}
                <img className='nav_logo' src={Netflix} alt=' Netflix logo' />
                {/* <img onClick={() => history.push('/profile')} className='nav_avatar' src='https://i.pinimg.com/originals/d8/70/20/d87020c70b0bf5eec4918874fa7d0f9f.jpg' alt='Profile Avatar' /> */}
                <img className='nav_avatar' src='https://i.pinimg.com/originals/d8/70/20/d87020c70b0bf5eec4918874fa7d0f9f.jpg' alt='Profile Avatar' />
            </div>
        </div>
    )
}

export default Nav