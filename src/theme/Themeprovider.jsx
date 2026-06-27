import React, { createContext, useState } from 'react'
export const Themecontext = createContext()

function Themeprovider({children}) {
  const [theme, setTheme] = useState('dark')

    const toogletheme = ()=>{
        setTheme(theme === "light" ? "dark" : "light")  
    }

  return (
    <Themecontext.Provider value={{theme,toogletheme}}>
      {children}
    </Themecontext.Provider>
  )
}

export default Themeprovider;