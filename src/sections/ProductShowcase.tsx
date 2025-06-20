import productImage from '../../assets/product-image.png';
import pyramidImage from '../../assets/pyramid.png';
import TubeImage from '../../assets/tube.png';
import Image from 'next/image';

export const ProductShowcase = () => {
    return (
        <section className="bg-gradient-to-b from-#FFFFFF to-[#D2DCFF] py-24 overflow-x-clip">
            <div className="container">
                <div className="section-heading">
                <div className="flex justify-center">
                    <div className="tag">Boost your productivity here</div>
                </div>
                <h2 className="section-title mt-5">A more effective way to track progress</h2>
                <p  className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">Efoortlessly turn your ideas into a fully functional, responsive, SaaS website in just minutes with this template</p>
                </div>
            <div className="relative">
            <Image src={productImage} alt="Product Image" className="mt-10"/>
            <Image src={pyramidImage} alt="Pyramid Image" height={262} width={262} className="hidden md:block absolute -right-36 -top-32"/>
            <Image src={TubeImage} alt="Pyramid Image" height={262} width={262} className="hidden md:block absolute -left-36 -bottom-32"/>
            </div>
            </div>
        </section>
    );
};