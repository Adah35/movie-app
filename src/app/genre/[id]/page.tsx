import MovieCarousel from '@/components/MovieCarousel'
import { getDiscoverMovies } from '@/lib/getMovies'
import React from 'react'


type Props = {
    params: {
        id: string
    },
    searchParams: {
        genre: string
    }
}
async function Genre({ params: { id }, searchParams: { genre } }: Props) {

    const movies = await getDiscoverMovies(id, genre)
    return (
        <div className='max-w-7xl mx-auto'>
            {/* AI SUGGESTIONS */}
            <div className='flex flex-col space-y-5 mt-32 xl:mt-42'>
                <h1 className='text-6xl font-bold px-10'>Results for {genre}</h1>
            </div>
            <MovieCarousel title={'Movies'} movies={movies} isVertical />
        </div>
    )
}

export default Genre