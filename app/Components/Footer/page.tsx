import React from 'react'

const Footer: React.FC = () => {

    const styles = {
        text: 'text-zinc-400 text-center my-6',
    }

    return (
        <footer className={styles.text}>
            <small>
                &copy; 2023 Hannah Feehan. All rights reserved.
            </small>
            <p className='py-2'>
                <span className='font-bold'>About this website:</span> built with React & Next.js 13 (App Router & Server Actions),
                Typescript, Tailwind CSS, Resend and Vercel hosting
            </p>
        </footer>
    )
}

export default Footer
