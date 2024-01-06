import MovieCarousel from '@/components/MovieCarousel'
import { getPopularMovies, getSearchMovies } from '@/lib/getMovies'
import { notFound } from 'next/navigation'
import React from 'react'

type Props = {
    params: {
        term: string
    }
}
async function SearchPage({ params: { term } }: Props) {
    if (!term) notFound()
    const termToUse = decodeURI(term)
    const movies = await getSearchMovies(termToUse)
    const popularMovies = await getPopularMovies()



    return (
        <div className='max-w-7xl mx-auto h-screen'>
            <div className='flex flex-col space-y-4 mt-32 xl:mt-42'>
                <h1 className='text-6xl font-bold px-10'>Results for: {termToUse}</h1>

                {/* AI suggestions */}
                <MovieCarousel title='Movies' movies={movies} isVertical />
                <MovieCarousel title='You may also like' movies={popularMovies} />

            </div>
        </div>
    )
}

export default SearchPage