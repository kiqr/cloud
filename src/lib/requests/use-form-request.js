import { useState, useContext } from 'react'
import AppContext from '../context/app-context'

const useFormRequest = (endpointPath) => {
  const { apiBaseUrl, getToken } = useContext(AppContext)

  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const [persisted, setPersisted] = useState(null)

  const create = async (data) => {
    setError(null)
    setPersisted(null)
    setIsPending(true)

    const token = await getToken()

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }

    const url = apiBaseUrl + endpointPath
    const response = await fetch(url, requestOptions)
    const responseData = await response.json()

    if (response.ok) {
      setError(null)
      setPersisted(responseData)
    } else {
      setError(responseData)
      setPersisted(null)
    }

    setIsPending(false)
    return null
  }

  const update = async (data) => {
    setError(null)
    setPersisted(null)
    setIsPending(true)

    const token = await getToken()

    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }

    const url = apiBaseUrl + endpointPath
    const response = await fetch(url, requestOptions)
    const responseData = await response.json()

    if (response.ok) {
      setError(null)
      setPersisted(responseData)
    } else {
      setError(responseData)
      setPersisted(null)
    }

    setIsPending(false)
    return null
  }

  // const update = async (data) => {
  //   setError(null)
  //   setPersisted(null)
  //   setIsPending(true)

  //   const token = await getAccessTokenSilently()
  //   const requestOptions = {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${token}`,
  //     },
  //     body: JSON.stringify(data),
  //   }

  //   const url = 'http://localhost:4000' + endpointPath;
  //   const response = await fetch(url, requestOptions)
  //   const data = await response.json()

  //   if (response.ok) {
  //     setError(null)
  //     setPersisted(data)
  //   } else {
  //     setPersisted(null)
  //     setError(data)
  //   }

  //   setIsPending(false)
  //   return null
  // }

  return { create, update, persisted, setPersisted, error, isPending }
}

export default useFormRequest
