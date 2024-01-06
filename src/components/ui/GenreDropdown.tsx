import { Genre, Genres } from '@/types/typing'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

const api_key = process.env.TMDB_ACCESS_TOKEN
const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en'
async function GenreDorpdown() {
    const options: RequestInit = {
        method: "GET",
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: `Bearer ${api_key}`
        },
        next: {
            revalidate: 60 * 60 * 24 //24 hours
        }
    }


    const response = await fetch(url, options)
    const data = (await response.json()) as Genres

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='text-white flex justify-center items-center'>
                Genre <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {
                    data.genres.map((genre, i) => {
                        return (
                            <DropdownMenuItem className='text-white' key={genre.id}>
                                <Link href={`/genre/${genre.id}?genre=${genre.name}`} >

                                    {genre.name}
                                </Link>

                            </DropdownMenuItem>
                        )
                    })
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default GenreDorpdown