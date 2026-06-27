import React, { useContext } from 'react'
import transparentBulb from './bulb_transparent.png'
import glowingBulb from './bulb_glowing.png'
import { Themecontext } from './Themeprovider';

function Bulb() {
  const { theme, toogletheme } = useContext(Themecontext);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", border: "5px solid blue", width: "50%", height: "500px", borderRadius: "50px", margin: "100px auto" }}>

        <img style={{ width: "50px" }}
          src={theme === "light" ? glowingBulb : transparentBulb}
          alt="Toggle theme"
          style={{ cursor: 'pointer' }}>
          </img>
          <button onClick={toogletheme} style={{height:"100px",borderRadius:"100px",padding:"50px",cursor:"pointer",marginTop:"200px",}}>{theme}</button>
      </div>
    </>
  )
}

export default Bulb;