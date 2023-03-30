import { Link } from "react-router-dom";

export default function Crew() {
  return (
    <>
      <div className=" produc crewclass">
        <h2 className="text-7xl max-xl:text-5xl max-xl:p-5 leading-sng font-extrabold ml">
          Meet The Crew : A Clique <br /> Of Visionaries
        </h2>
        <p className="my-10 w-2/5 max-lg:w-full max-xl:p-5 max-md:p-6 crewpara">
          A cohort of highly diverse and driven individuals working in
          collaboration to amplify your digital experience. We are visionaries
          who uplift one another, thrive on inclusion, and are determined to
          collectively make a difference for our clients and the world around
          them.
        </p>
        <Link to={"/career"} className="career-crew-btn">
          <p className="career-crew-content">career</p>
        </Link>
      </div>
      <div className="crewcontainer">
        <div className="crew-model">
          <div className="crew-model-container">
            <div className="c-container">
              <h1 className="m-title">
                <p className="m-numbers">01</p>
                <span className="strategist">
                  The <br /> Design Architects
                </span>
              </h1>
              <p className="m-desc">
                The Design Architects orchestrate the project development
                process. From capturing customer expectations to managing the
                budget - they do it all.
              </p>
            </div>
            <div className="c-container">
              <h1 className="m-title">
                <p className="m-numbers">02</p>
                <span className="strategist">
                  The <br /> Strategists
                </span>
              </h1>
              <p className="m-desc">
                They are the geniuses responsible for formulating, documenting,
                and implementing strategies that operate behind the scene to
                drive results.
              </p>
            </div>
            <div className="c-container">
              <h1 className="m-title">
                <p className="m-numbers">03</p>
                <span className="strategist">
                  The <br /> Tech Experts
                </span>
              </h1>
              <p className="m-desc">
                Our Tech Experts devise the perfect strategy, prepare a detailed
                roadmap, and leverage the right technology to help you achieve
                your goals.
              </p>
            </div>
            <div className="c-container">
              <h1 className="m-title">
                <p className="m-numbers">04</p>
                <span className="strategist">
                  The <br /> Delivery Managers
                </span>
              </h1>
              <p className="m-desc">
                Your point-of-contact with Codelinear, who keeps you apprised on
                all the ins and outs of your project and its status.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
