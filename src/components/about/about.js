import Footer from "../footer/footer";
import Navbar from "../navigationBar/Nav";
import Circles from "./circlesanimation";
import Abouthero from "./abouthero";
import Crew from "./crew";

import './about.css'

export default function about(){
    return(
        <>
        <Navbar/>
        <Abouthero/>
        <Circles/>
        <Crew/>
        <Footer/>
        </>
    );
}