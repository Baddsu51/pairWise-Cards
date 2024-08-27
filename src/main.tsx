import { render } from 'preact'
import './style.css'

function App() {
  return (
    <div class="mx-auto max-w-sm rounded-xl bg-slate-500 px-9 py-4">
      <h1>Hello, World!</h1>
    </div>
  )
}

render(<App />, document.getElementById('app')!)
