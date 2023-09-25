import Link from 'next/link'
import React from 'react'

// ICONS
import { HiHome, HiBeaker, HiDesktopComputer, HiMail } from 'react-icons/hi'

const DesktopNav: React.FC = () => {

    const styles = {
        background: 'fixed w-full flex flex-row justify-evenly bg-[#121b2c] shadow-lg shadow-[#F97316] z-10',
        icons: 'flex flex-row content-center text-neutral-200 my-12',
        text: 'flex items-center text-xl ml-3 tracking-widest hover:text-[#F97316] hover:scale-110 cursor-pointer',
    }

    return (
        <div>

            <div id='desktop-nav' className={styles.background}>
                <div className={styles.icons}>
                    <Link href='/'><h2 className={styles.text}><div className='mr-3'><HiHome /></div>HOME</h2></Link>
                </div>

                <div className={styles.icons}>
                    <Link href='/#projects'> <h2 className={styles.text}><div className='mr-3'><HiBeaker /></div>PROJECTS</h2></Link>
                </div>

                <div className={styles.icons}>
                    <Link href='/#skills'><h2 className={styles.text}><div className='mr-3'><HiDesktopComputer /></div>SKILLS</h2></Link>
                </div>

                <div className={styles.icons}>
                    <Link href='/#contact'> <h2 className={styles.text}><div className='mr-3'><HiMail /></div>CONTACT</h2></Link>
                </div>
            </div>

        </div>
    )
}

export default DesktopNav
