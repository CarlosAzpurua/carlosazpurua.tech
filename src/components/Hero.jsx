/* eslint-disable react/no-unescaped-entities */
import {motion} from 'framer-motion'
import {styles} from '../styles'
import Avatar from '../components/Avatar'

const Hero = () => {

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className='absolute w-full mx-auto items-center justify-center'>
        <div className={`${styles.paddingX} absolute inset-0 top-[200px] max-w-7x1 lg:mx-40 flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-2'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
            <div className='w-1 sm:h-80 h-60 violet-gradient'/> 
          </div>

          <div className='max-w-[700px]'>
            <span className={`${styles.heroSubText} mt-4`}>
              Hi, my name is 
            </span>
            <h1 className={`${styles.heroHeadText} h1 text-[#915eff]`}>
              Carlos J. Azpurua 
            </h1>
            <p className={`${styles.heroSubText} mt-4 `}>
              Software Engineer based in South America, specializing in building exceptional websites, applications and services... Welcome to my portfolio 
            </p>
          </div>
        </div>
      </div>

      {/* Avatar */}
      <div className='w-full h-full max-w-[600px] '>
        <Avatar/>
      </div>
      {/* Scroll */}
      <div className='absolute bottom-4 lg:bottom-7 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.55,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero