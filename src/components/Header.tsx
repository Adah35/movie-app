import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Toggler } from './ui/toggle'
import SearchInput from './ui/searchInput'
import GenreDorpdown from './ui/GenreDropdown'

export const Header = () => {
  return (
    <header className='fixed top-0 z-50 w-full flex p-5 items-center justify-between bg-gradient-to-t from-gray-200/0 via-slate-900/25 to-gray-900'>
      <Link href={'/'} className='mr-10'>
        <Image
          src={'/next.svg'}
          width={120}
          height={199}
          alt='logo'
          className=' cursor-pointer invert'
        />
      </Link>

      <div className='flex space-x-2'>
        {/* genre dropdown */}
        <GenreDorpdown />
        {/* search input */}
        <SearchInput />
        {/* theme toggler */}
        <Toggler />
      </div>
    </header>
  )
}
