import ResImg from '../assets/resume_imresizer_imresizer.jpg';
export default function Resume () {
    const config = {
        link: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://msnlabs.com/img/resume-sample.pdf&ved=2ahUKEwjZsqPHjPuLAxX_e_UHHVnAPeYQFnoECBYQAQ&usg=AOvVaw05sgF9MhRDD4rBo_ig7gjQ'
    }


    return <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
        <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold '>My Resume</h1>
        <p className='pb-5'>You can view my resume <a className='btn' href={config.link}>Download</a></p>
        
        </div>
           
        </div>
    </section>
}