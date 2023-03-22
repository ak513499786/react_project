import "./work.css";
import Workhero from "./Workhero";
import Navbar from "../navigationBar/Nav";
import Footer from "../footer/footer";
import Card from "./card/Card";
import Dummy from "../Home/Dummy";

export default function Work() {
  return (
    <>
      <Navbar />
      <Workhero />
      <Card />
      {/* <Dummy /> */}
      <Footer />
    </>
  );
}
