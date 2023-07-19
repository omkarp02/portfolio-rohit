import React from 'react'

const CustomButton = ({ text, customClassname, variant, border = 0, color = 'white', onClick }) => {
  return (
    <div className='customButtonContainer'>
      <button data-content={text} onClick={onClick} className={`custombutton`}>{text}</button>
    </div>
  )
}

export default CustomButton