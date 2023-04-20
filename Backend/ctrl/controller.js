import db from "../index.js";
import nodemailer from "nodemailer";

export const addWebInfo = (req, res) => {
  try {
    const { homeHero } = req.body;
    const data = {
      homeHero: homeHero,
      // homeAbout: homeAbout,
      // homeService: homeService,
      // homeClient: homeClient,
      // homeBlog: homeBlog,
      // homeAbout, homeService, homeClient, homeBlog
    };

    db.query("INSERT INTO home_page set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};

export const addWebInfoAbout = (req, res) => {
  try {
    const { homeAbout } = req.body;
    const data = {
      homeAbout: homeAbout,
    };

    db.query("INSERT INTO home_page_about set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};
export const addWebInfoServices = (req, res) => {
  try {
    const { homeServices } = req.body;
    const data = {
      homeServices: homeServices,
    };

    db.query(
      "INSERT INTO home_page_service set ?",
      data,
      (err, rows, fields) => {
        if (err) {
          console.error(err);
        } else {
          console.log(rows);
          res.send("added");
        }
      }
    );
  } catch (err) {}
};
// ?<=====================================>
export const addWebInfoAboutHero = (req, res) => {
  try {
    const { aboutHeading } = req.body;
    const data = {
      aboutHeading: aboutHeading,
    };

    db.query("INSERT INTO abouthero set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};
// ?<=====================================>
export const addWebInfoAboutvision = (req, res) => {
  try {
    const { vision_pera } = req.body;
    const data = {
      vision_pera: vision_pera,
    };

    db.query("INSERT INTO vision set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};
// ?<=====================================>
export const addWebInfoAboutguiding = (req, res) => {
  try {
    const { guiding_pera } = req.body;
    const data = {
      guiding_pera: guiding_pera,
    };

    db.query("INSERT INTO guiding set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};
// ?<=====================================>
export const addWebInfoAboutTestimonial = (req, res) => {
  try {
    const { idea, innovate, imp } = req.body;
    const data = {
      idea: idea,
      innovate: innovate,
      imp: imp,
    };

    db.query("INSERT INTO test set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};
// ?<=====================================>
export const addWebInfoAboutcrew = (req, res) => {
  try {
    const { crew, crew_pera } = req.body;
    const data = {
      crew: crew,
      crew_pera: crew_pera,
    };

    db.query("INSERT INTO crew set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};
// ?<=====================================>
export const addWebInfoAboutcrew_box = (req, res) => {
  try {
    const { Design, Strategists, Tech_Experts, Delivery_Managers } = req.body;
    const data = {
      Design: Design,
      Strategists: Strategists,
      Tech_Experts: Tech_Experts,
      Delivery_Managers: Delivery_Managers,
    };

    db.query("INSERT INTO crew_boxess set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};
// ?<=====================================>
export const addWebInfoAboutcaseStudy = (req, res) => {
  try {
    const { peak, peakPera } = req.body;
    const data = {
      peak: peak,
      peakPera: peakPera,
    };

    db.query("INSERT INTO case_study set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};

// careers page - hr@codelinear.com
// contact us page - info@codelinear.com
// /////////////////////////////////////////////////////

export const sendMailContact = (req, res) => {
  const { fristName, lastName, email, number, message } = req.body;
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "amankapil60@gmail.com", // Replace with your own email address
      pass: "zcgdsscknnjxmjlh", // Replace with your own email password
    },
  });
  // zcgdsscknnjxmjlh

  const mailOptions = {
    from: "amankapil60@gmail.com", // Replace with your own email address
    to: "rcky876@gmail.com", // Replace with the recipient's email address
    subject: "New message from your website",
    text: `FristName: ${fristName}\n LastName: ${lastName}\n Email: ${email}\n Number: ${number}\nMessage: ${message}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
};
export const sendMailCareer = (req, res) => {
  const { fristName, lastName, email, message } = req.body;
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "amankapil60@gmail.com", // Replace with your own email address
      pass: "zcgdsscknnjxmjlh", // Replace with your own email password
    },
  });
  // zcgdsscknnjxmjlh

  const mailOptions = {
    from: "amankapil60@gmail.com", // Replace with your own email address
    to: "rcky876@gmail.com", // Replace with the recipient's email address
    subject: "New message from your website",
    text: `FristName: ${fristName}\n LastName: ${lastName}\n Email: ${email}\nMessage: ${message}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
};

// //////////////////////////////////////////////////////////////
// export const updateWebInfo = (req, res) => {
//   try {
//     const { title, description } = req.body;
//     const id = req.params.id;

//     ////////////////////////////////////////////////////////
//     db.query(
//       "SELECT id FROM company_notes_tbl WHERE  id = ?",
//       [id],
//       (err, res) => {
//         if (err) {
//           throw err;
//         }
//         if (res.length > 0) {
//           db.query(
//             "UPDATE company_data SET title = ?, description = ?, WHERE id = ?  ",
//             [title, description, id],
//             (error) => {
//               if (error) {
//                 throw error;
//               }
//               return res.status(200).json({
//                 mes: "update sucess",
//               });
//             }
//           );
//         }
//       }
//     );
//   } catch (err) {}
// };
// =========================================================================================
// export const updateWebInfo = (req, res) => {
//   try {
//     // const { signature, email, password } = req.body;
//     const { title, description } = req.body;
//     // const id = req.params.id;
//     db.query(
//       "UPDATE company_notes_tbl SET title=?,description=? WHERE id=?",
//       [title, description, req.params.id],
//       (err, rows) => {
//         if (err) {
//           throw err;
//         } else {
//           return res.status(201).json({ message: ` updated` });
//         }
//       }
//     );
//   } catch (err) {
//     return res.status(500).json(err);
//   }
// };
// =========================================================================================

// export const remove = (req, res) => {
//   db.query(
//     "DELETE FROM company_notes_tbl WHERE id = ?",
//     [req.params.id],
//     (err, rows, fields) => {
//       if (err) {
//         console.error(err);
//       } else {
//         // console.log(rows);
//         res.send("deleted");
//       }
//     }
//   );
// };
export const getweb = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM home_page", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
export const getwebHero = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM home_page", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
export const getwebHomeAbout = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM home_page_about", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
export const getwebHomeservices = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM home_page_service", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
// <=================================================================|?
export const getWebAboutHero = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM abouthero", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
// <=================================================================|?
export const getWebAboutVision = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM vision", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
// <=================================================================|?
export const getWebAboutGuiding = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM guiding", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
// <=================================================================|?
export const getWebAbouttest = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM test", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
// <=================================================================|?
export const getWebAboutcrew = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM crew", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
// <=================================================================|?
export const getWebAboutcrew_box = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM crew_boxess", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
// <=================================================================|?
export const getWebAboutcase_study = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM case_study", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};

export const Login = (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  if (password === "123") {
    res.status(200);
    res.send({ message: "Login Successfull", user: "user" });
  } else {
    res.status(404);
    res.send({ message: "Password didn't match" });
  }
  res.send({ message: "User not registered" });
};

export const Logout = (req, res) => {
  res.setHeader("Set-Cookie", [
    "session=; Expires=Thu, 01 Jan 1970 00:00:00 GMT",
  ]);
  res.redirect("/login");
};
