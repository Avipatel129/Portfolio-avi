// import React from "react";
// import "./ContactMe.css";
// // import emailjs from "@emailjs/browser";


// const Contact = () => {

//     const sendEmail = (e) => {
//         e.preventDefault();
    
//         // emailjs
//         //   .sendForm(
//         //     "service_0b8cbt7",
//         //     "template_kv97ylh",
//         //     form.current,
//         //     "PwYeaRBQG-u92W9Ek"
//         //   )
//         //   .then(
//         //     (result) => {
//         //       console.log(result.text);
//         //       setDone(true);
//         //       form.reset();
//         //     },
//         //     (error) => {
//         //       console.log(error.text);
//         //     }
//         //   );
//       };

//   return (
//     <section className="contact-section">
//       <h2 className="section-heading">Contact</h2>
//       <div className="contact-details">
//       <div className="c-right">
//         <form ref={form} onSubmit={sendEmail}>
//           <input
//             type="text"
//             name="user_name"
//             className="user"
//             placeholder="Name"
//           />
//           <input
//             type="email"
//             name="user_email"
//             className="user"
//             placeholder="Email"
//           />
//           <textarea name="message" className="user" placeholder="Message" />
//           <input type="submit" value="Send" className="button" />
//           <span>{done && "Thanks for Contacting me"}</span>
//           <div
//             className="blur c-blur1"
//             style={{ background: "var(--purple)" }}
//           ></div>
//         </form>
//       </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React from "react";
import "./ContactMe.css";


const Contact = () => {

  return (
    <section className="contact-section">
      <h2 className="section-heading">Contact</h2>
      <div className="contact-details">
     <div className="email">
          <h3>Email:</h3>
          <p>avinash.ap.13.ap@gmail.com</p>
        </div>
        <div className="phone">
          <h3>Phone:</h3>
          <p>+91-9928734326</p>
        </div>
        <div className="urgency">
          <h3>I Need a Job Urgently!</h3>
        </div>
      </div>
    </section>
  );
};

export default Contact;




// // import React, { useContext, useRef, useState } from "react";
// // import "./ContactMe.css";
// // import emailjs from "@emailjs/browser";
// // // import { themeContext } from "../../Context";

// // // const Contact = () => {
// // //   const theme = useContext(themeContext);
// // //   const darkMode = theme.state.darkMode;
// // //   const form = useRef();
// // //   const [done, setDone] = useState(false);
// //   const sendEmail = (e) => {
// //     e.preventDefault();

// //     emailjs
// //       .sendForm(
// //         "service_0b8cbt7",
// //         "template_kv97ylh",
// //         form.current,
// //         "PwYeaRBQG-u92W9Ek"
// //       )
// //       .then(
// //         (result) => {
// //           console.log(result.text);
// //           setDone(true);
// //           form.reset();
// //         },
// //         (error) => {
// //    className="blur s-blur1"
// //             style={{ background: "#ABF1FF94" }}
// //           ></div>
// //                    console.log(error.text);
// //         }
// //       );
// //   };

//   return (
//     <div className="contact-form" id="contact">
//       {/* left side copy and paste from work section */}
//       <div className="w-left">
//         <div className="awesome">
//           {/* darkMode */}
//           <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
//           <span>Contact me</span>
//           <div
//         </div>
//       </div>
//       {/* right side form */}
//       <div className="c-right">
//         <form ref={form} onSubmit={sendEmail}>
//           <input
//             type="text"
//             name="user_name"
//             className="user"
//             placeholder="Name"
//           />
//           <input
//             type="email"
//             name="user_email"
//             className="user"
//             placeholder="Email"
//           />
//           <textarea name="message" className="user" placeholder="Message" />
//           <input type="submit" value="Send" className="button" />
//           <span>{done && "Thanks for Contacting me"}</span>
//           <div
//             className="blur c-blur1"
//             style={{ background: "var(--purple)" }}
//           ></div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;
