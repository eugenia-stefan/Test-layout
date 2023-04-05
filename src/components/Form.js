const Form = function () {
  return (
    <div className="parent-form-container">
      <form className="form-container">
        <h2>What about you?</h2>
        <div>
          <label htmlFor="name">Full name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="fruit">Preffered fruit</label>
          <input type="text" id="fruit" />
        </div>
        <label htmlFor="message">How can we help you?</label>
        <input id="message" type="message" />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};
export default Form;
