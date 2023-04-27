import Link from 'next/link'
import Image from 'next/image'
import { config } from '../../lib/config'
import styles from '../../styles/Home.module.css'

const Header = () => {
  return (
    <div className="fixed top-0 w-full p-6 drop-shadow-md bg-white z-10">

      <Link href="/" className={styles.header}>
        <Image
          src="/assets/logo.png"
          width={50}
          height={50}
          alt="Blog Logo"
          className="drop-shadow-md inline"
        />
        <h1 className="inline text-3xl align-middle pl-4">
          {config.author.name}
        </h1>
      </Link>

      <nav className={styles.nav}>
        <Link href="/#portfolio">Portfolio</Link>
        <Link href="/#about">About</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </div>



    // <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
    //   <Link href="/Users/connor.glynn/git/tech-blog-ui/pages">
    //     <a className="hover:underline">Connor Glynn</a>
    //   </Link>
    //   .
    // </h2>
  )
}

export default Header
