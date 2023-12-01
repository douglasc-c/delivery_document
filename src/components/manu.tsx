'use client'

import ButtonMenu from './buttons/button-menu'

export default function Menu() {
  return (
    <div className="w-64 bg-indigo-600 text-white">
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold">Delivery Document</h1>
      </div>

      <nav className="p-2">
        <ButtonMenu params={{ title: 'Pastas' }} />
        <ButtonMenu params={{ title: 'Arquivos' }} />
        <ButtonMenu params={{ title: 'Sair' }} />
      </nav>
    </div>
  )
}
