import styles from './spacer.module.scss'

interface Props {
  height: {
    mobile: string
    tablet?: string
    desktop?: string
  }
  className?: string
}

const Spacer = (props: Props) => {
  const { height, className } = props

  const spacerHeightParams = {
    mobile: height.mobile,
    tablet: '',
    desktop: '',
  }

  if (height?.tablet) {
    spacerHeightParams.tablet = height.tablet
  }
  if (height?.desktop) {
    spacerHeightParams.desktop = height.desktop
  }

  if (!height?.desktop) {
    spacerHeightParams.desktop = height.mobile
  }
  if (!height?.tablet) {
    spacerHeightParams.tablet = height.mobile
  }

  // Defining custom CSS variables to pass the component prop values to the SCSS module file
  const styleParams = {
    '--spacer-height-mobile': spacerHeightParams.mobile,
    '--spacer-height-tablet': spacerHeightParams.tablet,
    '--spacer-height-desktop': spacerHeightParams.desktop,
  } as React.CSSProperties

  const classNames = [styles.spacer, className]

  return <div className={classNames.join(' ')} style={styleParams} />
}

export default Spacer
