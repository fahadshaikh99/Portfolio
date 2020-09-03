import React from "react";
import Headroom from "react-headroom";
import "./Header.css";


function Header() {

  return (
    <Headroom>
      <header className="header">
        <a href="" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">Fahad Shaikh</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
  
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;






// import React from "react";
// import "./Header.css";
// import {Fade} from "react-reveal";


// function Header() {
 
//   return (
//     <Fade top duration={1000} distance="20px">
//     <div>
//       <header className="header">
//         <a href="" className="logo">
//           <span className="grey-color"> &lt;</span>
//           <span className="logo-name">Fahad Shaikh</span>
//           <span className="grey-color">/&gt;</span>
//         </a>
//         <input className="menu-btn" type="checkbox" id="menu-btn" />
//         <label className="menu-icon" htmlFor="menu-btn">
//           <span className="navicon"></span>
//         </label>
//         <ul className="menu">
//           <li>
//             <a href="#skills">Skills</a>
//           </li>
//           <li>
//             <a href="#portfolio">Portfolio</a>
//           </li>
//           <li>
//             <a href="#blogs">Blogs</a>
//           </li>
//           <li>
//             <a href="#about">About</a>
//           </li>
//           <li>
//             <a href="#contact">Contact</a>
//           </li>
        
//           {/* <li>
//             <a href="#talks">Talks</a>
//           </li>
//           <li>
//             <a href="#contact">Contact Me</a>
//           </li> */}
//         </ul>
//       </header>
//     </div>
//     </Fade>
//   );
// }
// export default Header;