'use client'

import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

const Contact = () => {

    const styles = {
        background: 'h-full bg-white',
        title: 'text-center text-4xl md:text-5xl lg:text-5xl pt-12 lg:pt-44 md:pt-16 py-12 text-[#252525]',
        form: 'mx-40 lg:mx-80 md:mx-40 text-center flex flex-col ',
        inputName: ' p-2 rounded-md bg-zinc-200 border-4 border-[#213251] mb-4 ',
        inputMessage: 'rounded-md bg-zinc-200 border-4 border-[#213251] h-40 p-2 mb-4 ',
        button: 'bg-[#213251] px-6 py-2 rounded-lg mt-4 text-white font-light tracking-widest',
    }

    const [data, setData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const sendEmail = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        if (response.status === 200) {
            setData({})
            toast.success(`Hey ${data.name}, your message has been sent successfully! Thank you very much!`)
        }
    }


    return (
        <div id='contact' className={styles.background}>
            <h1 className={styles.title}>CONTACT</h1>

            <form className={styles.form}>
                <input
                    type='text'
                    name='name'
                    placeholder='Full Name'
                    className={styles.inputName}
                    required
                />
                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    className={styles.inputName}
                    required
                />
                <input
                    type='textarea'
                    name='message'
                    placeholder='Enter your message'
                    className={styles.inputMessage}
                    required
                />
                <button type="submit" value='send' className={styles.button}>
                    <h3>SEND</h3>
                </button>
            </form>


            <div className='pb-60'></div>

        </div>
    )
}

export default Contact