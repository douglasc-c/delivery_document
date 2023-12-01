import React from 'react'

interface DataProps {
  params: {
    title: string
  }
}

export default function ButtonMenu({ params }: DataProps) {
  const { title } = params

  return (
    <ul>
      <li>
        <a className="flex items-center p-2 hover:bg-indigo-700">{title}</a>
      </li>
    </ul>
  )
}
