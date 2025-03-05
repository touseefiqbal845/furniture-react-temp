import HeroSection from "./HeroSection";
import Layout from "../Layout";
import WelcomeSection from "../Home/WelcomeSection";
import FeaturesSection from "./SaleOff";
import ProductList from "../Home/ProductList";
import BlogSection from "../Home/BlogSection";
import Footer from "./FooterSection";
import ThreeSectionGrid from "./SaleOff";

function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <WelcomeSection />
      <ThreeSectionGrid />
      <ProductList />
      <BlogSection />
    </Layout>
  );
}

export default HomePage;
