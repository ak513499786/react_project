import profile from "./images/logout.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React, { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AboutTab from "./aboutTab/AboutTab";
import Servicedo from "./ServiceTab/Servicedo";
import AbilityService from "./ServiceTab/AbilityService";
import WrokHero from "./WorkTab/WorkHero";
import ContactHero from "./ContactTab/ContactHero";
import CareerHero from "./CareerTab/CareerHero";
import WhyUS from "./CareerTab/WhyUs";
import Boxes from "./CareerTab/Boxes";
import Cunsulting from "./innerpagess/Consulting";
import UserExper from "./innerpagess/UserExper";
import Productdev from "./innerpagess/Productdev";
import DigitalMarketing from "./innerpagess/DigitalMarketing";

import Mascot from "./images/Screenshot 2023-04-09 144546 1.svg";
import Dashimg from "./images/dash.svg";
import Home from "./images/home.svg";
import About from "./images/about.svg";
import Blog from "./images/blog.svg";
import Setting from "./images/settings.svg";
import Contact from "./images/contact.svg";
import Case from "./images/case.svg";

export default function Dash() {
  // const navigate = useNavigate("/home");
  const [editMode, setEditMode] = useState(false);
  const [editModeAbout, setEditModeAbout] = useState(false);
  const [editModeServices, seteditModeServices] = useState(false);
  const [array, setarray] = useState("");
  const [Aboutarray, setAboutarray] = useState();
  const [Servicesarray, setServicesarray] = useState();
  // const [pera, setPera] = useState();
  const [guiding_pera, setguiding_pera] = useState();

  const handleEditClick = () => {
    if (editMode === false) {
      setEditMode(true);
    } else {
      setEditMode(false);
    }
  };
  const handleEditClickAbout = () => {
    if (editModeAbout === false) {
      setEditModeAbout(true);
    } else {
      setEditModeAbout(false);
    }
  };
  const handleEditClickServices = () => {
    if (editModeServices === false) {
      seteditModeServices(true);
    } else {
      seteditModeServices(false);
    }
  };
  const handleLogouttt = async () => {};

  const [homeHero, sethomeHero] = useState("");
  const [homeAbout, setAboutHero] = useState("");
  const [homeAboutPera, sethomeAboutPera] = useState("");
  // const [homeAbout, setAboutHero] = useState("");
  const [homeContent, setContentHero] = useState("");
  const [homeClient, sethomeClient] = useState("");
  const [homeBlog, sethomeBlog] = useState("");
  const [homeServices, setHomeService] = useState("");

  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate("/home");

  const handleUsernameChange = (event) => {
    sethomeHero(event.target.value);
  };
  const handleaboutChange = (event) => {
    setAboutHero(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    setEditMode(false);
    event.preventDefault();
    try {
      const response = await axios
        .post("http://localhost:5000/code/add", {
          homeHero,
        })
        .then((response) => {
          console.log(response);

          if (response.status === 200) {
            alert("data post successfully");
          } else {
            alert(response.data.message);
          }
        });
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  // ?/////////////////////////////////////handleSubmitAbout/ ////////////////////////////////////////////
  const handleSubmitAbout = async (event) => {
    event.preventDefault();
    try {
      const response = await axios
        .post("http://localhost:5000/code/addAbout", {
          homeAbout,
        })
        .then((response) => {
          console.log(response);

          if (response.status === 200) {
            alert("data post successfully");
            window.refresh();
          } else {
            alert(response.data.message);
          }
        });
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleSubmitServices = async (event) => {
    event.preventDefault();
    try {
      const response = await axios
        .post("http://localhost:5000/code/addServices", {
          homeServices,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            alert("data post successfully");
            window.refresh();
          } else {
            alert(response.data.message);
          }
        });
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  useEffect(() => {
    axios.get("http://localhost:5000/code").then((response) => {
      setarray(response.data.homeHero);
      // setAboutarray(response.data.homeAbout);
      console.log(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:5000/code/homeAbout").then((response) => {
      // setarray(response.data.homeHero);
      setAboutarray(response.data.homeAbout);
      console.log(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:5000/code/homeServices").then((response) => {
      // setarray(response.data.homeHero);
      setServicesarray(response.data.homeServices);
      console.log(response.data);
    });
  }, []);

  // const smallParas = array.split(". ");

  return (
    <>
      <nav className="dashboard-nav">
        <div className="dashboard-item">
          <img src={Mascot} alt="" className="dash-mascot" />
          Codelinear
        </div>
        <div className="logout">
          <h1 className="logout-txt">Logout</h1>
          <img
            src={profile}
            alt=""
            className="profile"
            onClick={handleLogouttt}
          />
        </div>
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
          <Tab className="dashboard-left-item">service inner</Tab>
          <Tab className="dashboard-left-item">
            <div className="tabtxt">
              <img src={Dashimg} alt="" className="dash-images" />
            </div>
            <h1 className="dash-item-h1"> DashBoard</h1>
          </Tab>
          <Tab className="dashboard-left-item">
            <div className="tabtxt">
              <img src={Home} alt="" className="dash-images" />
            </div>
            <h1 className="dash-item-h1"> About Us</h1>
          </Tab>
          <Tab className="dashboard-left-item">
            <div className="tabtxt">
              <img src={About} alt="" className="dash-images" />
            </div>
            <h1 className="dash-item-h1"> Clients</h1>
          </Tab>
          <Tab className="dashboard-left-item">
            <div className="tabtxt">
              <img src={Setting} alt="" className="dash-images" />
            </div>
            <h1 className="dash-item-h1"> Services</h1>
          </Tab>
          <Tab className="dashboard-left-item">
            <div className="tabtxt">
              <img src={Case} alt="" className="dash-images" />
            </div>
            <h1 className="dash-item-h1"> Career</h1>
          </Tab>
          <Tab className="dashboard-left-item">
            <div className="tabtxt">
              <img src={Blog} alt="" className="dash-images" />
            </div>
            <h1 className="dash-item-h1"> Blogs</h1>
          </Tab>
          <Tab className="dashboard-left-item">
            <div className="tabtxt">
              <img src={Contact} alt="" className="dash-images" />
            </div>
            <h1 className="dash-item-h1"> Contact Us</h1>
          </Tab>
        </TabList>
        <TabPanel>
          <div className="main" style={{ height: "100vh" }}></div>
        </TabPanel>
        <TabPanel>
          <div className="main">
            <Tabs className="about-page-dash">
              <TabList className="about-page-dash-txt">Home Page</TabList>
              <TabList className="about-page-dash-txt">About Us</TabList>
            </Tabs>
            <TabPanel className="about-page-dash-panel">
              <input type="text" className="about-page-dash-search" />
              <h2 className="sub-title">Why Us Section</h2>
            </TabPanel>
            <TabPanel className="about-page-dash-panel">
              <input type="text" className="about-page-dash-search" />
            </TabPanel>
          </div>
        </TabPanel>
        <TabPanel>
          <AboutTab />
        </TabPanel>
        <TabPanel>
          <div className="main">
            <h1 className="title">Services Page</h1>
            <div className="section">
              <h2 className="sub-title">Hero Section</h2>
              <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3>
            </div>
            <div className="section">
              <h2 className="sub-title">We Do It All</h2>
              <Servicedo />
            </div>
            <div className="section">
              <h2 className="sub-title">Service Section</h2>
              <AbilityService />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="main">
            <h1 className="title">Career Page</h1>
            <div className="section">
              <h2 className="sub-title">Hero Section</h2>
              <CareerHero />
            </div>
            <div className="section">
              <h2 className="sub-title">Why Us Section</h2>
              <WhyUS />
            </div>
            <div className="section">
              <h2 className="sub-title">Boxes Section</h2>
              <Boxes />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="main">
            <h1 className="title">Work Page</h1>
            <div className="section">
              <WrokHero />
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
              <ContactHero />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="main">
            <h1 className="title">Blog Page</h1>
            {/* <div className="section">
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
            </div> */}
            {/* <div className="section">
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
            </div> */}
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
        <TabPanel>
          <div className="main">
            <h1 className="title">Service Inner Page</h1>

            <div className="section">
              <Cunsulting />
            </div>

            <div className="section">
              <UserExper />
            </div>
            <div className="section">
              <Productdev />
            </div>
            <div className="section">
              <DigitalMarketing />
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
}
