import Link from 'next/link'
import Image from 'next/image'
import { config } from '../../lib/config'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className="fixed top-0 w-full p-6 drop-shadow-md z-10 ">
      <Link href="/" className={styles.header}>
        <Image
          src="/logo.png"
          width={50}
          height={50}
          alt="Blog Logo"
          className="drop-shadow-md inline"
        />
        <span className="text-3xl align-middle pl-4 no-underline text-accent-3">
          {config.author.name}
        </span>
      </Link>

      <nav className={styles.nav}>
        <Link href="/#portfolio" className="text-accent-2 hover:text-accent-3 ">
          Portfolio
        </Link>
        <Link
          href="/#about"
          className="text-accent-2 hover:text-accent-3 transition duration-150 ease-in-out"
        >
          About
        </Link>
        <Link
          href="/blog"
          className="text-accent-2 hover:text-accent-3 transition duration-150 ease-in-out"
        >
          Blog
        </Link>
      </nav>
    </div>
  )
}

export default Header
