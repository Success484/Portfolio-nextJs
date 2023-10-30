import React from 'react'

export default function ProjectTag({ name, onClick, isSelected}) {

    const buttonStyles = isSelected ? "text-white border-primary-500" : "text-[#adb7be] border-slate-600 "
  return (
    <button className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`} onClick={() => onClick(name)}>
      {name}
    </button>

  )
}
