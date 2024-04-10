'use client'
import EmojiPicker from 'emoji-picker-react'
import React from 'react'
import { KeyBoardContext } from '../../context/keyboard-context'

export default function Picker(props: { style?: string }) {
  const { setMessage }: any = React.useContext(KeyBoardContext)
  const addEmoji = (e: any) => {
    const sym = e.unified.split('_')
    const codeArray: any = []
    sym.forEach((el: any) => codeArray.push(`0x${el}`))
    let emoji = String.fromCodePoint(...codeArray)
    setMessage((prev: any) => prev + emoji)
  }
  return (
    <div className={props.style}>
      <EmojiPicker width="100%" onEmojiClick={addEmoji} />
    </div>
  )
}
