import "./empathy.css";

import empathy from "../Blog/Images/Frame 43.svg";
import cheese from "./images/Ellipse 19.png";

export default function Empathy() {
  return (
    <main className="empathy-page">
      <section className="empathy-hero">
        <div className="empathy-container">
          <div className="empathy-inner-content">
            <p className="date">31st May 2023</p>
            <h1 className="empathy-hero-h1">Empathy In UX</h1>
          </div>
          <div className="cheese">
            <img src={cheese} alt="" className="cheese-img" />
            <p className="cheese-para">cheese</p>
          </div>
        </div>
        <img src={empathy} alt="" className="empathy" />
      </section>
      <section className="empathy-content-container">
        <div className="empathy-content">
          <h1 className="empathy-h1">Platter Wing Lot Black</h1>
          <p className="empathy-para">
            Wing parmesan crust garlic style Philly beef. Personal chicken
            olives cheese party. Mushrooms wing banana wing large pie olives
            olives lovers. Aussie meatball pineapple chicken anchovies burnt
            party marinara. Stuffed tomato white ham hand extra lovers party.{" "}
            <br /> Lot onions NY white Philly Philly anchovies. Lot pizza
            meatball hand pesto Hawaiian broccoli large pan pie. Platter peppers
            NY stuffed dolor. Hawaiian peppers Aussie ranch red. Mayo tossed
            melted parmesan red burnt large Philly garlic Philly. Tomato
            pepperoni ranch anchovies parmesan wing red meat Bianca. Mouth red
            broccoli platter bbq style pepperoni pizza.
          </p>
        </div>
        <div className="empathy-content">
          <h1 className="empathy-h1">Platter Wing Lot Black</h1>
          <p className="empathy-para">
            Wing parmesan crust garlic style Philly beef. Personal chicken
            olives cheese party. Mushrooms wing banana wing large pie olives
            olives lovers. Aussie meatball pineapple chicken anchovies burnt
            party marinara. Stuffed tomato white ham hand extra lovers party.{" "}
            <br /> Lot onions NY white Philly Philly anchovies. Lot pizza
            meatball hand pesto Hawaiian broccoli large pan pie. Platter peppers
            NY stuffed dolor. Hawaiian peppers Aussie ranch red. Mayo tossed
            melted parmesan red burnt large Philly garlic Philly. Tomato
            pepperoni ranch anchovies parmesan wing red meat Bianca. Mouth red
            broccoli platter bbq style pepperoni pizza.
          </p>
        </div>
        <div className="empathy-content">
          <h1 className="empathy-h1">Platter Wing Lot Black</h1>
          <p className="empathy-para">
            Wing parmesan crust garlic style Philly beef. Personal chicken
            olives cheese party. Mushrooms wing banana wing large pie olives
            olives lovers. Aussie meatball pineapple chicken anchovies burnt
            party marinara. Stuffed tomato white ham hand extra lovers party.{" "}
            <br /> Lot onions NY white Philly Philly anchovies. Lot pizza
            meatball hand pesto Hawaiian broccoli large pan pie. Platter peppers
            NY stuffed dolor. Hawaiian peppers Aussie ranch red. Mayo tossed
            melted parmesan red burnt large Philly garlic Philly. Tomato
            pepperoni ranch anchovies parmesan wing red meat Bianca. Mouth red
            broccoli platter bbq style pepperoni pizza.
          </p>
          <h1 className="empathy-h1">Platter Wing Lot Black</h1>
          <p className="empathy-para">
            Wing parmesan crust garlic style Philly beef. Personal chicken
            olives cheese party. Mushrooms wing banana wing large pie olives
            olives lovers. Aussie meatball pineapple chicken anchovies burnt
            party marinara. Stuffed tomato white ham hand extra lovers party.
          </p>
        </div>
      </section>
    </main>
  );
}
