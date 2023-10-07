import React from 'react'

// ICONS
import { HiSun, HiMoon } from 'react-icons/hi'

const Toggle: React.FC = () => {

    const styles = {
        container: 'text-[#F97316] fixed lg:bottom-10 lg:right-10 md:top-10 md:right-10 sm:top-0 sm:left-0 bg-white p-1 rounded-lg bg-opacity-30',
    }

    return (
        <div id='toggle'>
            <button className={styles.container}>
                <HiSun size={30} />
            </button>
        </div>
    )
}

export default Toggle
