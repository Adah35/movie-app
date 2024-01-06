'use client'
import getImagePath from '@/lib/getImagePath'
import { Movie } from '@/types/typing'
import Image from 'next/image'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

function CarouselBanner({ movies }: { movies: Movie[] }) {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

    return (
        <div className='overflow-hidden lg:-mt-40 relative cursor-pointer'
            ref={emblaRef}
        >

            <div className="flex">
                {movies.map((movie) => {
                    return (
                        <div key={movie.id} className='flex-[0_0_100%] min-w-0 relative'>
                            <Image
                                src={getImagePath(movie.backdrop_path as string, true)}
                                alt={movie.title}
                                height={1000}
                                width={1920}
                                key={movie.id}
                            />
                            <div className='absolute hidden md:inline mt-0 top-0 z-20 pt-40 xl:pt-52 left-0 lg:mt-40 bg-transparent h-full w-full bg-gradient-to-r from-gray-900 to-transparent p-10 space-y-5 text-white'>
                                <h2 className='text-5xl font-bold max-w-xl z-50'>{movie.title}</h2>
                                <p className='max-w-xl line-clamp-3'>{movie.overview}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1A1C29]"></div>
        </div>
    )
}

export default CarouselBanner