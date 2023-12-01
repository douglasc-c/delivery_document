export default async function Dashboard() {
  await new Promise((resolve, reject) => setTimeout(resolve, 2000))
  const response = await fetch('https://api.github.com/users/douglasc-c')
  const user = await response.json()

  return (
    <main>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </main>
  )
}
