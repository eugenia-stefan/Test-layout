import React from "react";
import picture1 from "D:/dev/test-layout/src/images/picture1.png";
function Info(props) {
  const { title, text } = props;
  return (
    <div className="info">
      <div className="info-picture">
        <img src={picture1} alt="info" />
      </div>
      <div className="info-content">
        <div id="info-title">{title}</div>
        <div id="info-text">{text}</div>
      </div>
    </div>
  );
}

export default Info;
