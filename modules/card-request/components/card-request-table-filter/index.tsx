import { Country } from '@/modules/authentication/@types';
import { useGetAllCountries } from '@/modules/authentication/api/mutations';
import SearchableDropdown from '@/shared/searchabledropdown';
import { useProfileStore } from '@/zustand/useProfileStore';
import React from 'react'
import { date } from 'zod';

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
  const { countries } = useProfileStore()
  const date = new Date()
  return (
    <div className="w-full  flex items-center justify-center lg:justify-between  gap-4">
      <div className="mb-4">
        <h2 className="hidden lg:block text-[#343A40] font-medium whitespace-nowrap">Card Request</h2>
      </div>

      <div className="flex flex-wrap gap-4 mb-4 ">
        <div className="flex items-center gap-2  ">
          <span className="text-sm font-medium text-gray-600">Country</span>
          <div className=" max-lg:flex-1 ">
            <SearchableDropdown
              items={[{ name: "All", code: "all", flag: "all", phone: "all" }, ...countries] as Country[]}
              displayKey="name"
              valueKey="name"
              value={country}
              defaultValue={undefined}
              onSelect={(input) => {
                setCountry(String(input?.id))
              }}
              placeholder="Choose a country..."
            />
          </div>
        </div>

        <div className="flex flex-1  items-center gap-2 whitespace-nowrap">
          <span className="text-sm font-medium text-gray-600">Status</span>
          <div className="relative ">
            <select
              className="appearance-non w-full bg-white border border-gray-300 rounded-md py-2 px-3 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={status ?? "all"}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="all">All</option>
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="text-sm font-medium text-gray-600">Date</span>
          <input
            type="date"
            className="bg-white border border-gray-300 rounded-md py-2 px-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={fromDate}
            defaultValue={"01-01-2025"}
            onChange={(e) => setFromDate(e.target.value)}
            placeholder="dd/mm/yyyy"
          />

          <span className="text-sm text-gray-600">to</span>

          <input
            type="date"
            className="bg-white border border-gray-300 rounded-md py-2 px-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={toDate}
            defaultValue={date.toISOString().split("T")[0]}
            onChange={(e) => setToDate(e.target.value ?? date.toISOString())}
            placeholder="dd/mm/yyyy"
          />
        </div>
      </div>
    </div>
  )
}

export default TableFilters