import React from 'react'
import ListProgram from '../components/ListProgram'
import '../css/programscreen.css'
import * as BsIcons from 'react-icons/bs';
import { useHistory } from "react-router-dom";

function ProgramScreen() {
    const history = useHistory();

    function handleClick() {
      history.push("/titipdonasi");
    }
    return (
        <div className="topnav">
        <div className="header-title">
        <div className="header-logo">
        <button onClick={handleClick}>
        <BsIcons.BsArrowLeftShort className="arrow"/>
        </button>
        <p>Kumpulan Program</p>
        </div>
        </div>
        <div className="container-list">
            <ListProgram/>
                    </div>
        
      </div>
    )
}

export default ProgramScreen
