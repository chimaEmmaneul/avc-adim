import { useGetAllCountries } from '@/pages/authentication/api/mutations';
import React from 'react'

type TableFiltersProps = {
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>
  fromDate: string;
  setFromDate: React.Dispatch<React.SetStateAction<string>>
  toDate: string;
  setToDate: React.Dispatch<React.SetStateAction<string>>
}
const TableFilters = ({ country, setCountry, status, setStatus, fromDate, setFromDate, toDate, setToDate }: TableFiltersProps) => {
  const { countries, isLoading } = useGetAllCountries()
  return (
    <div className="w-full flex items-center justify-between overflow-x-auto gap-4">
      <div className="mb-4">
        <h2 className=" text-[#343A40] font-medium whitespace-nowrap">All Transactions</h2>
      </div>

      <div className="flex flex-nowrap gap-4 mb-4 ">
        <div className="flex items-center gap-2  truncate">
          <span className="text-sm font-medium text-gray-600">Country</span>
          <div className="relative">
            <select
              className="appearance-none w-[150px] truncate bg-white border border-gray-300 rounded-md  px-1 py-2  text-[#6E768E] outline-none "
              value={country ?? "Nigeria"}
              defaultValue="160"
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">All</option>
              {countries?.data.map((country) => (
                <option className='w-[100px] truncate' key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="text-sm font-medium text-gray-600">Status</span>
          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-300 rounded-md py-2 px-3 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={status ?? "all"}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="all">All</option>
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="text-sm font-medium text-gray-600">Date</span>
          <input
            type="date"
            className="bg-white border border-gray-300 rounded-md py-2 px-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            placeholder="dd/mm/yyyy"
          />

          <span className="text-sm text-gray-600">to</span>

          <input
            type="date"
            className="bg-white border border-gray-300 rounded-md py-2 px-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            placeholder="dd/mm/yyyy"
          />
        </div>
      </div>
    </div>
  )
}

export default TableFilters