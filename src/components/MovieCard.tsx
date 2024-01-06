import getImagePath from '@/lib/getImagePath'
import { Movie } from '@/types/typing'
import Image from 'next/image'
import React from 'react'

function MovieCard({ movie }: { movie: Movie }) {
    return (
        <div className=' relative flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out'>

            <div className='absolute inset-0 bg-gradient-to-b from-gray-200/8 to-gray-300 via-gray-300 dark:to-[#1A1C29]/80 z-10' />
            <p className='absolute z-20 bottom-5 left-5'>{movie.title}</p>
            <Image
                src={getImagePath(movie.backdrop_path as string || movie.poster_path as string)}
                className='w-fit lg:min-w-[400px] h-56 object-cover shadow-md drop-shadow-xl rounded-sm'
                alt={movie.title}
                width={300}
                height={300}
                key={movie.id}
            />

        </div>
    )
}

export default MovieCard