import { render } from 'preact'
import { useState } from 'preact/hooks'
import { BottomBar } from './components/BottomBar/BottomBar'
import { Edition } from './components/Edition/Edition'
import { CollectionProvider } from './components/Page/Collection/CollectionContext'
import { CollectionPage } from './components/Page/Collection/CollectionPage'
import { LearningProvider } from './components/Page/Learning/LearningContext'
import { LearningPage } from './components/Page/Learning/LearningPage'
import { ProgressPage } from './components/Page/Progress/ProgressPage'
import { TopBar } from './components/TopBar/TopBar'
import './style.css'

export type Page = 'learning' | 'collection' | 'progress' | 'edition'

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
      case 'edition':
        return <Edition />
    }
  }
  return (
    <LearningProvider>
      <CollectionProvider>
        <div className="flex min-h-screen flex-col">
          <TopBar currentPage={currentPage} />
          <main className="flex grow flex-col items-center justify-center bg-blue-500 pb-20">
            <div className="w-full max-w-[95vw] p-6">{renderPage()}</div>
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
