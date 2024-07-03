import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user)

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate('/');
            console.log('Sign out success')
        }).catch((error) => {
            navigate('/error')
            console.log(error.message)
        })
    }

    return (
        <div className='fixed w-full flex items-center justify-between px-8 py-2 bg-gradient-to-b from-black'>
            <img className='w-44 ' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' />

            {user && <div className='flex items-center'>
                <div className='mr-2 fle flex-col justify-center'>
                    <p className='text-white text-center'>{user.displayName}</p>
                    <button className='font-semibold text-red-200 hover:text-red-500' onClick={handleSignOut}>(Sign Out)</button>
                </div>
                
                <img className='w-8' src='https://cdn-icons-png.flaticon.com/128/3889/3889524.png' alt='logout' />
            </div>}
        </div>
    )
}

export default Header
