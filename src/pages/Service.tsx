import HeroSection from "../components/HeroSection/HeroSection";
import HeroImg from "../assets/22.jpg";
import RecentTrips from "../components/RecentTrips/RecentTrips";

const Service = () => {
  return (
    <div>
      <HeroSection
        class_name={"hero_section"}
        hero_img={HeroImg}
        hero_text={"Service"}
      />

      <RecentTrips />
    </div>
  );
};

export default Service;
