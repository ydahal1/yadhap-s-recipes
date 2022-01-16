import React from "react"

const Footer = () => {
  return (
    <div>
      <footer className="page-footer">
        <p>
          &copy; {new Date().getFullYear()} <span>Yadhap's Recipes</span>
        </p>
      </footer>
    </div>
  )
}

export default Footer
