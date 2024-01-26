import HeroSection from "../components/HeroSection/HeroSection";
import HomeImg from "../assets/28.jpg";
import Destinations from "../components/Destinations/Destinations";

const Home = () => {
  return (
    <div className="home_page">
      <HeroSection
        class_name={"home_hero_section"}
        hero_img={HomeImg}
        hero_text="Your Time Your Story"
      />

      <Destinations />
    </div>
  );
};

export default Home;
