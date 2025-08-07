"use client"
import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Hero from "@/app/components/Hero";
import Pricing from "@/app/components/Pricing";
import Services from "@/app/components/Services";
import Trainers from "@/app/components/Trainers";
import React from "react";
import { BlogSection } from "../blog/Blog";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Trainers />
      <Pricing />
      <BlogSection/>
      <Contact />
    </div>
  );
}

export default Home;
