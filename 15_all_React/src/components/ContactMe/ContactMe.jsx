import React, { useState } from 'react'
import whatsapplogo from '../../assets/whatsapp.jpg'

function ContactMe() {
  const phoneNumber = String(import.meta.env.VITE_PHONE_NUMBER)

  
  const [message, setMessage] = useState('Hi Kushal, I would like to connect with you.')

  const handleSubmit = (event) => {
    event.preventDefault()
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <main className='min-h-[65vh] bg-linear-to-br from-slate-100 via-white to-emerald-50 px-4 py-12 dark:from-gray-950 dark:via-gray-900 dark:to-emerald-950 sm:px-6 lg:px-8'>
      <div className='mx-auto grid w-full max-w-5xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]'>
        <section className='space-y-5'>
          <p className='text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400'>Let&apos;s connect</p>
          <h1 className='max-w-lg text-4xl font-black leading-tight text-slate-900 dark:text-white sm:text-5xl'>Have a question or an idea?</h1>
          <p className='max-w-lg text-base leading-7 text-slate-600 dark:text-gray-300 sm:text-lg'>
            Send me a message on WhatsApp and I&apos;ll get back to you as soon as I can.
          </p>
          <div className='flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-gray-200'>
            <img src={whatsapplogo} alt='' aria-hidden='true' className='h-11 w-11 rounded-xl object-cover shadow-sm' />
            <span>Quick, direct, and easy to start.</span>
          </div>
        </section>

        <section className='rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60 dark:border-gray-700 dark:bg-gray-800 dark:shadow-black/20 sm:p-8'>
          <form onSubmit={handleSubmit} className='space-y-5'>
            <div>
              <label htmlFor='message' className='mb-2 block text-sm font-bold text-slate-800 dark:text-gray-100'>Your message</label>
              <textarea
                id='message'
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows='6'
                required
                className='w-full resize-y rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500'
                placeholder='Write your message here...'
              />
            </div>
            <button
              type='submit'
              className='flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-600 px-5 py-3.5 text-base font-bold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/30 active:scale-[.99] cursor-pointer'
            >
              <img src={whatsapplogo} alt='' aria-hidden='true' className='h-6 w-6 rounded-md object-cover' />
              Open WhatsApp
            </button>
          </form>
        </section>
      </div>
    </main>
  )
}

export default ContactMe
