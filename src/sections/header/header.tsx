'use client'
import styles from './header.module.scss'
import Image from 'next/image'
import { staticImageLinks } from '@/assets'
import { Button, MotionDiv, Spacer } from '@/components'
import Link from 'next/link'
import urlPathnames from '@/urlPathnames'
import { useEffect, useState } from 'react'

const Header = () => {
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = [
        '#testimonials',
        '#case-studies',
        '#portfolio',
        '#services',
        '#home',
      ]

      for (const sectionId of sectionIds) {
        const section = document.querySelector(sectionId)
        if (section) {
          const isSectionVisible =
            section.getBoundingClientRect().top <=
            window.innerHeight * 0.5

          if (isSectionVisible) {
            setActiveLink(sectionId)
            break // Once we find the active section, no need to check the rest
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={styles.headerContent}>
      <MotionDiv
        className={`${styles.logoContainer}`}
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
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 1 }}
            observeInView={true}
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
            href={urlPathnames.BASE}
            replace
            onClick={() => {
              const checkbox = document.getElementById(
                styles.headerSidebarActive
              ) as HTMLInputElement
              if (checkbox) checkbox.checked = false
            }}
          >
            <p
              className={activeLink === '#home' ? styles.active : ''}
            >
              Home
            </p>
          </Link>
          <Link
            href={urlPathnames.SERVICES_SECTION}
            replace
            onClick={() => {
              const checkbox = document.getElementById(
                styles.headerSidebarActive
              ) as HTMLInputElement
              if (checkbox) checkbox.checked = false
            }}
          >
            <p
              className={
                activeLink === '#services' ? styles.active : ''
              }
            >
              Services
            </p>
          </Link>
          <Link
            href={urlPathnames.PORTFOLIO_SECTION}
            replace
            onClick={() => {
              const checkbox = document.getElementById(
                styles.headerSidebarActive
              ) as HTMLInputElement
              if (checkbox) checkbox.checked = false
            }}
          >
            <p
              className={
                activeLink === '#portfolio' ? styles.active : ''
              }
            >
              Portfolio
            </p>
          </Link>
          <Link
            href={urlPathnames.CASE_STUDIES_SECTION}
            replace
            onClick={() => {
              const checkbox = document.getElementById(
                styles.headerSidebarActive
              ) as HTMLInputElement
              if (checkbox) checkbox.checked = false
            }}
          >
            <p
              className={
                activeLink === '#case-studies' ? styles.active : ''
              }
            >
              Case studies
            </p>
          </Link>
          <Link
            href={urlPathnames.TESTIMONIALS_SECTION}
            replace
            onClick={() => {
              const checkbox = document.getElementById(
                styles.headerSidebarActive
              ) as HTMLInputElement
              if (checkbox) checkbox.checked = false
            }}
          >
            <p
              className={
                activeLink === '#testimonials' ? styles.active : ''
              }
            >
              Testimonials
            </p>
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
