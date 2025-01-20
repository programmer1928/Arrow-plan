import React from 'react'

export default function Time({children , className}) {
  return (
    <p className={'cursor-default ' + className}>{children}</p>
  )
}
