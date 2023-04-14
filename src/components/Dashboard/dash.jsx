import profile from "./images/logout.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React, { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


// Hostinger / Hosting	syedsaif018@gmail.com 	Codelinear@CLSS123

export default function Dash() {
  // const navigate = useNavigate("/home");
  const [editMode, setEditMode] = useState(false);
  const [array, setarray] = useState();
  const [Aboutarray, setAboutarray] = useState();

  const handleEditClick = () => {
    if (editMode === false) {
      setEditMode(true);
    } else {
      setEditMode(false);
    }
  };

  const handleLogout = async () => {
    const response = await axios
      .get("http://localhost:5000/code/logout")
      .then((response) => {
        navigate("/login");
      });
    navigate("/login");
  };

  const [homeHero, sethomeHero] = useState("");
  const [homeAbout, setAboutHero] = useState("");
  // const [homeAbout, setAboutHero] = useState("");
  const [homeContent, setContentHero] = useState("");
  const [homeClient, sethomeClient] = useState("");
  const [homeBlog, sethomeBlog] = useState("");
  const [homeService, setHomeService] = useState("");

  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate("/home");

  const handleUsernameChange = (event) => {
    sethomeHero(event.target.value);
  };
  const handleaboutChange = (event) => {
    setAboutHero(event.target.value);
  };
  // const logoutt = (event) => {
  //   navigate('/')
  // };

  const handlePasswordChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    // setEditMode(false);

    event.preventDefault();
    try {
      const response = await axios
        .post("http://localhost:5000/code/add", {
          homeHero,
          homeAbout,
          homeService,
          homeClient,
          homeBlog,
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

  useEffect(() => {
    axios.get("http://localhost:5000/code/").then((response) => {
      setarray(response.data.homeHero);
      setAboutarray(response.data.homeAbout);
      console.log(response.data);
    });
  }, []);
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
              {editMode ? (
                <>
                  <div className="w-full flex justify-end">
                    <EditIcon
                      onClick={handleEditClick}
                      className="w-36 h-10 rounded-lg bg-black"
                    />
                  </div>

                  <div className="login-container">
                    <form onSubmit={handleSubmit}>
                      <h2>Title of pagas</h2>

                      <input
                        className="text-black"
                        placeholder={array}
                        type="text w-[70%]"
                        value={homeHero}
                        onChange={handleUsernameChange}
                      />

                      <br />

                      <br />
                      {error && <div className="error">{error}</div>}
                      <button type="submit">Post</button>
                    </form>
                  </div>
                </>
              ) : (
                <>
                  <div className="section mt-1">
                    <div className="w-full flex justify-end">
                      <EditIcon
                        onClick={handleEditClick}
                        className="w-36 mx-2 h-10 rounded-lg bg-black"
                      />
                      <DeleteIcon
                        onClick={handleEditClick}
                        className="w-36 h-10 rounded-lg bg-black"
                      />
                    </div>

                    <div className="w-ful flex justify-between">
                      <h2 className="sub-title text-4xl">{array}</h2>
                    </div>
                  </div>
                </>
              )}
            </div>
            <h1 className="title">About Section</h1>
            <div className="section mt-10">
              <div className="section mt-0">
                {editMode ? (
                  <>
                    <div className="w-full flex justify-end">
                      <EditIcon
                        onClick={handleEditClick}
                        className="w-36 h-10 rounded-lg bg-black"
                      />
                    </div>

                    <div className="login-container">
                      <form onSubmit={handleSubmit}>
                        <h2>Title of pagas</h2>

                        <input
                          className="text-black"
                          placeholder={Aboutarray}
                          type="text w-[70%]"
                          value={homeAbout}
                          onChange={handleaboutChange}
                        />

                        <br />
                        {/* <label>
                        cOOntent
                        <textarea
                          placeholder="type"
                          value={content}
                          onChange={handlePasswordChange}
                        />
                      </label> */}
                        <br />
                        {error && <div className="error">{error}</div>}
                        <button type="submit">Post</button>
                      </form>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="section mt-1">
                      <div className="w-full flex justify-end">
                        <EditIcon
                          onClick={handleEditClick}
                          className="w-36 mx-2 h-10 rounded-lg bg-black"
                        />
                        <DeleteIcon
                          onClick={handleEditClick}
                          className="w-36 h-10 rounded-lg bg-black"
                        />
                      </div>

                      <div className="w-ful flex justify-between">
                        {/* <h2 className="sub-title">Home Hero</h2> */}
                        <h2 className="sub-title text-4xl">{Aboutarray}</h2>
                      </div>
                      {/* <h3 className="change-h1">Lorem ipsum dolor sit amet.</h3> */}
                      {/* <button
                      className="bg-black w-36 h-10 rounded-lg"
                      type="button"
                    >
                      Edit
                    </button> */}
                    </div>
                  </>
                )}
              </div>
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
              <p className="change-para">
                Testimonial1 Lorem ipsum dolor sit amet.
              </p>
              <p className="change-para">
                Testimonial2 Lorem ipsum dolor sit amet.
              </p>
              <p className="change-para">
                Testimonial3 Lorem ipsum dolor sit amet.
              </p>
              <p className="change-para">
                Testimonial4 Lorem ipsum dolor sit amet.
              </p>
              <p className="change-para">
                Testimonial5 Lorem ipsum dolor sit amet.
              </p>
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
