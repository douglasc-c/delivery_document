import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gray-100 min-h-screen flex">
          <aside className="w-64 bg-indigo-600 text-white">
            <div className="p-4 text-center">
              <h1 className="text-2xl font-bold">Delivery Document</h1>
            </div>

            <nav className="p-2">
              <ul>
                <li>
                  <a className="flex items-center p-2 hover:bg-indigo-700">
                    Chave da API
                  </a>
                </li>
                <li>
                  <a className="flex items-center p-2 hover:bg-indigo-700">
                    Pastas
                  </a>
                </li>
                <li>
                  <a className="flex items-center p-2 hover:bg-indigo-700">
                    Lista de registros
                  </a>
                </li>
                <li>
                  <a className="flex items-center p-2 hover:bg-indigo-700">
                    Novo registro
                  </a>
                </li>
                <li>
                  <a className="flex items-center p-2 hover:bg-indigo-700">
                    Sair
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          <main className="flex-1 p-4">
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-2xl font-bold">Bem-vindo </h2>
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
