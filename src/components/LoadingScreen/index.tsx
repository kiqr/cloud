import Head from 'next/head'
import { Logo } from '@kiqr/react'

export const LoadingScreen = () => {
  return (
    <>
      <Head>
        <title>Signing in..</title>
      </Head>
      <div className="loading-screen">
        <div className="loading-screen-spinner"></div>
        <Logo />
      </div>
    </>
  )
}
