import db from "../index.js";

export const addWebInfo = (req, res) => {
  try {
    const { title, content } = req.body;
    // if (title && content) {
    //   res.status(200);
    //   res.send({ message: "post data Successfull", user: "user" });
    // } else {
    //   res.status(404);
    //   res.send({ message: "please Enter valid details" });
    // }
    const data = {
      title: title,
      content: content,
    };

    db.query("INSERT INTO codelinear set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
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
  db.query("SELECT * FROM codelinear", (err, rows, fields) => {
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
  //   const { email, password } = req.body;
  req.logout();
  res.redirect("/login");
};
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   console.log(email, password);

//   if (password === "123") {
//     res.status(200);
//     res.send({ message: "Login Successfull", user: "user" });
//   } else {
//     res.status(404);
//     res.send({ message: "Password didn't match" });
//   }

//   res.send({ message: "User not registered" });
// });
