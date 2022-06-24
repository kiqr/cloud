import { Auth0Provider } from '@auth0/auth0-react'
import { KiqrProvider } from '../lib/KiqrProvider'
import { EditorLayout } from '../components/EditorLayout'

import type { AppProps } from 'next/app'

// Add icons to the FontAwesome library.
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCaretDown,
  faDashboard,
  faBook,
  faTerminal,
  faSignOutAlt,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faCaretDown,
  faDashboard,
  faBook,
  faTerminal,
  faSignOutAlt,
  faPlusCircle
)

// Import global styles
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN || ''
  const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || ''
  const audience = process.env.NEXT_PUBLIC_AUTH0_AUDIENCE || ''
  const redirectUri = process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI || ''
  const scope = process.env.NEXT_PUBLIC_AUTH0_SCOPE || ''

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      audience={audience}
      redirectUri={redirectUri}
      scope={scope}
    >
      <KiqrProvider>
        <EditorLayout>
          <Component {...pageProps} />
        </EditorLayout>
      </KiqrProvider>
    </Auth0Provider>
  )
}

export default App
