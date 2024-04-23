'use client'
import { Button, ContactForm, Spacer } from '@/components'
import styles from './footer.module.scss'
import Image from 'next/image'
import { staticImageLinks } from '@/assets'

const Footer = () => {
  return (
    <footer className={styles.footerContent} id="footer">
      <div className={styles.circle_1}></div>
      <div className={styles.footerContentColumnLayout}>
        <div className={styles.footerLeftColumn}>
          <h1 className={styles.footerHeading}>
            Let&apos;s get this conversation started
          </h1>
          <p
            className={`${styles.footerParagraph} ${styles.footerBookingParagraph}`}
          >
            You can simply select an available date from our calendar
            and schedule a call and we will show up. Its that easy
          </p>
          <Button
            label="Book a call now"
            position="FOOTER_SECTION"
            className={styles.footerContactButton}
          />
          <p
            className={`${styles.footerParagraph} ${styles.footerContactParagraph}`}
          >
            Or you can send a message to us form the below form
          </p>
          <ContactForm className={styles.footerContactForm} />
        </div>

        <div className={styles.footerRightColumn}>
          <h1 className={styles.footerHeading}>Address</h1>

          <p
            className={`${styles.footerParagraph} ${styles.footerAddressParagraph}`}
          >
            rem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has bee
          </p>

          <h1 className={styles.footerHeading}>Follow us</h1>

          <div
            className={`${styles.socialNetworkIconGroup} ${styles.footerRightColumnElementTopAlignment}`}
          >
            <Image
              src={staticImageLinks.INSTAGRAM_ICON}
              width={24}
              height={24}
              alt="social-network-instagram-icon"
            />
            <Image
              src={staticImageLinks.FACEBOOK_ICON}
              width={24}
              height={24}
              alt="social-network-facebook-icon"
            />
            <Image
              src={staticImageLinks.LINKEDIN_ICON}
              width={24}
              height={24}
              alt="social-network-linkedin-icon"
            />
          </div>

          <h1 className={styles.footerHeading}>Email us</h1>

          <h1
            className={`${styles.footerHeading} ${styles.footerRightColumnElementTopAlignment}`}
          >
            hello@vlabs.com.au
          </h1>

          <h1 className={styles.footerHeading}>Call us</h1>

          <h1
            className={`${styles.footerHeading} ${styles.footerRightColumnElementTopAlignment}`}
          >
            0426 818 653
          </h1>
        </div>
      </div>

      <Spacer height={{ mobile: '6vh' }} />

      <div className={styles.footerWebsiteCreditsElement}>
        <Image
          src={staticImageLinks.HEART_ICON}
          width={13}
          height={13}
          alt="website-credits-heart-icon"
        />
        <p>Powered by codewavelabs.io</p>
      </div>

      <Spacer
        height={{
          mobile: '6vh',
        }}
      />
    </footer>
  )
}

export default Footer
