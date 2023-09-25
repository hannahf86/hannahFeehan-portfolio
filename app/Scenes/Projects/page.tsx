import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// IMAGES
import dbtApp from '@/app/Assets/dbtApp.png';
import pfMusic from '@/app/Assets/pfMusicPubs.png';
import revision from '@/app/Assets/fullStackRevision.png'

// ICONS
import { BsGithub } from 'react-icons/bs'
import { CgWebsite } from 'react-icons/cg'

const Projects: React.FC = () => {

    const styles = {
        mobile: 'lg:hidden md:hidden',
        title: 'text-center text-4xl md:text-5xl lg:text-5xl pt-12 lg:pt-44 md:pt-16 py-8 text-[#252525]',
        description: 'text-gray-800 text-center text-md mx-16 mb-12 md:mb-16 lg:mb-16',

        projectBox: 'shadow-lg bg-white shadow-[#213251]/50 rounded-lg p-6 mx-8 my-12',
        projectImage: 'w-64 m-auto mt-6 mb-8 drop-shadow-xl rounded-lg',
        projectTitle: 'text-center font-bold text-gray-500 mb-3 text-xl',
        challengeText: 'font-bold text-[#F97316] text-md mb-1',
        projectDescription: 'text-gray-800 text-sm mb-6 leading-relaxed text-justify',
        projectSkills: 'my-4 text-sm text-gray-500',
        links: 'flex flex-row justify-center ',
        codeLinks: 'text-[#F97316] m-4',
    }

    const tabletStyles = {
        tablet: 'hidden lg:hidden sm:hidden md:block mx-16 ',
        tabletProjectBox: 'grid grid-col-2 grid-row-4 gap-8 shadow-lg bg-white shadow-[#213251]/50 rounded-lg px-8 py-6 mb-16',
        tabletImage: 'col-start-1 row-start-1 row-span-2 w-72 m-auto drop-shadow-xl rounded-lg',
        tabletProjectTitle: 'col-start-2 row-start-1 self-center text-2xl font-bold text-gray-500 pt-6 ',
        challengeText: 'font-bold text-[#F97316] text-lg mb-1',
        projectDescription: 'col-start-2 row-start-2 text-gray-800 text-sm mb-6 text-justify',
        skills: 'col-start-2 row-start-3 text-md font-light text-gray-500 mb-6 ',
        links: 'col-start-2 row-start-4 flex justify-start items-end mb-4',
        codeLinks: 'text-[#F97316] mr-8',
    }

    const desktopStyles = {
        desktop: 'hidden md:hidden sm:hidden lg:block mx-16 xl:mx-32 2xl:mx-40',
        desktopProjectBox: 'grid grid-col-2 grid-row-4 gap-8 shadow-lg bg-white shadow-[#213251]/50 rounded-lg px-12 py-6 mb-16',
        desktopImage: 'col-start-1 row-start-1 row-span-2 w-72 m-auto drop-shadow-xl rounded-lg',
        projectTitle: 'col-start-2 row-start-1 self-center text-2xl font-bold text-gray-500 pt-6 ',
        challengeText: 'font-bold text-[#F97316] text-lg mb-1',
        projectDescription: 'col-start-2 row-start-2 text-gray-800 text-md mb-6 text-justify',
        skills: 'col-start-2 row-start-3 text-md font-light text-gray-500 mb-6 ',
        links: 'col-start-2 row-start-4 flex justify-start items-end mb-4',
        codeLinks: 'text-[#F97316] mr-8',
    }

    return (
        <div id='projects' className='bg-[#fafafa] max-w-[1040] m-auto'>

            <div>
                <h1 className={styles.title}>PROJECTS</h1>
                <p className={styles.description}>Feel free to browse my most recent projects. Get in touch for more info!</p>
            </div>

            {/* MOBILE DISPLAY */}
            <div className={styles.mobile}>

                <div id='project-01' className={styles.projectBox}>
                    <Image src={dbtApp} alt='Childcare Calculator app display' className={styles.projectImage} />
                    <h3 className={styles.projectTitle}>Childcare Calculator</h3>
                    <div>
                        <h3 className={styles.challengeText}>The Challenge</h3>
                        <p className={styles.projectDescription}>My childminder once described to me the maths she has to do in order to produce a childcare invoice.
                            I was suprised the council didn't have a calculator to make this easy for their employees, so I decided to make one.</p>
                    </div>
                    <div id='project-skills' className={styles.projectSkills}>
                        <p>React, Next.js 13, Tailwind</p>
                    </div>
                    <div id='links' className={styles.links}>
                        <a href='https://github.com/hannahf86/childcare-calculator/blob/master/README.md' target="_blank"><BsGithub size={30} className={styles.codeLinks} /></a>
                        <a href='https://magenta-phoenix-cdc886.netlify.app/' target="_blank"><CgWebsite size={30} className={styles.codeLinks} /></a>
                    </div>
                </div>


                <div id='project-02' className={styles.projectBox}>
                    <Image src={revision} alt='fullstack revision app display' className={styles.projectImage} />
                    <h3 className={styles.projectTitle}>Fullstack Revision</h3>
                    <div>
                        <h3 className={styles.challengeText}>The Challenge</h3>
                        <p className={styles.projectDescription}>When returning to Vanilla JavaScript, I realised some fundamentals were buried deep in the confines of my
                            long-term memory.<br /><br /> When trying to find a simple system to use to revise, I couldn't find anything suitable! So I made one.</p>
                        <h4 className={styles.projectSkills}>React, Next.js 13, Tailwind</h4>
                        <div id='github-link' className={styles.links}>
                            <Link href='#' target="_blank" ><BsGithub size={30} className={styles.codeLinks} /></Link>
                            <Link href='#' target="_blank"><CgWebsite size={30} className={styles.codeLinks} /></Link>
                        </div>
                    </div>
                </div>


                <div id='project-03' className={styles.projectBox}>
                    <Image src={dbtApp} alt='Exam Tracks app display' className={styles.projectImage} />
                    <h3 className={styles.projectTitle}>Exam Tracks</h3>
                    <div>
                        <h3 className={styles.challengeText}>The Challenge</h3>
                        <p className={styles.projectDescription}>Whilst working as an instrumental music teacher, I find it frustrating when choosing pieces for students to
                            learn and having to flip through different PDFs for exam boards and audio tracks on Spotify or YouTube before we can choose a piece. <br /><br />
                            I decided to use Spotify and YouTube's APIs to keep all this information in one place.</p>
                        <h4 className={styles.projectSkills}>React, Next.js 13, Tailwind</h4>
                        <div id='github-link' className={styles.links}>
                            <Link href='#' target="_blank" ><BsGithub size={30} className={styles.codeLinks} /></Link>
                            <Link href='#' target="_blank"><CgWebsite size={30} className={styles.codeLinks} /></Link>
                        </div>
                    </div>
                </div>


                <div id='project-04' className={styles.projectBox}>
                    <Image src={pfMusic} alt='PF Publishing app display' className={styles.projectImage} />
                    <h3 className={styles.projectTitle}>PF Music Publishing</h3>
                    <div>
                        <h3 className={styles.challengeText}>The Challenge - IN PROGRESS</h3>
                        <p className={styles.projectDescription}>I have been asked by a local musician and composer, to design and build a fullstack e-commerce website for their business.<br /><br />
                            This includes a new brand identity, all graphics used in the project, as well as some social media management for YouTube and Instagram.</p>
                        <h4 className={styles.projectSkills}>React, Next.js 13, Tailwind, PrismaORM, Stripe integration, User Authentication, Google Cloud Development, Postgres SQL</h4>
                        <div id='github-link' className={styles.links}>
                            <Link href='https://github.com/hannahf86/pf-music-publishing' target="_blank" ><BsGithub size={35} className={styles.codeLinks} /></Link>
                            <Link href='#' target="_blank"><CgWebsite size={35} className={styles.codeLinks} /></Link>
                        </div>
                    </div>
                </div>
            </div>



            {/* TABLET DISPLAY */}
            <div id='tabletDisplay' className={tabletStyles.tablet}>

                <div id='project-01' className={tabletStyles.tabletProjectBox}>
                    <Image src={dbtApp} alt='Childcare calculator app display' className={tabletStyles.tabletImage} />
                    <h3 className={tabletStyles.tabletProjectTitle}>Childcare Calculator</h3>
                    <div>
                        <h3 className={tabletStyles.challengeText}>The Challenge</h3>
                        <p className={tabletStyles.projectDescription}>My childminder once described to me the maths she has to do in order to produce a childcare
                            invoice when factoring in the different types of funding available from the government. <br /><br />
                            I was suprised the council didn't have a calculator
                            to make this easy for their employees, so I decided to make one to help her.</p>
                        <h4 className={tabletStyles.skills}>React, Next.js 13, Tailwind</h4>
                        <div id='github-link' className={tabletStyles.links}>
                            <Link href='https://github.com/hannahf86/childcare-calculator/blob/master/README.md' target="_blank" ><BsGithub size={35} className={tabletStyles.codeLinks} /></Link>
                            <Link href='https://magenta-phoenix-cdc886.netlify.app/' target="_blank"><CgWebsite size={35} className={tabletStyles.codeLinks} /></Link>
                        </div>
                    </div>
                </div>

                <div id='project-02' className={tabletStyles.tabletProjectBox}>
                    <Image src={revision} alt='fullstack revision app display' className={tabletStyles.tabletImage} />
                    <h3 className={tabletStyles.tabletProjectTitle}>Fullstack Revision</h3>
                    <div>
                        <h3 className={tabletStyles.challengeText}>The Challenge</h3>
                        <p className={tabletStyles.projectDescription}>When returning to Vanilla JavaScript, I realised some fundamentals were buried deep in the confines of my
                            long-term memory.<br /><br /> When trying to find a simple system to use to revise, I couldn't find anything suitable! So I made one.</p>
                        <h4 className={tabletStyles.skills}>React, Next.js 13, Tailwind</h4>
                        <div id='github-link' className={tabletStyles.links}>
                            <Link href='#' target="_blank" ><BsGithub size={35} className={tabletStyles.codeLinks} /></Link>
                            <Link href='#' target="_blank"><CgWebsite size={35} className={tabletStyles.codeLinks} /></Link>
                        </div>
                    </div>
                </div>

                <div id='project-03' className={tabletStyles.tabletProjectBox}>
                    <Image src={dbtApp} alt='dbt app' className={tabletStyles.tabletImage} />
                    <h3 className={tabletStyles.tabletProjectTitle}>Exam Tracks</h3>
                    <div>
                        <h3 className={tabletStyles.challengeText}>The Challenge</h3>
                        <p className={tabletStyles.projectDescription}>Whilst working as an instrumental music teacher, I find it frustrating when choosing pieces for students to
                            learn and having to flip through different PDFs for exam boards and audio tracks on Spotify or YouTube before we can choose a piece. <br /><br />
                            I decided to use Spotify and YouTube's APIs to keep all this information in one place.</p>
                        <h4 className={tabletStyles.skills}>React, Next.js 13, Tailwind</h4>
                        <div id='github-link' className={tabletStyles.links}>
                            <Link href='#' target="_blank" ><BsGithub size={35} className={tabletStyles.codeLinks} /></Link>
                            <Link href='#' target="_blank"><CgWebsite size={35} className={tabletStyles.codeLinks} /></Link>
                        </div>
                    </div>
                </div>

                <div id='project-04' className={tabletStyles.tabletProjectBox}>
                    <Image src={pfMusic} alt='dbt app' className={tabletStyles.tabletImage} />
                    <h3 className={tabletStyles.tabletProjectTitle}>PF Music Publishing</h3>
                    <div>
                        <h3 className={tabletStyles.challengeText}>The Challenge - IN PROGRESS</h3>
                        <p className={tabletStyles.projectDescription}>I have been asked by a local musician and composer, to design and build a fullstack e-commerce website for their business.<br /><br />
                            This includes a new brand identity, all graphics used in the project, as well as some social media management for YouTube and Instagram.</p>
                        <h4 className={tabletStyles.skills}>React, Next.js 13, Tailwind, PrismaORM, Stripe integration, User Authentication, Google Cloud Development, Postgres SQL</h4>
                        <div id='github-link' className={tabletStyles.links}>
                            <Link href='https://github.com/hannahf86/pf-music-publishing' target="_blank" ><BsGithub size={35} className={tabletStyles.codeLinks} /></Link>
                            <Link href='#' target="_blank"><CgWebsite size={35} className={tabletStyles.codeLinks} /></Link>
                        </div>
                    </div>
                </div>

            </div>




            {/* DESKTOP DISPLAY */}
            <div id='desktopDisplay' className={desktopStyles.desktop}>

                <div id='project-01' className={desktopStyles.desktopProjectBox}>
                    <Image src={dbtApp} alt='dbt app' className={desktopStyles.desktopImage} />
                    <h3 className={desktopStyles.projectTitle}>Childcare Calculator</h3>
                    <div>
                        <h3 className={desktopStyles.challengeText}>The Challenge</h3>
                        <p className={desktopStyles.projectDescription}>My childminder once described to me the maths she has to do in order to produce a childcare
                            invoice when factoring in the different types of funding available from the government. <br /><br />
                            I was suprised the council didn't have a calculator
                            to make this easy for their employees, so I decided to make one to help her.</p>
                        <h4 className={desktopStyles.skills}>React, Next.js 13, Tailwind</h4>
                        <div id='github-link' className={desktopStyles.links}>
                            <Link href='https://github.com/hannahf86/childcare-calculator/blob/master/README.md' target="_blank" ><BsGithub size={35} className={desktopStyles.codeLinks} /></Link>
                            <Link href='https://magenta-phoenix-cdc886.netlify.app/' target="_blank"><CgWebsite size={35} className={desktopStyles.codeLinks} /></Link>
                        </div>
                    </div>
                </div>


                <div id='project-02' className={desktopStyles.desktopProjectBox}>
                    <Image src={revision} alt='Fullstack revision app display' className={desktopStyles.desktopImage} />
                    <h3 className={desktopStyles.projectTitle}>Fullstack Revision</h3>
                    <div>
                        <h3 className={desktopStyles.challengeText}>The Challenge</h3>
                        <p className={desktopStyles.projectDescription}>When returning to Vanilla JavaScript, I realised some fundamentals were buried deep in the confines of my
                            long-term memory.<br /><br /> When trying to find a simple system to use to revise, I couldn't find anything suitable! So I made one.</p>
                        <h4 className={desktopStyles.skills}>React, Next.js 13, Tailwind</h4>
                        <div id='github-link' className={desktopStyles.links}>
                            <Link href='#' target="_blank" ><BsGithub size={35} className={desktopStyles.codeLinks} /></Link>
                            <Link href='#' target="_blank"><CgWebsite size={35} className={desktopStyles.codeLinks} /></Link>
                        </div>
                    </div>
                </div>

                <div id='project-03' className={desktopStyles.desktopProjectBox}>
                    <Image src={dbtApp} alt='Exam Tracks' className={desktopStyles.desktopImage} />
                    <h3 className={desktopStyles.projectTitle}>Exam Tracks</h3>
                    <div>
                        <h3 className={desktopStyles.challengeText}>The Challenge</h3>
                        <p className={desktopStyles.projectDescription}>Whilst working as an instrumental music teacher, I find it frustrating when choosing pieces for students to
                            learn and having to flip through different PDFs for exam boards and audio tracks on Spotify or YouTube before we can choose a piece. <br /><br />
                            I decided to use Spotify and YouTube's APIs to keep all this information in one place.</p>
                        <h4 className={desktopStyles.skills}>React, Next.js 13, Tailwind</h4>
                        <div id='github-link' className={desktopStyles.links}>
                            <Link href='#' target="_blank" ><BsGithub size={35} className={desktopStyles.codeLinks} /></Link>
                            <Link href='#' target="_blank"><CgWebsite size={35} className={desktopStyles.codeLinks} /></Link>
                        </div>
                    </div>
                </div>

                <div id='project-04' className={desktopStyles.desktopProjectBox}>
                    <Image src={pfMusic} alt='PF Music Publishing' className={desktopStyles.desktopImage} />
                    <h3 className={desktopStyles.projectTitle}>PF Music Publishing</h3>
                    <div>
                        <h3 className={desktopStyles.challengeText}>The Challenge - IN PROGRESS</h3>
                        <p className={desktopStyles.projectDescription}>I have been asked by a local musician and composer, to design and build a fullstack e-commerce website for their business.<br /><br />
                            This includes a new brand identity, all graphics used in the project, as well as some social media management for YouTube and Instagram.</p>
                        <h4 className={desktopStyles.skills}>React, Next.js 13, Tailwind, PrismaORM, Stripe integration, User Authentication, Google Cloud Development, Postgres SQL</h4>
                        <div id='github-link' className={desktopStyles.links}>
                            <Link href='https://github.com/hannahf86/pf-music-publishing' target="_blank" ><BsGithub size={35} className={desktopStyles.codeLinks} /></Link>
                            <Link href='#' target="_blank"><CgWebsite size={35} className={desktopStyles.codeLinks} /></Link>
                        </div>
                    </div>
                </div>
            </div>



            <div className='pb-20 lg:pb-20'></div>
        </div>


    );
}

export default Projects
