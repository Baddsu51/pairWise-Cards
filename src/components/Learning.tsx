import { Lists } from './Lists'

export function Learning() {
  return (
    <div class="flex min-h-screen flex-col">
      <nav
        id="navbar"
        class="flex h-12 w-full items-center justify-center bg-blue-300 px-4"
      >
        <div>
          <select
            id="select-list"
            class="rounded-3xl border-none bg-blue-100 px-5 py-0.5 transition-all duration-200 hover:bg-blue-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 active:rounded-b-none active:rounded-t-2xl"
          >
            <option
              value="0"
              class="flex items-center justify-start bg-blue-800 p-3 text-blue-100 hover:bg-blue-100"
            >
              Deck 1
            </option>
            <option
              value="1"
              class="flex items-center justify-start bg-blue-800 p-3  text-blue-100 hover:bg-blue-50"
            >
              Deck 2
            </option>
            <option
              value="2"
              class="flex items-center justify-start bg-blue-800   p-3 text-blue-100 hover:bg-blue-100"
            >
              Deck 3
            </option>
          </select>
        </div>
      </nav>
      <main class="flex grow items-center justify-center bg-blue-500">
        <div class="relative w-full max-w-md">
          <Lists />
        </div>
      </main>
      <footer class="flex h-20 w-full items-center justify-center bg-blue-300 transition-colors">
        <div id="footer-bar" class="flex space-x-10">
          <div
            id="div-learning"
            class="group flex cursor-pointer flex-col items-center"
          >
            <div class="mb-1 size-8 rounded-full p-1.5 transition-all duration-200 group-hover:bg-blue-200 group-hover:shadow-md group-active:bg-blue-400 group-active:shadow-inner">
              <img
                src="../assets/learn.svg"
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
          >
            <div class="mb-1 size-8 rounded-full p-1.5 transition-all duration-200 group-hover:bg-blue-200 group-hover:shadow-md group-active:bg-blue-400 group-active:shadow-inner">
              <img
                src="/collection.svg"
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
          >
            <div class="mb-1 size-8 rounded-full p-1.5 transition-all duration-200 group-hover:bg-blue-200 group-hover:shadow-md group-active:bg-blue-400 group-active:shadow-inner">
              <img
                src="../assets/progress.svg"
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
    </div>
  )
}
