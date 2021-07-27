import React from 'react'
import header from '../assets/header2.svg'

function Confirmation() {
    return (
        <div className="container-confirm">
            <img src={header} alt="header2" className="confirm-image"/> 
            <p className="confirm-title">Terimakasih SobatPeduli!</p>
            <p className="confirm-txt">Masih banyak orang yang butuh kepedulian kamu loh!</p>
            <p className="confirm-txt">Yuk, temukan lebih banyak di Danapeduli.</p>
            <p className="confirm-status">Status: Berhasil</p>
            <div className="confirm-option">
            <div className="confirm-option1">
            <a href="/detailprogram">lain kali</a>
            </div>
            <div className="confirm-option2">
            <a href="/program">Telusuri</a>
            </div>
            </div>
        </div>
    )
}

export default Confirmation
