import React from 'react'

const Button = ({content, bg , textColor, border, py, px, width, mx}) => {
  return (
    <div>
        <button type="button" className={`border ${width} ${bg} ${textColor} ${border} ${mx} ${py} ${px} rounded-sm`}>
            {content}        
        </button>
    </div>
  )
}

export default Button