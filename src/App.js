import "./App.css";
import "./style/navbar.css";
import "./style/hero.css";
import "./style/info.css";
import "./style/container.css";
import "./style/body.css";
import "./style/features.css";
import "./style/team.css";
import "./style/form.css";
import "./style/footer.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
