import React from 'react'

function Title({title,description}) {
  return (
    <div className="flex flex-col items-center gap-2 text-center md:text-left">
      <h2 className="text-3xl text-slate-800 font-medium">{title}</h2>
      <p className="text-slate-600">{description}</p>
    </div>
  )
}

export default Title
