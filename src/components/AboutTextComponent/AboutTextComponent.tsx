import "./AboutTextComponent.css";

type AboutTextComponentType = {
  heading: string;
  description: string;
};

const AboutTextComponent = (props: AboutTextComponentType) => {
  return (
    <div className="about_text_container">
      <h1 className="about_heading">{props.heading}</h1>

      <p className="about_description">{props.description}</p>
    </div>
  );
};

export default AboutTextComponent;
