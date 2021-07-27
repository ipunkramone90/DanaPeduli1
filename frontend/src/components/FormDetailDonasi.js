import React from 'react'
import '../css/formdetaildonasi.css'
import * as RiIcons from "react-icons/ri";
import { useHistory } from "react-router-dom";

function FormDetailDonasi() {
  const history = useHistory();

  function handleClick() {
    history.push("/share");
  }

  function handleClick2() {
    history.push("/confirmation");
  }
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
        <option value="Dana">DANA</option>
        <option value="GoPay">GO-PAY</option>
        <option value="LinkAja">LinkAja</option>
        <option value="Ovo">OVO</option>
        <option value="ShopeePay">ShopeePay</option>
        <option value="BCA">BCA</option>
        <option value="Mandiri">Mandiri</option>
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
              <button onClick={handleClick2} class="btnDonate-dtl">Donasi</button>
        <button onClick={handleClick}>
            <RiIcons.RiShareLine className='btnShare-dtl'/>
        </button>
      </form>
        </div>
    )
}

export default FormDetailDonasi
