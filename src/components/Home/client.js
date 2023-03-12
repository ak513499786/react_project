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
import React, { useState, useEffect } from "react";

export default function Client() {
  const [logo1Opacity, setLogo1Opacity] = useState(0.5);
  const [logo2Opacity, setLogo2Opacity] = useState(0.5);
  const [logo3Opacity, setLogo3Opacity] = useState(0.5);
  const [logo4Opacity, setLogo4Opacity] = useState(0.5);
  const [logo5Opacity, setLogo5Opacity] = useState(0.5);
  const [logo6Opacity, setLogo6Opacity] = useState(0.5);
  const [logo7Opacity, setLogo7Opacity] = useState(0.5);
  const [logo8Opacity, setLogo8Opacity] = useState(0.5);
  const [logo9Opacity, setLogo9Opacity] = useState(0.5);
  const [logo10Opacity, setLogo10Opacity] = useState(0.5);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setLogo1Opacity(Math.random());
      setLogo2Opacity(Math.random());
      setLogo3Opacity(Math.random());
      setLogo4Opacity(Math.random());
      setLogo5Opacity(Math.random());
      setLogo6Opacity(Math.random());
      setLogo7Opacity(Math.random());
      setLogo8Opacity(Math.random());
      setLogo9Opacity(Math.random());
      setLogo10Opacity(Math.random());
    }, 2000);
// <<<<<<< HEAD
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div alt="" id="clients">
//       <img
//         src={client1}
//         alt=""
//         className="client-img1"
//         style={{ opacity: logo1Opacity }}
//       />
//       <img
//         src={client2}
//         alt=""
//         className="client-img2"
//         style={{ opacity: logo2Opacity }}
//       />
//       <img
//         src={client3}
//         alt=""
//         className="client-img3"
//         style={{ opacity: logo3Opacity }}
//       />
//       <img
//         src={client4}
//         alt=""
//         className="client-img4"
//         style={{ opacity: logo4Opacity }}
//       />
//       <img
//         src={client5}
//         alt=""
//         className="client-img5"
//         style={{ opacity: logo5Opacity }}
//       />

//       <img
//         src={client7}
//         alt=""
//         className="client-img6"
//         style={{ opacity: logo6Opacity }}
//       />
//       <img
//         src={client6}
//         alt=""
//         className="client-img7"
//         style={{ opacity: logo7Opacity }}
//       />
//       <img
//         src={client8}
//         alt=""
//         className="client-img8"
//         style={{ opacity: logo8Opacity }}
//       />
//       <img
//         src={client9}
//         alt=""
//         className="client-img9"
//         style={{ opacity: logo9Opacity }}
//       />
//       <img
//         src={client10}
//         alt=""
//         className="client-img0"
//         style={{ opacity: logo10Opacity }}
//       />
//     </div>
// =======

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div alt="" id="clients">
        <img
          src={client1}
          alt=""
          className="client-img1"
          style={{ opacity: logo1Opacity }}
        />
        <img
          src={client2}
          alt=""
          className="client-img2"
          style={{ opacity: logo2Opacity }}
        />
        <img
          src={client3}
          alt=""
          className="client-img3"
          style={{ opacity: logo3Opacity }}
        />
        <img
          src={client4}
          alt=""
          className="client-img4"
          style={{ opacity: logo4Opacity }}
        />
        <img
          src={client5}
          alt=""
          className="client-img5"
          style={{ opacity: logo5Opacity }}
        />
        <img
          src={client7}
          alt=""
          className="client-img6"
          style={{ opacity: logo6Opacity }}
        />
        <img
          src={client6}
          alt=""
          className="client-img7"
          style={{ opacity: logo7Opacity }}
        />
        <img
          src={client8}
          alt=""
          className="client-img8"
          style={{ opacity: logo8Opacity }}
        />
        <img
          src={client9}
          alt=""
          className="client-img9"
          style={{ opacity: logo9Opacity }}
        />
        <img
          src={client10}
          alt=""
          className="client-img0"
          style={{ opacity: logo10Opacity }}
        />
      </div>
    </>
// >>>>>>> cf43176c7766f4b31cb4810966493754162b7074
  );
}
