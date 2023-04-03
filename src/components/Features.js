import Container from "./Container";
import Title from "./Title";
import feature from "D:/dev/test-layout/src/images/feature.png";
import container from "D:/dev/test-layout/src/images/container.png";
function FeatureContainer(props) {
  const description = props.text?.map((item) => (
    <div
      key={Math.random()}
      className="features-item"
      style={{
        width: "340px",
        borderRadius: "10px",
        background: "#D2EDFF",
        margin: "30px auto",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Open Sans",
        textAlign: "center",
      }}
    >
      <img src={feature} alt="features" style={{ padding: "20px" }} />
      {item}
    </div>
  ));

  return <div className="parent">{description}</div>;
}

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
      <img src={container} alt="" />
      <Container
        title="Some more boring text, also good for SEO"
        p1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec"
        buttonText="DO IT"
      />
    </div>
  );
}

export default Features;
