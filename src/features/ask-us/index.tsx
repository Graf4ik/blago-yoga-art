'use client'

import React from 'react'

import { initValues } from './lib/constants'
import { useForm } from '@/shared/hooks/useForm'

import styles from './style.module.scss'
import Input from '@shared/ui/inputs/input'
import { handleFormSubmit } from '@shared/util/handlers/handle-submit'
import Button from '@shared/ui/btns/btn'

const AskUsForm = () => {
  const { form, formDisable, errorPhone, handleChange } = useForm(initValues)

  return (
    <form className={styles.form__wrapper}>
      <div className={styles.flex__block}>
        <Input
          label='Name'
          type='text'
          placeholder='Your name'
          name='name'
          onChange={(e) => handleChange(e, 'name')}
          value={form.name}
          required
        />

        <Input
          label='Phone'
          type='phone'
          placeholder='Your phone'
          name='phone'
          onChange={(e) => handleChange(e, 'phone')}
          value={form.phone}
          error={errorPhone}
        />
      </div>

      <div className={styles.flex__block}>
        <Input
          label='Message'
          type='text'
          placeholder='Your message'
          name='message'
          onChange={(e) => handleChange(e, 'message')}
          value={form.message}
          required
        />

        <Button
          title='Send'
          size='large'
          onClick={(e) => handleFormSubmit(e, form)}
        />
      </div>
    </form>
  )
}

export default AskUsForm
