import React from 'react'
import Image from 'next/image'

// IMAGES
import profilePic from '@/app/assets/profilePic.png'

// ICONS
import { HiChevronDoubleDown } from 'react-icons/hi'
import Link from 'next/link'

const Landing: React.FC = () => {
    const styles = {
        mobileTop: 'md:hidden lg:hidden',
        textContainer: 'px-12',
        subtitle: 'pt-24 pb-6 text-[#FFF] text-2xl',
        title: 'pb-2 text-[#F97316] text-5xl ',
        description: 'text-[#FFF] leading-8 text-md text-center pt-6',
        profilePicContainer: 'w-40 m-auto my-8',
        profilePic: 'rounded-full ',
    }

    const tabletStyles = {
        tabletTop: 'hidden lg:hidden sm:hidden md:block',
        textContainerDt: 'px-20',
        subtitleDt: 'pt-36 pb-4 text-[#FFF] text-3xl',
        titleDt: 'pb-6 text-[#F97316] text-7xl',
        descriptionDt: 'text-[#FFF] pb-24 leading-8 pb-20 text-xl',
        profilePicContainer: 'w-72',
        profilePic: 'rounded-full ml-20 mb-32',
    }

    const desktopStyles = {
        desktopTop: 'hidden md:hidden sm:hidden lg:block',
        textContainerDt: 'px-32 pt-24',
        subtitleDt: 'pt-36 pb-4 text-[#FFF] text-3xl',
        titleDt: 'pb-6 text-[#F97316] text-7xl',
        descriptionDt: 'text-[#FFF] pb-24 leading-8 pb-16 text-xl',
        profilePicContainer: 'w-72 mb-32',
        profilePic: 'rounded-full ml-32 ',

    }

    return (
        <div >

            {/* --- MOBILE BACKGROUND --- */}
            <div id='mobileTop' className={styles.mobileTop}>
                <div className={styles.textContainer}>
                    <h2 className={styles.subtitle}>Hi, my name is</h2>
                    <h1 className={styles.title}>HANNAH FEEHAN</h1>

                    <div id='profilePicContainer' className={styles.profilePicContainer}>
                        <Image src={profilePic} alt='hannah feehan, manga style' className={styles.profilePic} />
                    </div>
                    <p className={styles.description}>I'm a full-stack developer <br />with UI/UX experience to help you with all your digital needs.<br /><br /></p>

                    <Link href='/projects' className='text-white text-center m-auto flex flex-col justify-center items-center pt-6'>
                        <p className='mb-4'>SEE MORE</p>
                        <HiChevronDoubleDown />
                    </Link>
                    <div className='mb-20'></div>
                </div>
            </div>


            {/* --- TABLET BACKGROUND --- */}
            <div id='tabletTop' className={tabletStyles.tabletTop}>
                <div className={tabletStyles.textContainerDt}>
                    <h2 className={tabletStyles.subtitleDt}>Hi, my name is</h2>
                    <h1 className={tabletStyles.titleDt}>HANNAH FEEHAN</h1>
                    <p className={tabletStyles.descriptionDt}>I'm a full-stack developer with UI/UX experience to help you with all your digital needs</p>
                </div>

                <div id='profilePicContainer' className={tabletStyles.profilePicContainer}>
                    <Image src={profilePic} alt='hannah feehan, manga style' className={tabletStyles.profilePic} />
                </div>
            </div>


            {/* --- DESKTOP BACKGROUND --- */}
            <div id='desktopTop' className={desktopStyles.desktopTop}>
                <div className={desktopStyles.textContainerDt}>
                    <h2 className={desktopStyles.subtitleDt}>Hi, my name is</h2>
                    <h1 className={desktopStyles.titleDt}>HANNAH FEEHAN</h1>
                    <p className={desktopStyles.descriptionDt}>I'm a full-stack developer with UI/UX experience to help you with all your digital needs</p>
                </div>

                <div id='profilePicContainer' className={desktopStyles.profilePicContainer}>
                    <Image src={profilePic} alt='hannah feehan, manga style' className={desktopStyles.profilePic} />
                </div>
            </div>









        </div>
    )
}

export default Landing
