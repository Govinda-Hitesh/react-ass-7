import React from 'react'
import './ass4.css';

import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    {/* <Link class="navbar-brand" to="#">Navbar</Link> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link" to="/home">Home</Link>
        <Link class="nav-link" to="/student">Student</Link>
        <Link class="nav-link" to="/contact">Contact</Link>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar