import React from 'react'
import Link from 'next/link';

// ICONS
import { HiHome, HiBeaker, HiDesktopComputer, HiMail } from 'react-icons/hi'

const MobileNav = () => {

    const styles = {
        background: ' flex justify-center justify-evenly items-center fixed bottom-0 left-0 z-50 w-full bg-[#121b2c] z-10',
        icon: 'text-neutral-200 active:text-[#F97316] active:scale-110 my-6 mx-6',
    }

    return (
        <div id='mobile-nav' >
            <div className={styles.background}>
                <Link href='/'><HiHome size={28} className={styles.icon} /></Link>
                <Link href='/#projects'><HiBeaker size={25} className={styles.icon} /></Link>
                <Link href='/#skills'><HiDesktopComputer size={28} className={styles.icon} /></Link>
                <Link href='/#contact'><HiMail size={28} className={styles.icon} /></Link>
            </div>
        </div>
    )
}

export default MobileNav
