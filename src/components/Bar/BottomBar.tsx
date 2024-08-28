import CollectionIcon from '../../assets/collection.svg'
import LearnIcon from '../../assets/learn.svg'
import ProgressIcon from '../../assets/progress.svg'
import { Page } from '../../main'

type Props = {
  setCurrentPage: (page: Page) => void
}

export function BottomBar({ setCurrentPage }: Props) {
  const handleClickLearning = () => {
    setCurrentPage('learning')
  }

  const handleClickCollection = () => {
    setCurrentPage('collection')
  }

  const handleClickProgress = () => {
    setCurrentPage('progress')
  }

  return (
    <footer class="flex h-20 w-full items-center justify-center bg-blue-300 transition-colors">
      <div id="footer-bar" class="flex space-x-10">
        <div
          id="div-learning"
          class="group flex cursor-pointer flex-col items-center"
          onClick={handleClickLearning}
        >
          <div class="mb-1 size-8 rounded-full p-1.5 transition-all duration-200 group-hover:bg-blue-200 group-hover:shadow-md group-active:bg-blue-400 group-active:shadow-inner">
            <img
              src={LearnIcon}
              alt="learning"
              class="size-full transition-all duration-200 group-hover:scale-110"
            />
          </div>
          <span class="text-[0.7rem] font-light transition-all duration-200 group-hover:font-normal group-hover:text-blue-900">
            learning
          </span>
        </div>
        <div
          id="div-collection"
          class="group flex cursor-pointer flex-col items-center"
          onClick={handleClickCollection}
        >
          <div class="mb-1 size-8 rounded-full p-1.5 transition-all duration-200 group-hover:bg-blue-200 group-hover:shadow-md group-active:bg-blue-400 group-active:shadow-inner">
            <img
              src={CollectionIcon}
              alt="Collection"
              class="size-full transition-all duration-200 group-hover:scale-110"
            />
          </div>
          <span class="text-[0.7rem] font-light transition-all duration-200 group-hover:font-normal group-hover:text-blue-900">
            Collection
          </span>
        </div>
        <div
          id="div-progress"
          class="group flex cursor-pointer flex-col items-center"
          onClick={handleClickProgress}
        >
          <div class="mb-1 size-8 rounded-full p-1.5 transition-all duration-200 group-hover:bg-blue-200 group-hover:shadow-md group-active:bg-blue-400 group-active:shadow-inner">
            <img
              src={ProgressIcon}
              alt="Progress"
              class="size-full transition-all duration-200 group-hover:scale-110"
            />
          </div>
          <span class="text-[0.7rem] font-light transition-all duration-200 group-hover:font-normal group-hover:text-blue-900">
            Progress
          </span>
        </div>
      </div>
    </footer>
  )
}
