import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Head from "next/head";

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
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <footer className="py-6 text-center text-gray-500 text-sm bg-background border-t border-white/5">
        <p>Designed & Built by DT.</p>
      </footer>
    </>
  );
}
