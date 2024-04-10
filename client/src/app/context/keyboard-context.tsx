import React, { useState } from 'react'

interface Props {
  children: React.ReactNode
}

export const KeyBoardContext = React.createContext({})

export default function KeyBoardProvider({ children }: Props) {
  const [showPicker, setShowPicker] = useState(false)
  const [message, setMessage] = useState('')

  return <KeyBoardContext.Provider value={{ showPicker, setShowPicker, message, setMessage }}>{children}</KeyBoardContext.Provider>
}
