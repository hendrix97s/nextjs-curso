import { LayoutCustom } from '@/components/LayoutCustom'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutCustom>
      <Component {...pageProps} />
    </LayoutCustom>
  )

}
