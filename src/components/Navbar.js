import React, { useState } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import logo from "../assets/images/logo.png"

const Navbar = () => {
  const [showLink, setShowLink] = useState(true)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Yadhap's recipes" />
          </Link>
          <button className="nav-btn" onClick={() => setShowLink(!showLink)}>
            <FiAlignJustify />
          </button>
        </div>

        <div className={showLink ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => {
              setShowLink(false  )
            }}
          >
            Home
          </Link>

          <Link
            to="/recipes"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => {
              setShowLink(false  )
            }}
          >
            Recipes
          </Link>

          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => {
              setShowLink(false  )
            }}
          >
            About
          </Link>

          <div className="nav-link contact-link">
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
