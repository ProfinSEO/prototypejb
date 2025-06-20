import Hero  from "../sections/Hero";
import { Header } from "./Header";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Pricing } from "@/sections/Pricing";
import { Testimonials } from "@/sections/Testimonials";

export default function Home () {
    return (
        <div className="w-full">
        <Header />
        <Hero />
        <LogoTicker />
        <ProductShowcase />
        <Pricing />
        <Testimonials />
        </div>
    )
};