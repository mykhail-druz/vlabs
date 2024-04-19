'use client'

import styles from './button.module.scss'

interface Props {
  label: string
  position:
    | 'HEADER_NAV_SIDEBAR_SECTION'
    | 'HOME_FIRST_SECTION'
    | 'EXPLAINER_VIDEOS_SECTION'
    | 'FOOTER_SECTION'
  className?: string
}

const positionMap = new Map([
  [
    'HEADER_NAV_SIDEBAR_SECTION',
    styles.buttonHeaderNarSidebarSection,
  ],
  ['HOME_FIRST_SECTION', styles.buttonHomeFirstSection],
  ['EXPLAINER_VIDEOS_SECTION', styles.buttonExplainerVideosSection],
  ['FOOTER_SECTION', styles.buttonFooterSection],
])

const Button = (props: Props) => {
  const { label, position, className } = props

  const classNames = [
    styles.buttonElement,
    positionMap.get(position),
    className,
  ]

  const btnOnClick = () => {
    alert('Feature Coming Soon')
  }

  return (
    <button className={classNames.join(' ')} onClick={btnOnClick}>
      <p>{label}</p>
    </button>
  )
}

export default Button
