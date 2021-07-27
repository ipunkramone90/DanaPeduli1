import React from 'react'
import l1 from '../assets/logo1.svg';

function PenerimaDana() {
    return (
        <div className="container-dana">
        <div className="style-dana">
            <p className="style-title">Penerima Dana</p>
            <p className="style-name">Rahmat Suryana</p>
            <div className="style-status">
            <p >Telah diverifikasi</p>
            <img src={l1} alt="Logo1" />
            </div>
    </div>
        </div>
    )   
}

export default PenerimaDana
