import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <span className={styles.logo}>
        <a
          href="https://github.com/connormaglynn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <picture>
            <img
              className="h-16"
              src="/github.png"
              alt="Github Logo"
              height={64}
            />
          </picture>
        </a>
      </span>

      <span className={styles.logo}>
        <a
          href="https://www.npmjs.com/~connorglynn13"
          target="_blank"
          rel="noopener noreferrer"
        >
          <picture>
            <img className="h-16" src="/npm.png" alt="NPM Logo" height={64} />
          </picture>
        </a>
      </span>

      <span className={styles.logo}>
        <a
          href="https://hub.docker.com/u/connorglynn13"
          target="_blank"
          rel="noopener noreferrer"
        >
          <picture>
            <img
              className="h-16"
              src="/docker.png"
              alt="Docker Logo"
              height={64}
            />
          </picture>
        </a>
      </span>

      <span className={styles.logo}>
        <a
          href="https://www.linkedin.com/in/connor-glynn-554a12140/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <picture>
            <img
              className="h-16"
              src="/linkedin.png"
              alt="LinkedIn Logo"
              height={64}
            />
          </picture>
        </a>
      </span>
    </div>
  )
}

export default Footer
