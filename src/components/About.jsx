/* eslint-disable react/no-unescaped-entities */
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { services } from '../constants';
import { styles } from '../styles';
import { DateDiff } from '../utils/time';

const ServiceCard = ({ key, index, title, icon }) => (
	<Tilt className='xs:w-[250px] w-full'>
		{
			<motion.div
				variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
				className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
			>
				<div
					options={{
						max: 45,
						scale: 1,
						speed: 450
					}}
					className='bg-tertiary rounded-[20px] min-h-[280px] flex justify-evenly items-center flex-col'
				>
					<img src={icon} alt='web-source' className='w-full h-full' />
					<h3 className='text-white text-[16px] font-bold text-center'>{title}</h3>
				</div>
			</motion.div>
		}
	</Tilt>
);

const About = () => {
	const startMyCareer = new Date('03/26/2018');
	const today = new Date();
	const howManyYear = +DateDiff.inYears(startMyCareer, today);

	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<p className={styles.sectionHeadText}>Social</p>
			</motion.div>

			<motion.p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
				LinkedIn: CarlosAzpurua Github: CarlosAzpurua
			</motion.p>

			<motion.div variants={textVariant()} className='pt-10'>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn('', '', 0.1, 1)}
				className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
			>
				Software developer with expertise in <span className='text-[#915eff]'>TypeScript</span> and{' '}
				<span className='text-[#915eff]'>JavaScript</span>, using frameworks like
				<span className='text-[#915eff]'> React, Node.js, Next.js and Meteor.</span> Developing efficient and
				scalable solutions that solve real-world problems, let's work together to bring your ideas to build!
				<br />
				<br />
				In these <span className='text-[#915eff]'>{howManyYear} years</span>, I have had the opportunity to be{' '}
				<span className='text-[#915eff]'>team leader</span>, and collaborate in great open-source projects (like{' '}
				<span className='text-[#915eff]'>Zilliqa</span>) and in the development of web platforms I have already{' '}
				<span className='text-[#915eff]'>completed 9 successful projects.</span>
			</motion.p>

			<div className='mt-20 flex flex-wrap gap-10'>
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, 'about');
