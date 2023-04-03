import Title from "./Title";
function Hero() {
  return (
    <div className="hero">
      <div className="hero-banner">
        <span id="hero-text">Welcome to our amazing website</span>
        <span id="hero-text-two">Lorem ipsum dolor sit amet</span>
      </div>
      <div className="presentation-box">
        <Title title="Bored to stay in traffic?" />
        <div style={{ marginTop: "20px" }}>
          <span id="text-box">Download the app</span>
        </div>

        <div className="download-buttons">
          <button id="download-btn">DOWNLOAD 1</button>
          <button id="download-btn">DOWNLOAD 2</button>
        </div>
      </div>
    </div>
  );
}
export default Hero;
