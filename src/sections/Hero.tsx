import ArrowRight from '../../assets/arrow-right.svg';
import cogImage from '../../assets/cog.png';
import Image from 'next/image'; 
import noodleImage from '../../assets/noodle.png';  
import cylinderImage from '../../assets/cylinder.png';



const Hero = () => {
    return  (
        <section className=" w-full pt-8 pb-20 md:pt-5 bg-gradient-to-br to-[#183EC2] via-[#FFFFFF] from-[#FFFFFF] overflow-x-clip">
        <div className="relative z-10 w-full">
            <div className="md:flex items-center">
            <div className='md:flex'>
                <div>
                <div className="tag">Version 2.0 is here</div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">Pathway to productivity</h1>
                <p className="md:w-[700px] text-xl text-[#010D3E] tracking-tight mt-3"> Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</p>
                <div className="flex gap-1 items-center mt-[30px]">
                    <button className="btn btn-primary">Get for free</button>
                    <button className="btn btn-text flex items-center gap-2" > 
                        <span>Learn more</span>
                        <img src={ArrowRight.src} className="h-5 w-5"/>
                        </button>
                </div>    
            <div className="w-[100vw] mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
                <Image src={cogImage.src} alt="cog" height={1000} width={1000} className='md:absolute md:h-auto md:w-[700px] md:max-w-none md:-right-0 -top-76'/>
            </div>
            <Image src={cylinderImage.src} alt="cylinder" height={150} width={150} className="hidden md:block -top-10 left-180 md:absolute"/>
            </div>
            </div>
            <Image src={noodleImage.src} alt="half cog" height={150} width={150} className="hidden lg:block -top-10 left-180 md:absolute top-[524px] right-[448px] rotate-[30deg]"/>
        </div>
        </div>
    </section>
    )
}
export default Hero;