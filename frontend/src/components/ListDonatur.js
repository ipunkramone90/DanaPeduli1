import React from 'react'
import d1 from '../assets/d1.svg';
import d2 from '../assets/d2.svg';
import d3 from '../assets/d3.svg';
import d4 from '../assets/d4.svg';
import '../css/listdonatur.css'

function ListDonatur() {
    return (
        <div className="listDonatur">
          <div className="listDonatur1">
            <div className="spaceDonatur">
              <img src={d1} alt="Avatar1" className="avatar1"/>
          </div>  
          <div className="Donatur1">
            <p className="nDonatur1">Hamba Allah</p>
            <p className="pDonatur1">Rp. 20.000</p>
          </div>
          <p className="tDonatur1">1 menit yang lalu</p>
        </div>
          <div className="listDonatur2">
          <div className="spaceDonatur">
            <img src={d2} alt="Avatar2" className="avatar2"/>
          </div>  
          <div className="Donatur2">
            <p className="nDonatur2">Marvin McKinney</p>
            <p className="pDonatur2">Rp. 20.000</p>
          </div>
          <p className="tDonatur2">10 menit yang lalu</p>
        </div>  
        <div className="listDonatur3">
          <div className="spaceDonatur">
            <img src={d3} alt="Avatar3" className="avatar3"/>
          </div>  
          <div className="Donatur3">
            <p className="nDonatur3">Ronald Richards</p>
            <p className="pDonatur3">Rp. 20.000</p>
          </div>
          <p className="tDonatur3">30 menit yang lalu</p>
        </div>  
        <div className="listDonatur4">
          <div className="spaceDonatur">
            <img src={d4} alt="Avatar4" className="avatar4"/>
          </div>  
          <div className="Donatur4">
            <p className="nDonatur4">Bessie Cooper</p>
            <p className="pDonatur4">Rp. 20.000</p>
          </div>
          <p className="tDonatur4">40 menit yang lalu</p>
        </div>  
        </div>  
    )
}

export default ListDonatur
