import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../../components/Navbar/Nav'
import { selectUser } from '../../features/userSlice'
import { auth } from '../../firebase'
import './ProfileScreen.css'

const ProfileScreen = () => {
    const user = useSelector(selectUser)
    return (
        <div className='profileScreen'>
            <Nav />
            <div className='profileScreen_body'>
                <h1>Edit Profile</h1>
                <div className='profileScreen_info'>
                    <img
                        src='https://i.pinimg.com/originals/d8/70/20/d87020c70b0bf5eec4918874fa7d0f9f.jpg' alt='Profile Avatar'
                    />
                    <div className='profileScreen_details'>
                        <h2>{user.email}</h2>
                        <div className='prifileScreen_plans'>
                            <h3>Plans</h3>
                            <button onClick={() => auth.signOut()} className='profileScreen_signOut'>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen