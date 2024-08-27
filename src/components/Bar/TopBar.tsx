import { Page } from '../../main'

type Props = {
  currentPage: Page
}

export function TopBar(currentPage: Props) {
  console.log(currentPage)
  return (
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
  )
}
