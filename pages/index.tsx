import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>🏡 Home</title>
        <meta name="description" content="The Connor Glynn Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <span className={styles.logo}>
          <picture><img src="/logo.png" alt="ConnorGlynn.com Logo" height={128} /></picture>
        </span>

        <nav className={styles.nav}>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main className={styles.main}>
        <section id="portfolio" className={styles.section} >
          <h1 className={styles.title}>
            🥳 Welcome to My Portfolio!
          </h1>

          <p className={styles.description}>
            🦄 Here are some projects I&apos;m currently working on:
          </p>

          <div className={styles.grid}>
            <a href="https://github.com/connormaglynn/imust-cli" className={styles.card}>
              <h2>🖥 IMust CLI &rarr;</h2>
              <p>A Command Line Interface to help with common developer tasks.</p>
            </a>

            <a href="https://github.com/connormaglynn/developer-navigation-browser-plugin" className={styles.card}>
              <h2>🧭 Developer Navigation &rarr;</h2>
              <p>A Browser Plugin that helps developers to navigate between various web based tools.</p>
            </a>
          </div>
        </section>
        <section id="about" className={styles.section} >
          <h1 className={styles.title}>
            👨‍💻 A Little About Me
          </h1>

          <ul className={styles.about}>
            <li>🚀 Creative and passionate full-stack software engineer with several years of experience developing, testing, deploying and maintaining web applications for various clients using various technologies.</li>
            <li>✅ Extensive experience in delivering value to stakeholders through iterative agile development cycles and communicating effectively with stakeholders to source requirements and manage expectations.</li>
            <li>💖 Driven to take concepts and ideas through to value-adding software efficiently and effectively and make a difference in people&apos;s daily lives.</li>
            <li>🧪 Keen to consistently develop skills and refine approaches to new challenges.</li>
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>

          <span className={styles.logo}>
            <a href="https://github.com/connormaglynn" target="_blank" rel="noopener noreferrer">
              <picture><img src="/github.png" alt="Github Logo" height={64} /></picture>
            </a>
          </span>

        <span className={styles.logo}>
            <a href="https://www.npmjs.com/~connorglynn13" target="_blank" rel="noopener noreferrer">
              <picture><img src="/npm.png" alt="NPM Logo" height={64} className={styles.invert}/></picture>
            </a>
        </span>

        <span className={styles.logo}>
            <a href="https://hub.docker.com/u/connorglynn13" target="_blank" rel="noopener noreferrer">
              <picture><img src="/docker.png" alt="Docker Logo" height={64}/></picture>
            </a>
        </span>

        <span className={styles.logo}>
            <a href="https://www.linkedin.com/in/connor-glynn-554a12140/" target="_blank" rel="noopener noreferrer">
              <picture><img src="/linkedin.png" alt="LinkedIn Logo" height={64}/></picture>
            </a>
        </span>

      </footer>
    </div>
  )
}

export default Home
