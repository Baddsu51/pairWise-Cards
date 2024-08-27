import { render } from 'preact'
import { Learning } from './components/Learning'
import './style.css'

function App() {
  return (
    <div>
      <Learning />
    </div>
  )
}

// Ensure that the 'app' element exists before trying to render
const appContainer = document.getElementById('root')
if (appContainer) {
  render(<App />, appContainer)
}
