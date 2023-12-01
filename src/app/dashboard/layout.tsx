import Menu from '@/components/manu'
import { Inter } from 'next/font/google'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      <Menu />
      <main className="flex-1 p-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-3xl font-bold">Bem-vindo </h2>
          {children}
        </div>
      </main>
    </div>
  )
}
