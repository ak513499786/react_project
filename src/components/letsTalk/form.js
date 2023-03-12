export default function form() {
  return (
    <section className="contact-form">
      <div className="contact-container">
        <h1 className="contact-form-h1">How Can We Reach You?</h1>
        <form action="" id="form">
          <div className="name-container">
            <input
              type="text"
              placeholder="First Name*"
              className="first-name"
              required
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="first-name"
              required
            />
          </div>
          <div className="name-container">
            <input
              type="email"
              placeholder="Your Email"
              className="first-name"
              required
            />
            <div className="number">
              <select name="" id="" className="tele">
                <option value="">+91</option>
              </select>
              <input
                type="number"
                placeholder="Phone*"
                className="phone-number"
                required
              />
            </div>
          </div>
          <input
            type="textarea"
            placeholder="Your Message"
            className="yourmsg first-name"
          />
          <div className="sub_btn">
            <p className="sub_button-content">submit your response</p>
          </div>
        </form>
      </div>
    </section>
  );
}
