import acmeLogo from '../../assets/logo-acme.png';
import quantumLogo from '../../assets/logo-quantum.png';
import echoLogo from '../../assets/logo-echo.png';
import celestiaLogo from '../../assets/logo-celestial.png';
import pulseLogo from '../../assets/logo-pulse.png';
import apexLogo from '../../assets/logo-apex.png';
import Image from 'next/image';

export const LogoTicker = () => {
    return <div className="py-8 md:py-12 bg-white">
        <div className="Container">
            <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                <div className="flex gap=14 flex-none">
                <Image src={acmeLogo.src} alt="acmeLogo" height={200} width={200} className="logo-ticker-image"/>
                <Image src={quantumLogo.src} alt="acmeLogo" height={200} width={200} className="logo-ticker-image"/>
                <Image src={echoLogo.src} alt="acmeLogo" height={200} width={200} className="logo-ticker-image" />
                <Image src={celestiaLogo.src} alt="acmeLogo" height={200} width={200} className="logo-ticker-image" />
                <Image src={pulseLogo.src} alt="acmeLogo" height={200} width={200} className="logo-ticker-image" />
                <Image src={apexLogo.src} alt="acmeLogo" height={200} width={200} className="logo-ticker-image" />
                </div>
            </div>
            </div>"
    </div>;
};