import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// IMAGES
import dashboard from '@/app/Assets/dashboard.png'
import pfMusic from '@/app/Assets/pfMusicPubs.png';
import isaac from '@/app/Assets/IsaacWebsite.png'
import cig from '@/app/Assets/childcareInvoiceGenerator.png'

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
        codeLinks: 'text-[#F97316] flex flex-col items-center mx-auto',
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
        codeLinks: 'text-[#F97316] flex flex-col items-center mx-auto',
    }

    const desktopStyles = {
        desktop: 'hidden md:hidden sm:hidden lg:block mx-16 xl:mx-32 2xl:mx-40',
        desktopProjectBox: 'grid grid-col-2 grid-row-4 gap-8 shadow-lg bg-white border-white shadow-[#213251]/50 rounded-lg px-12 py-6 mb-16 border-4 hover:border-[#F97316]',
        desktopImage: 'col-start-1 row-start-1 row-span-2 w-72 m-auto drop-shadow-xl rounded-lg',
        projectTitle: 'col-start-2 row-start-1 self-center text-2xl font-bold text-gray-500 pt-6 ',
        challengeText: 'font-bold text-[#F97316] text-lg mb-1',
        projectDescription: 'col-start-2 row-start-2 text-gray-800 text-md mb-6 text-justify',
        skills: 'col-start-2 row-start-3 text-md font-light text-gray-500 mb-6 ',
        links: 'col-start-2 row-start-4 flex justify-start items-end mb-4',
        codeLinks: 'text-[#F97316] flex flex-col items-center mr-12',
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
                    <Image src={cig} alt='Childcare Calculator app display' className={styles.projectImage} />
                    <h3 className={styles.projectTitle}>Childcare Invoice Generator</h3>
                    <div>
                        <h3 className={styles.challengeText}>The Challenge</h3>
                        <p className={styles.projectDescription}>My childminder once described to me the maths she has to do in order to produce a childcare invoice.
                            I was suprised the council didn't have a calculator to make this easy for their employees, so I decided to make one.</p>
                    </div>
                    <div id='project-skills' className={styles.projectSkills}>
                        <p>React, React-Router-Dom, Vite, Custom CSS, Node.js</p>
                    </div>
                    <div id='github-link' className={tabletStyles.links}>
                            <div className={styles.codeLinks}>
                                <p>Github</p>
                                <Link href='https://github.com/hannahf86/childcare-invoice-generator/blob/main/README.md' target="_blank" ><BsGithub size={35} /></Link>
                            </div>

                            <div className={styles.codeLinks}>
                                <p>Live Site</p>
                                <Link href='https://childcare-invoice-generator-rojzbb57g-hannah-feehans-projects.vercel.app/' target="_blank"><CgWebsite size={35} /></Link>
                            </div>
                        </div>
                </div>

                <div id='project-02' className={styles.projectBox}>
                    <Image src={dashboard} alt='Admin Dashboard' className={styles.projectImage} />
                    <h3 className={styles.projectTitle}>Admin Dashboard</h3>
                    <div>
                        <h3 className={styles.challengeText}>The Challenge</h3>
                        <p className={styles.projectDescription}>To create a web application that would push my knowledge and skills with Material UI.<br /><br />
                        I had seen some interesting tutorials and articles using Material UI, along with some libraries I had not heard of, which included Novi and Full Calendar.
                        I was keen to learn these packages as I felt I could reuse them in future projects.</p>
                        <h4 className={styles.projectSkills}>React, Create React App, Material UI, Bootstrap, Custom CSS, TailwindCSS Shades, Nivo, Formik, Yup, 
                        Full Calendar, React Icons</h4>
                        <div id='github-link' className={desktopStyles.links}>
                            <div className={styles.codeLinks}>
                                <p>Github</p>
                                 <Link href='https://github.com/hannahf86/dashboard' target="_blank" ><BsGithub size={35} /></Link>
                            </div>

                            <div className={styles.codeLinks}>
                            <p>Live Site</p>
                                 <Link href='https://dashboard-theta-dun.vercel.app/' target="_blank"><CgWebsite size={35} /></Link>
                                 </div>
                        </div>
                    </div>
                </div>


                <div id='project-03' className={styles.projectBox}>
                    <Image src={isaac} alt='screenshots of website for Isaac Cardow' className={styles.projectImage} />
                    <h3 className={styles.projectTitle}>Website for Isaac Cardow</h3>
                    <div>
                        <h3 className={styles.challengeText}>The Challenge</h3>
                        <p className={desktopStyles.projectDescription}>I was asked to design and build a website for an up and coming classical guitarist, Isaac Cardow.
                            <br /><br /> I used this opportunity to expand my practice with responsive design and alternative solutions for different screen sizes, including a
                            self-made accordion news section for mobile.</p>
                        <h4 className={styles.projectSkills}>React, Next.js 13, Tailwind, EmailJS, Node.js</h4>
                        <div id='github-link' className={desktopStyles.links}>
                            <div className={styles.codeLinks}>
                                <p>Github</p>
                                <Link href='https://github.com/hannahf86/isaac-cardow' target="_blank" ><BsGithub size={35} /></Link>
                                </div>
                                <div className={styles.codeLinks}>
                                <p>Live Site</p>
                                <Link href='https://www.isaaccardow.com/' target="_blank"><CgWebsite size={35}  /></Link>
                                </div>
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
                        <div className={styles.codeLinks}>
                            <p>Github</p><Link href='https://github.com/hannahf86/pf-music-publishing' target="_blank" ><BsGithub size={35} /></Link>
                        </div>
                    </div>
                </div>
            </div>



            {/* TABLET DISPLAY */}
            <div id='tabletDisplay' className={tabletStyles.tablet}>

                <div id='project-01' className={tabletStyles.tabletProjectBox}>
                    <Image src={cig} alt='Childcare calculator app display' className={tabletStyles.tabletImage} />
                    <h3 className={tabletStyles.tabletProjectTitle}>Childcare Invoice Generator</h3>
                    <div>
                        <h3 className={tabletStyles.challengeText}>The Challenge</h3>
                        <p className={tabletStyles.projectDescription}>My childminder once described to me the maths she has to do in order to produce a childcare
                            invoice when factoring in the different types of funding available from the government. <br /><br />
                            I was suprised the council didn't have a calculator
                            to make this easy for their employees, so I decided to make one to help her.</p>
                        <h4 className={tabletStyles.skills}>React, React-Router-DOM, Vite, Custom CSS, Node.js</h4>

                        <div id='github-link' className={tabletStyles.links}>
                            <div className={tabletStyles.codeLinks}>
                                <p>Github</p>
                                <Link href='https://github.com/hannahf86/childcare-invoice-generator/blob/main/README.md' target="_blank" ><BsGithub size={35} /></Link>
                            </div>

                            <div className={tabletStyles.codeLinks}>
                                <p>Live Site</p>
                                <Link href='https://childcare-invoice-generator-rojzbb57g-hannah-feehans-projects.vercel.app/' target="_blank"><CgWebsite size={35} /></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='project-02' className={tabletStyles.tabletProjectBox}>
                    <Image src={dashboard} alt='Admin Dashboard' className={tabletStyles.tabletImage} />
                    <h3 className={tabletStyles.tabletProjectTitle}>Admin Dashboard</h3>
                    <div>
                        <h3 className={tabletStyles.challengeText}>The Challenge</h3>
                        <p className={tabletStyles.projectDescription}>To create a web application that would push my knowledge and skills with Material UI.<br /><br />
                        I had seen some interesting tutorials and articles using Material UI, along with some libraries I had not heard of, which included Novi and Full Calendar.
                        I was keen to learn these packages as I felt I could reuse them in future projects.</p>
                        <h4 className={tabletStyles.skills}>React, Create React App, Material UI, Bootstrap, Custom CSS, TailwindCSS Shades, Nivo, Formik, Yup, 
                        Full Calendar, React Icons</h4>

                        <div id='github-link' className={desktopStyles.links}>
                            <div className={tabletStyles.codeLinks}>
                                <p>Github</p>
                                 <Link href='https://github.com/hannahf86/dashboard' target="_blank" ><BsGithub size={35} /></Link>
                            </div>

                            <div className={tabletStyles.codeLinks}>
                            <p>Live Site</p>
                                 <Link href='https://dashboard-theta-dun.vercel.app/' target="_blank"><CgWebsite size={35} /></Link>
                                 </div>
                        </div>
                    </div>
                </div>

                <div id='project-03' className={tabletStyles.tabletProjectBox}>
                    <Image src={isaac} alt='screenshots of website for Isaac Cardow' className={tabletStyles.tabletImage} />
                    <h3 className={tabletStyles.tabletProjectTitle}>Website for Isaac Cardow</h3>
                    <div>
                        <h3 className={tabletStyles.challengeText}>The Challenge</h3>
                        <p className={desktopStyles.projectDescription}>I was asked to design and build a website for an up and coming classical guitarist, Isaac Cardow.
                            <br /><br /> I used this opportunity to expand my practice with responsive design and alternative solutions for different screen sizes, including a
                            self-made accordion news section for mobile.</p>
                        <h4 className={tabletStyles.skills}>React, Next.js 13, Tailwind, EmailJS, Node.js</h4>
                        <div id='github-link' className={desktopStyles.links}>
                            <div className={tabletStyles.codeLinks}>
                                <p>Github</p>
                                <Link href='https://github.com/hannahf86/isaac-cardow' target="_blank" ><BsGithub size={35} /></Link>
                                </div>
                                <div className={tabletStyles.codeLinks}>
                                <p>Live Site</p>
                                <Link href='https://www.isaaccardow.com/' target="_blank"><CgWebsite size={35}  /></Link>
                                </div>
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
                        <div className={tabletStyles.codeLinks}>
                                <p>Github</p><Link href='https://github.com/hannahf86/pf-music-publishing' target="_blank" ><BsGithub size={35} /></Link>
                            </div>
                    </div>
                </div>

            </div>




            {/* DESKTOP DISPLAY */}
            <div id='desktopDisplay' className={desktopStyles.desktop}>

                <div id='project-01' className={desktopStyles.desktopProjectBox}>
                    <Image src={cig} alt='dbt app' className={desktopStyles.desktopImage} />
                    <h3 className={desktopStyles.projectTitle}>Childcare Invoice Generator</h3>
                    <div>
                        <h3 className={desktopStyles.challengeText}>The Challenge</h3>
                        <p className={desktopStyles.projectDescription}>My childminder once described to me the maths she has to do in order to produce a childcare
                            invoice when factoring in the different types of funding available from the government. <br /><br />
                            I was suprised the council didn't have a calculator
                            to make this easy for their employees, so I decided to make one to help her.</p>
                        <h4 className={desktopStyles.skills}>React, React-Router-DOM, Vite, Custom CSS, Node.js</h4>

                        <div id='github-link' className={desktopStyles.links}>
                            <div className={desktopStyles.codeLinks}>
                                <p>Github</p>
                                <Link href='https://github.com/hannahf86/childcare-invoice-generator/blob/main/README.md' target="_blank" ><BsGithub size={35} /></Link>
                            </div>

                            <div className={desktopStyles.codeLinks}>
                                <p>Live Site</p>
                                <Link href='https://childcare-invoice-generator-rojzbb57g-hannah-feehans-projects.vercel.app/' target="_blank"><CgWebsite size={35} /></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='project-02' className={desktopStyles.desktopProjectBox}>
                    <Image src={dashboard} alt='dbt app' className={desktopStyles.desktopImage} />
                    <h3 className={desktopStyles.projectTitle}>Admin Dashboard</h3>
                    <div>
                        <h3 className={desktopStyles.challengeText}>The Challenge</h3>
                        <p className={desktopStyles.projectDescription}>To create a web application that would push my knowledge and skills with Material UI.<br /><br />
                        I had seen some interesting tutorials and articles using Material UI, along with some libraries I had not heard of, which included Novi and Full Calendar.
                        I was keen to learn these packages as I felt I could reuse them in future projects.
                        </p>
                        <h4 className={desktopStyles.skills}>React, Create React App, Material UI, Bootstrap, Custom CSS, TailwindCSS Shades, Nivo, Formik, 
                        Yup, Full Calendar, React Icons</h4>

                        <div id='github-link' className={desktopStyles.links}>
                            <div className={desktopStyles.codeLinks}>
                                <p>Github</p>
                                <Link href='https://github.com/hannahf86/childcare-invoice-generator/blob/main/README.md' target="_blank" ><BsGithub size={35} /></Link>
                            </div>

                            <div className={desktopStyles.codeLinks}>
                                <p>Live Site</p>
                                <Link href='https://childcare-invoice-generator-rojzbb57g-hannah-feehans-projects.vercel.app/' target="_blank"><CgWebsite size={35} /></Link>
                            </div>
                        </div>
                    </div>
                </div>

            

                <div id='project-03' className={desktopStyles.desktopProjectBox}>
                    <Image src={isaac} alt='Website for classical guitarist, Isaac Cardow' className={desktopStyles.desktopImage} />
                    <h3 className={desktopStyles.projectTitle}>Website for Isaac Cardow</h3>
                    <div>
                        <h3 className={desktopStyles.challengeText}>The Challenge</h3>
                        <p className={desktopStyles.projectDescription}>I was asked to design and build a website for an up and coming classical guitarist, Isaac Cardow.
                            <br /><br /> I used this opportunity to expand my practice with responsive design and alternative solutions for different screen sizes, including a
                            self-made accordion news section for mobile.</p>
                        <h4 className={desktopStyles.skills}>React, Next.js 13, Tailwind, EmailJS, Node.js</h4>

                        <div id='github-link' className={desktopStyles.links}>
                            <div className={desktopStyles.codeLinks}>
                                <p>Github</p>
                                <Link href='https://github.com/hannahf86/isaac-cardow' target="_blank" ><BsGithub size={35} /></Link>
                                </div>
                                <div className={desktopStyles.codeLinks}>
                                <p>Live Site</p>
                                <Link href='https://www.isaaccardow.com/' target="_blank"><CgWebsite size={35}  /></Link>
                                </div>
                        </div>
                    </div>
                </div>

                

                <div id='project-04' className={desktopStyles.desktopProjectBox}>
                    <Image src={pfMusic} alt='PF Music Publishing' className={desktopStyles.desktopImage} />
                    <h3 className={desktopStyles.projectTitle}>PF Music Publishing</h3>
                    <div>
                        <h3 className={desktopStyles.challengeText}>The Challenge - IN PROGRESS</h3>
                        <p className={desktopStyles.projectDescription}>I have been asked by a local musician and composer, to design and build a fullstack e-commerce website for their business.
                            This includes a new brand identity, all graphics used in the project, as well as some social media management for YouTube and Instagram.</p>
                        <h4 className={desktopStyles.skills}>React, Next.js 13, Tailwind, PrismaORM, Stripe integration, User Authentication, Google Cloud Development, Postgres SQL</h4>
                        
                        <div id='github-link' className={desktopStyles.links}>
                        <div className={desktopStyles.codeLinks}>
                                <p>Github</p><Link href='https://github.com/hannahf86/pf-music-publishing' target="_blank" ><BsGithub size={35} /></Link>
                            </div>
                            {/* <Link href='#' target="_blank"><CgWebsite size={35}  /></Link> */}
                        </div>
                    </div>
                </div>
            </div>



            <div className='pb-20 lg:pb-20'></div>
        </div>


    );
}

export default Projects
