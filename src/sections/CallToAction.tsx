import ArrowRight from "../../assets/arrow-right.svg"
import starImage from "../../assets/star.png"
import springImage from "../../assets/spring.png"
import Image from "next/image";




export const CallToAction = () => {
    return <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
        <div className="container">
            <div className="section-heading relative">
            <h2 className="section-title">Sign Up for Free Today</h2>
            <p className="section-description mt-7">
                Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts
            </p>
            <img
            src={starImage.src}
            alt="Star Image" 
            width={360}
            className="absolute -left-[350px] -top-[137px]"/>
            <img 
            src={springImage.src} 
            width={360}
            className="absolute -right-[331px] -top-[19px]"/>
            </div>
            <div className="flex gap-2 mt-10 justify-center">
                <button className="btn btn-primary">Get for free</button>
                <button className="btn btn-text">
                    <span>Learn more</span>
                    <img src={ArrowRight.src} className="h-5 w-5"/>
                </button>
            </div>
        </div>
    </section>;
}