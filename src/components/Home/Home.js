import left_arrow from './images/arrow_circle_left_FILL1_wght300_GRAD200_opsz48.png';
import right_arrow from './images/arrow_circle_right_FILL1_wght300_GRAD200_opsz48.png';
import image1 from './images/Group 1000002240.png';
import image2 from './images/Frame 75.png';
import image3 from './images/Frame 76.png';
import image4 from './images/Frame 77.png';

export default function Home() {
    return  (  
            <section id="hero">
                <div id="bgi">
                    <video autoplay loop muted></video>
                </div>
                <section id="content">
                    <h1 id="header">
                        We Are Codelinear- 
                        Propelling The World, By Design.
                    </h1>
                    <div id="aboutbtn">
                       <p className='aboutbtn_content'>about us</p>
                    </div>
                </section>
            </section>
    )
}