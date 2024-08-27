import { render } from 'preact'
import './style.css'

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  )
}

render(<App />, document.getElementById('app')!)
