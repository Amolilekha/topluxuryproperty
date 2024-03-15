import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Top Luxury Property - Dubai</title>
        <<meta name="google-site-verification" content="c0HXgOxwQqyryYBeb3PSFShMYlUtm152EvhvsgKLWsk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome t" />
        <p className="description">
          <h2>Top Luxury Property</h2> <code>pages/index.js</code>
        </p>

      </main>

      <Footer />
    </div>
  )
}
