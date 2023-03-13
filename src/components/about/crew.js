import { Link } from "react-router-dom";

export default function Crew() {
  return (
    <>
      <div className=" produc crewclass">
        <h2 className="text-7xl max-xl:text-5xl max-xl:p-5 leading-sng font-extrabold ml">
          Meet The Crew : A Clique <br /> Of Visionaries
        </h2>
        <p className="my-10 w-2/5 max-lg:w-full max-xl:p-5 max-md:p-6 crewpara">
          To propel huminity forword by building digital products for business
          that unrich peoples lives Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Est, natus veniam! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Maxime Lorem, ipsum dolor sit amet.
        </p>
        <div className=" mt-5 max-lg:ml-0 max-lg:p-8 ">
          <button id="careerbtn">
            <Link to="/career" className="careerbtn_content">
              careers
            </Link>
          </button>
        </div>
      </div>
      <div className="crewcontainer">
        <section className="e-model">
          <div className="engagement-model">
            <div className="model-container">
              <div className="m-m-container">
                <h1 className="m-title">
                  <p className="m-numbers">01</p>
                  <span className="strategist"> Design Architects</span>
                </h1>
                <p className="m-desc">
                  the Design Architects will orchestrate the project development
                  process. From capturing customer expectations to managing the
                  budget - they will do it all.
                </p>
              </div>
              <div className="m-m-container">
                <h1 className="m-title">
                  <p className="m-numbers">02</p>
                  <span className="strategist">Strategists</span>
                </h1>
                <p className="m-desc">
                  They are the geniuses responsible for formulating,
                  documenting, and implementing strategies that operate behind
                  the scene to drive results.
                </p>
              </div>
              <div className="m-m-container">
                <h1 className="m-title">
                  <p className="m-numbers">03</p>
                  <span className="strategist">Tech Experts</span>
                </h1>
                <p className="m-desc">
                  Our Tech Experts will devise the perfect strategy, prepare a
                  detailed roadmap, and leverage the right technology to help
                  you achieve your goals.
                </p>
              </div>
              <div className="m-m-container">
                <h1 className="m-title">
                  <p className="m-numbers">04</p>
                  <span className="strategist">Delivery Managers</span>
                </h1>
                <p className="m-desc">
                  Your point-of-contact with Codelinear, who will keep you
                  apprised on all the ins and outs of your project and its
                  status.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
