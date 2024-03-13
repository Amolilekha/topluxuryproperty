import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Top Luxury Property - Dubai</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Top Luxury Property <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
