import React from 'react';
import Header from "@/components/public/header";
import Hero from "@/components/public/homepage/hero";
import HowItWork from "@/components/public/homepage/how-it-work";
import Benefits from "@/components/public/homepage/benefit";
import Interviewers from "@/components/public/homepage/interviewers";
import Testimonial from "@/components/public/homepage/testimonials";
import CTA from "@/components/public/homepage/cta";
import Footer from "@/components/public/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      {/*<main>*/}
      {/*  <Hero />*/}
      {/*  <HowItWork />*/}
      {/*  <Benefits />*/}
      {/*  <Interviewers />*/}
      {/*  <Testimonial />*/}
      {/*  <CTA />*/}
      {/*</main>*/}
      <Footer />
    </div>
  );
}
