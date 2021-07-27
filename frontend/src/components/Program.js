import React from 'react'
import p1 from '../assets/program1.svg';
import p2 from '../assets/program2.svg';
import p3 from '../assets/program3.svg';
import '../css/program.css'

function Program() {
    return (
      <div className="containerProgram">
        <div className="container-program">
        <img  src={p1} alt="p1" className="image-program"/>
        <div className ="titleP">
        <a href="/detailprogram">Selamatkan Anak Terlantar di Desa Rawageni</a>
        <div className="titleP-detail">
                <p className="txtValue">Target Donasi Tersalurkan</p>
                <p className="txtTot">Rp 98.631.944</p>       
        </div>
        </div>
      </div>
      <div className="container-program">
        <img  src={p2} alt="p2" className="image-program"/>
        <div className ="titleP">
        <a href="/detailprogram">Selamatkan Anak Terlantar di Desa Rawageni</a>
        <div className="titleP-detail">
                <p className="txtValue">Target Donasi Tersalurkan</p>
                <p className="txtTot">Rp 98.631.944</p>       
        </div>
        </div>
      </div>
      <div className="container-program">
        <img  src={p3} alt="p3" className="image-program"/>
        <div className ="titleP">
        <a href="/detailprogram">Selamatkan Anak Terlantar di Desa Rawageni</a>
        <div className="titleP-detail">
                <p className="txtValue">Target Donasi Tersalurkan</p>
                <p className="txtTot">Rp 98.631.944</p>       
        </div>
        </div>
      </div>
<div>
<a href="/program">Lihat Semua Kampanye ➜</a>
</div>
      </div>
    )
}

export default Program
