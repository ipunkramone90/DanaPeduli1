import React from 'react'
import m1 from '../assets/m1.svg';
import m2 from '../assets/m2.svg';
import m3 from '../assets/m3.svg';
import m4 from '../assets/m4.svg';
import m5 from '../assets/m5.svg';
import m6 from '../assets/m6.svg';
import m7 from '../assets/m7.svg';
import m8 from '../assets/m8.svg';
import m9 from '../assets/m9.svg';
import '../css/listmitra.css'

function ListMitra() {
    return (
        <div className="listmitra">
        <div className="row1">
        <div className="spaceLogo">
        <img src={m1} alt="Logo1"/>
        </div>
        <div className="spaceLogo">
        <img src={m2} alt="Logo2"/>
        </div>
        <div className="spaceLogo">
        <img src={m3} alt="Logo3"/>
        </div>
        <div className="spaceLogo">
        <img src={m4} alt="Logo4"/>
        </div>
        </div>
        <div className="row2">
        <div className="spaceLogo">
        <img src={m5} alt="Logo5"/>
        </div>
        <div className="spaceLogo">
        <img src={m6} alt="Logo6"/>
        </div>
        <div className="spaceLogo">
        <img src={m7} alt="Logo7"/>
        </div>
        <div className="spaceLogo">
        <img src={m8} alt="Logo8"/>
        </div>
        </div>
        <div className="row3">
        <img src={m9} alt="Logo9"/>
        </div>
        
        
        </div>
    )
}

export default ListMitra
