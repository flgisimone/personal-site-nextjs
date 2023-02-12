import Head from 'next/head'
import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'
import Portfolio from '@/components/Portfolio/Portfolio'
import styles from '@/styles/index.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Giulio Simone Floresta | Front-End Developer</title>
        <meta name="description" content="Giulio Simone Floresta | Front-End Developer. Sito realizzato con React.Js E Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="HTML, CSS, JavaScript, ReactJS, SASS, NextJS, Front-End Developer" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <main className={styles.main}>
        <Hero />
        <div className={styles.about__portfolio} id="about">
          <div className={styles.about} >
            <About/>
          </div>
          <div className={styles.portfolio}>
            <Portfolio />
          </div>
        </div>
      </main>
    </>
  )
}
