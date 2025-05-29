import ArrowRight from '../../assets/arrow-right.svg';
import Logo from '../../assets/logosaas.png';
import Image from 'next/image';
import MenuIcon from '../../assets/menu.svg';

 export const Header = () => {
   return (
    <header className='sticky top-0 backdrop-blur-sm z-50' >
    <div className="flex justify-center item-center py-3 px-3 bg-blue-500 text-white text-sm gap-3 w-full">
    <p className='text-white/60 hidden md:block '>Streamline your workflow and prodiuctivity</p> 
        <div className="inline-flex gap-1 items-center">
        <p>Get started for free</p>
        {/* <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" /> */}
        <img src={ArrowRight.src} alt="Arrow Right" className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
    </div>
    <div className="container bg-white">
      <div className='py-5'>
        <div className='flex items-center justify-between'> 
        <Image src={Logo.src} alt="Saas Logo" height={40} width={40} />
        <Image src={MenuIcon.src} alt="Menu of Jobland" height={40} width={40} hidden />
      <nav className='hidden md:flex gap-6 text-black/60 items-center'>
        <a href="#">Sign Up or In</a>
        <a href="#">What You Get</a>
        <a href="#">Plans</a>
        <a href="#">Contact Page</a>
        <a href="#">About Jobland</a>
        <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
          Get for free
        </button>
      </nav>
        </div>
      </div>
    </div>
   </header>
   );
  };
