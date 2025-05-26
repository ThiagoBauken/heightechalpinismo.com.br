import HeroSection from "@/components/home/hero-section";
import ServicesOverview from "@/components/home/services-overview";
import AboutSection from "@/components/home/about-section";
import StatsSection from "@/components/home/stats-section";
import VideoSection from "@/components/home/video-section";
import ProjectGallery from "@/components/home/project-gallery";
import Certifications from "@/components/home/certifications";
import Testimonials from "@/components/home/testimonials";
import FAQSection from "@/components/home/faq-section";
import CTASection from "@/components/home/cta-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesOverview />
      <AboutSection />
      <StatsSection />
      <VideoSection />
      <ProjectGallery />
      <Certifications />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </div>
  );
}
