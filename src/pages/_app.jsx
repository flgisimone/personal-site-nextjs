import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  return (
    <>
    <div className="Header">
      <Header />
    </div>
      <Component {...pageProps} />
    <div className="Footer">
      <Footer />
    </div>
    </>
  )
}
