import Image from "next/image";
import logo from "../../assets/logosaas.png";
import SocialX from "../../assets/social-x.svg";
import SocialLinkedin from "../../assets/social-linkedin.svg";
import SocialPin from "../../assets/social-pin.svg";
import SocialYoutube from "../../assets/social-youtube.svg";
import SocialInsta from "../../assets/social-insta.svg";

export const Footer = () => {
    return <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
        <div className="container">
            <div className="inline-flex relative before:content-[''] before:h-full before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
            <img src={logo.src} height={40} width={40} alt="SaaS Logo" className="relative"/>
            </div>
            <nav className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
                <a href="http://">About</a>
                <a href="http://">Features</a>
                <a href="http://">Customers</a>
                <a href="http://">Pricing</a>
                <a href="http://">Help</a>
                <a href="http://">Careers</a>
            </nav>
            <div className="flex justify-center gap-6 mt-6">
                <img src={SocialX} height={40} width={40} alt="Social X"/>
                <img src={SocialLinkedin} height={40} width={40} alt="Social Linkedin"/>
                <img src={SocialPin} height={40} width={40} alt="Social Pin"/>
                <img src={SocialYoutube} height={40} width={40} alt="Social Youtube"/>
                <img src={SocialInsta} height={40} width={40} alt="Social Insta"/>
            </div>
            <p className="mt-6">
                &copy; 2024 Your Company, Inc. All rights reserved</p>
        </div>
    </footer>;
};