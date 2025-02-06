import React, { useRef, useState } from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { useReCaptcha } from "next-recaptcha-v3";
import { validateToken } from '@/lib/utils';


const Contact = () => {
  const formRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: ''})
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const { executeRecaptcha } = useReCaptcha();

  const handleChange = ({ target: { name, value} } : {target:any}) => {
    setForm({...form, [name]: value })
  }

  const handleSubmit = async (e:React.ChangeEvent<any>) => {
    e.preventDefault();
    setLoading(true)
    setError(false)
    setSuccess(false)

    try {
      const token = await executeRecaptcha("form_submit");
      const response = validateToken(token);
      response.then( async (r) => {
        if(r.success) {
          await emailjs.send(
            'service_dziz0kt',
            'template_vxgaqih',
            {
              from_name: form.name,
              to_name: 'Camilo Llanos',
              from_email: form.email,
              to_email: 'juanca2721@gmail.com',
              message: form.message
            },
            'NJ-TmNfqwVNSMVpw5'
          );
          setForm({
            name: '',
            email: '',
            message: ''
          })
          setSuccess(true)
        }else{
          setError(true)
        }
      })
      
    } catch (error){
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className='py-20 px-5 md:px-0' id="contact">
      <h1 className='heading mb-20'>
        Contact {' '}
        <span className='text-purple'>Me</span>
      </h1>
      <div className='flex items-center w-full h-[30px] rounded-t-lg pl-2 gap-2 border-neutral-800 bg-neutral-800'>
        <div className='bg-red-600 rounded-full w-[15px] h-[15px] p-1'/>
        <div className='bg-yellow-300 rounded-full w-[15px] h-[15px] p-1'/>
        <div className='bg-green-600 rounded-full w-[15px] h-[15px] p-1'/>
      </div>
      <div className='bg-neutral-950 rounded-b-lg border-neutral-800'>
        <div className='max-w-xl md:mx-auto sm:px-10 px-5 pt-12 flex flex-col items-center justify-center'>
          <p className='text-lg text-white-600 mt-3'> Whether youre looking to build a new website, improve your existing platform, or bring a unique project to life, im here to help.</p>
          <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7 w-full'>
            <label className='space-y-3'>
              <span className='field-label'>Full Name</span>
              <input 
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                required
                className='w-full bg-black-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-white-500 text-lg text-white-800 shadow-black-200 shadow-2xl focus:outline-none'
                placeholder='John Doe'
                />
            </label>
            <label className='space-y-3'>
              <span className='field-label'>Email</span>
              <input 
                type='text'
                name='email'
                value={form.email}
                onChange={handleChange}
                required
                className='w-full bg-black-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-white-500 text-lg text-white-800 shadow-black-200 shadow-2xl focus:outline-none'
                placeholder='johndoe@gmail.com'
                />
            </label>

            <label className='space-y-3'>
              <span className='field-label'>Your Message</span>
              <textarea 
                name='message'
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className='w-full bg-black-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-white-500 text-lg text-white-800 shadow-black-200 shadow-2xl focus:outline-none'
                placeholder='Hi, i want to give you a job...'
                />
            </label>
            {error && (
              <div role="alert">
                <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                  Bot Detected!
                </div>
                <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                  <p>Verification failed. If you think this is a mistake, please try again.</p>
                </div>
              </div>
            )}
            {success && (
              <div role="alert">
                <div className="bg-green-500 text-white font-bold rounded-t px-4 py-2">
                  All good!
                </div>
                <div className="border border-t-0 border-green-400 rounded-b bg-green-100 px-4 py-3 text-green-700">
                  <p>Message sent successfully! Thank you for reaching out.</p>
                </div>
              </div>
            )}
            <button
              className='bg-black-500 px-5 py-2 min-h-12 rounded-lg shadow-black-200 shadow-2xl flex justify-center items-center text-lg text-white gap-1'
              type='submit'
              disabled={loading}
            >
              {loading ? 'Sending...' : (
                <>
                  <span>Send Message </span> <FaLocationArrow className='ms-2 text-white'/>
                </>
              )}
            </button>
            <div className='mt-5'/>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact