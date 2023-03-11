import client1 from "./images/client.svg";
import client2 from "./images/client1.svg";
import client3 from "./images/client2.svg";
import client4 from "./images/client3.svg";
import client5 from "./images/client4.svg";
import client6 from "./images/client5.svg";
import client7 from "./images/client6.svg";
import client8 from "./images/client7.svg";
import client9 from "./images/client8.svg";
import client10 from "./images/client9.svg";

export default function Client(){
    return(
        <>
        <div alt="" id="clients">
              <img src={client1} alt="" className="client-img1" />
              <img src={client2} alt="" className="client-img2" />
              <img src={client3} alt="" className="client-img3" />
              <img src={client4} alt="" className="client-img4" />
              <img src={client5} alt="" className="client-img5" />
              <img src={client7} alt="" className="client-img6" />
              <img src={client6} alt="" className="client-img7" />
              <img src={client8} alt="" className="client-img8" />
              <img src={client9} alt="" className="client-img9" />
              <img src={client10} alt="" className="client-img0" />
            </div>
        </>
    );
}