import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import BrandBar from "../../components/brandbar/BrandBar";
import NewArrivals from "../../components/newArrivals/NewArrivals";
import TopSelling from "../../components/topSelling/TopSelling";
import BrowseStyle from "../../components/browseStyle/BrowseStyle";
import Testimonials from "../../components/testimonials/Testimonials";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Navbar />

      { <main>
       <Hero />
       <BrandBar />
       <NewArrivals />
       <TopSelling />
       <BrowseStyle /> 
       <Testimonials />
       <Newsletter />
      </main> }

      <Footer />
    </div>
  );
}

export default Home;