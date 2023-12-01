import React from 'react'

interface DataProps {
  params: {
    title: string
  }
}

export default function ButtonSend({ params }: DataProps) {
  const { title } = params

  return (
    <button
      type="submit"
      className="w-full py-2 px-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
    >
      {title}
    </button>
  )
}
