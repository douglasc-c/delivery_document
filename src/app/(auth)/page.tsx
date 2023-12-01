import ButtonSend from '@/components/buttons/button-send'
import React from 'react'

export default async function SignIn() {
  const eventHandler = async () => {
    try {
      const response = await fetch('URL_DO_SEU_BACKEND', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // outras headers necessárias
        },
        body: JSON.stringify({
          // dados que você precisa enviar para o backend para a validação
        }),
      })

      if (response.ok) {
        // A resposta do backend foi bem-sucedida, agora você pode redirecionar
        window.location.href = `/${path}`
      } else {
        // A resposta do backend indica que a validação falhou
        console.error('Validação falhou')
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error)
    }
  }

  return (
    <main>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow">
          <h1 className="text-2xl font-semibold mb-4">Sign In</h1>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                E-mail
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Digite seu e-mail"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Digite sua senha"
              />
            </div>
            <ButtonSend params={{ title: 'Entrar', path: '/dashboard' }} />
          </form>
        </div>
      </div>
    </main>
  )
}
