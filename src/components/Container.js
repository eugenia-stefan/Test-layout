function Container(props) {
  return (
    <div className="container">
      <div id="container-title">{props.title}</div>
      <div id="container-text">{props.p1}</div>
      <div id="container-text">{props.p2}</div>
      <button className="container-button">{props.buttonText}</button>
    </div>
  );
}

export default Container;
