import React from 'react'
import * as BsIcons from 'react-icons/bs';
import { useHistory } from "react-router-dom";
import '../css/share.css'

function Share() {
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
        <p>Share</p>
        </div>
        </div>
        <div className="container-share">
        <p className="share-title">Bagikan</p>
        <input
          className="txtLinkCampaign"
          type="text"
          id="lcampaign"
          name="linkcampaign"
          placeholder="danepeduli.com/bantufikrah"
        />
               <button className="share-btnCopy">Saling Tautan</button>
        <p className="share-atau">Atau</p>
        <button className="share-btnShare">Bagikan Sebagai Agenpeduli</button>
        </div>
      </div>
    )
}

export default Share
