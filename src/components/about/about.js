import "./about.css";
import { Link } from "react-router-dom";

import venn from "./images/venn.svg";
import venn1 from "./images/venn1.svg";
import venn0 from "./images/venn0.svg";
import venn3 from "./images/venn3.svg";
import clients from "./images/clients.png";
import left from './images/left.png';
import center from './images/center.png';
import right from './images/right.png';

export default function About() {
  return (
    <>
      <main id="about_hero">
        <div className="container_3">
          <h1 id="about_hero-h1">
            Welcome To The World Of Codelinear-
            <br />
            The World Of Impact
          </h1>
          <p id="about_hero-para">
            we are a design studio focused on handcrafted web and mobile
            applications. we also do digital marketing as a side hustle. we’re
            based in bangalore but work world-wide.
          </p>
        </div>
      </main>
      <section className="vision">
        <h1 className="vision-h1">Our Vision</h1>
        <p className="vision-para">
          Cras non pellentesque vel risus a habitant aliquet ullamcorper massa.
          Risus at convallis ut tellus at semper neque donec. Ac nibh nunc eu
          dignissim urna adipiscing libero tristique. Amet fames amet sed
          sagittis congue justo mattis ut. Amet sed nunc commodo diam.
        </p>
      </section>
      <div className="venn">
        <img src={venn} alt="" className="venn-diagram" />
      </div>
      <article className="guiding">
        <h1 className="guiding_h1">Guiding Principles</h1>
        <p className="guiding_para">
          Every Codelinear project is propped on the following pillars:
        </p>
      </article>
      <aside className="venns">
        <div className="col">
          <img src={venn0} alt="" className="venns_diagrams" />
          <h1 className="venns_col-h1">Ideal</h1>
          <p className="venns_col-para">
            We understand the varying needs of our clients, and therefore
            custom-tailor every product ideally suited to their requirements.
            Our diverse team of designers, developers, marketers, and
            strategists works in collaboration to deliver competitive advantages
            and unparalleled solutions personalised/ tailored for your needs.
          </p>
        </div>
        <div className="col">
          <img src={venn1} alt="" className="venns_diagrams diag" />
          <h1 className="venns_col-h1 sph1">Innovation</h1>
          <p className="venns_col-para">
            We envision ourselves to be the trendsetters/leaders/pathmakers and
            strive to make our clients one too. When organisations across the
            world are on the verge of transformation or running the risk of
            irrelevance, we turn to innovation to stay ahead. We, therefore, go
            beyond strategising, and implement innovation into our projects.
          </p>
        </div>
        <div className="col col-3">
          <img src={venn3} alt="" className="venns_diagrams" />
          <h1 className="venns_col-h1">Impact</h1>
          <p className="venns_col-para">
            Driven by impact, our ultimate focus is to build products that
            address real-world problems. Our team of industry experts ascertains
            that in addition to crafting epitomes of digital experiences, we
            create products that enrich lives and create value.
          </p>
        </div>
      </aside>
      <section className="container-4">
        <div className="crew-section">
          <h1 className="crew-section-h1">
            Meet The Crew: An Overview Of The Codelinear Team
          </h1>
          <p className="crew-section-para">
            A cohort of highly diverse and driven individuals working in
            collaboration to amplify your digital journey/experience. We are
            visionaries who uplift one another, thrive on inclusion, and are
            determined to collectively make a difference for our clients and the
            world around them.
          </p>
          <div className="allworks">
            <p className="workbtn_content">Careers</p>
          </div>
        </div>
      </section>
      <section className="crew-details">
        <div className="container-5">
          <div className="container-6">
            <div className="container-7">
              <p className="numbers">01</p>
              <h1 className="job-title">Design Architects</h1>
              <p className="job-desc">
                the Design Architects will orchestrate the project development
                process. From capturing customer expectations to managing the
                budget - they will do it all.
              </p>
            </div>
            <div className="container-7">
              <p className="numbers">03</p>
              <h1 className="job-title">Tech Experts</h1>
              <p className="job-desc">
                Our Tech Experts will devise the perfect strategy, prepare a
                detailed roadmap, and leverage the right technology to help you
                achieve your goals.
              </p>
            </div>
          </div>
          <div className="container-6">
            <div className="container-7">
              <p className="numbers">02</p>
              <h1 className="job-title">Strategists</h1>
              <p className="job-desc1">
                They are the geniuses responsible for formulating, documenting,
                and implementing strategies that operate behind the scene to
                drive results.
              </p>
            </div>
            <div className="container-7">
              <p className="numbers">04</p>
              <h1 className="job-title">Delivery Managers</h1>
              <p className="job-desc">
                Your point-of-contact with Codelinear, who will keep you
                apprised on all the ins and outs of your project and its status.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="serve">
        <h1 className="serve-h1">We Serve Everyone Within, And Beyond</h1>
        <div className="serve-text">
          <div className="lorem-txt">
            <p className="dmy-lorem1">Pizza ipsum dolor meat</p>
            <p className="dmy-lorem">Pizza ipsum dolor meat</p>
            <p className="dmy-lorem">Pizza ipsum dolor meat</p>
            <p className="dmy-lorem">Pizza ipsum dolor meat</p>
            <p className="dmy-lorem">Pizza ipsum dolor meat</p>
            <p className="dmy-lorem">Pizza ipsum dolor meat</p>
          </div>
          <div className="container-8">
            <div className="container-9">
              <h1 className="serve-head">Sauce bell</h1>
              <p className="serve-para">
                Crust beef mozzarella ham red ranch tomatoes spinach.
              </p>
            </div>
            <div className="container-9">
              <h1 className="serve-head">Burnt extra</h1>
              <p className="serve-para">
                Crust beef mozzarella ham red ranch tomatoes spinach.
              </p>
            </div>
          </div>
          <div className="container-8">
            <div className="container-9">
              <h1 className="serve-head">Meat Lasagna</h1>
              <p className="serve-para">
                Crust beef mozzarella ham red ranch tomatoes spinach.
              </p>
            </div>
            <div className="container-9">
              <h1 className="serve-head">Roll Olives</h1>
              <p className="serve-para">
                Crust beef mozzarella ham red ranch tomatoes spinach.
              </p>
            </div>
          </div>
        </div>
        <img src={clients} alt="" className="clients" />
      </section>
      <section className="about-end">
        <div className="about-end-content">
          <h1 className="about-end-h1">Take A Peek At Our Case Studies</h1>
          <p className="about-end-para">
            Chicago sausage sauce crust ricotta thin ipsum NY pizza. Personal
            lovers thin parmesan sauce. Mozzarella pizza thin pork Philly wing
            hand parmesan. Thin rib parmesan onions roll dolor. Melted pie
            tossed beef.
          </p>
        </div>
        <aside className="about-imgs">
          <img src={left} alt='' className="about-end-imgs sp-img"/>
          <Link to={'/case_study'}>
          <img src={center} alt='' className="about-end-img" />
          </Link>
          <img src={right} alt='' className="about-end-imgs"/>
        </aside>
        <Link to={'/case_study'}>
        <div className="circle"></div>
        </Link>
      </section>
    </>
  );
}
