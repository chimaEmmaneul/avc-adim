import { useGetAllCountries, useGetCurrencies, useGetState } from '@/modules/authentication/api/mutations'
import { useProfileStore } from '@/zustand/useProfileStore'
import React, { useEffect } from 'react'

const useGetCountries = () => {
  const { setCountries, setStates, setCurrencies } = useProfileStore()
  const { countries: allCountries, isLoading, isError } = useGetAllCountries()
  const { states } = useGetState({ id: String(160) })
  const { currencies } = useGetCurrencies()

  useEffect(() => {
    if (allCountries) {
      setCountries(allCountries.data)
    }

  }, [isError, isLoading])

  useEffect(() => {
    if (states) {
      setStates(states.data)
    }
  }, [states,])

  useEffect(() => {
    if (currencies) {
      setCurrencies(currencies.data)
    }
  }, [currencies,])

  // return { countries }
}

export default useGetCountries