import profile from "./images/logout.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function Dash() {
  const navigate = useNavigate("/home");

  const handleLogout = async () => {
    const response = await axios
      .get("http://localhost:5000/code/logout")
      .then((response) => {
        navigate("/login");
      });
  };

  return (
    <>
      <nav className="dashboard-nav">
        <div className="dashboard-item">Codelinear</div>
        <img src={profile} alt="" className="profile" onClick={handleLogout} />
      </nav>
      <Tabs>
        <TabList className="dashboard-left-nav">
          <Tab className="dashboard-left-item">Home</Tab>
          <Tab className="dashboard-left-item">About</Tab>
          <Tab className="dashboard-left-item">Services</Tab>
          <Tab className="dashboard-left-item">Career</Tab>
          <Tab className="dashboard-left-item">Work</Tab>
          <Tab className="dashboard-left-item">Contact</Tab>
          <Tab className="dashboard-left-item">Blog</Tab>
        </TabList>

        <TabPanel>
          <div className="main">
            <h1 className="title">Home Page</h1>
            <div className="section">
              <h2 className="sub-title">Hero Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
            </div>
            <div className="section">
              <h2 className="sub-title">About Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
              <p className="change-para">Lorem ipsum dolor sit amet.</p>
              <h3 className="change-h1">Mango-Lorem ipsum dolor sit amet.</h3>
              <p className="change-para">Cowboy-Lorem ipsum dolor sit amet.</p>
              <h3 className="change-h1">Lyra-Lorem ipsum dolor sit amet.</h3>
              <p className="change-para">William-Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="section">
              <h2 className="sub-title">Service Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
              <p className="change-para">Lorem ipsum dolor sit amet.</p>
              <p className="change-para">Buttons</p>
              <p className="change-para">Buttons</p>
              <p className="change-para">Buttons</p>
              <p className="change-para">Buttons</p>
            </div>
            <div className="section">
              <h2 className="sub-title">Testimonial Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
              <p className="change-para">Testimonial1 Lorem ipsum dolor sit amet.</p>
              <p className="change-para">Testimonial2 Lorem ipsum dolor sit amet.</p>
              <p className="change-para">Testimonial3 Lorem ipsum dolor sit amet.</p>
              <p className="change-para">Testimonial4 Lorem ipsum dolor sit amet.</p>
              <p className="change-para">Testimonial5 Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="section">
              <h2 className="sub-title">Blog Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
              <p className="change-para">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="main">
            <h1 className="title">About Page</h1>
            <div className="section">
              <h2 className="sub-title">Hero Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
            </div>
            <div className="section">
              <h2 className="sub-title">About Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
              <p className="change-para">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="section">
              <h2 className="sub-title">Service Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
              <p className="change-para">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="section">
              <h2 className="sub-title">Testimonial Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
              <p className="change-para">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="section">
              <h2 className="sub-title">Blog Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
              <p className="change-para">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="main">
            <h1 className="title">Services Page</h1>
            <div className="section">
              <h2 className="sub-title">Hero Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
            </div>
            <div className="section">
              <h2 className="sub-title">About Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
              <p className="change-para">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="section">
              <h2 className="sub-title">Service Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
              <p className="change-para">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="section">
              <h2 className="sub-title">Testimonial Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
              <p className="change-para">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="section">
              <h2 className="sub-title">Blog Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
              <p className="change-para">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="main">
            <h1 className="title">Career Page</h1>
            <div className="section">
              <h2 className="sub-title">Hero Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
            </div>
            <div className="section">
              <h2 className="sub-title">About Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
              <p className="change-para">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="section">
              <h2 className="sub-title">Service Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
              <p className="change-para">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="section">
              <h2 className="sub-title">Testimonial Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
              <p className="change-para">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="section">
              <h2 className="sub-title">Blog Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
              <p className="change-para">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="main">
            <h1 className="title">Work Page</h1>
            <div className="section">
              <h2 className="sub-title">Hero Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
            </div>
            <div className="section">
              <h2 className="sub-title">About Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
              <p className="change-para">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="section">
              <h2 className="sub-title">Service Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
              <p className="change-para">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="section">
              <h2 className="sub-title">Testimonial Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
              <p className="change-para">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="section">
              <h2 className="sub-title">Blog Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
              <p className="change-para">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="main">
            <h1 className="title">Contact Page</h1>
            <div className="section">
              <h2 className="sub-title">Hero Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
              <p className="change-para">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="section">
              <h2 className="sub-title">Form Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
            </div>
            <div className="section">
              <h2 className="sub-title">Location Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
              <p className="change-para">Lorem ipsum dolor sit amet.</p>
              <p className="change-para">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="main">
            <h1 className="title">Blog Page</h1>
            <div className="section">
              <h2 className="sub-title">Hero Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
            </div>
            <div className="section">
              <h2 className="sub-title">Buttons Section</h2>
              <h3 className="change-h1">Lorem</h3>
              <h3 className="change-h1">Lorem</h3>
              <h3 className="change-h1">Lorem</h3>
              <h3 className="change-h1">Lorem</h3>
              <h3 className="change-h1">Lorem</h3>
              <h3 className="change-h1">Lorem</h3>
            </div>
            <div className="section">
              <h2 className="sub-title">Blog Section</h2>
              <h3 className="change-h1">Lorem, ipsum dolor.</h3>
              <h3 className="change-h1">Lorem, ipsum dolor.</h3>
              <h3 className="change-h1">Lorem, ipsum dolor.</h3>
              <h3 className="change-h1">Lorem, ipsum dolor.</h3>
              <h3 className="change-h1">Lorem, ipsum dolor.</h3>
              <h3 className="change-h1">Lorem, ipsum dolor.</h3>
              <h3 className="change-h1">Lorem, ipsum dolor.</h3>
              <h3 className="change-h1">Lorem, ipsum dolor.</h3>
              <h3 className="change-h1">Lorem, ipsum dolor.</h3>
            </div>
            <h1 className="title">Blog Inner Page</h1>
            <div className="section">
              <h2 className="sub-title">Hero Section</h2>
              <h3 className="change-h1">Date</h3>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
              <h3 className="change-h1">Cheese</h3>
            </div>
            <div className="section">
              <h2 className="sub-title">Content Section</h2>
              <h3 className="change-h1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                saepe sequi dolore voluptates ad quo aperiam et totam nesciunt
                itaque iusto ipsam temporibus impedit culpa, eaque ducimus
                officia quas qui perferendis minus illo! Deleniti, deserunt
                quisquam quibusdam iure, dolorum nam earum illo ex reprehenderit
                fuga voluptates recusandae veniam aspernatur id eum? Aut
                excepturi accusantium amet rerum ea consectetur ex distinctio,
                non dignissimos tenetur dolorem odit nobis laudantium ut in.
              </h3>
              <h3 className="change-h1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <h3 className="change-h1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                saepe sequi dolore voluptates ad quo aperiam et totam nesciunt
                itaque iusto ipsam temporibus impedit culpa, eaque ducimus
                officia quas qui perferendis minus illo! Deleniti, deserunt
                quisquam quibusdam iure, dolorum nam earum illo ex reprehenderit
                fuga voluptates recusandae veniam aspernatur id eum? Aut
                excepturi accusantium amet rerum ea consectetur ex distinctio,
                non dignissimos tenetur dolorem odit nobis laudantium ut in.
              </h3>
              <h3 className="change-h1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <h3 className="change-h1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                saepe sequi dolore voluptates ad quo aperiam et totam nesciunt
                itaque iusto ipsam temporibus impedit culpa, eaque ducimus
                officia quas qui perferendis minus illo! Deleniti, deserunt
                quisquam quibusdam iure, dolorum nam earum illo ex reprehenderit
                fuga voluptates recusandae veniam aspernatur id eum? Aut
                excepturi accusantium amet rerum ea consectetur ex distinctio,
                non dignissimos tenetur dolorem odit nobis laudantium ut in.
              </h3>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
}
