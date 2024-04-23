import styles from './header.module.scss'
import Image from 'next/image'
import { staticImageLinks } from '@/assets'
import { Button, MotionDiv, Spacer } from '@/components'
import Link from 'next/link'
import urlPathnames from '@/urlPathnames'

const Header = () => {
  return (
    <header className={styles.headerContent}>
      <MotionDiv
        className={`${styles.logoContainer}
        `}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 1 }}
      >
        <Link href={urlPathnames.BASE} replace>
          <Image
            src={staticImageLinks.LOGO_IMAGE}
            width={54}
            height={52}
            alt="vlabs-logo"
          />
        </Link>
      </MotionDiv>
      <nav className={`${styles.navBar}`}>
        <input type="checkbox" id={styles.headerSidebarActive} />
        <label
          htmlFor={styles.headerSidebarActive}
          className={styles.openSidebarButton}
        >
          <MotionDiv
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 1 }}
          >
            <Image
              src={staticImageLinks.HAMBURGER_MENU_ICON}
              width={57}
              height={44}
              alt="menu-icon"
            />
          </MotionDiv>
        </label>
        <MotionDiv
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 1 }}
          className={styles.linksContainer}
        >
          <label
            htmlFor={styles.headerSidebarActive}
            className={styles.closeSidebarButton}
          >
            <Image
              src={staticImageLinks.CLOSE_ICON}
              width={57}
              height={44}
              alt="close-icon"
            />
          </label>

          <Spacer
            height={{
              mobile: '68px',
              desktop: 'unset',
            }}
          />

          <Link
            className={styles.home}
            href={urlPathnames.BASE}
            replace
          >
            <p>Home</p>
          </Link>
          <Link href={urlPathnames.SERVICES_SECTION} replace>
            <p>Services</p>
          </Link>
          <Link href={urlPathnames.PORTFOLIO_SECTION}>
            <p>Portfolio</p>
          </Link>
          <Link href={urlPathnames.CASE_STUDIES_SECTION}>
            <p>Case studies</p>
          </Link>
          <Link href={urlPathnames.TESTIMONIALS_SECTION}>
            <p>Testimonials</p>
          </Link>

          <Button
            className={styles.navButton}
            href=""
            label="Let's talk"
            position="HEADER_NAV_SIDEBAR_SECTION"
          />
        </MotionDiv>
      </nav>
    </header>
  )
}

export default Header
