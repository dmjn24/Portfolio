import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Head from "next/head";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Full Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of a Full Stack Developer"
        />
      </Head>
      <ScrollReveal width="100%">
        <Hero />
      </ScrollReveal>
      <ScrollReveal width="100%">
        <About />
      </ScrollReveal>
      <ScrollReveal width="100%">
        <Experience />
      </ScrollReveal>
      <ScrollReveal width="100%">
        <Projects />
      </ScrollReveal>
      <ScrollReveal width="100%">
        <Contact />
      </ScrollReveal>
      <Footer />
    </>
  );
}
