import HeroImg from '../assets/hero.png';
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";  // Import LeetCode icon

export default function Hero() {
    const config = {
        subtitle: 'I am a Full Stack Developer and Designer',
        social: {
            linkedin: 'https://www.linkedin.com/in/naveen-srinivas-312234324',
            github: 'https://github.com/Naveen145-ai',
            leetcode: 'https://leetcode.com/u/NaveenSrinivasV_-/'
        }
    };

    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className='text-white text-6xl'>Hi, <br/>I am Naveen 
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
                <a href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
                <a href={config.social.leetcode} className='hover:text-white'><SiLeetcode size={40}/></a>
            </div>
        </div>
        <img className='md:w-1/3' src={HeroImg} />
    </section>
}
