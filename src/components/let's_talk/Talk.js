import "./talk.css";

import left_arrow from "./images/Frame 7.png";
import right_arrow from "./images/Frame 8.png";

export default function Talk() {
  return (
    <>
      <main className="contact-hero">
        <div className="contact-section">
          <h1 className="contact-hero-h1">The Sky's The Limit!​</h1>
          <p className="contact-hero-para">
            Request our detailed portfolio or a free quotation; there are no
            strings attached! If you'd like, we can just have a chat and get to
            know each other- we love making new friends and meeting new people
            who share interests!
          </p>
        </div>
      </main>
      <section className="address">
        <h1 className="address-h1">Bangalore</h1>
        <p className="address-p">
          #671, 26th Main, 17th Cross, <br />
          6th Phase,J P Nagar, Bangalore
        </p>
        <div className="address-loc">12° 56' 27.06" N, 77° 32' 39.228" E</div>
      </section>
      <section className="contact-form">
        <h1 className="contact-form-h1">How Can We Reach You?</h1>
        <form action="" id="form">
          <input
            type="text"
            placeholder="First Name*"
            className="name border-white width-40"
            required
          />
          <input
            type="text"
            placeholder="Last Name*"
            className="name border-white width-40 lastname"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="name border-white width-40 email"
            required
          />
          <select name="" id="" className="name border-grey tele">
            <option value="">+91</option>
          </select>
          <input
            type="number"
            placeholder="Number*"
            className="name border-grey width-35 numb"
            required
          />
          <select name="" id="" className="name border-grey service" required>
            <option value="">Service*</option>
          </select>
          <input
            type="textarea"
            placeholder="Your Message"
            className="name border-grey yourmsg"
          />
          <div className="sub_btn">
            <p className="exp_btn-content">Submit Your Response</p>
          </div>
        </form>
      </section>
      <section className="contact-client">
        <div id="contact-container">
          <h3 id="contact-container-h3">
            Codelinear allows businesses to make the best of all things digital.
            Our team of designers, developers, content strategies, and creative
            thinkers work together to enrich your digital existence
          </h3>
          <h2 id="contact-container_h2">Cj Jenkins</h2>
          <p id="contact-pm">product manager, moveworks</p>
          <div id="contact-arrow">
            <img src={left_arrow} alt="" id="contact-left" />
            <p id="contact-nums">1/8</p>
            <img src={right_arrow} alt="" srcset="" id="contact-right" />
          </div>
        </div>
      </section>
      <section className="e-model">
        <h1 className="e-model-h1">Our Engagement Model</h1>
        <p className="e-model-para" >
          Our comprehensive services encompass UX design, product development,
          consulting, and everything within and beyond. Starting with the
          development of the products and continuing through the launch
          strategies, we help businesses launch their success and bring the
          luxury of transformational technology and dynamic UI/UX right to their
          doorstep.
        </p>
        <div className="accordian">
          <h1 className="accordian-h1">
            Fixed Cost <span className="accordian-plus">+</span>
          </h1>
          <p className="accordian-para">
            We thrive on challenges and comlex problems. Our team ranges from
            industry experts ,providing years of industry insights, to young
            enthusiasts, providing a creative and innovative perspective.
            Equipped with this wide arena of experience, we devise solution that
            enable you to leverage the adversities, converting challenges into
            opportunities.
          </p>
        </div>
        <hr className="hr" />
        <div className="accordian">
          <h1 className="accordian-h1">
            Time And Material<span className="accordian-plus">+</span>
          </h1>
          <p className="accordian-para">
            With the constantly evolves in tandem with it, our agile team of
            designers, developers, marketers, and strategists evolves in tandem
            with it. Our protective team is consistently hustling to provide you
            with the finest assistance, enabling you to maintain adaptability
            and resilence in the face of change.
          </p>
        </div>
        <hr className="hr" />
        <div className="accordian">
          <h1 className="accordian-h1">
            Dedicated Resource<span className="accordian-plus">+</span>
          </h1>
          <p className="accordian-para">
            We are here to establish the new status quo- Design with Impact and
            we believe that in the era of globalisation, boundaries are only
            thearetical. Therefore, we may be based in Bengaluru, but the impact
            we weild is global.
          </p>
        </div>
      </section>
      <section className="question">
        <h1 className="question-h1">
          We Understand You Might Have Some Questions
        </h1>
        <div className="questions">
          question 1 <span className="plus">+</span>
        </div>
        <div className="questions">
          question 2 <span className="plus">+</span>
        </div>
        <div className="questions">
          question 3 <span className="plus">+</span>
        </div>
        <div className="questions">
          question 4 <span className="plus">+</span>
        </div>
        <div className="questions">
          question 5 <span className="plus">+</span>
        </div>
      </section>
    </>
  );
}
