'use client'
import React, { useState } from 'react'
import styles from './contact-form.module.scss'

interface ContactFormProps {
  className?: string
}

interface FormData {
  email: string
  name: string
  message: string
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    name: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleOnSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to send message')
      setMessage('Message sent successfully!')
      setFormData({ email: '', name: '', message: '' }) // Reset form
    } catch (error) {
      setMessage('Error sending message. Please try again.')
    }

    setIsSubmitting(false)
  }

  return (
    <form
      onSubmit={handleOnSubmit}
      className={`${styles.contactForm} ${className || ''}`}
    >
      <input
        name="email"
        id="email"
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        name="name"
        id="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <textarea
        name="message"
        id="message"
        placeholder="Tell us about your project"
        value={formData.message}
        onChange={handleInputChange}
      />
      <input
        type="submit"
        value={isSubmitting ? 'Sending...' : 'Send a message'}
        className={styles.contactFormSubmitButton}
        disabled={isSubmitting}
      />

      {message && <div>{message}</div>}
    </form>
  )
}

export default ContactForm
