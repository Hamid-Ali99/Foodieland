import Categories from "@/components/Categories";
import Cock from "@/components/Cock";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Insta from "@/components/Insta";
import NewsLetter from "@/components/NewsLetter";
import Recipes from "@/components/Recipes";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <Recipes />
      <Cock />
      <Insta />
      <NewsLetter />
      <Footer />
    </div>
  );
}
