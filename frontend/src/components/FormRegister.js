import React from 'react'
import About from '../components/About'
import '../css/formregister.css'
import * as BsIcons from 'react-icons/bs';
import { useHistory } from "react-router-dom";

function FormRegister() {
  const history = useHistory();

  function handleClick() {
    history.push("/titipdonasi");
  }
    return (
        <div className="topnav">
          <div className="header-title">
        <div className="header-logo">
        <button onClick={handleClick}>
        <BsIcons.BsArrowLeftShort className="arrow"/>
        </button>
        <p>Daftar Agenpeduli</p>
        </div>
        </div>
        <div className="container-reg">
            <About/>
            <input
          className="txtRegName"
          type="text"
          id="fname"
          name="firstname"
          placeholder="Nama Lengkap"
        />

        <input
          className="txtRegEmail"
          type="text"
          id="fname"
          name="firstname"
          placeholder="Email"
        />

        <input
          className="txtRegNo"
          type="text"
          id="fname"
          name="firstname"
          placeholder="Nomor WhatsApp"
        />

        <input
          className="txtRegCity"
          type="text"
          id="fname"
          name="firstname"
          placeholder="Kota Tempat Tinggal"
        />

        <button class="btnReg">Daftar Menjadi AgenPeduli</button>
        <p className="atau">Atau</p>
        <button class="btnAsk">Tanya Cs Danapeduli</button>
        </div>
      </div>
    )
}

export default FormRegister
