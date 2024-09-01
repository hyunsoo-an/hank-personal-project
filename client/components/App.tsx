import { useFruits } from '../hooks/useFruits.ts'

function App() {
  const { data } = useFruits()

  return (
    <>
      <div className="app">
        <h1>Pets I want to have</h1>
        <ul>{data && data.map((pet) => <li key={pet}>{pet}</li>)}</ul>
      </div>
    </>
  )
}

export default App
