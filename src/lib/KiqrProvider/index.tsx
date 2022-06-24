import { ReactElement, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import { LoadingScreen } from '../../components/LoadingScreen'

interface KiqrProviderProps {
  children: ReactElement
}

export const KiqrProvider = ({ children }: KiqrProviderProps): ReactElement => {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect()
    }
  }, [isAuthenticated, isLoading, loginWithRedirect])

  if (isLoading) {
    return <LoadingScreen />
  }

  return <>{children}</>
}
