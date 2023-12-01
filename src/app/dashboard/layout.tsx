import Menu from '@/components/manu'
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
          <Menu />
          <main className="flex-1 p-4">
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-3xl font-bold">Bem-vindo </h2>
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
