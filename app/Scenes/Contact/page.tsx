import React from 'react'

const Contact: React.FC = () => {

    const styles = {
        background: 'h-full bg-white',
        mobileTitle: 'text-[#252525] text-5xl text-center mb-8 lg:pt-52 tracking-widest',
        formContainer: 'bg-[#213251] mx-40 p-20 rounded-lg',
        form: 'm-auto text-center',
        inputName: 'w-11/12 p-2 rounded-md mb-4 ',
        inputMessage: 'w-11/12 rounded-md h-40 p-2 mb-4 ',
        button: 'bg-zinc-200 px-6 py-2 rounded-lg  mt-4',
        buttonText: 'font-light tracking-widest',
    }


    return (
        <div id='contact' className={styles.background}>
            {/* MOBILE & TABLET */}
            <h1 className={styles.mobileTitle}>CONTACT</h1>

            <div className={styles.formContainer}>
                <div className='lg:mx-60 md:mx-40'>
                    <form className={styles.form} >
                        <input
                            type='text'
                            name='from_name'
                            placeholder='Full Name'
                            className={styles.inputName}
                            required
                        />
                        <input
                            type='email'
                            name='senderEmail'
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
                            <h3 className={styles.buttonText}>SEND</h3>
                        </button>
                    </form>
                </div>
            </div>

            <div className='pb-12'></div>


            {/* DESKTOP */}

        </div>
    )
}

export default Contact
