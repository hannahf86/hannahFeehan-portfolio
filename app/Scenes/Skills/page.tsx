import React from 'react'
import Image from 'next/image'

// IMAGES
import html from '@/app/Assets/icons/HTML.png'
import css from '@/app/Assets/icons/CSS.png'
import js from '@/app/Assets/icons/JS.png'
import json from '@/app/Assets/icons/JSON.png'
import php from '@/app/Assets/icons/PHP.png'
import mysql from '@/app/Assets/icons/MySQL.png'
import jquery from '@/app/Assets/icons/jquery.png'
import node from '@/app/Assets/icons/NodeJs.png'
import bootstrap from '@/app/Assets/icons/Bootstrap.png'
import tailwind from '@/app/Assets/icons/Tailwind.png'
import react from '@/app/Assets/icons/React.png'
import adobe from '@/app/Assets/icons/Adobe.png'
import zeplin from '@/app/Assets/icons/Zeplin.png'
import figma from '@/app/Assets/icons/figma.png'
import python from '@/app/Assets/icons/python.png'
import cSharp from '@/app/Assets/icons/c-sharp.png'
import next from '@/app/Assets/icons/next.png'
import vite from '@/app/Assets/icons/vite.png'
import typescript from '@/app/Assets/icons/typescript.png'
import jsx from '@/app/Assets/icons/jsx.png'

