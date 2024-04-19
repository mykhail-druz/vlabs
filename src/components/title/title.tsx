import styles from './title.module.scss'

interface Props {
  label: string
  className?: string
}

const Title = (props: Props) => {
  const { label, className } = props

  const classNames = [styles.titleLabel, className]

  return <h1 className={classNames.join(' ')}>{label}</h1>
}

export default Title
