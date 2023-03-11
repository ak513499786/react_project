import "./talk.css";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Talk() {
  let fade = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.5 },
    });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "1" });
  }, []);
  return (
    <main className="contact-page" ref={(el) => (fade = el)}>
      <section className="contact-hero">
        <div className="contact-section">
          <h1 className="contact-hero-h1">The Sky's The Limit!​</h1>
          <p className="contact-hero-para">
            Request our detailed portfolio or a free quotation; there are no
            strings attached! If you'd like, we can just have a chat and get to
            know each other- we love making new friends and meeting new people
            who share interests!
          </p>
        </div>
      </section>
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
      <section className="address">
        <div className="address-container">
          <div className="address-content">
            <h1 className="address-h1">Bangalore</h1>
            <p className="address-p">
              #671, 26th Main, 17th Cross, <br />
              6th Phase,J P Nagar, Bangalore
            </p>
          </div>
          <div className="address-loc">12° 56' 27.06" N, 77° 32' 39.228" E</div>
        </div>
      </section>
    </main>
  );
}
