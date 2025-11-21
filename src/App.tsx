import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header>
        <h1>Bienvenido a CHHWEB</h1>
        <p>Tu aplicación está funcionando correctamente</p>
      </header>

      <main>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Contador: {count}
          </button>
          <p>
            Haz clic en el botón para probar la funcionalidad
          </p>
        </div>
      </main>

      <footer>
        <p>Ahora puedes empezar a modificar tu aplicación</p>
      </footer>
    </div>
  )
}

export default App
