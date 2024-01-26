import HeroSection from "../../components/HeroSection/HeroSection";
import "./Contact.css";
import HeroImg from "../../assets/26.jpg";

const Contact = () => {
  return (
    <div>
      <HeroSection
        hero_img={HeroImg}
        class_name={"hero_section"}
        hero_text={"Contact"}
      />

      <div className="input_container">
        <h1 className="heading">Contact Us</h1>

        <form action="">
          <input type="text" placeholder="First Name" />

          <input type="text" placeholder="Last Name" />

          <input type="email" placeholder="Email" />

          <textarea placeholder="Message" rows={4}></textarea>

          <button className="send_btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
