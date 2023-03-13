import "./empathy.css";
import Empathyhero from "./Empathyhero";
import Empathysection from "./Empathysection";
import Navbar from "../navigationBar/Nav";
import Footer from "../footer/footer";
import AnimatedCursor from "react-animated-cursor";

export default function Empathy() {
  return (
    <>
      <Navbar />
      <main className="empathy-page">
        {/* <AnimatedCursor color="255, 255, 255" /> */}

        <Empathyhero />
        <Empathysection />
      </main>
      <Footer />
    </>
  );
}
