import { useGetAllCountries } from '@/pages/authentication/api/mutations'
import { useProfileStore } from '@/zustand/useProfileStore'
import React, { useEffect } from 'react'

const useGetCountries = () => {
  const { setCountries } = useProfileStore()
  const { countries: allCountries, isLoading, isError } = useGetAllCountries()

  useEffect(() => {
    if (allCountries) {
      setCountries(allCountries.data)
    }

  }, [isError, isLoading])

  // return { countries }
}

export default useGetCountries