'use client'

import styles from './contact-form.module.scss'
import { useForm, SubmitHandler } from 'react-hook-form'

const regexPatterns = {
  onlyLettersUpToThreeWords: /^[A-Za-z]+[ ]?[A-Za-z]*[ ]?[A-Za-z]*$/i,
  emailWithLettersOrNumbers: /^[A-Za-z]+[0-9]*@+.+$/i,
  lettersOrNumbersOrDot: /^[A-Za-z. 0-9]*$/i,
}

interface Props {
  className?: string
}

interface FormInput {
  email: string
  name: string
  message: string
}

const ContactForm = (props: Props) => {
  const { className } = props

  const { register, handleSubmit } = useForm<FormInput>()

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    alert('Feature coming soon')
    console.log('Submitted data: ', data)
  }

  const classNames = [styles.contactForm, className]

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classNames.join(' ')}
    >
      <input
        {...register('email', {
          required: true,
          pattern: regexPatterns.emailWithLettersOrNumbers,
        })}
        placeholder="Enter your email"
        type="email"
      />
      <input
        {...register('name', {
          required: true,
          pattern: regexPatterns.onlyLettersUpToThreeWords,
        })}
        placeholder="Enter your name"
      />
      <textarea
        {...register('message', {
          required: true,
          pattern: regexPatterns.lettersOrNumbersOrDot,
        })}
        placeholder="Tell us about your project"
      />
      <input
        type="submit"
        value="Send a message"
        className={styles.contactFormSubmitButton}
      />
    </form>
  )
}

export default ContactForm
