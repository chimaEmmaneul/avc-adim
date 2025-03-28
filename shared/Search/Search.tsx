import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'


type SearchProps = {
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}
const Search = ({ searchTerm, setSearchTerm }: SearchProps) => {
  return (
    <div className='flex border border-[#EEEEEE] shadow-sm items-center gap-2 p-2 rounded'>
      <SearchIcon />
      <Input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search' className='outline-none border-none shadow-none focus:border-none focus:outline-none focus-visible:ring-0 block  w-[228px] rounded ' />
    </div>
  )
}

export default Search