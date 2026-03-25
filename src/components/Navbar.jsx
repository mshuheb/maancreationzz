import { useState } from "react";
import logo from "../assets/logo.png";
import secondLogo from "../assets/maancr.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const handleClick = (id) => {
    setActive(id);
    setMenuOpen(false);

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
        <img src={secondLogo} alt="logo2" className="second-logo" />
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li
          className={active === "hero" ? "active-link" : ""}
          onClick={() => handleClick("home")}
        >
          Home
        </li>

        <li
          className={active === "services" ? "active-link" : ""}
          onClick={() => handleClick("services")}
        >
          Services
        </li>

        <li
          className={active === "about" ? "active-link" : ""}
          onClick={() => handleClick("about")}
        >
          About Us
        </li>

        <li
          className={active === "contact" ? "active-link" : ""}
          onClick={() => handleClick("contact")}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
}
