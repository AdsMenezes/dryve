import React, { createContext, useState, useContext } from 'react'

interface IMenuContextData {
  onMenuToggle: () => void
  isMenuActive: boolean
}

interface IMenuProviderProps {
  children: React.ReactNode
}

const MenuContext = createContext({} as IMenuContextData)

export function MenuProvider({ children }: IMenuProviderProps) {
  const [isMenuActive, setIsMenuActive] = useState(true)

  function onMenuToggle() {
    setIsMenuActive(!isMenuActive)
  }

  return (
    <MenuContext.Provider value={{ onMenuToggle, isMenuActive }}>
      {children}
    </MenuContext.Provider>
  )
}

export function useMenu(): IMenuContextData {
  const context = useContext(MenuContext)

  if (!context) {
    throw new Error('useMenu must be used within an MenuProvider.')
  }

  return context
}
