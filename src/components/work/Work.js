import "./work.css";
import Clients from "../home/client";
import Workhero from "./Workhero";
import Workhorizontalscroll from "./Workhorizontalscroll";
import Navbar from "../navigationBar/Nav";
import Footer from "../footer/footer";

export default function Work() {
  return (
    <>
      <Navbar />
      <Workhero />
      <Workhorizontalscroll />
      <div className="client-container">
        <Clients />
      </div>
      <Footer />
    </>
  );
}
