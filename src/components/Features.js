import Title from "./Title";
import feature from "D:/dev/test-layout/src/images/feature.png";
import container from "D:/dev/test-layout/src/images/container.png";
const FeatureContainer = function (props) {
  const description = props.text?.map((item) => (
    <div key={Math.random()} className="features-item">
      <img src={feature} alt="features" />
      {item}
    </div>
  ));

  return <div className="parent">{description}</div>;
};

function Features() {
  const text = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    "Morbi consectetur aliquam urna.",
    "Morbi consectetur aliquam urna.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna.",
  ];

  return (
    <div>
      <Title title="Our main features" />
      <FeatureContainer text={text} />
      <img src={container} alt="" className="features-container-img" />
    </div>
  );
}

export default Features;
