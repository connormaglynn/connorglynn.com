import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout/layout'
import Header from '../components/layout/header'
import Hero from '../components/pages'

const HomePage: NextPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>🏡 Home</title>
          <meta name="description" content="The Connor Glynn Portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <Hero />

        <div className={styles.container}>
          <main className={styles.main}>
            <section id="portfolio" className={styles.section}>
              <h1 className={styles.title}>🥳 Welcome to My Portfolio!</h1>

              <p className={styles.description}>
                🦄 Here are some projects I&apos;m currently working on:
              </p>

              <div className={styles.grid}>
                <a
                  href="https://github.com/connormaglynn/imust-cli"
                  className={styles.card}
                >
                  <h2>🖥 IMust CLI &rarr;</h2>
                  <p>
                    A Command Line Interface to help with common developer
                    tasks.
                  </p>
                </a>

                <a
                  href="https://github.com/connormaglynn/developer-navigation-browser-plugin"
                  className={styles.card}
                >
                  <h2>🧭 Developer Navigation &rarr;</h2>
                  <p>
                    A Browser Plugin that helps developers to navigate between
                    various web based tools.
                  </p>
                </a>
              </div>
            </section>
            <section id="about" className={styles.section}>
              <h1 className={styles.title}>👨‍💻 A Little About Me</h1>

              <ul className={styles.about}>
                <li>
                  🚀 Creative and passionate full-stack software engineer with
                  several years of experience developing, testing, deploying and
                  maintaining web applications for various clients using various
                  technologies.
                </li>
                <li>
                  ✅ Extensive experience in delivering value to stakeholders
                  through iterative agile development cycles and communicating
                  effectively with stakeholders to source requirements and
                  manage expectations.
                </li>
                <li>
                  💖 Driven to take concepts and ideas through to value-adding
                  software efficiently and effectively and make a difference in
                  people&apos;s daily lives.
                </li>
                <li>
                  🧪 Keen to consistently develop skills and refine approaches
                  to new challenges.
                </li>
              </ul>
            </section>
          </main>
        </div>
      </Layout>
    </>
  )
}

export default HomePage
