import { type AppProps } from 'next/dist/shared/lib/router/router'
import { type AppType } from 'next/dist/shared/lib/utils'
import Head from 'next/head'

import '../_app/styles/global.css'

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>TOP</title>
				<meta name="description" content="Generated by create-t3-app" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
