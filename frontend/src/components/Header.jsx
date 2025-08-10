// import React from 'react';
// import '../styles/header.css';
// import myPhoto from '../assets/Prachi.jpg';

// const Header = () => {
//   return (
//     <header className="hero-section">
//       <div className="hero-content">
//         <div className="hero-text">
//           <p>Hello,</p>
//           <h1 className="hero-name">I am Prachi Talavanekar</h1>
//           <p className="hero-title">Frontend Developer</p>
//           <a href="#about" className="hero-button">About Me</a>
//         </div>
//         <div className="hero-image">
//           <img src={myPhoto} alt="Prachi Talavanekar" className="profile-image" />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="hero-section">
      <div className="hero-text">
        <p className="hero-greeting">Hello,</p>
        <h1 className="hero-name">I am Prachi Talavanekar</h1>
        <p className="hero-title">Web Developer</p>
        <a href="#about" className="hero-button">About Me</a>
      </div>
    </header>
  );
};

export default Header;
