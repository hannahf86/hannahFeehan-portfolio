'use client'

import React from 'react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

const SubmitButton = () => {

    const { pending } = useFormStatus()

    const styles = {
        container: 'flex flex-col justify-center lg:w-[min(100%,38rem)] mx-auto',
        button: 'bg-[#213251] disabled:bg-opacity-80 px-6 py-4 rounded-lg mt-2 text-white font-light tracking-widest',
        pending: 'm-auto h-5 w-5 animate-spin rounded-full border-b-2 border-white'
    }

    return (
        <div className={styles.container}>
            <button type="submit" value='send' disabled={pending} className={styles.button}>
                {
                    pending ? <div className={styles.pending}></div> : (
                        <>
                            SEND
                        </>
                    )
                }
            </button>
        </div>
    )
}

export default SubmitButton
