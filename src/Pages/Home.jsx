import Menu from "../Components/Menu";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Aboutus from "../Components/Aboutus";
import WhyChoose from "../Components/Whychose";
import Gallery from "../Components/Gallery";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Menu />


      <section id="Home">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="about">
        <Aboutus />
      </section>

      <WhyChoose />

      <section id="gallery">
        <Gallery />
      </section>

      <Footer />
    </>
  );
};

export default Home;