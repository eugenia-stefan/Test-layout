import logo from "D:/dev/test-layout/src/images/logo-splash-osim-rgb21.png";
const Footer = function () {
  return (
    <>
      <div className="footer">
        <div>
          <div className="footer-title">Some headline</div>
          <div className="footer-text">
            Lorem ipsum dolor sit amet, consectetur
            <br /> adipiscing elit. Morbi consectetur aliquam urna. <br />
            Lorem ipsum dolor sit amet, adipiscing elit. Morbi <br />
            consectetur aliquam urna.{" "}
          </div>
        </div>
        <div>
          <div className="footer-title">Other links</div>
          <div className="footer-text">
            <ul style={{ listStyleType: "none" }}>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Water</li>
              <li>Juice</li>
              <li>Beer</li>
              <li>Wine</li>
            </ul>
          </div>
        </div>
        <img src={logo} alt="logo" />
      </div>
      <div id="copyright">
        <div id="copyright-block">Copyright 2022 Codezilla</div>
      </div>
    </>
  );
};
export default Footer;
