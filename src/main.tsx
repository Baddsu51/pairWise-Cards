import { render } from 'preact'
import { useState } from 'preact/hooks'
import { BottomBar } from './components/Bar/BottomBar'
import { TopBar } from './components/Bar/TopBar'
import { CollectionProvider } from './components/Collection/CollectionContext'
import { CollectionPage } from './components/Collection/CollectionPage'
import { LearningProvider } from './components/Learning/LearningContext'
import { LearningPage } from './components/Learning/LearningPage'
import { ProgressPage } from './components/Progress/ProgressPage'
import './style.css'

export type Page = 'learning' | 'collection' | 'progress'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('learning')

  const renderPage = () => {
    switch (currentPage) {
      case 'learning':
        return <LearningPage />
      case 'collection':
        return <CollectionPage />
      case 'progress':
        return <ProgressPage />
    }
  }
  return (
    <LearningProvider>
      <CollectionProvider>
        <div class="flex min-h-screen flex-col">
          <TopBar currentPage={currentPage} />
          <main class="flex grow items-center justify-center bg-blue-500">
            <div class="relative w-full max-w-md">{renderPage()}</div>
          </main>
          <BottomBar setCurrentPage={setCurrentPage} />
        </div>
      </CollectionProvider>
    </LearningProvider>
  )
}

// Ensure that the 'app' element exists before trying to render
const appContainer = document.getElementById('root')
if (appContainer) {
  render(<App />, appContainer)
}
