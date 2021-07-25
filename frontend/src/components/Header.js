import React from 'react';
import '../css/header.css'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg';
import * as CgIcons from 'react-icons/cg';

function Header() {
  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  return ( 
    <div className="topnav">
    <div className="logo-header">
    <img src={Logo} alt="Logo" className="logo"/>
    <button onClick={myFunction}>
      <CgIcons.CgMenuRight className="icon" />
    </button>
    </div>

  <div id="myLinks">
    <Link to="/titipdonasi">Titip Donasi</Link>
    <a href="/program">Program</a>
    <a href="/daftaragenpeduli">Daftar Agenpeduli</a>
    <a href="#about">Galang Dana</a>
    <a href="#about">Kontak Danapeduli</a>
  </div>
</div>
  )

}

export default Header
