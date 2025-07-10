import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'


type PaginationProps = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

const Pagination = ({ currentPage, setCurrentPage, totalPages }: PaginationProps) => {


  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePageClick = (page: number) => {
    setCurrentPage(page)
  }
  return (
    <div className="flex justify-end items-center mt-10 gap-1">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="w-8 h-8 flex items-center justify-center border rounded disabled:opacity-50"
      >
        <ChevronLeft size={16} />
      </button>

      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => handlePageClick(index + 1)}
          className={`w-8 h-8 flex items-center justify-center border rounded ${currentPage === index + 1 ? "bg-main text-white border-main" : "hover:bg-gray-50"
            }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="w-8 h-8 flex items-center justify-center border rounded disabled:opacity-50"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  )
}

export default Pagination