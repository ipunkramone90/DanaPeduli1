import React from 'react'
import { ReactComponent as Share } from '../assets/share.svg';
import '../css/formdetaildonasi.css'

function FormDetailDonasi() {
    return (
        <div className="card-dtl">
      <p className="title-dtl">Total Donasi / Sedekah Terkumpul</p>
      <p className="idr-dtl">Rp. 200.000.000,-</p>
      <form>
        <input
          className="txtNominal-dtl"
          type="text"
          id="fname"
          name="firstname"
          placeholder="RP |"
        />

        <input
          className="nom1-dtl"
          type="text"
          id="f5k"
          name="idr5"
          placeholder="5.000"
        />

        <input
          className="nom2-dtl"
          type="text"
          id="f50k"
          name="idr50"
          placeholder="50.000"
        />

        <input
          className="nom3-dtl"
          type="text"
          id="f100k"
          name="idr100"
          placeholder="100.000"
        />

        <select id="mPayment" name="mPayment" className="metodP-dtl">
          <option value="Ovo">OVO</option>
          <option value="GoPay">GoPay</option>
        </select>

        <input
          className="txtName-dtl"
          type="text"
          id="fname"
          name="fullname"
          placeholder="Nama Lengkap"
        />
        <input
          className="txtEmail-dtl"
          type="text"
          id="femail"
          name="email"
          placeholder="Email"
        />

        <p className="identity-dtl">Sembunyikan identitas (Hamba Allah)</p>
        <label class="switch-dtl">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <button class="btnDonate-dtl">Donasi</button>
        <button class="btnShare-dtl">
            <Share className='logo-share'/>
        </button>
      </form>
        </div>
    )
}

export default FormDetailDonasi
