import HeroSection from "@/components/home/hero-section";
import ServicesOverview from "@/components/home/services-overview";
import VideoSection from "@/components/home/video-section";
import ProjectGallery from "@/components/home/project-gallery";
import Certifications from "@/components/home/certifications";
import Testimonials from "@/components/home/testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesOverview />
      <VideoSection />
      <ProjectGallery />
      <Certifications />
      <Testimonials />
    </div>
  );
}
