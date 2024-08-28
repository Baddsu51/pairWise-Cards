import { Page } from '../../main'
import CollectionSelector from './CollectionSelector'
import LearningSelector from './LearningSelector'

type Props = {
  currentPage: Page
}

export function TopBar({ currentPage }: Props) {
  console.log(currentPage)
  return (
    <nav
      id="navbar"
      class="flex h-12 w-full items-center justify-center bg-blue-300 px-4"
    >
      {currentPage === 'learning' && <LearningSelector />}
      {currentPage === 'collection' && <CollectionSelector />}
    </nav>
  )
}
