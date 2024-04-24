'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'
import { AnimationProps, Transition } from 'framer-motion'

interface MotionDivProps {
  children: ReactNode
  observeInView?: boolean
  initial?: AnimationProps['initial']
  animate?: AnimationProps['animate']
  exit?: AnimationProps['exit']
  transition?: Transition
  className?: string
  style?: React.CSSProperties
  // [key: string]: any;
}

export const MotionDiv = ({
  children,
  observeInView = true,
  initial = { opacity: 0, y: 50 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 2, ease: 'easeOut' },
  className,
  style,
  ...props
}: MotionDivProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    skip: !observeInView,
  })

  const animationControl = observeInView
    ? inView
      ? animate
      : {}
    : animate

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animationControl}
      transition={transition}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  )
}
