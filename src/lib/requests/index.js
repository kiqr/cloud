import { useAuth0 } from '@auth0/auth0-react'
import useSWR from 'swr'

export const useGet = (apiPath, options = {}) => {
  const { getAccessTokenSilently } = useAuth0()
  const { data, error } = useSWR(
    [apiPath, getAccessTokenSilently],
    fetcher,
    options
  )
  const isLoading = !(!error && data)

  return { data, error, isLoading }
}

export const fetcher = async (apiPath, getToken) => {
  const token = await getToken()
  const url = process.env.NEXT_PUBLIC_API_BASE_URL + apiPath
  const response = await fetch(url, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })

  if (!response.ok) {
    let error = new Error('An error occurred while fetching the data.')

    if (response.status === 401) {
      error = new Error('Invalid or expired access token.')
    }

    if (response.status === 403) {
      error = new Error('You are not authorized to access this resource.')
    }

    error.status = response.status
    throw error
  }

  return response.json()
}
