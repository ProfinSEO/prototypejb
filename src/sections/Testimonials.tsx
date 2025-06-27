import avatar1 from "../../assets/avatar-1.png";
import avatar2 from "../../assets/avatar-2.png";
import avatar3 from "../../assets/avatar-3.png";
import avatar4 from "../../assets/avatar-4.png";
import avatar5 from "../../assets/avatar-5.png";
import avatar6 from "../../assets/avatar-6.png";
import avatar7 from "../../assets/avatar-7.png";
import avatar8 from "../../assets/avatar-8.png";
import avatar9 from "../../assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";


const testimonials = [
    {
        text: "As a season designer always on the lookout for innovative tools, f",
        imageSrc: avatar1,
        name: "Jamie Rivera",
        username: "@jamietechguru00"
    },
    {
        text: "Our team's productivity has skyrocketed since we started using this t",
        imageSrc: avatar2,
        name: "John Smith",
        username: "@jjsmith"
    },
    {
        text: "This app has completely transformed how I manage my projects and deadline",
        imageSrc: avatar3,
        name: "Morgan Lee",
        username: "@@morganleewhiz"
    },
    {
        text: "I was amazed at hw quickly we were able to integrate this app into oo",
        imageSrc: avatar4,
        name: "Casey Jordan",
        username: "@caseyj"
    },
    {
        text: "Planning and executing events has never been easier",
        imageSrc: avatar5,
        name: "Taylor Kim",
        username: "@rileysmith1"
    },
    {
        text: "The customization and intergretion capabilities of this app are top",
        imageSrc: avatar6,
        name: "Riley Smith",
        username: "@rileysmith1"
    },
    {
        text: "Adopting this app for our team has streamlined our project management",
        imageSrc: avatar7,
        name: "Jordan Patels",
        username: "@jpatelsdesign"
    },
    {
        text: "With this app, we can easily assign tasks, track progress, and manage",
        imageSrc: avatar8,
        name: "Sam Dawson",
        username: "@dawsontechtips"
    },
    {
        text: "Its user-friendly interface and robust features support our diverse",
        imageSrc: avatar9,
        name: "Casey Harper",
        username: "@casey09"
    },


];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


const TestimonialsColumn = (props: { 
    className?: string; 
    testimonials: typeof testimonials;

}) => (
            <div className={twMerge(
                "flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",
                props.className
            )}>
            {props.testimonials.map(({ text, imageSrc, name, username }) => (
                <div className="card">
                    <div>{text}</div>
                    <div>
                     <Image 
                        src={imageSrc} 
                        alt={name} 
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full"
                      />
                    </div>
                    <div>
                    <div className="flex flex-col">
                        <div className="font-medium tracking-tight leading-5">{name}</div>
                    </div>
                    <div className="leading-5 tracking-tight">
                         <div>{username}</div>
                    </div>
                    </div>
                </div>
            ))}
        </div>
)


export const Testimonials = () => {
    return (
    
    <section className="bg-white ">
            <div className="container">
            <div className="section-heading">
            <div className="flex justify-center">
            <div className="tag">Testimonials</div>
            </div>
            <h2 className="section-title mt-5">What our users say</h2>
            <p className="flex justify-center section-description mt-5">From intuitive design to powerful features, our app has become essential tool for users around the world
            </p>
            </div>
        <div className="flex justify-center gap-6">
            <TestimonialsColumn testimonials={firstColumn} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:flex" />
        <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:flex" />
        </div>
        </div>
    </section>

  );
};


