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
import gsap from "gsap";

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
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      for (let i = 0; i < 100; i++) {
        switch (currentLogoIndex) {
          case 0:
            setLogo1Opacity(logo1Opacity === 0.5 ? 1 : 0.5);
            break;
          case 1:
            setLogo2Opacity(logo2Opacity === 0.5 ? 1 : 0.5);
            break;
          case 2:
            setLogo3Opacity(logo3Opacity === 0.5 ? 1 : 0.5);
            break;
          case 3:
            setLogo4Opacity(logo4Opacity === 0.5 ? 1 : 0.5);
            break;
          case 4:
            setLogo5Opacity(logo5Opacity === 0.5 ? 1 : 0.5);
            break;
          case 5:
            setLogo10Opacity(logo10Opacity === 0.5 ? 1 : 0.5);
            break;
          case 6:
            setLogo9Opacity(logo9Opacity === 0.5 ? 1 : 0.5);
            break;
          case 7:
            setLogo8Opacity(logo8Opacity === 0.5 ? 1 : 0.5);
            break;
          case 8:
            setLogo7Opacity(logo7Opacity === 0.5 ? 1 : 0.5);
            break;
          case 9:
            setLogo6Opacity(logo6Opacity === 0.5 ? 1 : 0.5);
            break;
          case 10:
            setLogo1Opacity(logo1Opacity === 0.5 ? 1 : 0.5);
            break;
          case 11:
            setLogo2Opacity(logo2Opacity === 0.5 ? 1 : 0.5);
            break;
          case 12:
            setLogo3Opacity(logo3Opacity === 0.5 ? 1 : 0.5);
            break;
          case 13:
            setLogo4Opacity(logo4Opacity === 0.5 ? 1 : 0.5);
            break;
          case 14:
            setLogo5Opacity(logo5Opacity === 0.5 ? 1 : 0.5);
            break;
          case 15:
            setLogo10Opacity(logo10Opacity === 0.5 ? 1 : 0.5);
            break;
          case 16:
            setLogo9Opacity(logo9Opacity === 0.5 ? 1 : 0.5);
            break;
          case 17:
            setLogo8Opacity(logo8Opacity === 0.5 ? 1 : 0.5);
            break;
          case 18:
            setLogo7Opacity(logo7Opacity === 0.5 ? 1 : 0.5);
            break;
          case 19:
            setLogo6Opacity(logo6Opacity === 0.5 ? 1 : 0.5);
            break;
          case 20:
            setLogo1Opacity(logo1Opacity === 0.5 ? 1 : 0.5);
            break;
          case 21:
            setLogo2Opacity(logo2Opacity === 0.5 ? 1 : 0.5);
            break;
          case 22:
            setLogo3Opacity(logo3Opacity === 0.5 ? 1 : 0.5);
            break;
          case 23:
            setLogo4Opacity(logo4Opacity === 0.5 ? 1 : 0.5);
            break;
          case 24:
            setLogo5Opacity(logo5Opacity === 0.5 ? 1 : 0.5);
            break;
          case 25:
            setLogo10Opacity(logo10Opacity === 0.5 ? 1 : 0.5);
            break;
          case 26:
            setLogo9Opacity(logo9Opacity === 0.5 ? 1 : 0.5);
            break;
          case 27:
            setLogo8Opacity(logo8Opacity === 0.5 ? 1 : 0.5);
            break;
          case 28:
            setLogo7Opacity(logo7Opacity === 0.5 ? 1 : 0.5);
            break;
          case 29:
            setLogo6Opacity(logo6Opacity === 0.5 ? 1 : 0.5);
            break;
          default:
            break;
        }
      }

      setCurrentLogoIndex((currentLogoIndex) => currentLogoIndex + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [
    currentLogoIndex,
    logo1Opacity,
    logo2Opacity,
    logo3Opacity,
    logo4Opacity,
    logo5Opacity,
    logo6Opacity,
    logo7Opacity,
    logo8Opacity,
    logo9Opacity,
    logo10Opacity,
  ]);

  return (
    <>
      <div alt="" id="clients">
        <img
          src={client1}
          alt=""
          className="client-img1"
          style={{ opacity: logo1Opacity }}
          loading="lazy"
        />
        <img
          src={client2}
          alt=""
          className="client-img2"
          style={{ opacity: logo2Opacity }}
          loading="lazy"
        />
        <img
          src={client3}
          alt=""
          className="client-img3"
          style={{ opacity: logo3Opacity }}
          loading="lazy"
        />
        <img
          src={client4}
          alt=""
          className="client-img4"
          style={{ opacity: logo4Opacity }}
          loading="lazy"
        />
        <img
          src={client5}
          alt=""
          className="client-img5"
          style={{ opacity: logo5Opacity }}
          loading="lazy"
        />
        <img
          src={client7}
          alt=""
          className="client-img6"
          style={{ opacity: logo6Opacity }}
          loading="lazy"
        />
        <img
          src={client6}
          alt=""
          className="client-img7"
          style={{ opacity: logo7Opacity }}
          loading="lazy"
        />
        <img
          src={client8}
          alt=""
          className="client-img8"
          loading="lazy"
          style={{ opacity: logo8Opacity }}
        />
        <img
          src={client9}
          alt=""
          className="client-img9"
          style={{ opacity: logo9Opacity }}
          loading="lazy"
        />
        <img
          src={client10}
          alt=""
          className="client-img0"
          style={{ opacity: logo10Opacity }}
          loading="lazy"
        />
      </div>
    </>
  );
}
