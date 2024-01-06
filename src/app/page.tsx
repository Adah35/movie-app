import CarouselBannerWrapper from '@/components/CarouselBannerWrapper'
import MovieCarousel from '@/components/MovieCarousel'
import { getDiscoverMovies, getPopularMovies, getSearchMovies, getTopRatedMovies, getUpcomingMovies } from '@/lib/getMovies'
import Image from 'next/image'

export default async function Home() {
  const upcomingMovie = await getUpcomingMovies()
  const topratedMovie = await getTopRatedMovies()
  const popularMovie = await getPopularMovies()
  const discoverMovie = await getDiscoverMovies()
  // const searchMovie = await getSearchMovies()
  return (
    <main className="flex min-h-screen flex-col">

      {/* carousel banner wrapper */}
      <CarouselBannerWrapper />

      <div className='flex flex-col space-y-2 '>
        {/* Moviecarousel title="upcoming" */}
        <MovieCarousel movies={upcomingMovie} title="Upcoming" />
        {/* Moviecarousel title="upcoming" */}
        <MovieCarousel movies={topratedMovie} title="Top Rated" />
        {/* Moviecarousel title="upcoming" */}
        <MovieCarousel movies={popularMovie} title="Popular Movie" />
      </div>

    </main>
  )
}
