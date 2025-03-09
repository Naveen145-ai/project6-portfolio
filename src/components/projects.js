import Web1Img from '../assets/shopez_imresizer_imresizer.jpg';
import Web2Img from '../assets/travel_imresizer.jpg';
import Web3Img from '../assets/pottery_imresizer_imresizer.jpg';

export default function Projects() {

    const config = {
        projects : [
            {
                image: Web1Img,
                description: 'A Shopez website.Built with MERN Stack.',
                link: 'https://github.com/Naveen145-ai/shopez1-frontend'
            },
            {
                image: Web2Img,
                description: 'A Travel Booking website.Built with MERN Stack.',
                link: 'https://github.com/Naveen145-ai/project-4frontend'
            },
            {
                image: Web3Img,
                description: 'A Potter App.Built with Flutter.',
                link: 'https://github.com/Naveen145-ai/pottery4'
            }
        ]
    }




    return <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-1/2">
        <div className='flex  px-10'>
        <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold'>Projects</h1>
        

        </div>

        </div>
        <div className='w-full'>
        <div className='flex flex-col md:flex-row px-10 gap-5'>
            {config.projects.map((project) => (
                
                <div className='relative'>
            <img className='h-[200px] w-[500px]' src={project.image}/>
            <div className='project-desc'>
                <p className='text-center px-5 py-5'>{project.description}</p>
                <div className='flex justify-center '> 
                <a className='btn' target='_blank' href={project.link}>View project</a>
                </div>
            </div>

          

            </div>
            

            ))}
           
            
            

        </div>
        </div>
    </section>
}