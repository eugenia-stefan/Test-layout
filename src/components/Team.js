import Title from "./Title";
import team1 from "D:/dev/test-layout/src/images/team1.png";
import team2 from "D:/dev/test-layout/src/images/team2.png";

const TeamContainer = function (props) {
  const { text } = props;
  const description = text?.map((item, index) => (
    <div key={index} className="team-item">
      <img src={item.photo} alt="team" className="team-photo" />
      <div className="team-title">{item.title}</div>
      <div className="team-role">{item.role}</div>
      <div className="team-describe">{item.describe}</div>
    </div>
  ));
  return <div className="team-parent">{description}</div>;
};

function Team(props) {
  const text = [
    {
      photo: team1,
      title: "Ion Popescu",
      role: "the fixer",
      describe:
        "He likes to lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum et ullamcorper ipsum. ",
    },
    {
      photo: team2,
      title: "Andreea Ghica",
      role: "the colourful",
      describe:
        "She likes to lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. ",
    },
    {
      photo: team1,
      title: "Alexandru Ioanovici Cuza",
      role: "the guy who owns the company",
      describe:
        "He likes to lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. ",
    },
    {
      photo: team1,
      title: "Gruia",
      role: "the entertainer",
      describe: "He likes to entertain. ",
    },
    {
      photo: team2,
      title: "Roxana",
      role: "HR",
      describe:
        "She likes to lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum et ullamcorper ipsum. ",
    },
    {
      photo: team2,
      title: "Mihaela Acatrinei",
      role: "the coffee addict",
      describe: "",
    },
    {
      photo: team1,
      title: "Alexandru Ioanovici Cuza",
      role: "the IT guy",
      describe: "He likes to kick the keyboard. ",
    },
  ];
  return (
    <>
      <Title title="Our fantastic team" />
      <TeamContainer text={text} />
    </>
  );
}

export default Team;
