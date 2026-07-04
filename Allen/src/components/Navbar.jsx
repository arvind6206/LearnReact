import React from "react";
import { Phone } from "lucide-react";
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
     <div className='nav-top'>
         <img src='/logo.png' alt="Logo" className='logo' />

      <div className="nav-right">
        <div className="phone-icon">
          <Phone size={20} color="white" />
        </div>

        <button className="btn">Login</button>
      </div>
     </div>
      <div className='nav-down'>
        <p>Classroom Courses</p>
        <p>Online Courses</p>
        <p>Test Series</p>
        <p>Results</p>
        <p>Study Materials</p>
        <p>Scholarships<span className='new-badge'>NEW</span></p>
        <p>ALLEN E-STORE</p>
        <p>More</p>

      </div>
    </nav>
  );
};

export default Navbar;