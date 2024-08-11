import FAQ from "@/components/FAQ";
import Hero from "@/components/hero";
import NavigatePages from "@/components/navigate-pages";
import OurBenefits from "@/components/our-benefits";
import OurTestimonials from "@/components/our-testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <OurBenefits />
      <OurTestimonials />
      <FAQ />
      <NavigatePages />
    </>
  );
}
