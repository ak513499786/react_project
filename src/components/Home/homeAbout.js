import { Link } from "react-router-dom";

export default function HomeAbout(){
    return(
        <section id="about">
          <div id="rectangle"></div>
          <div id="abtcnt">
            <div className="header1">
              <h1 id="abth1">
                We Help Our Clients Define And Shape The Future.
              </h1>
              <p id="abtdmycnt">
                We are a design-led development firm operating at the
                intersection of human touch, data-driven analytics and
                cutting-edge technology.
              </p>
            </div>
            <Link to={"/work"} className="allwork">
              <p className="workbt_content">all works</p>
            </Link>
          </div>
          <div className="bg-container">
            <div className="bg-mini-1">
              <div id="img2"></div>
              <div id="imgs2">
                <h1>MANGO</h1>
                <p id="imgs2p">shopify platform design + development</p>
              </div>
            </div>
            <div className="bg-mini-4">
              <div id="imgs4">
                <h1>Lyra Health</h1>
                <p id="imgs4p">bigcommerce platform design + development</p>
              </div>
              <div id="img4"></div>
            </div>
            <div className="bg-mini-2">
              <div id="imgs"></div>
              <div id="imgs1">
                <h1>COWBOY</h1>
                <p id="imgs1p">shopify platform design + development</p>
              </div>
            </div>
            <div className="bg-mini-3">
              <div id="imgs3">
                <h1>WILLAIM ABRAHAM</h1>
                <p id="imgs3p">shopify platform design + development</p>
              </div>
              <div id="img3"></div>
            </div>
          </div>
        </section>
    );
}