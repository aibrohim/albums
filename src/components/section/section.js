import "./section.scss";

const Section = ({className = "", ...props}) => {
  return (
    <section className={"section " + className} {...props} />
  );
};

export default Section;