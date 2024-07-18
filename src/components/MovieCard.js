import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
    return (
        <div className='w-44'>
            <img
                alt='Movies'
                src={IMG_CDN_URL+ posterPath}
            />
        </div>
    )
}

export default MovieCard
