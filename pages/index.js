import Contact from "@/component/contact";
import Experience from "@/component/experience";
import Footer from "@/component/footer";
import Hero from "@/component/hero";
import Technologies from "@/component/layout/technologies";
import Testimonial from "@/component/testimonial";
import Work from "@/component/work";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Omkar Pawar</title>
        <meta name="author" content="Omkar Pawar" />
        <meta name="description" content="portfolio of web developer omkar pawar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/omkar.png" />
      </Head>
      <div className="top-padding">
        <div id="home" className="mb-3"></div>
        <Hero />
        <Experience />
        <Technologies />
        <Work />
        {/* <Testimonial /> */}
        <Contact />
        <Footer />
      </div>
    </>
  );
}
