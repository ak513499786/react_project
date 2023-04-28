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
import Mascot from "./images/Screenshot 2023-04-09 144546 1.svg";
import Dashimg from "./images/dash.svg";
import Home from "./images/home.svg";
import About from "./images/about.svg";
import Blog from "./images/blog.svg";
import Setting from "./images/settings.svg";
import Contact from "./images/contact.svg";
import Case from "./images/case.svg";
import view from "./images/view.svg";
import edit from "./images/edit.svg";
import close from "./images/close.svg";
import Search from "./images/scg.svg";
import Add from "./images/add.svg";

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
            <Tabs className="about-page-dash" defaultIndex={1}>
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
            <div className="about-page-dash">
              <h1 className="about-page-dash-txt">Page Intro</h1>
              <h1 className="about-page-dash-txt">Contact Details</h1>
              <h1 className="about-page-dash-txt">Enquiry Form</h1>
            </div>
            <div
              className="about-page-dash-panel"
              style={{
                display: "none",
              }}
            >
              <div className="operation-container">
                <div className="search-container">
                  <input type="text" placeholder="search" className="search" />
                  <img src={Search} alt="" className="search-img" />
                </div>
                <div className="add-container">
                  <img src={Add} alt="" className="add" />
                </div>
              </div>
              <div className="container-dash">
                <p className="para-container">
                  <div className="images-container">
                    <img src={view} alt="" className="view" />
                    <img src={edit} alt="" className="view" />
                    <img src={close} alt="" className="view" />
                  </div>
                  <h1 className="title-container">Title : </h1>
                  The sky's the limit!​
                </p>
                <br />
                <p className="para-container">
                  <h1 className="title-container">Paragraph : </h1>
                  Feel free to contact us for a detailed portfolio or a
                  no-strings-attached quote. Or, if you may, hit us up with a
                  hey to get chatting! After all, the real treasure is the
                  friends we make along the way!​
                </p>
              </div>
            </div>
            <div
              className="about-page-dash-panel"
              style={
                {
                  // display: 'none'
                }
              }
            >
              <div className="container-dash">
                <p className="para-container">
                  <div className="images-container">
                    <img src={edit} alt="" className="view" />
                  </div>
                  <h1 className="title-container">Title : </h1>
                  The sky's the limit!​
                </p>
              </div>
              <div className="container-dash">
                <p className="para-container">
                  <div className="images-container">
                    <img src={edit} alt="" className="view" />
                  </div>
                  <h1 className="title-container">Title : </h1>
                  The sky's the limit!​
                </p>
              </div>
              <div className="container-address">
                <p className="para-container">
                  <h1 className="title-container">Title : </h1>
                  The sky's the limit!​
                  <img src={edit} alt="" className="view" />
                </p>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
}
