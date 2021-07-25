import React from 'react'
import l1 from '../assets/logo1.svg';

function PenerimaDana() {
    return (
        <div className="container-dana">
        <div className="style-dana">
      <div className="Donatur1">
      <p className="nDonatur1">Penerima Dana</p>
        <p className="nDonatur1">Rahmat Suryana</p>
        <p className="pDonatur1">Telah diverifikasi</p>
      </div>
      <img src={l1} alt="Logo1" />
    </div>
        </div>
    )   
}

export default PenerimaDana
