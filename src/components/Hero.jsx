import {ComputersCanvas} from './canvas'
import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'

const Hero = () => {

  var DateDiff = {
    //--- Info Extra ---
    inDays: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
 
        return Math.floor((t2-t1)/(24*3600*1000));
    },
    inWeeks: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
 
        return parseInt((t2-t1)/(24*3600*1000*7));
    },
    inMonths: function(d1, d2) {
        var d1Y = d1.getFullYear();
        var d2Y = d2.getFullYear();
        var d1M = d1.getMonth();
        var d2M = d2.getMonth();
 
        return (d2M+12*d2Y)-(d1M+12*d1Y);
    },
    //--- 
    inYears: function(d1, d2) {
        return d2.getFullYear()-d1.getFullYear();
    }
  }
  const startMyCareer = new Date('03/26/2018');
  const today = new Date()
  const howManyYear = +DateDiff.inYears(startMyCareer, today); 

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-2'>
           <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/> 
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            HI I'm
            <span className='ml-2 text-[#915eff]'>
              Carlos J. Azpurua
            </span>
            👨‍💻
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 `}>
          Software Engineer and Data Scientist with {howManyYear} years of development experience, I have had the opportunity to be a team leader in web platform development, delivering up to 8 successful projects and counting...Welcome to my portfolio 👋. 
          </p>
        </div>
      </div>

      <ComputersCanvas/>
    </section>
  )
}

export default Hero