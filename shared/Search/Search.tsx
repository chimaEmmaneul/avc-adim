import { SearchIcon } from 'lucide-react'
import React from 'react'


type SearchProps = {
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
  placeholder?: string;
}
const Search = ({ searchTerm, setSearchTerm, placeholder }: SearchProps) => {
  return (
    <div className='flex border border-[#EEEEEE] shadow-sm items-center gap-2  px-2 rounded focus:outline-none focus:ring-2 focus:ring-primary'>
      <SearchIcon />
      <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder={placeholder || "Search by username or email"} className='border-none outline-none rounded-md focus:outline-none focus:ring-0 placeholder:text-xs ' />
    </div>
  )
}

export default Search