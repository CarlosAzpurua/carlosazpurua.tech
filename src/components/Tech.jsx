import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-[80px] animate-infinite-scroll">
        {technologies.map((technology) => (
          <li key={technology.name}>
            <img src={technology.icon} alt={technology.name}/>
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-[80px] animate-infinite-scroll" aria-hidden="true">
        {technologies.map((technology) => (
          <li key={technology.name}>
            <img src={technology.icon} alt={technology.name}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionWrapper(Tech, "");