import db from "../index.js";
import nodemailer from "nodemailer";

export const addWebInfo = (req, res) => {
  try {
    const { homeHero, homeAbout, homeService, homeClient, homeBlog } = req.body;
    // if (homeHero) {
    //   res.status(200);
    // } else {
    //   res.status(500);
    //   res.send({ message: "please Enter valid details" });
    // }
    const data = {
      homeHero: homeHero,
      homeAbout: homeAbout,
      homeService: homeService,
      homeClient: homeClient,
      homeBlog: homeBlog,
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
// careers page - hr@codelinear.com
// contact us page - info@codelinear.com

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
