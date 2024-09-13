import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonialCards from "@/components/TestimonialCards";
import UpComingWebinars from "@/components/UpComingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import HeroSection from "@/components/hero_section";


export default function Home() {
  return (
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection/>
        <FeaturedCourses/>
        <WhyChooseUs/>
        <MusicSchoolTestimonialCards/>
        <UpComingWebinars/>
        <Instructors/>
        <Footer/>
      </main> 
  );
}
