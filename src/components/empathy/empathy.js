import "./empathy.css";
import Empathyhero from "./Empathyhero";
import Empathysection from "./Empathysection";
import Navbar from "../navigationBar/Nav";
import Footer from "../footer/footer";

export default function Empathy() {
  return (
    <>
      <Navbar />
      <main className="empathy-page">
        <Empathyhero />
        <Empathysection />
      </main>
      <Footer />
    </>
  );
}
