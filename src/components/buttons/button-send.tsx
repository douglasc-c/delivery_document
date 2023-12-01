'use client'

import React, { useState } from 'react'

interface DataProps {
  params: {
    title: string
  }
}

export default function ButtonSend({ params }: DataProps) {
  const { title } = params

  const [isLoading, setIsLoading] = useState(false)

  const eventHandler = async () => {
    setIsLoading(true)
  }

  return (
    <button
      type="submit"
      onClick={eventHandler}
      className={`w-full py-2 px-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 ${
        isLoading ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      disabled={isLoading}
    >
      {isLoading ? 'Enviando...' : title}
    </button>
  )
}
