import React from 'react'
import About from '../components/About'
import FormDonasi from '../components/FormDonasi'
import ListDonatur from '../components/ListDonatur'
import ListMitra from '../components/ListMitra'
import Program from '../components/Program'
import header from '../assets/header1.svg';
import m9 from '../assets/m9.svg';

function BerandaScreen() {
    return (
        <div className="container">
        <div className="header-donasi">
        <img src={header} alt="header1" className="header-image"/>
        <div className="header-text"> Total Donasi / Sedekah Terkumpul</div>
        <p className="header-nom"> Rp.200.000.000,-</p>
        </div>
          <FormDonasi/>
          <div className="space">
          <About/>
          </div>
            <div className="donater">
              <h4>Donatur Terbaru</h4>
                <ListDonatur/>
            </div>
            <div className="list-program">
              <h4>Program Danapeduli</h4>
                <Program/>
            </div>
            <div className="space">
            <div className="imagereg-container">
              <img src={m9} alt="Image9"/>
                <p className="imagereg-title">Yuk Jadi AgenPeduli</p>
                <p className="imagereg-text">Salurkan kepedulian orang-orang lewat uluran tangan kamu!</p>
                <a href="/daftaragenpeduli">Daftar Disini ➜</a>
                </div>
               
               
            </div>
            <div className="space">
            <div className="list-mitra">
              <h4>Mitra Kami</h4>
              <ListMitra/>
            </div>
          </div>
          <div className="footer">
          <p>Copyright @ 2021 Danapeduli</p>
          </div>
         
          </div>
    )
}

export default BerandaScreen
