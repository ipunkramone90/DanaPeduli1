import React from 'react'
import '../css/formdonasi.css'
import * as RiIcons from "react-icons/ri";
import { useHistory } from "react-router-dom";

function FormDonasi() {
  const history = useHistory();

  function handleClick() {
    history.push("/share");
  }

    return (
        <div className="card">
      <p className="title">Mulai Berdonasi</p>
      <form>
        <input
          className="txtNominal"
          type="text"
          id="fname"
          name="firstname"
          placeholder="RP |"
        />

        <input
          className="nom1"
          type="text"
          id="f5k"
          name="idr5"
          placeholder="5.000"
        />

        <input
          className="nom2"
          type="text"
          id="f50k"
          name="idr50"
          placeholder="50.000"
        />

        <input
          className="nom3"
          type="text"
          id="f100k"
          name="idr100"
          placeholder="100.000"
        />

        <select id="mPayment" name="mPayment" className="metodP">
          <option value="Dana">DANA</option>
          <option value="GoPay">GO-PAY</option>
          <option value="LinkAja">LinkAja</option>
          <option value="Ovo">OVO</option>
          <option value="ShopeePay">ShopeePay</option>
          <option value="BCA">BCA</option>
          <option value="Mandiri">Mandiri</option>
        </select>

        <input
          className="txtName"
          type="text"
          id="fname"
          name="fullname"
          placeholder="Nama Lengkap"
        />
        <input
          className="txtEmail"
          type="text"
          id="femail"
          name="email"
          placeholder="Email"
        />

        <p className="identity">Sembunyikan identitas (Hamba Allah)</p>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <button class="btnDonate">Donasi</button>
        <button onClick={handleClick}>
            <RiIcons.RiShareLine className='btnShare'/>
        </button>
      </form>
        </div>
    )
}

export default FormDonasi
