import React from "react";
import picture2 from "D:/dev/test-layout/src/images/picture2.png";
function InfoReverse(props) {
  const { title, text } = props;
  return (
    <div className="info-reverse">
      <div className="info-content">
        <div id="info-title">{title}</div>
        <div id="info-text">{text}</div>
      </div>
      <div className="info-picture">
        <img src={picture2} alt="info" />
      </div>
    </div>
  );
}

export default InfoReverse;
