import Hero from "@/components/public/homepage/hero";
import HowItWork from "@/components/public/homepage/how-it-work";
import Benefits from "@/components/public/homepage/benefit";
import Interviewers from "@/components/public/homepage/interviewers";
import CTA from "@/components/shared/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWork />
      <Benefits />
      <Interviewers />
      {/*  <Testimonial />*/}
      <CTA />
    </>
  );
}