const Skills: React.FC = () => {

    const styles = {
        mobile: 'lg:hidden md:hidden',
        title: 'text-center text-4xl md:text-5xl lg:text-5xl pt-12 lg:pt-44 md:pt-16 py-8 text-white',
        description: 'text-white text-center text-md md:text-lg mx-16 mb-8 md:mb-16 lg:mb-12',
        skillTitle: 'text-2xl text-center font-bold text-[#F97316] mb-8 mt-12',
        languagesContainer: 'mx-auto grid grid-col-3 gap-6 justify-center items-center mb-20',
    }

    const tabletStyles = {
        tablet: 'hidden lg:hidden sm:hidden md:block mx-16',
        skillTitle: 'text-3xl text-center font-bold text-[#F97316] mb-8 mt-12',
        languagesContainer: 'mx-auto grid grid-col-3 gap-12 justify-center items-center mb-20',
    }

    const desktopStyles = {
        desktopContainer: 'grid grid-col-3 gap-20',
        desktop: 'hidden md:hidden sm:hidden lg:block mx-20',
        skillTitle: 'text-xl xl:text-xl 2xl:text-3xl text-center font-bold text-[#F97316] mb-8 mt-8',
        languagesContainer: 'mx-auto grid grid-col-4 gap-4 xl:gap-6 justify-center items-center mb-20',
    }

    return (
        <div id='skills' className='bg-[#213251] w-full'>
            <h1 className={styles.title}>SKILLS</h1>
            <p className={styles.description}>Below is a list of the main languages, frameworks, databases, and others, that I work in.</p>

            {/* TO ADD >> postgres, git */}


            {/* MOBILE DESIGN */}
            <div id='mobile' className={styles.mobile}>
                <h2 className={styles.skillTitle}>Languages</h2>
                <div className={styles.languagesContainer}>
                    <div className='col-start-1'><Image src={html} alt='html logo' width={80} /></div>
                    <div className='col-start-2'><Image src={css} alt='css logo' width={80} /></div>
                    <div className='col-start-3'><Image src={js} alt='javascript logo' width={80} /></div>

                    <div className='col-start-1'><Image src={json} alt='json logo' width={80} /></div>
                    <div className='col-start-2'><Image src={typescript} alt='typescript logo' width={80} /></div>
                    <div className='col-start-3'><Image src={jsx} alt='jsx logo' width={80} /></div>

                    <div className='col-start-1'><Image src={mysql} alt='mysql logo' width={80} /></div>
                    <div className='col-start-2'><Image src={cSharp} alt='c sharp logo' width={80} /></div>
                    <div className='col-start-3'><Image src={php} alt='php logo' width={80} /></div>

                    <div className='col-start-1'><Image src={python} alt='python logo' width={80} /></div>
                </div>

                <h2 className={styles.skillTitle}>Frameworks, Libraries & Others</h2>
                <div className={styles.languagesContainer}>
                    <div className='col-start-1'><Image src={node} alt='node.js logo' width={80} /></div>
                    <div className='col-start-2'><Image src={bootstrap} alt='bootstrap logo' width={80} /></div>
                    <div className='col-start-3'><Image src={tailwind} alt='tailwind logo' width={80} /></div>

                    <div className='col-start-1'><Image src={react} alt='html logo' width={80} /></div>
                    <div className='col-start-2'><Image src={jquery} alt='html logo' width={80} /></div>
                    <div className='col-start-3'><Image src={next} alt='next.js 13 logo' width={80} /></div>

                    <div className='col-start-1'><Image src={vite} alt='vite logo' width={80} /></div>
                </div>

                <h2 className={styles.skillTitle}>Design Tools</h2>
                <div className={styles.languagesContainer}>
                    <div className='col-start-1'><Image src={adobe} alt='adobe logo' width={80} /></div>
                    <div className='col-start-2'><Image src={zeplin} alt='zeplin logo' width={80} /></div>
                    <div className='col-start-3'><Image src={figma} alt='figma logo' width={80} /></div>
                </div>
            </div>

            {/* TABLET DESIGN */}
            <div id='tablet' className={tabletStyles.tablet}>
                <h2 className={tabletStyles.skillTitle}>Languages</h2>
                <div className={tabletStyles.languagesContainer}>
                    <div className='col-start-1'><Image src={html} alt='html logo' width={120} /></div>
                    <div className='col-start-2'><Image src={css} alt='css logo' width={120} /></div>
                    <div className='col-start-3'><Image src={js} alt='javascript logo' width={120} /></div>

                    <div className='col-start-1'><Image src={json} alt='json logo' width={120} /></div>
                    <div className='col-start-2'><Image src={typescript} alt='typescript logo' width={120} /></div>
                    <div className='col-start-3'><Image src={jsx} alt='jsx logo' width={120} /></div>

                    <div className='col-start-1'><Image src={mysql} alt='mysql logo' width={120} /></div>
                    <div className='col-start-2'><Image src={cSharp} alt='c sharp logo' width={120} /></div>
                    <div className='col-start-3'><Image src={php} alt='php logo' width={120} /></div>

                    <div className='col-start-1'><Image src={python} alt='python logo' width={120} /></div>
                </div>

                <h2 className={tabletStyles.skillTitle}>Frameworks, Libraries & Others</h2>
                <div className={tabletStyles.languagesContainer}>
                    <div className='col-start-1'><Image src={node} alt='node.js logo' width={120} /></div>
                    <div className='col-start-2'><Image src={bootstrap} alt='bootstrap logo' width={120} /></div>
                    <div className='col-start-3'><Image src={tailwind} alt='tailwind logo' width={120} /></div>

                    <div className='col-start-1'><Image src={react} alt='react logo' width={120} /></div>
                    <div className='col-start-2'><Image src={jquery} alt='jquery logo' width={120} /></div>
                    <div className='col-start-3'><Image src={next} alt='next.js 13 logo' width={120} /></div>

                    <div className='col-start-1'><Image src={vite} alt='vite logo' width={120} /></div>
                </div>

                <h2 className={tabletStyles.skillTitle}>Design Tools</h2>
                <div className={tabletStyles.languagesContainer}>
                    <div className='col-start-1'><Image src={adobe} alt='adobe creative suite logo' width={120} /></div>
                    <div className='col-start-2'><Image src={zeplin} alt='zeplin logo' width={120} /></div>
                    <div className='col-start-3'><Image src={figma} alt='figma logo' width={120} /></div>
                </div>
            </div>


            {/* DESKTOP DESIGN */}
            <div id='desktop' className={desktopStyles.desktop}>
                <div className={desktopStyles.desktopContainer}>
                    <div className='col-start-1'>
                        <h2 className={desktopStyles.skillTitle}>Languages</h2>
                        <div className={desktopStyles.languagesContainer}>
                            <div className='col-start-1'><Image src={html} alt='html logo' width={100} /></div>
                            <div className='col-start-2'><Image src={css} alt='css logo' width={100} /></div>
                            <div className='col-start-3'><Image src={js} alt='javascript logo' width={100} /></div>
                            <div className='col-start-4'><Image src={jsx} alt='jsx logo' width={100} /></div>

                            <div className='col-start-1'><Image src={json} alt='json logo' width={100} /></div>
                            <div className='col-start-2'><Image src={typescript} alt='typescript logo' width={100} /></div>
                            <div className='col-start-3'><Image src={mysql} alt='mysql logo logo' width={100} /></div>
                            <div className='col-start-4'><Image src={php} alt='php logo' width={100} /></div>

                            <div className='col-start-1'><Image src={cSharp} alt='c sharp logo' width={100} /></div>
                            <div className='col-start-2'><Image src={python} alt='python logo' width={100} /></div>
                        </div>
                    </div>

                    <div className='col-start-2'>
                        <h2 className={desktopStyles.skillTitle}>Frameworks, Libraries & Others</h2>
                        <div className={desktopStyles.languagesContainer}>
                            <div className='col-start-1'><Image src={node} alt='node.js logo' width={100} /></div>
                            <div className='col-start-2'><Image src={bootstrap} alt='boostrap logo' width={100} /></div>
                            <div className='col-start-3'><Image src={tailwind} alt='tailwind logo' width={100} /></div>
                            <div className='col-start-4'><Image src={react} alt='react logo' width={100} /></div>

                            <div className='col-start-1'><Image src={jquery} alt='jquery logo' width={100} /></div>
                            <div className='col-start-2'><Image src={next} alt='next.js 13 logo' width={100} /></div>
                            <div className='col-start-3'><Image src={vite} alt='vite logo' width={100} /></div>
                        </div>
                    </div>

                    <div className='col-start-3'>
                        <h2 className={desktopStyles.skillTitle}>Design Tools</h2>
                        <div className={desktopStyles.languagesContainer}>
                            <div className='col-start-1'><Image src={adobe} alt='adobe creative suite logo' width={100} /></div>
                            <div className='col-start-2'><Image src={zeplin} alt='zeplin logo' width={100} /></div>
                            <div className='col-start-3'><Image src={figma} alt='figma logo' width={100} /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-center pb-20 lg:pb-60'></div>
        </div>
    )
}

export default Skills
