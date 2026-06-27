import React, { createContext, useState } from 'react'
export const Themecontext = createContext()

function Themeprovider({children}) {
  const [theme, setTheme] = useState('Off')

    const toogletheme = ()=>{
        setTheme(theme === "On" ? "Off" : "On")  
    }

  return (
    <Themecontext.Provider value={{theme,toogletheme}}>
      {children}
    </Themecontext.Provider>
  )
}

export default Themeprovider;