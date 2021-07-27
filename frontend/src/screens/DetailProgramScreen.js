import React from 'react'
import p1 from '../assets/program1.svg';
import FormDetailDonasi from '../components/FormDetailDonasi';
import Detail from '../components/Detail';
import PenerimaDana from '../components/PenerimaDana';
import ListDonatur from '../components/ListDonatur';

function DetailProgramScreen() {
    return (
      <div className="containerdetaildonasi">
      <div className="container-detail-program">
             <div className="container-detail">
        <img  src={p1} alt="p1" className="image-program-detail"/>
        <div className ="titlePdetail">
        <p>Selamatkan Anak Terlantar di Desa Rawageni</p>
        <div className="titleP-detail-detail">
                <p className="txtValue-detail">Target Donasi Tersalurkan</p>
                <p className="txtTot-detail">Rp 98.631.944</p>       
        </div>
        </div>
        
      </div>
      </div>
      <div className="container-form-donasi-dtl">
      
      <FormDetailDonasi/>
      
      </div>
      <div className="space">
      <div className="detail">
      <Detail/>
      </div>
      </div>
        <div className="sekat">
        <PenerimaDana/>
        </div>
        <div className="sekat2">
        <h4>Donatur Terbaru</h4>
        </div>
        <div className="sekat3">
        <ListDonatur/>
        </div>
        <div className="sekat4">
        <h4>Update Terbaru</h4>
        <div className="list-update">
        <p className="list-title">Penarikan Pembelian Sembako</p>
        <p className="list-date">17 Januari 2021</p>
        <p className="list-title">Penarikan Biaya Operasional</p>
        <p className="list-date">10 Januari 2021</p>
        <p className="list-title">Kami membelanjakan beberapa dana</p>
        <p className="list-date">9 Januari 2021</p>
        </div>
        </div>
      </div>
    )
}

export default DetailProgramScreen
